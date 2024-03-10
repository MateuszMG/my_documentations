import { useProfile } from '../../client/components/pages/profile/useProfile';

import { PostForm } from '../../client/components/pages/profile/PostForm/PostForm';

export default function Page() {
  const { loading, onSubmit } = useProfile();

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
