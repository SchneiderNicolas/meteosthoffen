import React from 'react';
import CardContainer from '../CardContainer';
import { IoWaterOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

type RainfallProps = {
  rainDay: number;
  rainMonth: number;
};

const Rainfall = ({ rainDay, rainMonth }: RainfallProps) => {
  const { t } = useTranslation();
  return (
    <CardContainer
      title="forecast.rainfall"
      square={true}
      icon={
        <IoWaterOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-zinc-900 dark:text-white text-5xl font-medium">
              {rainDay + ' mm'}
            </div>
            <div className="mt-2 text-zinc-900 dark:text-white text-2xl font-normal">
              {t('forecast.last24')}
            </div>
          </div>
        </div>
        <div className="text-zinc-900 dark:text-white text-xl transition-none">
          <div>{rainMonth + ' mm ' + t('forecast.rainfall.month') + '.'}</div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Rainfall;
