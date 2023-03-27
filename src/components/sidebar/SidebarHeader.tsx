import React from 'react';
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type SidebarHeaderProps = {
  isMobile: boolean;
  toggle?: () => void;
};

const SidebarHeader = ({ isMobile, toggle }: SidebarHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex md:justify-center justify-between items-center">
      <button
        className="py-4 md:px-0 px-2 rounded-lg"
        onClick={() => navigate('/')}
      >
        <span className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-50">
          Mete
          <span className="font-Stretch transition-none">O</span>
          sthoffen
        </span>
      </button>
      {isMobile && (
        <IoClose
          className="p-2 text-sm text-zinc-900 dark:text-zinc-50 rounded-lg transition-none"
          onClick={toggle}
          size={50}
        />
      )}
    </div>
  );
};

export default SidebarHeader;
