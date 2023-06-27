import React from 'react';
import CardContainer from '../CardContainer';
import { IoMoonOutline } from 'react-icons/io5';

const MoonPhase = () => {
  return (
    <div className="aspect-square">
      <CardContainer
        title="forecast.moon.phase"
        icon={
          <IoMoonOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
        }
      >
        Moon Phase
      </CardContainer>
    </div>
  );
};

export default MoonPhase;
