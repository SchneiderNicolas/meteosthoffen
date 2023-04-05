import React, { ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import CheckBox from '../Checkbox';
import { CustomFormProps } from './CustomFormController';

const CustomFormCheckbox: React.FC<CustomFormProps<boolean>> = ({
  onChange,
  value,
  itemConfig,
}) => {
  const { t } = useTranslation();
  const onChangeCheck = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <>
      <CheckBox
        name={t(itemConfig.label)}
        boxRight={true}
        onChange={onChangeCheck}
        checked={value}
      />
    </>
  );
};

export default CustomFormCheckbox;
