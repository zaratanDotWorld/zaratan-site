import Head from 'next/head';

import Analytics from '../components/analytics';
import Layout from '../components/layout';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';
import '../styles/mailchimp.css';
import '../styles/video.css';

export  default function ({ Component, pageProps }) {
  const fontsUrl = "https://fonts.googleapis.com/css" +
    "?family=EB+Garamond:400,700&display=swap";

  return (
    <div>
      <Analytics analyticsId='G-GC4C7YJ78Q' />
      <link href={fontsUrl} rel="stylesheet" />

      <Head>
        <title>Zaratan</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
