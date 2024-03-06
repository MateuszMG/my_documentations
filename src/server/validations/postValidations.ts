import { availableCategories } from '@/const';
import * as Yup from 'yup';
import { generalYupValidations } from './generalYupValidations';

export const upsertPostValidation = Yup.object({
  category: generalYupValidations.category,
  mainTitle: generalYupValidations.mainTitle,
  post: generalYupValidations.post,
  subtitle: generalYupValidations.subitle,
});

export const categoriesValidation = {
  validator: function (category: string) {
    return availableCategories.includes(category as any);
  },
  message: (props: { value: string }) =>
    `${props.value} is not a valid category!`,
};
