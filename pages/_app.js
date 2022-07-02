import Layout from '../components/layout';
import '../styles/globals.css';
import { StoreProvider } from '../utils/Store';
import { SessionProvider } from 'next-auth/react';
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <StoreProvider>
        <Layout>
          {' '}
          <Component {...pageProps} />{' '}
        </Layout>
      </StoreProvider>
    </SessionProvider>
  );
}

export default MyApp;
