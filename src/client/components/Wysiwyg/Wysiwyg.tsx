import { Control, Controller } from 'react-hook-form';
import 'react-quill/dist/quill.snow.css';
// import { AssertsShape } from 'yup';
// import ReactQuill from 'react-quill';
import styles from './Wysiwyg.module.css';

import { InputBox } from '../InputBox/InputBox';

import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface WysiwygInputProps {
  control: Control<any>;
  error?: string;
  label?: string;
  name: string;
}

export const Wysiwyg = ({ control, name, error, label }: WysiwygInputProps) => {
  return (
    <InputBox {...{ name, error, label }}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => <ReactQuill modules={modules} {...field} />}
      />
    </InputBox>
  );
};

const modules = {
  toolbar: [
    [{ header: [1, 3, 5, false] }],
    ['bold', 'italic', 'underline'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link'],
    [{ color: ['#F00', '#0F0', '#00F', '#000', '#FFF'] }],
    [{ background: ['#F00', '#0F0', '#00F', '#000', '#FFF'] }],
    // [{ color: colors }],
  ],
  // theme: 'snow', // or 'bubble'
};
