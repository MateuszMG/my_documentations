import sanitizeHtml from 'sanitize-html';
import * as Yup from 'yup';

export const generalYupValidations = {
  translation: Yup.string()
    .required('Translation is required.')
    .default('')
    .max(10000, 'Translation cannot exceed 10000 characters.')
    .transform((value) => (value ? value.replace(/<br>/g, '<br />') : ''))
    .label('Translation'),
};
