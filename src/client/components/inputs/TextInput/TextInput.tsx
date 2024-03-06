import {
  firstLetterToUpperCase,
  separateString,
} from '@/client/helpers/strings';
import TextField, { StandardTextFieldProps } from '@mui/material/TextField';
import { Control, Controller } from 'react-hook-form';

interface TextInputProps extends StandardTextFieldProps {
  control: Control<any>;
  name: string;
}

export const TextInput = ({
  control,
  name,
  label,
  ...props
}: TextInputProps) => {
  const labelText = label || firstLetterToUpperCase(separateString(name));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextField {...props} {...field} label={labelText} variant='outlined' />
      )}
    />
  );
};
