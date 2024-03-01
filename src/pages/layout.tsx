// import Navbar from './navbar'
// import Footer from './footer'
import Link from 'next/link';
const TopNav = () => (
  <nav>
    <ul>
      <Link href={'/'}>Home</Link>
      <Link href={'/docs/javascript'}>Javascript</Link>
      <Link href={'/docs/typescript'}>Typescript</Link>
      <Link href={'/docs/graphql'}>graphql</Link>
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
