/* eslint-disable import/prefer-default-export */
import { Genders } from '../types/commonTypes';

export const isMale = (gender: Genders): gender is Genders.MALE => gender === Genders.MALE;
export const isFemale = (gender: Genders): gender is Genders.FEMALE => gender === Genders.FEMALE;

export const getYearOfBirth = (year_of_birth: string | number) => {
  if (typeof year_of_birth === 'string') {
    return `Your year of birth is: ${year_of_birth}`;
  }
  return `Your year of birth is: ${year_of_birth - 2022}`;
};
