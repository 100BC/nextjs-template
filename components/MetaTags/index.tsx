import React from 'react';
import Head from 'next/head';

const siteName = 'NextJS starter kit';
const title = 'NextJS starter kit with TypeScript and SCSS support';
const description = 'Enter what your site is about';
const baseUrl = 'localhost:3000';
const ogpImg = 'https://localhost:3000/OGP.png';
const googleFontUrl =
  'https://fonts.googleapis.com/css2?family=Cherry+Swash:wght@700&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&display=swap';

const MetaTags = () => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    {/* FAVICON */}
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ff0000" />
    <meta name="msapplication-TileColor" content="#b91d47" />
    <meta name="theme-color" content="#ffffff" />
    {/* GOOGLE FONT */}
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link href={googleFontUrl} rel="stylesheet" />
    {/* OPEN GRAPH */}
    <meta property="og:site_name" content={siteName} />
    <meta property="og:title" content={title} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={baseUrl} />
    <meta property="og:image" content={ogpImg} />
    <meta property="og:description" content={description} />
  </Head>
);

export default MetaTags;
