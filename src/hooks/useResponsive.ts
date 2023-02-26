import { useMediaQuery } from 'react-responsive';

export const useResponsive = () => {
  const isDesktopOrTablet = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 764 });
  const isPhone = useMediaQuery({ maxWidth: 640 });

  return {
    isDesktopOrTablet,
    isMobile,
    isPhone,
  };
};
