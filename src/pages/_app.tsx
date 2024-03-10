import '@/client/styles/globals.css';
import { CssBaseline } from '@mui/material';
import { theme } from '@/client/styles/theme';
import { ThemeProvider } from '@emotion/react';
import Layout from '../client/components/ui/Layout/layout';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
