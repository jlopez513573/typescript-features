/* eslint-disable import/prefer-default-export */
import axios from 'axios';

import { IPatient } from '../types/commonTypes';

const API_URL: string = 'https://raw-tutorial.s3.eu-west-1.amazonaws.com/patients.json';

export interface RequestResponse {
  status: number;
  data: IPatient[];
}

export const getPatients = async (): Promise<RequestResponse> => {
  const { status, data }: RequestResponse = await axios.get(API_URL);

  return { status, data };
};
