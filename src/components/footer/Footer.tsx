import React from 'react';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '../../hooks/useResponsive';

const Footer = () => {
  const { isPhone } = useResponsive();
  const { t } = useTranslation();
  return (
    <div className="flex justify-center items-center">
      <div className="w-full xl:w-256 px-0 sm:p-4 lg:p-8 xl:p-0">
        <footer className="pb-8 sm:pb-4 xl:pb-10 bg-white dark:bg-black-800">
          <hr className="border-neutral-400 sm:mx-auto pb-8" />
          <div className="block text-center space-x-4 text-neutral-400 pb-4">
            <a href="/contact" className="hover:underline">
              {t('footer.contact')}
            </a>
            <span className="cursor-default"> | </span>
            <a href="/terms" className="hover:underline">
              {t('footer.terms')}
            </a>
            <span className="cursor-default"> | </span>
            <a href="/privacy" className="hover:underline">
              {t('footer.privacy')}
            </a>
            {isPhone ? <br /> : <span className="cursor-default"> | </span>}
            <a href="/privacy" className="hover:underline">
              {t('footer.cookies')}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center text-sm text-neutral-400">
            <span className="">
              © 2023 MeteOsthoffen{!isPhone && <span>&nbsp;</span>}
            </span>
            <span>
              {t('footer.by') + ' '}
              <a
                href="https://nicolas-schneider.fr/"
                className="hover:underline"
              >
                Nicolas Schneider
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
