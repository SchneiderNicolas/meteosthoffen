import classNames from 'classnames';
import React, {
  ChangeEvent,
  FocusEvent,
  HTMLInputTypeAttribute,
  MutableRefObject,
  ReactNode,
} from 'react';

export type InputProps = {
  value?: string | number;
  label?: string;
  type?: HTMLInputTypeAttribute;
  labelClassName?: string;
  placeholder?: string;
  inputClassName?: string;
  className?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  id?: string;
  inputRef?: MutableRefObject<HTMLInputElement>;
};

const Input = ({
  value,
  label,
  type,
  placeholder,
  className,
  labelClassName,
  inputClassName,
  startIcon,
  endIcon,
  onChange,
  onFocus,
  onBlur,
  id,
  inputRef,
}: InputProps) => {
  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      <div className={classNames('flex items-center bg-white', className)}>
        {startIcon}
        <input
          className={classNames(
            inputClassName,
            'w-full text-zinc-900 dark:text-white px-2'
          )}
          value={value}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onFocus={onFocus}
          id={id}
          ref={inputRef}
          onBlur={onBlur}
        />
        {endIcon}
      </div>
    </>
  );
};

export default Input;
