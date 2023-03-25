import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type CardContainerProps = {
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
};

const CardContainer = ({ children, title, icon }: CardContainerProps) => {
  const { t } = useTranslation();
  return (
    <div className="w-full py-3 px-4 dark:bg-black-700 bg-peach opacity-80 rounded-lg">
      <div className="flex items-center mb-2">
        {title && (
          <>
            {icon}
            <span
              className={classNames(
                'text-sm uppercase text-zinc-900 dark:text-zinc-200',
                icon && 'ml-2'
              )}
            >
              {t(title)}
            </span>
          </>
        )}
      </div>
      <hr className="mb-3 border-zinc-900 dark:border-zinc-200 rounded" />
      {children}
    </div>
  );
};

export default CardContainer;
