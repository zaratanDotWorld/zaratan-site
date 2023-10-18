import { SSRProvider } from 'react-bootstrap';

import Analytics from '../components/analytics';
import Head from '../components/head';
import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/mailchimp.css';

export  default function Website({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Analytics analyticsId='G-GC4C7YJ78Q' />
      <Head siteName="Zaratan" />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  )
}
