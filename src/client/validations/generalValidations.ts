import * as Yup from 'yup';

export const generalYupValidations = {
  post: Yup.string()
    .required('Translation is required.')
    .default('')
    .max(10000, 'Translation cannot exceed 10000 characters.')
    .transform((value) => (value ? value.replace(/<br>/g, '<br />') : ''))
    .label('Translation'),

  mainTitle: Yup.string()
    .required('Main title is required.')
    .default('')
    .trim()
    .strict(true)
    .max(50, 'Main title cannot exceed 50 characters.')
    .label('Main title'),

  subitle: Yup.string()
    .required('Subitle is required.')
    .default('')
    .trim()
    .strict(true)
    .max(50, 'Subitle cannot exceed 50 characters.')
    .label('Subitle'),

  category: Yup.string()
    .required('Category is required.')
    .default('')
    .max(50, 'Category cannot exceed 50 characters.')
    .label('Category'),
};
