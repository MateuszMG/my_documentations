import LoadingButton, { LoadingButtonProps } from '@mui/lab/LoadingButton';
import { forwardRef, ReactNode } from 'react';

interface GlobalButtonProps extends LoadingButtonProps {
  children: string | ReactNode;
  isError?: boolean;
  loading?: boolean;
  testId?: string;
}

export const Button = forwardRef<HTMLButtonElement, GlobalButtonProps>(
  (
    {
      children,
      disabled,
      isError,
      loading,
      testId,
      ...rest
    }: GlobalButtonProps,
    ref,
  ) => {
    const isDisabled = disabled || loading || isError;

    return (
      <LoadingButton
        data-testid={`button__${testId}`}
        disabled={isDisabled}
        loading={loading}
        ref={ref}
        variant='outlined'
        {...rest}
      >
        {children}
      </LoadingButton>
    );
  },
);
