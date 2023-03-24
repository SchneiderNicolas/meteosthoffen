import React from 'react';
import { useDailyForecast } from '../../hooks/useDailyForecast';
import { IoTimeOutline } from 'react-icons/io5';
import CardContainer from './CardContainer';

const DailyForecast = () => {
  const { dailyForecast, isLoading, isError } = useDailyForecast();

  //if (isLoading) return <div>LOADING</div>
  //if (isError) return <div>ERROR</div>

  //console.log(dailyForecast?.hourly_units.weathercode)
  console.log(dailyForecast, isLoading, isError);
  return (
    <CardContainer
      title="forecast.hoursByHours"
      icon={
        <IoTimeOutline className="transition-none text-zinc-900 dark:text-zinc-300" />
      }
    >
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-rounded-full scrollbar-thumb-neutral-400">
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
        <div className="flex flex-col items-center">Maint.</div>
      </div>
    </CardContainer>
  );
};

export default DailyForecast;
