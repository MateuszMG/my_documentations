import { docsPaths } from '@/client/utils/paths';
import { UpsertPostSchema } from '@/client/validations/upsertPostValidation';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { postApi } from '@/api/postApi';

export const useProfile = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: UpsertPostSchema) => {
    setLoading(true);

    postApi
      .create(data)
      .then(() => {
        router.push(docsPaths[data.category as keyof typeof docsPaths]);
      })
      .finally(() => setLoading(false));
  };

  return {
    loading,
    onSubmit,
  };
};
