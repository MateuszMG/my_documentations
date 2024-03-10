import { Button } from '@/client/components/global/Button/Button';
import { CodeMirror } from '@/client/components/global/CodeMirror/CodeMirror';
import { Form } from '@/client/components/global/Form/Form';
import { SelectInput } from '@/client/components/inputs/SelectInput/SelectInput';
import { TextInput } from '@/client/components/inputs/TextInput/TextInput';
import { Wysiwyg } from '@/client/components/inputs/Wysiwyg/Wysiwyg';
import {
  upsertPostResolver,
  UpsertPostSchema,
} from '@/client/validations/upsertPostValidation';
import { availableCategoryOptions } from '@/const';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Box from '@mui/material/Box';

interface PostFormProps {
  loading: boolean;
  onSubmit: (data: any) => void;
}

export const PostForm = ({ loading, onSubmit }: PostFormProps) => {
  const [codeMirrorValue, setCodeMirrorValue] = useState('');
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm<UpsertPostSchema>({
    resolver: upsertPostResolver,
  });

  const copyCode = () =>
    navigator.clipboard.writeText(`..s..\n${codeMirrorValue.trim()}\n..e..`);

  return (
    <>
      <Box display={'flex'} flexDirection='column' gap={'16px'}>
        <CodeMirror
          value={codeMirrorValue}
          onChange={(value) => setCodeMirrorValue(value)}
        />

        <Form.ButtonsWrapper>
          <Button onClick={copyCode}>Copy</Button>
        </Form.ButtonsWrapper>
      </Box>

      <Form onSubmit={handleSubmit(onSubmit)} width={'100%'}>
        <Wysiwyg control={control} error={errors.post?.message} name={'post'} />

        <TextInput
          control={control}
          error={!!errors.mainTitle?.message}
          helperText={errors.mainTitle?.message}
          name='mainTitle'
        />

        <TextInput
          control={control}
          error={!!errors.subtitle?.message}
          helperText={errors.subtitle?.message}
          name='subtitle'
        />

        <SelectInput
          control={control}
          error={!!errors.category?.message}
          helperText={errors.category?.message}
          name='category'
          options={availableCategoryOptions}
          defaultOption={availableCategoryOptions[0]}
        />

        <Form.ButtonsWrapper>
          <Button disabled={!isValid} loading={loading} type='submit'>
            Submit
          </Button>
        </Form.ButtonsWrapper>
      </Form>
    </>
  );
};
