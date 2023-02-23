import React, { createContext, ReactNode, useEffect, useState } from 'react';
import classNames from 'classnames';
import './switchTheme.css';
import { IoMenu } from 'react-icons/io5';
import { useResponsive } from '../../hooks/useResponsive';
import { useSideBar } from '../../hooks/useSideBar';
import SidebarHeader from './SidebarHeader';
import SidebarButtons from './SidebarButtons';

import SidebarSwitch from './SidebarSwitch';
import { useTheme } from '../../hooks/useTheme';

type SidebarProps = {
  children?: ReactNode;
};

export const ThemeContext = createContext(null);

const Sidebar = ({ children }: SidebarProps) => {
  const { isOpen, toggle } = useSideBar();
  const { isMobile } = useResponsive();
  const [themeProvider, setThemeProvider] = useState(localStorage.theme);
  const { colorTheme, setTheme } = useTheme();

  useEffect(() => {
    setThemeProvider(localStorage.theme);
  }, [colorTheme]);

  return (
    <ThemeContext.Provider value={themeProvider}>
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
          <div className="flex flex-col h-full px-4 py-4 overflow-y-auto bg-zinc-50 dark:bg-zinc-800">
            <SidebarHeader
              navigateHome={() => console.log('/')}
              isMobile={isMobile}
              toggle={toggle}
            />
            <SidebarButtons
              navigateHome={() => console.log('/')}
              isMobile={isMobile}
            />
            <SidebarSwitch colorTheme={colorTheme} setTheme={setTheme} />
          </div>
        </aside>
        <div className="md:ml-60 bg-white">{children}</div>
      </nav>
    </ThemeContext.Provider>
  );
};

export default Sidebar;
