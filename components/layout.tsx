import React, { ReactNode, useState } from 'react';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Sidebar from './layout/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <Header openMenu={openMenu} />
      <Sidebar
        isOpen={isOpen}
        closeMenu={closeMenu}
      />
      <main className="max-w-screen min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
