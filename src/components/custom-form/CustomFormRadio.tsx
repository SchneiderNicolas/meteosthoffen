import React from 'react';
import { useTranslation } from 'react-i18next';
import Radio from '../Radio';
import { CustomFormProps } from './CustomFormController';

const CustomFormRadio: React.FC<CustomFormProps<string>> = ({
  itemConfig,
  onChange,
  value,
}) => {
  const { t } = useTranslation();
  const getListRadio = () => {
    const listRadio: string[] = [];
    itemConfig?.listField?.forEach((element) => listRadio.push(t(element)));
    return listRadio;
  };
  const listRadio = getListRadio();

  const onChangeCheck = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div className="mb-4">
      <label>
        <span className="mt-4 uppercase text-sm font-medium text-zinc-900 dark:text-white">
          {t(itemConfig.label)}
        </span>
        {itemConfig?.required && (
          <span className="text-zinc-900 dark:text-white ml-3 font-semibold">
            *
          </span>
        )}
      </label>
      <div className="p-2">
        <Radio
          names={listRadio}
          onChange={onChangeCheck}
          checkedValue={value}
        />
      </div>
    </div>
  );
};

export default CustomFormRadio;
