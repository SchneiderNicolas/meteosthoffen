import React, { useEffect, useState } from 'react';
import { IoMoonOutline } from 'react-icons/io5';
import { Moon } from 'lunarphase-js';
import { useTranslation } from 'react-i18next';

const MoonPhase = () => {
  const [phaseEmoji, setPhaseEmoji] = useState('');
  const [phaseName, setPhaseName] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const emoji = Moon.lunarPhaseEmoji();
    const name = Moon.lunarPhase().toLowerCase().replace(' ', '.');
    setPhaseEmoji(emoji);
    setPhaseName(name);
  }, []);

  return (
    <div className="aspect-square">
      <div className="w-full h-full py-3 px-2 sm:px-4 dark:bg-black-700 bg-peach opacity-80 rounded-lg flex flex-col">
        <div className="flex items-center mb-2">
          <IoMoonOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
          <span className="text-sm uppercase text-zinc-900 dark:text-zinc-200 ml-2">
            {t('forecast.moon.phase')}
          </span>
        </div>
        <hr className="mb-3 border-zinc-900 dark:border-zinc-200 rounded" />
        <div className="flex flex-col items-center justify-center flex-grow">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-5xl lgLarge:text-8xl">
            {phaseEmoji ? phaseEmoji : ''}
          </span>
          <span className="mt-4 text-center text-zinc-900 dark:text-white text-base sm:text-lg md:text-xl lg:text-xl lgLarge:text-2xl font-medium">
            {t(phaseName)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoonPhase;
