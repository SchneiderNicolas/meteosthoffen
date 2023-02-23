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
    <div className="flex p-2">
      <button onClick={navigateHome}>
        <div>
          Mete<b>O</b>sthoffen
        </div>
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
