import React from "react";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  className,
  children,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`py-2 px-4 rounded bg-blue-500 text-white ${className}`}
  >
    {children}
  </button>
);
