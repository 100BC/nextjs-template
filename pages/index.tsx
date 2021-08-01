import React from 'react';

import Layout from '@components/Layout';
import styles from '@styles/home.module.scss';

const Home = () => {
  return (
    <Layout className={styles.home}>
      <h1>Hello World</h1>
    </Layout>
  );
};

export default Home;
