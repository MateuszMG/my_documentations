import { availableCategories } from '@/const';
import { isProduction } from '../helpers/functions';

export const docsPaths: DocsPaths = Object.assign(
  {},
  ...availableCategories.map((doc) => ({ [doc]: `/docs/${doc}` })),
);

export const paths = {
  home: '/',

  ...(isProduction ? {} : { profile: '/profile' }),
};
