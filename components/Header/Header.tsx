import React from 'react';
import Link from 'next/link';

import styles from './styles.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a title="Home">NextJS starter Kit</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
