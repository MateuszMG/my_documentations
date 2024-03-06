import { useProfile } from './useProfile';

import { PostForm } from './components/PostForm/PostForm';

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
