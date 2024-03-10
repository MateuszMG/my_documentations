import { FormHTMLAttributes, ReactNode } from 'react';
import styles from './Form.module.css';

interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  width?: string;
}

export const Form = ({ children, width, ...rest }: FormProps) => {
  return (
    <form
      className={styles.form}
      autoComplete={'off'}
      {...rest}
      style={{ width }}
    >
      {children}
    </form>
  );
};

interface ButtonsWrapperProps {
  children: ReactNode;
}
Form.ButtonsWrapper = ({ children }: ButtonsWrapperProps) => (
  <div className={styles.buttonsWrapper}>{children}</div>
);
