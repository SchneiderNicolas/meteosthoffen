import React, { useEffect } from 'react';
import MainLayout from '../components/containers/MainLayout';
import CustomForm from '../components/custom-form/CustomForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="w-full xl:w-224 px-2 sm:px-4 lg:px-8 xl:px-0 pt-24">
          <div className="flex flex-col gap-2 lg:gap-8 sm:gap-4 justify-center items-center text-neutral-900 dark:text-zinc-300 transition-none">
            <CustomForm />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
