import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Select from '../Select';
import { CustomFormProps } from './CustomFormController';

const CustomFormCustomList: React.FC<CustomFormProps<string>> = ({
  itemConfig,
  value,
  onChange,
}) => {
  const { t } = useTranslation();
  const getCustomListLabel = () => {
    const listLabel: string[] = [];
    itemConfig.listField?.forEach((element) => listLabel.push(t(element)));
    return listLabel;
  };
  const listLabel = getCustomListLabel();

  const onChangeValue = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="mb-4">
      <label>
        <span className="mt-4 uppercase text-sm font-medium text-zinc-900 dark:text-white">
          {t(itemConfig.label)}
        </span>
        {itemConfig?.required && (
          <span className="ml-3 font-semibold text-zinc-900 dark:text-white">
            *
          </span>
        )}
      </label>
      <Select
        className="mt-1 focus:outline-none border-2 border-white dark:border-neutral-800 focus:border-chardonnay focus:dark:border-paua focus:bg-zinc-50 focus:dark:bg-neutral-700 bg-white dark:bg-neutral-800 w-full font-medium rounded-none lg:text-sm text-xs"
        options={listLabel}
        selectedValue={value}
        onChange={onChangeValue}
      />
    </div>
  );
};

export default CustomFormCustomList;
