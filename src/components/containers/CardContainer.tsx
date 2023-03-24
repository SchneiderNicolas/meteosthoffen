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
    <div className="w-full p-2 dark:bg-black-700 bg-slate-50 opacity-80 rounded-lg">
      <div className="ml-2 flex items-center mb-1">
        {title && (
          <>
            {icon}
            <span
              className={classNames(
                'text-sm uppercase text-zinc-900 dark:text-zinc-300',
                icon && 'ml-2'
              )}
            >
              {t(title)}
            </span>
          </>
        )}
      </div>
      <hr className="mb-2 border-zinc-900 dark:border-zinc-300 rounded" />
      {children}
    </div>
  );
};

export default CardContainer;
