import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { IoGlobeOutline, IoCheckmarkCircleSharp } from 'react-icons/io5';
import Flag from 'react-world-flags';

const Tooltip = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    if (location.pathname === '/contact') {
      window.location.reload();
    }
  };

  return (
    <div className="relative flex items-center group">
      <div className="absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex cursor-pointer">
        <div className="relative z-10 p-2 space-y-2 w-28 bg-chardonnay dark:bg-paua rounded-t-md text-zinc-900 dark:text-zinc-50">
          <div onClick={() => setLanguage('de')} className="flex items-center">
            {i18n.language === 'de' ? (
              <IoCheckmarkCircleSharp
                className="text-sm text-zinc-900 dark:text-zinc-50 rounded-lg transition-none"
                size={20}
              />
            ) : (
              <Flag code={'DE'} className="rounded-sm w-6" />
            )}
            <span className="ml-2 hover:font-bold">Deutsch</span>
          </div>
          <div onClick={() => setLanguage('en')} className="flex items-center">
            {i18n.language === 'en' ? (
              <IoCheckmarkCircleSharp
                className="text-sm text-zinc-900 dark:text-zinc-50 rounded-lg transition-none"
                size={20}
              />
            ) : (
              <Flag code={'GB'} className="rounded-sm w-6" />
            )}
            <span className="ml-2 hover:font-bold">English</span>
          </div>
          <div onClick={() => setLanguage('es')} className="flex items-center">
            {i18n.language === 'es' ? (
              <IoCheckmarkCircleSharp
                className="text-sm text-zinc-900 dark:text-zinc-50 rounded-lg transition-none"
                size={20}
              />
            ) : (
              <Flag code={'ES'} className="rounded-sm w-6" />
            )}
            <span className="ml-2 hover:font-bold">Español</span>
          </div>
          <div onClick={() => setLanguage('fr')} className="flex items-center">
            {i18n.language === 'fr' ? (
              <IoCheckmarkCircleSharp
                className="text-sm text-zinc-900 dark:text-zinc-50 rounded-lg transition-none"
                size={20}
              />
            ) : (
              <Flag code={'FR'} className="rounded-sm w-6" />
            )}
            <span className="ml-2 hover:font-bold">Français</span>
          </div>
        </div>
        <div className="w-full -mb-1 bg-chardonnay dark:bg-paua" />
      </div>
    </div>
  );
};

const SidebarLanguageSelector = () => {
  const { i18n } = useTranslation();

  const getLanguage = () => {
    switch (i18n.language) {
      case 'fr':
        return 'Français';
      case 'en':
        return 'English';
      case 'de':
        return 'Deutsch';
      case 'es':
        return 'Español';
      default:
        return 'Français';
    }
  };

  return (
    <div className="flex items-center w-28 hover:bg-chardonnay dark:hover:bg-paua pr-3 hover:rounded-b-xl group transition-none">
      <Tooltip></Tooltip>
      <IoGlobeOutline
        className="px-2 py-0 text-sm text-zinc-900 dark:text-zinc-50 dark:group-hover:text-oyster rounded-lg transition-none"
        size={40}
      />
      <div className="text-zinc-900 dark:text-zinc-50 dark:group-hover:text-oyster">
        {getLanguage()}
      </div>
    </div>
  );
};

export default SidebarLanguageSelector;
