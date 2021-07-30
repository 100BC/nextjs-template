import React, { ReactNode } from 'react';
import Head from 'next/head';

import Header from '../Header';
import {
  defaultTitle,
  defaultSiteName,
  defaultDescription,
  defaultCanonicalUrl,
  defaultOgpImg,
  defaultOgpImgAlt,
} from './metaDefaults';

interface BaseProps {
  title?: string;
  canonicalUrl?: string;
  ogpType?: string;
  description?: string;
  extraOgTags?: {
    property: string | undefined;
    content: string | undefined;
  }[];
  className?: string;
  children?: ReactNode;
  noIndex?: boolean;
}

interface OgpImageProps extends BaseProps {
  ogpImg: string | undefined;
  ogpImgAlt: string;
}

interface Props extends BaseProps {
  ogpImg?: undefined;
  ogpImgAlt?: undefined;
}

const Layout = ({
  title = defaultTitle,
  ogpType = 'website',
  ogpImg = defaultOgpImg,
  ogpImgAlt = defaultOgpImgAlt,
  canonicalUrl = defaultCanonicalUrl,
  description = defaultDescription,
  extraOgTags,
  className = '',
  children,
  noIndex = false,
}: Props | OgpImageProps) => (
  <>
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={defaultSiteName} />
      <meta property="og:type" content={ogpType} />
      <meta property="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogpImg} />
      <meta property="og:image:alt" content={ogpImgAlt} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      {extraOgTags &&
        extraOgTags.map((tag) => (
          <meta property={tag.property} content={tag.content} key={tag.content} />
        ))}
      {noIndex && <meta name="robots" content="noindex" />}
    </Head>
    <Header />
    <main className={className}>{children}</main>
  </>
);

export default Layout;
