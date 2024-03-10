import { availableCategories } from '@/const';

export const docsPaths: DocsPaths = Object.assign(
  {},
  ...availableCategories.map((doc) => ({ [doc]: `/docs/${doc}` })),
);

export const paths = {
  home: '/',

  profile: '/profile',
};
