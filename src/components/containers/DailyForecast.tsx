import React from 'react';
import { useDailyForecast } from '../../hooks/useDailyForecast';
import { IoTimeOutline } from 'react-icons/io5';
import CardContainer from './CardContainer';
import { DayNightType } from '../../constants/enum/DayNight.enum';
import WMOCodeEnum from '../../constants/enum/WMOCode.enum';
import { useTranslation } from 'react-i18next';

type ForecastPerHoursProps = {
  wmoCode: number;
  type: DayNightType;
};

type ForecastCurrentProps = {
  temperature: number | undefined;
  weathercode: number | undefined;
  type: DayNightType;
};

const ForecastPerHours = ({ wmoCode, type }: ForecastPerHoursProps) => {
  return (
    <div className="flex flex-shrink-0 flex-col items-center w-20 sm:w-24 mb-4">
      <span className="text-zinc-900 dark:text-white font-medium mb-3">
        {WMOCodeEnum.findFromCode(wmoCode, type).name}
      </span>
      <img
        className="w-6 h-6 object-scale-down"
        src={WMOCodeEnum.findFromCode(wmoCode, type).image}
      ></img>
      <span className="text-zinc-900 dark:text-white font-medium mt-3">
        12°
      </span>
    </div>
  );
};

const ForecastCurrent = ({
  temperature,
  weathercode,
  type,
}: ForecastCurrentProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-shrink-0 flex-col items-center w-20 sm:w-24 mb-4">
      <span className="text-zinc-900 dark:text-white font-medium mb-3">
        {t('forecast.now')}
      </span>
      <img
        className="w-6 h-6 object-scale-down"
        src={WMOCodeEnum.findFromCode(weathercode, type).image}
      ></img>
      <span className="text-zinc-900 dark:text-white font-medium mt-3">
        {temperature + '°'}
      </span>
    </div>
  );
};

const DailyForecast = () => {
  const { dailyForecast, isLoading, isError } = useDailyForecast();

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR</div>;

  console.log(dailyForecast, isLoading, isError);
  return (
    <CardContainer
      title="forecast.hoursByHours"
      icon={
        <IoTimeOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <div className="flex overflow-x-auto scrollbar-thin scrollbar-rounded-full scrollbar-thumb-chardonnay dark:scrollbar-thumb-neutral-400">
        <ForecastPerHours
          wmoCode={0}
          type={DayNightType.DAY}
        ></ForecastPerHours>
        <ForecastCurrent
          temperature={dailyForecast?.current_weather.temperature}
          weathercode={dailyForecast?.current_weather.weathercode}
          type={DayNightType.DAY}
        ></ForecastCurrent>
      </div>
    </CardContainer>
  );
};

export default DailyForecast;
