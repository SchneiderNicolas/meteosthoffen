import React from 'react';
import { IoClose } from 'react-icons/io5';

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
    <div className="flex justify-between items-center">
      <button className="px-4 py-2 rounded-lg" onClick={navigateHome}>
        <span className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">
          MeteOsthoffen
        </span>
      </button>
      {isMobile && (
        <IoClose
          className="p-2 text-sm text-zinc-900 dark:text-zinc-50 rounded-lg"
          onClick={toggle}
          size={50}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
