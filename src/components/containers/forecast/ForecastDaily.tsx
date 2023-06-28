import React from 'react';
import { useDailyForecast } from '../../../hooks/useDailyForecast';
import { IoTimeOutline } from 'react-icons/io5';
import CardContainer from '../CardContainer';
import { DayNightType } from '../../../constants/enum/DayNight.enum';
import WMOCodeEnum from '../../../constants/enum/WMOCode.enum';
import { useTranslation } from 'react-i18next';
import { dateConverter } from '../../../utils/dateConverter';

type ForecastOneHourProps = {
  temperature: number | undefined;
  weathercode: number | undefined;
  type: DayNightType;
  time: string;
};

const ForecastOneHour = ({
  temperature,
  weathercode,
  type,
  time,
}: ForecastOneHourProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-shrink-0 flex-col items-center w-20 sm:w-24 mb-4">
      <span className="text-zinc-900 dark:text-white font-medium mb-3">
        {t('forecast.' + time)}
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

type SunriseSunsetProps = {
  time: string;
  weathercode: number | undefined;
  type: DayNightType;
};

const SunriseSunset = ({ time, weathercode, type }: SunriseSunsetProps) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-shrink-0 flex-col items-center w-20 sm:w-24 mb-4">
      <span className="text-zinc-900 dark:text-white font-medium mb-3">
        {localStorage.getItem('language') === 'en' ? dateConverter(time) : time}
      </span>
      <img
        className="w-6 h-6 object-scale-down"
        src={WMOCodeEnum.findFromCode(weathercode, type).image}
      ></img>
      <span className="text-zinc-900 dark:text-white font-medium mt-3">
        {t(WMOCodeEnum.findFromCode(weathercode, type).name)}
      </span>
    </div>
  );
};

const ForecastPerHours = () => {
  const { dailyForecast, isLoading, isError } = useDailyForecast();

  if (isLoading) return <div>LOADING</div>;
  if (isError) return <div>ERROR</div>;

  const sunset =
    parseInt(dailyForecast?.daily.sunset[0].slice(11, 13)!, 10) * 100 +
    parseInt(dailyForecast?.daily.sunset[0].slice(14, 16)!, 10);
  const sunrise =
    parseInt(dailyForecast?.daily.sunrise[0].slice(11, 13)!, 10) * 100 +
    parseInt(dailyForecast?.daily.sunrise[0].slice(14, 16)!, 10);
  const currentTime = parseInt(
    dailyForecast?.current_weather.time.slice(11, 13)!,
    10
  );

  const ListForecastPerHours = dailyForecast?.hourly.temperature_2m.map(
    function (_, index) {
      if (index > currentTime && index < currentTime + 25) {
        const time =
          parseInt(dailyForecast?.hourly.time[index].slice(11, 13), 10) * 100;
        return (
          <div key={index} className="flex">
            <ForecastOneHour
              temperature={dailyForecast?.hourly.temperature_2m[index]}
              weathercode={dailyForecast?.hourly.weathercode[index]}
              type={
                time < sunrise
                  ? DayNightType.NIGHT
                  : time <= sunset
                  ? DayNightType.DAY
                  : DayNightType.NIGHT
              }
              time={dailyForecast?.hourly.time[index].slice(11, 13)}
            />
            {index % 24 === Math.trunc(sunrise / 100) && (
              <SunriseSunset
                time={dailyForecast?.daily.sunrise[0].slice(11, 16)}
                weathercode={-1}
                type={DayNightType.SUNRISE}
              />
            )}
            {index % 24 === Math.trunc(sunset / 100) && (
              <SunriseSunset
                time={dailyForecast?.daily.sunset[0].slice(11, 16)}
                weathercode={-2}
                type={DayNightType.SUNSET}
              />
            )}
          </div>
        );
      }
    }
  );
  return (
    <div className="flex overflow-x-auto scrollbar-thin scrollbar-rounded-full scrollbar-thumb-chardonnay dark:scrollbar-thumb-neutral-400">
      <ForecastOneHour
        temperature={dailyForecast?.current_weather.temperature}
        weathercode={dailyForecast?.current_weather.weathercode}
        type={
          dailyForecast?.current_weather.is_day
            ? DayNightType.DAY
            : DayNightType.NIGHT
        }
        time={'now'}
      />
      {ListForecastPerHours}
    </div>
  );
};

const DailyForecast = () => {
  return (
    <CardContainer
      title="forecast.hoursByHours"
      icon={
        <IoTimeOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <div id="previsions" className="bg-red-500 -mt-20" />
      <div className="mt-20" />
      <ForecastPerHours />
    </CardContainer>
  );
};

export default DailyForecast;
