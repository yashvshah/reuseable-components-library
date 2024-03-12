import { clsx } from "clsx";
import React, { InputHTMLAttributes, ReactNode } from "react";

interface SearchInputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: ReactNode;
  placeholder: string;
  iconInputClassName?: string;
}

const IconInputFieldComponent: React.FC<SearchInputFieldProps> = ({
  icon,
  iconInputClassName,
  placeholder,
  type,
  ...rest
}) => {
  return (
    <div className="relative flex items-center">
      {icon && <div className="absolute left-0 pl-2">{icon}</div>}
      <input
        {...rest}
        type={type}
        placeholder={placeholder}
        className={clsx(
          iconInputClassName === undefined || null
            ? "border-2 border-gray-300 rounded-md p-2 pl-10 w-full"
            : iconInputClassName
        )}
      />
    </div>
  );
};

export default IconInputFieldComponent;
export type { SearchInputFieldProps };
