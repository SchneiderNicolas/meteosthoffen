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
import SidebarLanguageSelector from './SidebarLanguageSelector';

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
      <nav className="bg-white dark:bg-black-800">
        {!isOpen && (
          <IoMenu
            className="absolute left-0 top-0 z-50 p-2 mt-3 ml-3 text-sm text-zinc-900 dark:text-zinc-50 rounded-lg md:hidden"
            onClick={toggle}
            size={50}
          />
        )}
        <aside
          id="default-sidebar"
          className={classNames(
            'fixed top-0 left-0 z-40 md:w-60 w-80 h-screen transition-transform md:translate-x-0',
            !isOpen && '-translate-x-full'
          )}
          aria-label="Sidebar"
        >
          <div className="flex flex-col h-full px-4 py-4 overflow-y-auto bg-zinc-50 dark:bg-black-700 transition-colors duration-300">
            <SidebarHeader
              navigateHome={() => console.log('/')}
              isMobile={isMobile}
              toggle={toggle}
            />
            <SidebarButtons
              navigateHome={() => console.log('/')}
              isMobile={isMobile}
            />
            <div className="flex mt-auto justify-between mb-4 pr-20 md:pr-0">
              <SidebarLanguageSelector />
              <SidebarSwitch colorTheme={colorTheme} setTheme={setTheme} />
            </div>
          </div>
        </aside>
        {isOpen ? (
          <div onClick={toggle} className="md:ml-60">
            {children}
          </div>
        ) : (
          <div className="md:ml-60">{children}</div>
        )}
      </nav>
    </ThemeContext.Provider>
  );
};

export default Sidebar;
