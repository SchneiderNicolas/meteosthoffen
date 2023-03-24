import React from 'react';
import { useTranslation } from 'react-i18next';
import DailyForecast from '../components/containers/DailyForecast';
import MainLayout from '../components/containers/MainLayout';

const Home = () => {
  const { t } = useTranslation();

  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="w-full xl:w-256 px-2 sm:px-4 lg:px-8 xl:px-0 pt-20">
          <div className="flex flex-col justify-center items-center text-neutral-900 dark:text-zinc-300 transition-none">
            <h1 className="text-2xl">MeteOsthoffen</h1>
            <p className="mt-2">{t('WIP') + '...'}</p>
            <DailyForecast />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
