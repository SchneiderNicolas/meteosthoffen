import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { IoPartlySunnyOutline, IoCalendarOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

type SidebarButtonsProps = {
  navigateHome: () => void;
  isMobile: boolean;
  toggle?: () => void;
};

type SidebarButtonProps = {
  name: string;
  icon: ReactNode;
  onClick: () => void;
};

const SidebarButton = ({ name, icon, onClick }: SidebarButtonProps) => {
  return (
    <div
      className="cursor-pointer w-60 md:w-full flex items-center p-2 text-base font-semibold text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-peach dark:hover:bg-paua transition-none group"
      onClick={onClick}
    >
      {icon}
      <span className="flex-1 ml-3 whitespace-nowrap dark:group-hover:text-oyster">
        {name}
      </span>
    </div>
  );
};

const SidebarButtons = ({ navigateHome, isMobile }: SidebarButtonsProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames('space-y-3 mt-8', isMobile && 'mt-10')}>
      <SidebarButton
        name={t('weather')}
        icon={
          <IoPartlySunnyOutline
            size={30}
            className="text-zinc-900 dark:text-zinc-50 transition-none dark:group-hover:text-oyster"
          />
        }
        onClick={navigateHome}
      />
      <SidebarButton
        name={t('forecasts')}
        icon={
          <IoCalendarOutline
            size={30}
            className="text-zinc-900 dark:text-zinc-50 transition-none dark:group-hover:text-oyster"
          />
        }
        onClick={navigateHome}
      />
    </div>
  );
};

export default SidebarButtons;
