import React, { FunctionComponent } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button';

type CustomFormModalProps = {
  onClickCloseModal: () => void;
  error: boolean;
};

const CustomFormModal: FunctionComponent<CustomFormModalProps> = ({
  onClickCloseModal,
  error,
}) => {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 transition-opacity w-screen h-screen">
          <div className="absolute inset-0 bg-zinc-50 dark:bg-black-700 opacity-75"></div>
        </div>
        <div className="relative md:ml-60 ml-0 w-full max-w-md h-auto sm:p-0 p-6">
          <div className="relative bg-zinc-50 dark:bg-black-700 rounded-lg shadow">
            <button
              type="button"
              className="absolute top-3 right-2.5 text-zinc-900 dark:text-white bg-transparent hover:bg-chardonnay hover:dark:bg-paua rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="authentication-modal"
              onClick={onClickCloseModal}
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <div className="py-6 px-6 lg:px-8">
              <div className="flex justify-center mb-8 text-2xl font-semibold text-zinc-900 dark:text-white">
                {error ? t('form.error') : t('form.success')}
              </div>
              <div className="flex text-center justify-center mb-4 text-md text-zinc-900 dark:text-white">
                {error ? t('form.modal.error') : t('form.modal.success')}
              </div>
              <div className="pb-8 pt-8 flex justify-center">
                <Button
                  type="submit"
                  variant="contained"
                  className="uppercase sm:px-36 px-16 py-3"
                  onClick={onClickCloseModal}
                >
                  {t('form.continue')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomFormModal;
