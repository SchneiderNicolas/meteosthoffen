import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../Input';
import { CustomFormProps } from './CustomFormController';

const CustomFormInput: React.FC<CustomFormProps<string>> = ({
  onChange,
  value,
  itemConfig,
}) => {
  const { t } = useTranslation();
  return (
    <div className="mb-4">
      <Input
        placeholder={(
          t(itemConfig.label) + (itemConfig.required ? '*' : '')
        )?.toUpperCase()}
        className="w-full p-0"
        inputClassName="focus:outline-none border-2 border-white dark:border-neutral-800 focus:border-chardonnay focus:dark:border-paua focus:bg-zinc-50 focus:dark:bg-neutral-700 bg-white dark:bg-neutral-800 p-2 placeholder-zinc-900 dark:placeholder-zinc-50 placeholder-shown:text-sm placeholder-shown:font-medium rounded-none text-sm font-medium"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          onChange(event.target.value)
        }
        value={value}
      />
    </div>
  );
};

export default CustomFormInput;
