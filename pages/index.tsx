import React from 'react';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';
import { DOMAIN_NAME } from '@utils/constants';

const Home = () => {
  return (
    <Layout
      className={styles.home}
      ogpImg={`${DOMAIN_NAME}/OGP.png`}
      ogpImgAlt="Change Me I'm Temporary on a purple background"
      ogpImgWidth={1200}
      ogpImgHeight={630}
      twitterCard="summary_large_image"
    >
      <h1>Hello World</h1>
    </Layout>
  );
};

export default Home;
