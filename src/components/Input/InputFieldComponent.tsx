import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelClassName?: string;
  inputClassName?: string;
}

const InputFieldComponent: React.FC<InputProps> = ({
  label,
  labelClassName,
  inputClassName,
  ...rest
}) => {
  return (
    <div className="mt-4">
      <label
        className={clsx(
          labelClassName === undefined || null
            ? "block text-sm font-bold mb-2 text-tint-600"
            : labelClassName
        )}
      >
        {label}
      </label>
      <input
        {...rest}
        className={clsx(
          inputClassName === undefined || null
            ? "border rounded w-full py-2 px-3 text-gray-500"
            : inputClassName
        )}
      />
    </div>
  );
};

export default InputFieldComponent;
export type { InputProps };
