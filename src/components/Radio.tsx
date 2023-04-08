import classNames from 'classnames';
import React, { useState } from 'react';

type RadioProps = {
  names: string[];
  checkedValue?: string;
  onChange?: (arg0: string) => void;
};

const Radio = ({ names, onChange, checkedValue }: RadioProps) => {
  const [checked, setChecked] = useState(checkedValue);

  const change = (value: string) => {
    onChange?.(value);
    setChecked(value);
  };

  const radioButtons = names.map((value) => {
    return (
      <div className="mb-1" key={value}>
        <label
          className={classNames(
            'm-0 text-zinc-900 dark:text-white',
            checked === value ? 'font-extrabold' : ''
          )}
        >
          <input
            className="accent-chardonnay dark:accent-paua mr-2"
            type="radio"
            checked={checked === value}
            onChange={() => change(value)}
          />
          {value}
        </label>
      </div>
    );
  });

  return <>{radioButtons}</>;
};

export default Radio;
