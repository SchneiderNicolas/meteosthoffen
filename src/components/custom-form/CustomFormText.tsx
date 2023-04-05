import React from 'react';
import { useTranslation } from 'react-i18next';
import { IItemConfigList } from '../../constants/interfaces/ICustomFormConfig.interface';

type CustomFormTextProps = {
  itemConfig: IItemConfigList;
};

const CustomFormText = ({ itemConfig }: CustomFormTextProps) => {
  const { t } = useTranslation();
  return (
    <div className="py-3">
      <span className="text-zinc-900 dark:text-white font-medium">
        {t(itemConfig.label)}
      </span>
    </div>
  );
};

export default CustomFormText;
