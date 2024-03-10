import { Footer } from '@/client/components/ui/Footer/Footer';
import { Roboto } from 'next/font/google';
import { MainNav } from '../MainNav/MainNav';

export const inter = Roboto({
  display: 'swap',
  subsets: ['latin'],
  weight: '300',
});

export default function Layout({ children }: any) {
  return (
    <div className={`appContainer ${inter.className}`}>
      <MainNav />
      <main className='pageWrapper'>{children}</main>
      <Footer />
    </div>
  );
}
