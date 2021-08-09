import React, { ReactNode } from 'react';
import Head from 'next/head';

import { AllOrNone, XOR } from '@utils/interface';
import { DOMAIN_NAME, META_DESCRIPTION, META_TITLE, SITE_NAME } from '@utils/constants';
import Header from '../Header';

const Layout = ({
  title = META_TITLE,
  description = META_DESCRIPTION,
  canonicalUrl = DOMAIN_NAME, // Can use either Canonical URL or Path, not both
  canonicalUrlPath = '', // will use DOMAIN_NAME + path
  ogpTitle, // if undefined, the og:title defaults to {title}
  ogpType = 'website', // see https://ogp.me/#types
  ogpImg, // if ogpImage is defined, alt, width and height must be defined
  ogpImgAlt,
  ogpImgWidth,
  ogpImgHeight,
  twitterCard = 'summary',
  twitterSite,
  twitterCreator,
  noIndex = false, // prevents the page from being scraped by robots
  className = '', // styles for the <main> tag that wraps the content
  children,
}: AllOrNone<Props, OgpImageProps>) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={[canonicalUrl, canonicalUrlPath].join()} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {noIndex && <meta name="robots" content="noindex" />}
      {/* Open Graph */}
      <meta property="og:type" content={ogpType} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={ogpTitle || title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={[canonicalUrl, canonicalUrlPath].join()} />
      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={ogpTitle || title} />
      <meta name="twitter:description" content={description} />
      {twitterSite && <meta name="twitter:site" content={twitterSite} />}
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      {/* Image */}
      {ogpImg && (
        <>
          <meta property="og:image" content={ogpImg} />
          <meta property="og:image:alt" content={ogpImgAlt} />
          <meta property="og:image:width" content={ogpImgWidth!.toString()} />
          <meta property="og:image:height" content={ogpImgHeight!.toString()} />
          <meta name="twitter:image" content={ogpImg} />
          <meta name="twitter:image:alt" content={ogpImgAlt} />
        </>
      )}
    </Head>
    <Header />
    <main className={className}>{children}</main>
  </>
);

export default Layout;

type Props = {
  title?: string;
  description?: string;
  ogpTitle?: string;
  ogpType?: string;
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterSite?: string;
  twitterCreator?: string;
  noIndex?: boolean;
  className?: string;
  children?: ReactNode;
} & XOR<{ canonicalUrl?: string }, { canonicalUrlPath?: string }>;

interface OgpImageProps {
  ogpImg: string | null | undefined;
  ogpImgAlt: string;
  ogpImgWidth: number;
  ogpImgHeight: number;
}
