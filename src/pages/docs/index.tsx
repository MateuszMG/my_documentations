import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  console.log('topic', router.query);

  return (
    <div>
      <p>docs index </p>
      <p>docs index </p>
      <p>docs index </p>
      <p>docs index </p>
    </div>
  );
}
