import React from 'react';
import CardContainer from '../CardContainer';
import {
  IoPartlySunnyOutline,
  IoArrowUpOutline,
  IoArrowDownOutline,
} from 'react-icons/io5';
import WMOCodeEnum from '../../../constants/enum/WMOCode.enum';
import { DayNightType } from '../../../constants/enum/DayNight.enum';
import { useTranslation } from 'react-i18next';

type CurrentWeatherProps = {
  temperature: number;
  weatherCode: number;
  temp_max: number;
  temp_min: number;
  is_day: boolean;
};

const CurrentWeather = ({
  temperature,
  weatherCode,
  temp_max,
  temp_min,
  is_day,
}: CurrentWeatherProps) => {
  const { t } = useTranslation();
  const WMOCode = WMOCodeEnum.findFromCode(
    weatherCode,
    is_day ? DayNightType.DAY : DayNightType.NIGHT
  );
  return (
    <CardContainer
      title="forecast.current.weather"
      square={true}
      icon={
        <IoPartlySunnyOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-zinc-900 dark:text-white text-2xl font-medium">
              Osthoffen
            </div>
            <div className="mt-2 text-zinc-900 dark:text-white text-5xl font-medium">
              {temperature.toFixed(1) + '°'}
            </div>
          </div>
          <img
            className="w-16 h-16 mr-6 mt-8 object-scale-down"
            src={WMOCode.image}
            alt={WMOCode.name}
          />
        </div>

        <div className="text-zinc-900 dark:text-white text-xl transition-none">
          <div>{t(WMOCode.name)}</div>
          <div className="flex space-x-4 transition-none -ml-1">
            <div className="flex items-center transition-none">
              <IoArrowUpOutline className="transition-none" />
              <span>{temp_max.toFixed(1) + '°'}</span>
            </div>
            <div className="flex items-center transition-none">
              <IoArrowDownOutline className="transition-none" />
              <span>{temp_min.toFixed(1) + '°'}</span>
            </div>
          </div>
        </div>
      </div>
    </CardContainer>
  );
};

export default CurrentWeather;
