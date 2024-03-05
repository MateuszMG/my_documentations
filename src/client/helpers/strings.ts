export const firstLetterToUpperCase = (text: string) =>
  text?.substring(0, 1).toUpperCase() + text?.substring(1);

export const separateString = (text: string) =>
  firstLetterToUpperCase(text?.replace(/[A-Z]/g, (l) => ` ${l.toLowerCase()}`));

export const separateStringOnDots = (text: string) =>
  firstLetterToUpperCase(text.replaceAll('.', ' '));

export const separateStringOnDash = (text: string) =>
  firstLetterToUpperCase(text.replaceAll('_', ' '));

export const snakeCase = (text: string) =>
  text?.replace(/[A-Z]/g, (l) => `-${l.toLowerCase()}`);
