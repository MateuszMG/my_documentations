import * as Yup from 'yup';

import { generalYupValidations } from './generalYupValidations';

export const idValidation = Yup.object({
  _id: generalYupValidations.mongoId,
});

export const mongoRequireTrimString = {
  required: true,
  trim: true,
  type: String,
};
