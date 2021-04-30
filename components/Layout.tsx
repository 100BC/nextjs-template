import { ReactNode } from 'react';

import MetaTags from 'metaTags';
import Header from './Header';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <>
    <MetaTags />
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
