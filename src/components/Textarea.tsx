import React, { ChangeEvent, ReactNode } from 'react';
import classNames from 'classnames';

export type TextAreaProps = {
  value?: string | number;
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  inputClassName?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
};

const Textarea = ({
  value,
  label,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  startIcon,
  endIcon,
  onChange,
}: TextAreaProps) => {
  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      <div className={classNames('flex items-center bg-white', className)}>
        {startIcon}
        <textarea
          className={classNames(
            'w-full text-zinc-900 dark:text-white px-2',
            inputClassName
          )}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        {endIcon}
      </div>
    </>
  );
};

export default Textarea;
