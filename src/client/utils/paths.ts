import { availableCategories, AvailableCategories } from '@/const';

type DocsPaths = {
  [key in AvailableCategories]: string;
};

export const docsPaths: DocsPaths = Object.assign(
  {},
  ...availableCategories.map((doc) => ({ [doc]: `/docs/${doc}` })),
);

export const paths = {
  home: '/',

  profile: '/profile',
};
