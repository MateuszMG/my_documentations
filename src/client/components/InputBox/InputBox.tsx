import { ReactNode } from 'react';

import { firstLetterToUpperCase, separateString } from '../../helpers/strings';

import styles from './InputBox.module.css';

interface InputBoxProps {
  children: ReactNode;
  error?: string;
  label?: string;
  name: string;
}

export const InputBox = ({ children, error, label, name }: InputBoxProps) => {
  const labelText = label || firstLetterToUpperCase(separateString(name));

  return (
    <div className={styles.wrap}>
      <label className={styles.label} data-testid={`text__label_${name}`}>
        {labelText}
      </label>
      {children}
      <span className={styles.span} data-testid={`text__error_${name}`}>
        {error}
      </span>
    </div>
  );
};
