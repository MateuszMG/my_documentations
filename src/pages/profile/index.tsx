import { useProfile } from '../../client/components/pages/profile/useProfile';
import { PostForm } from '../../client/components/pages/profile/PostForm/PostForm';
import { isProduction } from '@/client/helpers/functions';

export default function Page() {
  const { loading, onSubmit } = useProfile();

  if (isProduction) return (window.location.href = '/');

  return (
    <div>
      <h1>Profile</h1>

      <PostForm loading={loading} onSubmit={onSubmit} />
      <br />
      <br />
      <br />
    </div>
  );
}
