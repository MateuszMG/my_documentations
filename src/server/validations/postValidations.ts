import { availableCategories } from '@/const';
import * as Yup from 'yup';
import { generalYupValidations } from './generalYupValidations';

export const upsertPostValidation = Yup.object({
  category: generalYupValidations.category,
  content: generalYupValidations.post,
  mainTitle: generalYupValidations.title,
  subtitle: generalYupValidations.title,
});

export const categoriesValidation = {
  validator: function (category: string) {
    return availableCategories.includes(category as any);
  },
  message: (props: { value: string }) =>
    `${props.value} is not a valid category!`,
};
