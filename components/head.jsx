import Head from 'next/head';

export default function ({ siteName }) {
  return (
    <Head>
      <title>{siteName}</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css?family=EB+Garamond:400,700&display=swap" rel="stylesheet" />
    </Head>
  )
}
