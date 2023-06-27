import React from 'react';
import CardContainer from '../CardContainer';
import { BsWind } from 'react-icons/bs';

type WindProps = {
  windSpeed: number;
  windDirection: number;
};

const Wind = ({ windSpeed, windDirection }: WindProps) => {
  return (
    <div className="aspect-square">
      <CardContainer
        title="forecast.wind"
        icon={
          <BsWind className="transition-none text-zinc-900 dark:text-zinc-200" />
        }
      >
        <div>Wind Speed: {windSpeed}</div>
        <div>Wind Direction: {windDirection}</div>
      </CardContainer>
    </div>
  );
};

export default Wind;
