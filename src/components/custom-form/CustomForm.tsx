import React, { ChangeEvent, useState } from 'react';
import CardContainer from '../containers/CardContainer';
import { IoMailOutline } from 'react-icons/io5';
import JSONconfig from '../../assets/customFormConfig.json';
import Select from '../Select';
import { useTranslation } from 'react-i18next';
import {
  IConfig,
  ICustomContactObject,
} from '../../constants/interfaces/ICustomFormConfig.interface';
import CustomFormController from './CustomFormController';

type CustomFormObjectProps = {
  config: IConfig;
  onChangeObject: (event: ChangeEvent<HTMLSelectElement>) => void;
  selectedObject: string;
};

const CustomFormObject = ({
  config,
  onChangeObject,
  selectedObject,
}: CustomFormObjectProps) => {
  const { customContactObject } = config;
  const { t } = useTranslation();
  const getObject = () => {
    const listObj: string[] = [];
    customContactObject.forEach((element: ICustomContactObject) =>
      listObj.push(t(element.label))
    );
    return listObj;
  };
  const listObject = getObject();

  return (
    <div className="mb-8 mt-4">
      <label>
        <span className="mt-4 uppercase text-sm font-medium text-zinc-900 dark:text-white">
          {t('form.object.reason')}
        </span>
        <span className="ml-3 font-semibold text-zinc-900 dark:text-white">
          *
        </span>
      </label>
      <Select
        className="mt-1 focus:outline-none border-2 border-white dark:border-neutral-800 focus:border-chardonnay focus:dark:border-paua focus:bg-zinc-50 focus:dark:bg-neutral-700 bg-white dark:bg-neutral-800 w-full font-normal rounded-none"
        options={listObject}
        selectedValue={selectedObject}
        onChange={onChangeObject}
      />
    </div>
  );
};

const CustomForm = () => {
  const { config } = JSONconfig;
  const { customContactObject } = config;
  const { t } = useTranslation();

  const [selectedObject, setSelectedObject] = useState(
    t(customContactObject[0].label)!
  );

  const getSelectedObjectKey = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedObject(e.target.value);
  };

  return (
    <CardContainer
      title="form.title"
      icon={
        <IoMailOutline className="transition-none text-zinc-900 dark:text-zinc-200" />
      }
    >
      <span className="uppercase text-sm text-zinc-900 dark:text-zinc-50 mt-5">
        {t('form.mandatory')}
      </span>
      <CustomFormObject
        config={config}
        onChangeObject={getSelectedObjectKey}
        selectedObject={selectedObject}
      />
      <CustomFormController config={config} selectedObject={selectedObject} />
    </CardContainer>
  );
};

export default CustomForm;
