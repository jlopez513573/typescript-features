export enum APIErrorMessages {
  NOT_AUTHORIZED = 'User not authorized!',
  NOT_FOUND = 'Entity not found!',
  MISSING_PARAMETER = 'Missing parameter!',
  GENERIC_ERROR_MESSAGE = 'Something happened, please try again!',
}
export enum Genders {
  MALE = 'male',
  FEMALE = 'female',
}
export type EntityId = string;

export interface IPatientDiagnosis {
  diag_id: string;
  code: string;
  diag_date: string;
  description: string;
  patient_id: EntityId;
}
export interface IPatient {
  city: string;
  country: string;
  patient_id: EntityId;
  year_of_birth: string | number;
  gender: Genders;
  diagnosis: IPatientDiagnosis[];
}
