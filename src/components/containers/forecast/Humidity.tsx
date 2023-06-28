import React from 'react';
import CardContainer from '../CardContainer';
import { WiHumidity } from 'react-icons/wi';
import { useTranslation } from 'react-i18next';

type HumidityProps = {
  dewPoint: number;
  humidity: number;
};

const Humidity = ({ dewPoint, humidity }: HumidityProps) => {
  const { t } = useTranslation();
  return (
    <CardContainer
      title="forecast.humidity"
      square={true}
      icon={
        <WiHumidity className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex items-start justify-between">
          <div>
            <div className="text-zinc-900 dark:text-white text-4xl sm:text-5xl md:text-3xl mdLarge:text-4xl lg:text-3xl lgLarge:text-5xl font-medium">
              {humidity + ' %'}
            </div>
          </div>
        </div>

        <div className="text-zinc-900 dark:text-white text-base sm:text-xl md:text-base mdLarge:text-xl lg:text-sm lgLarge:text-xl transition-none">
          <div>{t('forecast.dewpoint') + ' ' + dewPoint + '°.'}</div>
        </div>
      </div>
    </CardContainer>
  );
};

export default Humidity;
