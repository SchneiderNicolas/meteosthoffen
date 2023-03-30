import React from 'react';
import CardContainer from '../CardContainer';
import { IoCalendarClearOutline } from 'react-icons/io5';
import WMOCodeEnum from '../../../constants/enum/WMOCode.enum';
import { DayNightType } from '../../../constants/enum/DayNight.enum';
import { temperatureGradient } from '../../../utils/temperatureGradient';
import { useWeeklyForecast } from '../../../hooks/useWeeklyForecast';

type ForecastOneDayProps = {
  gradient: string;
  weeklyTmin: number;
  weeklyTmax: number;
  weeklyTgap: number;
  tmin: number;
  tmax: number;
};

const ForecastOneDay = ({
  gradient,
  weeklyTmin,
  weeklyTgap,
  weeklyTmax,
}: ForecastOneDayProps) => {
  console.log(
    'w-[' +
      Math.round((100 / weeklyTgap) * Math.abs(5 - weeklyTmax)) +
      '%' +
      ']'
  );
  return (
    <>
      <div className="col-span-2 flex items-center ml-1 sm:ml-4">
        <span className="text-zinc-900 dark:text-white font-medium">
          {'Today'}
        </span>
      </div>

      <div className="col-span-1">
        <img
          className="w-6 h-6 object-scale-down"
          src={WMOCodeEnum.findFromCode(1, DayNightType.DAY).image}
        ></img>
      </div>

      <div className="col-span-6">
        <div className="flex justify-center items-center">
          <span className="sm:mr-2 text-zinc-500 dark:text-zinc-300 font-medium">
            -6
          </span>
          <div className="w-full mx-2 -mt-2">
            <div className="relative">
              <div className="absolute ml-[55%] w-4 rounded-full bg-white -mt-1 h-4 z-50 border-2 border-neutral-300 dark:border-neutral-700"></div>
              <div
                className="absolute w-[99%] rounded-full z-10 h-2 left-1/2 transform -translate-x-1/2"
                style={{ background: gradient }}
              ></div>
              <div
                className="absolute bg-neutral-300 dark:bg-neutral-700 z-30 h-2 rounded-l-full"
                style={{
                  width:
                    Math.round((100 / weeklyTgap) * Math.abs(4 - weeklyTmin)) +
                    '%',
                }}
              ></div>
              <div
                className="absolute right-0 w-[12%] bg-neutral-300 dark:bg-neutral-700 z-30 h-2 rounded-r-full"
                style={{
                  width:
                    Math.round((100 / weeklyTgap) * Math.abs(15 - weeklyTmax)) +
                    '%',
                }}
              ></div>
            </div>
          </div>
          <span className="sm:ml-2 text-zinc-900 dark:text-white font-medium">
            -6
          </span>
        </div>
      </div>

      <div className="col-span-3 flex justify-center items-center">Wind</div>
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

  return (
    <ForecastOneDay
      gradient={gradient}
      weeklyTmin={weeklyTmin}
      weeklyTmax={weeklyTmax}
      weeklyTgap={weeklyTgap}
      tmin={5}
      tmax={12}
    />
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
      <div className="grid grid-cols-12 gap-1 items-center mt-2">
        <ForecastPerDay />
      </div>
    </CardContainer>
  );
};

export default ForecastWeekly;
