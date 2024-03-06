export type AvailableCategories = 'javascript' | 'typescript' | 'graphql';
export const availableCategories: AvailableCategories[] = [
  'typescript',
  'javascript',
  'graphql',
];

export const availableCategoryOptions: Option[] = availableCategories.map(
  (category) => ({
    label: category,
    value: category,
  }),
);
