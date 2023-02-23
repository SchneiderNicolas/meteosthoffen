import React, { ReactNode, useState } from 'react';
import classNames from 'classnames';
import './switchTheme.css';
import { IoMenu } from 'react-icons/io5';
import { useResponsive } from '../../hooks/useResponsive';
import { useSideBar } from '../../hooks/useSideBar';
import SidebarHeader from './SidebarHeader';
import SidebarButtons from './SidebarButtons';
import { useTheme } from '../../hooks/useTheme';

type SidebarProps = {
  children?: ReactNode;
};

const Sidebar = ({ children }: SidebarProps) => {
  const { isOpen, toggle } = useSideBar();
  const { isMobile } = useResponsive();
  const { colorTheme, setTheme } = useTheme();
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );

  const [isActive, setActive] = useState(darkMode);

  const toggleClass = () => {
    setActive(!isActive);
  };

  console.log(darkMode);

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(true);
    toggleClass();
  };

  return (
    <nav>
      <IoMenu
        className="inline-flex items-center p-2 mt-3 ml-3 text-sm rounded-lg md:hidden"
        onClick={toggle}
        size={50}
        color={'#262626'}
      />
      <aside
        id="default-sidebar"
        className={classNames(
          'fixed top-0 left-0 z-40 w-60 h-screen transition-transform md:translate-x-0',
          !isOpen && '-translate-x-full'
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-zinc-50 dark:bg-zinc-800">
          <SidebarHeader
            navigateHome={toggleDarkMode}
            isMobile={isMobile}
            toggle={toggle}
          />
          <SidebarButtons navigateHome={toggleDarkMode} isMobile={isMobile} />
          <div
            onClick={toggleDarkMode}
            className={isActive ? 'tdnn' : 'tdnn day'}
          >
            <div className={isActive ? 'moon' : 'moon sun'}></div>
          </div>
        </div>
      </aside>
      <div className="md:ml-60 bg-white">{children}</div>
    </nav>
  );
};

export default Sidebar;
