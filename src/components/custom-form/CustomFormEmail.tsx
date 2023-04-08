import React, { Fragment } from 'react';
import { Controller, useWatch } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { IItemConfigList } from '../../constants/interfaces/ICustomFormConfig.interface';
import Input from '../Input';
import { CustomFormProps } from './CustomFormController';
import CustomFormErrorMessage from './CustomFormErrorMessage';

const CustomFormTypeEmailConfirm = ({
  itemConfig,
  value,
  onChange,
}: CustomFormProps<string>) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-4">
        <Input
          placeholder={(
            t('form.confirm.email') + (itemConfig.required ? '*' : '')
          )?.toUpperCase()}
          className="w-full p-0"
          inputClassName="focus:outline-none border-2 border-white dark:border-neutral-800 focus:border-chardonnay focus:dark:border-paua focus:bg-zinc-50 focus:dark:bg-neutral-700 bg-white dark:bg-neutral-800 p-2 placeholder-zinc-900 dark:placeholder-zinc-50 placeholder-shown:text-sm placeholder-shown:font-medium rounded-none text-sm font-medium"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
          type="email"
          value={value}
        />
      </div>
    </>
  );
};

const CustomFormTypeEmail = ({
  itemConfig,
  value,
  onChange,
}: CustomFormProps<string>) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="mb-4">
        <Input
          placeholder={(
            t(itemConfig.label) + (itemConfig.required ? '*' : '')
          )?.toUpperCase()}
          className="w-full p-0"
          inputClassName="focus:outline-none border-2 border-white dark:border-neutral-800 focus:border-chardonnay focus:dark:border-paua focus:bg-zinc-50 focus:dark:bg-neutral-700 bg-white dark:bg-neutral-800 p-2 placeholder-zinc-900 dark:placeholder-zinc-50 placeholder-shown:text-sm placeholder-shown:font-medium rounded-none text-sm font-medium"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChange(e.target.value);
          }}
          type="email"
          value={value}
        />
      </div>
    </>
  );
};

type CustomFormEmailProps = {
  control: any;
  element: IItemConfigList;
  errors: any;
};

const CustomFormEmail = ({
  control,
  element,
  errors,
}: CustomFormEmailProps) => {
  const email = useWatch({
    control,
    name: 'Email',
    defaultValue: '',
  });
  const { t } = useTranslation();
  const emailConfirmation = useWatch({
    control,
    name: 'EmailConfirmation',
    defaultValue: '',
  });
  return (
    <Fragment key="Email">
      <Controller
        name="Email"
        control={control}
        rules={{
          validate: (value) => {
            return value === emailConfirmation ? true : 'Not the same';
          },
          required: true,
        }}
        defaultValue=""
        render={({ field }) => (
          <CustomFormTypeEmail
            itemConfig={element}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.Email?.type === 'validate' && (
        <CustomFormErrorMessage errorMessage={t('form.error.email')} />
      )}
      {errors.Email?.type === 'required' && (
        <CustomFormErrorMessage errorMessage={t('form.error.fields')} />
      )}
      <Controller
        name="EmailConfirmation"
        control={control}
        rules={{
          validate: (value) => {
            return value === email ? true : 'Not the same';
          },
          required: true,
        }}
        defaultValue=""
        render={({ field }) => (
          <CustomFormTypeEmailConfirm
            itemConfig={element}
            value={field.value}
            onChange={field.onChange}
          />
        )}
      />
      {errors.EmailConfirmation?.type === 'validate' && (
        <CustomFormErrorMessage errorMessage={t('form.error.email')} />
      )}
      {errors.EmailConfirmation?.type === 'required' && (
        <CustomFormErrorMessage errorMessage={t('form.error.fields')} />
      )}
    </Fragment>
  );
};

export default CustomFormEmail;
