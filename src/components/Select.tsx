import React, { ChangeEvent } from 'react';
import classNames from 'classnames';
import shortid from 'shortid';

type SelectProps<T> = {
  label?: string;
  labelClassName?: string;
  placeholder?: string;
  className?: string;
  options?: T[];
  displayEmpty?: boolean;
  displayEmptyText?: string;
  defaultValue?: string | ReadonlyArray<string> | number | undefined;
  selectedValue?: string | ReadonlyArray<string> | number | undefined;
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  renderOptionValueFn?: (
    option: T
  ) => string | ReadonlyArray<string> | number | undefined;
  renderOptionDisplayFn?: (
    option: T
  ) => string | ReadonlyArray<string> | number | undefined;
};

const Select = <T,>({
  label,
  labelClassName,
  className,
  placeholder,
  displayEmpty = false,
  defaultValue,
  selectedValue,
  displayEmptyText,
  options,
  onChange,
  renderOptionValueFn,
  renderOptionDisplayFn,
}: SelectProps<T>) => {
  const renderOptionValue = (
    option: T
  ): string | ReadonlyArray<string> | number | undefined => {
    if (renderOptionValueFn) {
      return renderOptionValueFn(option);
    }

    return option as unknown as
      | string
      | ReadonlyArray<string>
      | number
      | undefined;
  };

  const renderOptionDisplay = (
    option: T
  ): string | ReadonlyArray<string> | number | undefined => {
    if (renderOptionDisplayFn) {
      return renderOptionDisplayFn(option);
    }

    return option as unknown as
      | string
      | ReadonlyArray<string>
      | number
      | undefined;
  };

  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      <select
        onChange={onChange}
        placeholder={placeholder}
        className={classNames('p-2 text-zinc-900 dark:text-zinc-50', className)}
        value={selectedValue}
      >
        {displayEmpty && (
          <option
            value={defaultValue}
            className="text-zinc-900 dark:text-zinc-50 transition-none"
          >
            {displayEmptyText}
          </option>
        )}
        {options?.map((option) => (
          <option
            key={shortid()}
            value={renderOptionValue(option)}
            className="text-zinc-900 dark:text-zinc-50"
          >
            {renderOptionDisplay(option)}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
