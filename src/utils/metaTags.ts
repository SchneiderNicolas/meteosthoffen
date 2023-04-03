import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MetaTags: React.FC = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const updateMetaTags = () => {
      document.documentElement.setAttribute('lang', i18n.language);

      document.title = t('title');
      const metaDescription = document.querySelector(
        'meta[name="description"]'
      );
      if (metaDescription) {
        metaDescription.setAttribute('content', t('description'));
      }
    };

    updateMetaTags();

    i18n.on('languageChanged', updateMetaTags);

    return () => {
      i18n.off('languageChanged', updateMetaTags);
    };
  }, [t, i18n]);

  return null;
};

export default MetaTags;
