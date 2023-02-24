import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

type SidebarHeaderProps = {
  navigateHome: () => void;
  isMobile: boolean;
  toggle?: () => void;
};

const SidebarHeader = ({
  navigateHome,
  isMobile,
  toggle,
}: SidebarHeaderProps) => {
  return (
    <div className="flex p-2 justify-center">
      <button
        className="bg-rajah dark:bg-martinique px-4 py-2 rounded-lg"
        onClick={navigateHome}
      >
        <span className="text-2xl font-extrabold text-zinc-50">
          MeteOsthoffen
        </span>
      </button>
      {isMobile && (
        <IoArrowBack
          className="absolute right-0 mr-4"
          onClick={toggle}
          size={30}
          color={'#262626'}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
