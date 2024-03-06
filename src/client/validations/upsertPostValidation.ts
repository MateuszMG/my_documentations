import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { generalYupValidations } from './generalValidations';

const upsertPostValidation = Yup.object({
  post: generalYupValidations.post,
  mainTitle: generalYupValidations.mainTitle,
  subtitle: generalYupValidations.subitle,
  category: generalYupValidations.category,
});
export const upsertPostResolver = yupResolver(upsertPostValidation);
export type UpsertPostSchema = Yup.InferType<typeof upsertPostValidation>;
