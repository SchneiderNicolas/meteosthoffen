import React, { Fragment, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
  IItemConfigList,
  IConfig,
} from '../../constants/interfaces/ICustomFormConfig.interface';
import Button from '../Button';
import CustomFormCheckbox from './CustomFormCheckbox';
import CustomFormCustomList from './CustomFormCustomList';
import CustomFormEmail from './CustomFormEmail';
import CustomFormErrorMessage from './CustomFormErrorMessage';
import CustomFormInput from './CustomFormInput';
import CustomFormModal from './CustomFormModal';
import CustomFormRadio from './CustomFormRadio';
import CustomFormText from './CustomFormText';
import CustomFormInputTextArea from './CustomFormTextArea';

export type CustomFormProps<T = any> = {
  itemConfig: IItemConfigList;
  value: T;
  onChange: (value: T) => void;
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
      return (
        <CustomFormInput
          itemConfig={itemConfig}
          value={value}
          onChange={onChange}
        />
      );
    case 'CHECKBOX':
      return (
        <CustomFormCheckbox
          itemConfig={itemConfig}
          value={value}
          onChange={onChange}
        />
      );
    case 'CUSTOM_LIST':
      return (
        <CustomFormCustomList
          itemConfig={itemConfig}
          value={value}
          onChange={onChange}
        />
      );
    case 'RADIO':
      return (
        <CustomFormRadio
          itemConfig={itemConfig}
          value={value}
          onChange={onChange}
        />
      );
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
  const [showModalFail, setShowModalFail] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();
  const onClickCloseModal = () => {
    setShowModalSucess(false);
    setShowModalFail(false);
  };

  const onSubmit = (data: Record<string, unknown>) => {
    setLoading(true);
    let receivers: string[] = [];
    config.customContactObject.forEach((e) => {
      if (t(e.label) === selectedObject) {
        receivers = e.receivers;
      }
    });
    fetch('https://api.meteosthoffen.fr/sendEmail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formValues: data,
        receivers: receivers,
        selectedObject: selectedObject,
        recipient: data.Email,
      }),
    })
      .then((response) => {
        if (response.status === 200) {
          setShowModalSucess(true);
        } else {
          setShowModalFail(true);
        }
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setShowModalFail(true);
      })
      .finally(() => {
        reset();
        setLoading(false);
      });
  };

  const isDisplayed = (itemConfig: IItemConfigList) => {
    let displayField = false;
    if (itemConfig.allObjects) {
      displayField = true;
    } else {
      itemConfig.customObjects.forEach((element) => {
        if (t(element) === selectedObject) {
          displayField = true;
        }
      });
    }
    return displayField;
  };

  const defaultValueSpecialCase = (itemConfig: IItemConfigList) => {
    if (itemConfig.type === 'CUSTOM_LIST') {
      return itemConfig.listField ? t(itemConfig.listField[0]) : '';
    } else if (itemConfig.type === 'CHECKBOX') {
      return false;
    } else {
      return '';
    }
  };

  const formInputs = itemConfigList.map((element) => {
    if (isDisplayed(element)) {
      if (element.type === 'TEXT') {
        return (
          <CustomFormText
            key={t(element.label).replace("'", ' ')}
            itemConfig={element}
          />
        );
      } else if (element.type === 'EMAIL') {
        return (
          <CustomFormEmail
            key={'customEmail'}
            control={control}
            element={element}
            errors={errors}
          />
        );
      } else {
        return (
          <Fragment key={t(element.label).replace("'", ' ')}>
            <Controller
              name={t(element.label).replace("'", ' ')}
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
            {errors[t(element.label).replace("'", ' ')] && (
              <CustomFormErrorMessage errorMessage={t('form.error.fields')} />
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
            disabled={loading}
          >
            {t(config.buttonSubmitLabel)}
          </Button>
        </div>
      </form>
      {(showModalSucess || showModalFail) && (
        <CustomFormModal
          onClickCloseModal={onClickCloseModal}
          error={showModalFail}
        />
      )}
    </>
  );
};

export default CustomFormController;
