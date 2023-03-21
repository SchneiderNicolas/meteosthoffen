import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Background from '../components/containers/Background';
import Sidebar from '../components/sidebar/Sidebar';

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <>
      <div className="hidden">
        <Sidebar />
      </div>
      <Background>
        <section className="flex items-center h-screen p-12">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
              <h2 className="mb-8 font-extrabold text-9xl text-zinc-900 dark:text-zinc-50 transition-none">
                <span className="sr-only">Error</span>404
              </h2>
              <p className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50 transition-none leading-snug">
                {t('404.sorry')}
              </p>
              <p className="mt-8 mb-12 text-zinc-900 dark:text-zinc-50 transition-none">
                {t('404.redirect')}
              </p>
              <button
                type="submit"
                className="px-8 py-3 font-semibold text-white rounded-lg bg-chardonnay dark:bg-paua hover:bg-opacity-70 dark:hover:bg-opacity-70"
                onClick={() => navigate('/')}
              >
                {t('404.button')}
              </button>
            </div>
          </div>
        </section>
      </Background>
    </>
  );
};

export default NotFound;
