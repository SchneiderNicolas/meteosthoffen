import React, { useEffect } from 'react';
import MainLayout from '../components/containers/MainLayout';

const Terms = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div>Terms</div>
    </MainLayout>
  );
};

export default Terms;
