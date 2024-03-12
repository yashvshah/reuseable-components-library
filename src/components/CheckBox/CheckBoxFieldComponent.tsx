import clsx from "clsx";
import React from "react";

interface CheckBoxFieldProps {
  label: React.ReactNode;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  labelClassName?: string;
  inputClassName?: string;
}

const CheckBoxFieldComponent: React.FC<CheckBoxFieldProps> = ({
  label,
  checked,
  onChange,
  labelClassName,
  inputClassName,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChange(isChecked);
  };
  return (
    <div>
      <div className="flex items-center">
        <input
          id="checked-checkbox"
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          className={clsx(
            inputClassName === undefined || null
              ? "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
              : inputClassName
          )}
        />
        <label
          className={clsx(
            labelClassName === undefined || null
              ? "ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              : labelClassName
          )}
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default CheckBoxFieldComponent;
export type { CheckBoxFieldProps };
