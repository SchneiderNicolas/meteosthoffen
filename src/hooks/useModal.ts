import { useState, useEffect } from 'react';

export const useModal = () => {
  const [isOpen, setisOpen] = useState(false);

  const toggle = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!isOpen) {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return {
    isOpen,
    toggle,
  };
};
