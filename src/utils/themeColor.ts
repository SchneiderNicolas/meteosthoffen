import { useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeColor = () => {
  const { colorTheme } = useTheme();

  useEffect(() => {
    const updateThemeColor = (isDarkMode: boolean) => {
      const themeColor = isDarkMode ? '#ffffff' : '#111111';
      let metaThemeColor = document.querySelector(
        'meta[name="theme-color"]'
      ) as HTMLMetaElement;

      if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.name = 'theme-color';
        document.head.appendChild(metaThemeColor);
      }

      metaThemeColor.setAttribute('content', themeColor);
    };

    const handleThemeChanged = (event: CustomEvent) => {
      updateThemeColor(event.detail.colorTheme === 'dark');
    };

    updateThemeColor(colorTheme === 'dark');
    window.addEventListener(
      'theme-changed',
      handleThemeChanged as EventListener
    );

    return () => {
      window.removeEventListener(
        'theme-changed',
        handleThemeChanged as EventListener
      );
    };
  }, [colorTheme]);

  return null;
};

export default ThemeColor;
