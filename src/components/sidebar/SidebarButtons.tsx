import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { IoPartlySunnyOutline, IoCalendarOutline } from 'react-icons/io5';

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
      className="cursor-pointer flex items-center p-2 text-base font-semibold text-zinc-900 dark:text-zinc-50 rounded-lg hover:bg-rajah dark:hover:bg-martinique"
      onClick={onClick}
    >
      {icon}
      <span className="flex-1 ml-3 whitespace-nowrap">{name}</span>
    </div>
  );
};

const SidebarButtons = ({ navigateHome, isMobile }: SidebarButtonsProps) => {
  return (
    <div className={classNames('space-y-3 mt-8', isMobile && 'mt-10')}>
      <SidebarButton
        name="Meteo"
        icon={
          <IoPartlySunnyOutline
            size={30}
            className="text-zinc-900 dark:text-zinc-50"
          />
        }
        onClick={navigateHome}
      />
      <SidebarButton
        name="Prévisions"
        icon={
          <IoCalendarOutline
            size={30}
            className="text-zinc-900 dark:text-zinc-50"
          />
        }
        onClick={navigateHome}
      />
    </div>
  );
};

export default SidebarButtons;
