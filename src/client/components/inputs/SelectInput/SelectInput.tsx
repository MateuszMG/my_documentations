import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { BaseSelectProps } from '@mui/material/Select';
import { Control, Controller } from 'react-hook-form';
import {
  firstLetterToUpperCase,
  separateString,
} from '@/client/helpers/strings';
import FormHelperText from '@mui/material/FormHelperText';

interface SelectInputProps extends BaseSelectProps {
  control: Control<any>;
  defaultOption?: Option;
  helperText?: string;
  label?: string;
  name: string;
  options: Option[];
}

export const SelectInput = ({
  control,
  defaultOption,
  helperText,
  label,
  name,
  options,
  ...props
}: SelectInputProps) => {
  const labelText = label || firstLetterToUpperCase(separateString(name));

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={
        defaultOption?.value || (options.length ? options[0].value : undefined)
      }
      render={({ field }) => (
        <FormControl fullWidth>
          <InputLabel id={labelText}>{labelText}</InputLabel>
          <Select labelId={labelText} {...props} {...field} label={labelText}>
            {options.map(({ label, value }) => (
              <MenuItem value={value}>{label}</MenuItem>
            ))}
          </Select>
          <FormHelperText error>{helperText}</FormHelperText>
        </FormControl>
      )}
    />
  );
};
