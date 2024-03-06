import { docsPaths } from '@/client/utils/paths';
import { UpsertPostSchema } from '@/client/validations/upsertPostValidation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: UpsertPostSchema) => {
    setLoading(true);

    axios
      .post('/api/posts', data)
      .then(() => {
        router.push(docsPaths[data.category as keyof typeof docsPaths]);
      })
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
