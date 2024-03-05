import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import styles from './Button.module.css';

import { Loader } from '../Loader/Loader';

interface GlobalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | ReactNode;
  isError?: boolean;
  isLoading?: boolean;
  testId?: string;
}

export const Button = forwardRef<HTMLButtonElement, GlobalButtonProps>(
  (
    {
      children,
      disabled,
      isError,
      isLoading,
      testId,
      ...rest
    }: GlobalButtonProps,
    ref,
  ) => {
    const isDisabled = disabled || isLoading || isError;

    return (
      <button
        className={styles.button}
        data-testid={`button__${testId}`}
        disabled={isDisabled}
        {...rest}
        ref={ref}
      >
        {isLoading ? <Loader /> : children}
      </button>
    );
  },
);
