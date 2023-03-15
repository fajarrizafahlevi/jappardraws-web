import React, { ReactNode } from 'react';
import Footer from './layout/footer';
import Header from './layout/header';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
