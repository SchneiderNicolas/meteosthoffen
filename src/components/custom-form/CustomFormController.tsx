import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  IItemConfigList,
  IConfig,
} from '../../constants/interfaces/ICustomFormConfig.interface';
import Button from '../Button';
import CustomFormInputTextArea from './CustomFormTextArea';

export type CustomFormProps = {
  itemConfig: IItemConfigList;
  value: string;
  onChange: (value: string) => void;
};

const CustomFormFieldFactory = ({
  value,
  onChange,
  itemConfig,
}: CustomFormProps) => {
  switch (itemConfig.type) {
    case 'INPUT_TEXT_AREA':
      return (
        <CustomFormInputTextArea
          itemConfig={itemConfig}
          value={value}
          onChange={onChange}
        />
      );
    case 'INPUT':
      return <div>input</div>;
    case 'CHECKBOX':
      return <div>CHECKBOX</div>;
    case 'CUSTOM_LIST':
      return <div>Custom list</div>;
    case 'RADIO':
      return <div>radio</div>;
    default:
      return <></>;
  }
};

type CustomFormControllerProps = {
  config: IConfig;
  selectedObject: string;
};

const CustomFormController = ({
  config,
  selectedObject,
}: CustomFormControllerProps) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { itemConfigList } = config;
  const [showModalSucess, setShowModalSucess] = useState(false);
  const onClickCloseModal = () => {
    setShowModalSucess(false);
  };
  console.log(onClickCloseModal);

  const onSubmit = (data: Record<string, unknown>) => {
    console.log(data);
    let receiver: string[] = [];
    config.customContactObject.forEach((e) => {
      if (e.label === selectedObject) {
        receiver = e.receivers;
      }
    });
    console.log(receiver);
    reset();
  };

  const isDisplayed = (itemConfig: IItemConfigList) => {
    let displayField = false;
    if (itemConfig.allObjects) {
      displayField = true;
    } else {
      itemConfig.customObjects.forEach((element) => {
        if (element === selectedObject) {
          displayField = true;
        }
      });
    }
    return displayField;
  };

  const defaultValueSpecialCase = (itemConfig: IItemConfigList) => {
    if (itemConfig.type === 'CUSTOM_LIST') {
      return itemConfig.listField ? itemConfig.listField[0] : '';
    } else if (itemConfig.type === 'CHECKBOX') {
      return false;
    } else {
      return '';
    }
  };

  const formInputs = itemConfigList.map((element) => {
    if (isDisplayed(element)) {
      if (element.type === 'TEXT') {
        return <div key={element.label.replace("'", ' ')}>text</div>;
      } else if (element.type === 'EMAIL') {
        return <div key={element.label.replace("'", ' ')}>EMAIL</div>;
      } else {
        return (
          <Fragment key={element.label.replace("'", ' ')}>
            <Controller
              name={element.label.replace("'", ' ')}
              control={control}
              rules={
                element.required ? { required: true } : { required: false }
              }
              defaultValue={defaultValueSpecialCase(element)}
              render={({ field }) => (
                <CustomFormFieldFactory
                  value={field.value}
                  onChange={field.onChange}
                  itemConfig={element}
                />
              )}
            />
            {errors[element.label.replace("'", ' ')] && (
              <div>ERROR MESSAGE</div>
            )}
          </Fragment>
        );
      }
    } else {
      return null;
    }
  });

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formInputs}
        <div className="pb-8 pt-8 flex justify-center">
          <Button
            type="submit"
            variant="contained"
            className="uppercase sm:px-36 px-16 py-3"
          >
            {config.buttonSubmitLabel}
          </Button>
        </div>
      </form>
      {showModalSucess && <div>SUCCESS MODAL</div>}
    </>
  );
};

export default CustomFormController;
