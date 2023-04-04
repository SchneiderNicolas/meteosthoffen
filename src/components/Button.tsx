import React, { ComponentProps, ReactNode } from 'react';
import classNames from 'classnames';

type ButtonProps = ComponentProps<'button'> & {
  label?: string;
  labelClassName?: string;
  variant?: 'text' | 'contained';
  children?: ReactNode;
};

const Button = ({
  onClick,
  className,
  variant = 'text',
  type = 'button',
  label,
  labelClassName,
  style,
  children,
  ...props
}: ButtonProps) => {
  return (
    <>
      {label && <label className={labelClassName}>{label}</label>}
      <button
        className={classNames(
          'font-semibold text-white py-2 px-4',
          {
            'rounded-lg bg-chardonnay dark:bg-paua hover:bg-opacity-70 dark:hover:bg-opacity-70':
              variant === 'contained',
          },
          className
        )}
        style={style}
        type={type}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
