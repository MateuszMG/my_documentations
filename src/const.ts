export type AvailableCategories =
  | 'javascript'
  | 'typescript'
  | 'graphql'
  | 'terminal'
  | 'design patterns';

export const availableCategories: AvailableCategories[] = [
  'typescript',
  'javascript',
  'graphql',
  'terminal',
  'design patterns',
];

export const availableCategoryOptions: Option[] = availableCategories.map(
  (category) => ({
    label: category,
    value: category,
  }),
);
