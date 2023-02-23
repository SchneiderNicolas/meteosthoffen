import React, { ReactNode } from 'react';
import Background from './Background';
import Footer from '../footer/Footer';
import Sidebar from '../sidebar/Sidebar';

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Sidebar>
        <Background>{children}</Background>
        <Footer />
      </Sidebar>
    </div>
  );
};

export default MainLayout;
