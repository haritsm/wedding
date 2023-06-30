import Head from 'next/head';

export default function Metatags({
  title = 'Krissy Harits Wedding',
  description = 'We are getting married!',
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
    </Head>
  );
}

