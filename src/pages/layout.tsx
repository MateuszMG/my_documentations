import { paths } from '@/client/utils/paths';
import Link from 'next/link';

const TopNav = () => (
  <nav>
    <ul>
      <Link href={paths.home}>Home</Link>
      <Link href={paths.profile}>profile</Link>
      <Link href={paths.javascriptDoc}>Javascript</Link>
      <Link href={paths.typescriptDoc}>Typescript</Link>
      <Link href={paths.graphqlDoc}>graphql</Link>
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
