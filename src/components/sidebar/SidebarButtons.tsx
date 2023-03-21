import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { IoPartlySunnyOutline, IoCalendarOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

type SidebarButtonsProps = {
  isMobile: boolean;
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

const SidebarButtons = ({ isMobile }: SidebarButtonsProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <div className={classNames('space-y-3 mt-4', isMobile && 'mt-6')}>
      <SidebarButton
        name={t('weather')}
        icon={
          <IoPartlySunnyOutline
            size={30}
            className="text-zinc-900 dark:text-zinc-50 transition-none dark:group-hover:text-oyster"
          />
        }
        onClick={() => navigate('/')}
      />
      <SidebarButton
        name={t('forecasts')}
        icon={
          <IoCalendarOutline
            size={30}
            className="text-zinc-900 dark:text-zinc-50 transition-none dark:group-hover:text-oyster"
          />
        }
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default SidebarButtons;
