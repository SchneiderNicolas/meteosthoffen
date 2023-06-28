import React, { useEffect } from 'react';
import MainLayout from '../components/containers/MainLayout';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div>Privacy</div>
    </MainLayout>
  );
};

export default Privacy;
