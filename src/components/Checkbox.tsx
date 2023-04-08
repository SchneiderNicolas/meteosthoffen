import React, { ChangeEvent, useEffect, useRef, useState } from 'react';

type CheckboxProps = {
  name: string;
  checked: boolean;
  onCheck?: () => void;
  onUncheck?: () => void;
  onClick?: () => void;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  boxRight?: boolean;
};

const CheckBox = ({
  name,
  checked,
  onClick,
  onChange,
  onCheck,
  onUncheck,
  boxRight,
}: CheckboxProps) => {
  const checkbox = useRef<HTMLInputElement>(null);
  const [check, setCheck] = useState(checked ?? false);

  const click = () => {
    if (checkbox.current) {
      setCheck(!checkbox.current.checked);
      if (!checkbox.current.checked) {
        onCheck?.();
      } else {
        onUncheck?.();
      }

      onClick?.();
    }
  };

  const change = (event: ChangeEvent<HTMLInputElement>) => {
    if (checkbox.current) {
      setCheck(checkbox.current.checked);
      if (checkbox.current.checked) {
        onCheck?.();
      } else {
        onUncheck?.();
      }

      onChange?.(event);
    }
  };

  useEffect(() => {
    setCheck(checked);
  }, [checked]);

  return (
    <div className="m-2 flex items-center cursor-pointer" onClick={click}>
      {!boxRight && (
        <label className="m-0 mr-2 text-zinc-900 dark:text-white">{name}</label>
      )}
      <input
        ref={checkbox}
        type="checkbox"
        name={name}
        checked={check}
        onChange={change}
        className="accent-chardonnay dark:accent-paua"
      />
      {boxRight && (
        <label className="m-0 ml-2 text-zinc-900 dark:text-white">{name}</label>
      )}
    </div>
  );
};

export default CheckBox;
