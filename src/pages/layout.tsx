import { firstLetterToUpperCase } from '@/client/helpers/strings';
import { docsPaths, paths } from '@/client/utils/paths';
import Link from 'next/link';

const TopNav = () => (
  <nav>
    <ul
      style={{
        display: 'flex',
        gap: '16px',
      }}
    >
      <Link href={paths.home}>Home</Link>
      <Link href={paths.profile}>profile</Link>

      {Object.entries(docsPaths).map(([key, path]) => (
        <Link key={key} href={path}>
          {firstLetterToUpperCase(key)}
        </Link>
      ))}
    </ul>
  </nav>
);

export default function Layout({ children }: any) {
  return (
    <>
      <TopNav />
      <main>{children}</main>
    </>
  );
}
