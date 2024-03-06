import { isValidObjectId } from 'mongoose';
import * as Yup from 'yup';

const mongoId = Yup.string()
  .test({
    name: 'isValidObjectId',
    message: 'Something went wrong',
    test: (value) => {
      return isValidObjectId(value);
    },
  })
  .required();

const mainTitle = Yup.string()
  .required('Main title is required.')
  .default('')
  .trim()
  .strict(true)
  .max(50, 'Main title cannot exceed 50 characters.')
  .label('Main title');

const subitle = Yup.string()
  .required('Subitle is required.')
  .default('')
  .trim()
  .strict(true)
  .max(50, 'Subitle cannot exceed 50 characters.')
  .label('Subitle');

const category = Yup.string()
  .required('Category is required')
  .max(30, 'Category cannot exceed 30 characters')
  .trim('Category cannot contain leading and trailing spaces')
  .strict(true)
  .label('Category');

const post = Yup.string()
  .required('Post is required.')
  .default('')
  .max(10000, 'Post cannot exceed 10000 characters.')
  .transform((value) => (value ? value.replace(/<br>/g, '<br />') : ''))
  //   .test({
  //     name: 'safeTranslation',
  //     message: 'Invalid translation',
  //     test: (value) => {
  //       const sanitizedHTML = sanitizeHtml(value, {
  //         allowedTags: [
  //           'u',
  //           'em',
  //           'strong',
  //           'a',
  //           'p',
  //           'br',
  //           'ol',
  //           'ul',
  //           'li',
  //           'h1',
  //           'h3',
  //           'h5',
  //         ],
  //         allowedAttributes: {
  //           a: ['href', 'rel', 'target'],
  //         },
  //       });
  //       return value === sanitizedHTML;
  //     },
  //   })
  .label('Post');

export const generalYupValidations = {
  category,
  mainTitle,
  mongoId,
  post,
  subitle,
};
