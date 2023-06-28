import classNames from 'classnames';
import React, { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

type CardContainerProps = {
  children?: ReactNode;
  title?: string;
  icon?: ReactNode;
  square?: boolean;
};

const CardContainer = ({
  children,
  title,
  icon,
  square = false,
}: CardContainerProps) => {
  const { t } = useTranslation();
  return (
    <div
      className={`w-full py-3 px-2 sm:px-4 dark:bg-black-700 bg-peach opacity-80 rounded-lg ${
        square ? 'pb-full relative' : 'h-full'
      }`}
    >
      <div
        className={`flex flex-col ${square && 'absolute inset-0 p-2 sm:p-4'}`}
      >
        {title && (
          <div className="flex-none">
            <div className="flex items-center mb-2">
              {icon}
              <span
                className={classNames(
                  'text-sm uppercase text-zinc-900 dark:text-zinc-200',
                  icon && 'ml-2'
                )}
              >
                {t(title)}
              </span>
            </div>
            <hr className="mb-3 border-zinc-900 dark:border-zinc-200 rounded" />
          </div>
        )}
        <div className={`flex-grow overflow-auto ${square && 'm-0 sm:m-2'}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
