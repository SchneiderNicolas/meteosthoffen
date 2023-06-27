import React from 'react';
import DailyForecast from '../components/containers/forecast/ForecastDaily';
import MainLayout from '../components/containers/MainLayout';
import ForecastWeekly from '../components/containers/forecast/ForecastWeekly';
import CurrentForecast from '../components/containers/forecast/ForecastCurrent';

const Home = () => {
  return (
    <MainLayout>
      <div className="flex justify-center items-center">
        <div className="w-full xl:w-224 px-2 sm:px-4 lg:px-8 xl:px-0 pt-24">
          <div className="flex flex-col gap-2 lg:gap-8 sm:gap-4 justify-center items-center text-neutral-900 dark:text-zinc-300 transition-none">
            <CurrentForecast />
            <DailyForecast />
            <ForecastWeekly />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Home;
