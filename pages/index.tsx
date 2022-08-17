import React from 'react';

import MainLayout, { DOMAIN_NAME } from '@layouts/MainLayout';
import styles from '@styles/home.module.scss';

const Home = () => {
  return (
    <MainLayout
      className={styles.home}
      ogpImg={`${DOMAIN_NAME}/OGP.png`}
      ogpImgAlt="Change Me I'm Temporary on a purple background"
      ogpImgWidth={1200}
      ogpImgHeight={630}
      twitterCard="summary_large_image"
    >
      <h1>Hello World</h1>
    </MainLayout>
  );
};

export default Home;
