import { Request, Response } from 'express';

import { getPatients, RequestResponse } from '../api/api';
import { IPatient, APIErrorMessages } from '../types/commonTypes';
import apiResponseSender from '../utils/apiResponseSender';
import { getYearOfBirth, isFemale, isMale } from '../utils/utils';

export default {
  async getPatient(req: Request, res: Response) {
    const { patientId } = req.params;
    if (!patientId) {
      apiResponseSender.missingParameter(res, req.params, APIErrorMessages.MISSING_PARAMETER);
      return;
    }
    const { status, data }: RequestResponse = await getPatients();
    if (status !== 200 || !data) {
      apiResponseSender.error(res, req.params, APIErrorMessages.GENERIC_ERROR_MESSAGE);
      return;
    }
    const patient: IPatient | undefined = data.find(({ patient_id }) => patient_id === patientId);
    if (!patient) {
      apiResponseSender.missingParameter(res, req.params, APIErrorMessages.NOT_FOUND);
      return;
    }
    apiResponseSender.successfull(res, { patient, yearOfBirth: getYearOfBirth(patient.year_of_birth) });
  },
  async getPatients(req: Request, res: Response) {
    const { status, data: patients }: RequestResponse = await getPatients();
    if (status !== 200 || !patients) {
      apiResponseSender.error(res, req.params, APIErrorMessages.GENERIC_ERROR_MESSAGE);
      return;
    }
    apiResponseSender.successfull(res, patients);
  },
  async getMalePatients(req: Request, res: Response) {
    const { status, data }: RequestResponse = await getPatients();
    if (status !== 200 || !data) {
      apiResponseSender.error(res, req.params, APIErrorMessages.GENERIC_ERROR_MESSAGE);
      return;
    }
    const malePatients: IPatient[] = data.filter(({ gender }) => isMale(gender));
    apiResponseSender.successfull(res, malePatients);
  },
  async getFemalePatients(req: Request, res: Response) {
    const { status, data }: RequestResponse = await getPatients();
    if (status !== 200 || !data) {
      apiResponseSender.error(res, req.params, APIErrorMessages.GENERIC_ERROR_MESSAGE);
      return;
    }
    const femalePatients: IPatient[] = data.filter(({ gender }) => isFemale(gender));
    apiResponseSender.successfull(res, femalePatients);
  },
};
