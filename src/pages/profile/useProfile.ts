import { UpsertPostSchema } from '@/client/validations/upsertPostValidation';
import { useState } from 'react';
import axios from 'axios';

export const useProfile = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (data: UpsertPostSchema) => {
    const { post, ...rest } = data;
    setLoading(true);

    axios
      .post('/api/posts', { ...rest, content: post })
      .catch((err) => {
        console.log('err', err.message);
      })

      .finally(() => setLoading(false));
  };

  return {
    loading,
    onSubmit,
  };
};
