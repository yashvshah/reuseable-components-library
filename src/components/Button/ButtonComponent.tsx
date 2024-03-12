import clsx from "clsx";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnClassName?: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({
  type,
  children,
  btnClassName,
  disabled,
  ...rest
}) => {
  return (
    <div className="my-4">
      <button
        disabled={disabled}
        type={type}
        className={clsx(
          btnClassName === undefined || null
            ? "bg-blue-950 text-white"
            : btnClassName
        )}
        {...rest}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonComponent;
export type { ButtonProps };
