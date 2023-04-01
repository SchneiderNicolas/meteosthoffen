import React from 'react';
import CardContainer from '../CardContainer';
import { IoCalendarClearOutline } from 'react-icons/io5';
import WMOCodeEnum from '../../../constants/enum/WMOCode.enum';
import { DayNightType } from '../../../constants/enum/DayNight.enum';
import { temperatureGradient } from '../../../utils/temperatureGradient';
import { useWeeklyForecast } from '../../../hooks/useWeeklyForecast';

const ForecastOneDayName = () => {
  return (
    <div className="col-span-2 flex items-center ml-1 sm:ml-4">
      <span className="text-zinc-900 dark:text-white font-medium">
        {'Wednesday'}
      </span>
    </div>
  );
};

type ForecastOneDayWeatherCodeProps = {
  weathercode: number;
};

const ForecastOneDayWeatherCode = ({
  weathercode,
}: ForecastOneDayWeatherCodeProps) => {
  return (
    <div className="col-span-1">
      <img
        className="w-6 h-6 object-scale-down"
        src={WMOCodeEnum.findFromCode(weathercode, DayNightType.DAY).image}
      ></img>
    </div>
  );
};

type ForecastOneDayTemperatureProps = {
  gradient: string;
  weeklyTmin: number;
  weeklyTmax: number;
  weeklyTgap: number;
  tmin: number;
  tmax: number;
  currentTemp?: number;
};

const ForecastOneDayTemperature = ({
  gradient,
  weeklyTmin,
  weeklyTmax,
  weeklyTgap,
  tmin,
  tmax,
  currentTemp,
}: ForecastOneDayTemperatureProps) => {
  return (
    <div className="col-span-7 lg:col-span-6">
      <div className="flex justify-center items-center">
        <span className="sm:mr-2 text-zinc-500 dark:text-zinc-300 font-medium">
          {tmin + '°'}
        </span>
        <div className="w-full mx-2 -mt-2">
          <div className="relative">
            {currentTemp !== undefined && (
              <div
                className="absolute w-2 sm:w-4 rounded-full bg-white sm:-mt-1 h-2 sm:h-4 z-50 border-2 border-neutral-500 dark:border-neutral-700"
                style={{
                  marginLeft: `calc(${Math.round(
                    (100 / weeklyTgap) * Math.abs(currentTemp - weeklyTmin)
                  )}% - 3px)`,
                }}
              />
            )}
            <div
              className="absolute w-[99%] rounded-full z-10 h-2 left-1/2 transform -translate-x-1/2"
              style={{ background: gradient }}
            />
            <div
              className="absolute bg-neutral-300 dark:bg-neutral-700 z-30 h-2 rounded-l-full"
              style={{
                width:
                  Math.round((100 / weeklyTgap) * Math.abs(tmin - weeklyTmin)) +
                  '%',
              }}
            />
            <div
              className="absolute right-0 bg-neutral-300 dark:bg-neutral-700 z-30 h-2 rounded-r-full"
              style={{
                width:
                  Math.round((100 / weeklyTgap) * Math.abs(tmax - weeklyTmax)) +
                  '%',
              }}
            />
          </div>
        </div>
        <span className="sm:ml-2 text-zinc-900 dark:text-white font-medium">
          {tmax + '°'}
        </span>
      </div>
    </div>
  );
};

const ForecastOneDayWind = () => {
  return (
    <div className="col-span-2 lg:col-span-3 flex justify-center items-center">
      Wind
    </div>
  );
};

type ForecastOneDayProps = {
  gradient: string;
  weeklyTmin: number;
  weeklyTmax: number;
  weeklyTgap: number;
  tmin: number;
  tmax: number;
  weathercode: number;
  last: boolean;
};

const ForecastOneDay = ({
  gradient,
  weeklyTmin,
  weeklyTmax,
  weeklyTgap,
  tmin,
  tmax,
  weathercode,
  last,
}: ForecastOneDayProps) => {
  return (
    <>
      <ForecastOneDayName />
      <ForecastOneDayWeatherCode weathercode={weathercode} />
      <ForecastOneDayTemperature
        gradient={gradient}
        weeklyTmin={weeklyTmin}
        weeklyTmax={weeklyTmax}
        weeklyTgap={weeklyTgap}
        tmin={tmin}
        tmax={tmax}
      />
      <ForecastOneDayWind />
      {last ? (
        <div className="mb-1" />
      ) : (
        <hr className="col-span-12 mb-3 mt-3 border-zinc-500 dark:border-zinc-400 rounded" />
      )}
    </>
  );
};

const ForecastPerDay = () => {
  const { weeklyForecast, isLoading, isError } = useWeeklyForecast();

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR</div>;

  const weeklyTmin = Math.round(
    Math.min.apply(null, weeklyForecast?.daily.temperature_2m_min!)
  );
  const weeklyTmax = Math.round(
    Math.max.apply(null, weeklyForecast?.daily.temperature_2m_max!)
  );
  const gradient = temperatureGradient(weeklyTmin, weeklyTmax);
  const weeklyTgap = Math.abs(weeklyTmax - weeklyTmin);

  const ListForecastPerDays = weeklyForecast?.daily.time.map(function (
    _,
    index
  ) {
    return (
      <ForecastOneDay
        key={index}
        gradient={gradient}
        weeklyTmin={weeklyTmin}
        weeklyTmax={weeklyTmax}
        weeklyTgap={weeklyTgap}
        tmin={Math.round(weeklyForecast.daily.temperature_2m_min[index])}
        tmax={Math.round(weeklyForecast.daily.temperature_2m_max[index])}
        weathercode={weeklyForecast.daily.weathercode[index]}
        last={index === 6 && true}
      />
    );
  });

  return (
    <div className="grid grid-cols-12 gap-2 items-center mt-5">
      {ListForecastPerDays}
    </div>
  );
};

const ForecastWeekly = () => {
  return (
    <CardContainer
      title="forecast.7days"
      icon={
        <IoCalendarClearOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <ForecastPerDay />
    </CardContainer>
  );
};

export default ForecastWeekly;
