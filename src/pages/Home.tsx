import React from 'react';
import DailyForecast from '../components/containers/DailyForecast';
import MainLayout from '../components/containers/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="w-full xl:w-256 px-2 sm:px-4 lg:px-8 xl:px-0 pt-20">
          <div className="flex flex-col justify-center items-center text-neutral-900 dark:text-zinc-300 transition-none">
            <DailyForecast />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
