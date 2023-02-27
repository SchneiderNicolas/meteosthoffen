import classNames from 'classnames';
import React, { useState } from 'react';
import './switchTheme.css';

type SidebarSwitchProps = {
  colorTheme: string;
  setTheme: React.Dispatch<any>;
};

const SidebarSwitch = ({ colorTheme, setTheme }: SidebarSwitchProps) => {
  const [darkMode, setDarkMode] = useState(
    colorTheme === 'light' ? true : false
  );
  const [isActive, setActive] = useState(darkMode);

  const toggleClass = () => {
    setActive(!isActive);
  };

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(true);
    toggleClass();
  };

  return (
    <div>
      <div
        onClick={toggleDarkMode}
        className={classNames(
          'toggle-theme relative rounded-full transition-all duration-500 ease-in-out cursor-pointer',
          isActive ? 'bg-paua' : 'bg-chardonnay'
        )}
      >
        <div
          className={classNames(
            'moon bg-paua absolute block rounded-full transition-all duration-500 ease-in-out',
            !isActive && 'sun'
          )}
        ></div>
      </div>
    </div>
  );
};

export default SidebarSwitch;
