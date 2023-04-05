import React from 'react';

type CustomFormErrorMessageProps = {
  errorMessage: string;
};

const CustomFormErrorMessage: React.FC<CustomFormErrorMessageProps> = ({
  errorMessage,
}) => {
  return (
    <div className="pb-3">
      <span className="text-red-600 font-normal">{errorMessage}</span>
    </div>
  );
};

export default CustomFormErrorMessage;
