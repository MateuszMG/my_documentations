import {
  upsertPostResolver,
  UpsertPostSchema,
} from '@/client/validations/upsertPostValidation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import axios from 'axios';

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState('');
  const [codeMirrorValue, setCodeMirrorValue] = useState('');
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UpsertPostSchema>({
    resolver: upsertPostResolver,
  });

  const onSubmit = handleSubmit((val) => {
    setLoading(true);
    console.log('val', val);
    setPreview(val.post);

    axios
      .post('/api/posts', {
        content: val.post,
        category: 'typescript',
        mainTitle: 'mainTitle v2',
        subtitle: 'v_' + Date.now(),
      })
      .finally(() => setLoading(false));
  });

  const copyCode = () =>
    navigator.clipboard.writeText(`..s..\n${codeMirrorValue.trim()}\n..e..`);

  return {
    codeMirrorValue,
    control,
    copyCode,
    errors,
    loading,
    onSubmit,
    preview,
    setCodeMirrorValue,
  };
};

type SplitedTextKeys = 'code' | 'text';
type SplitedTexts = {
  name: SplitedTextKeys;
  value: string;
}[];

export const splitTexts = (text: string) => {
  const parts = text.split('..s..');
  const result: SplitedTexts = [];

  for (let i = 0; i < parts.length; i++) {
    if (parts[i].includes('..e..')) {
      const code = parts[i].split('..e..')[0].trim();
      if (code) result.push({ name: 'code', value: code });

      const remainingText = parts[i].split('..e..')[1].trim();
      if (remainingText) result.push({ name: 'text', value: remainingText });
    } else {
      result.push({ name: 'text', value: parts[i].trim() });
    }
  }

  return result;
};

export const parseTextToCodeMirror = (text: string) =>
  text
    .replace(/&amp;/g, '&')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<')
    .replace(/&nbsp;/g, ' ')
    .replace(/<p>/g, '\n')
    .replace(/<br \/>/g, '')
    .replace(/<\/p>/g, '');
