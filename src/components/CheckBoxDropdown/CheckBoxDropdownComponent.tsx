import React, { useEffect, useState } from "react";
import CheckBoxField from "../CheckBox/CheckBoxFieldComponent";
import { FaAngleDown } from "react-icons/fa";
import clsx from "clsx";

interface CheckBoxListProps {
  options: string[];
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  selectInputClassName?: string;
  optionClassName?: string;
}

const CheckBoxDropdownComponent: React.FC<CheckBoxListProps> = ({
  options,
  containerClassName,
  inputClassName,
  labelClassName,
  optionClassName,
  selectInputClassName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) =>
        prevOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  return (
    <div className={containerClassName}>
      <div className="relative">
        <div
          className={clsx(
            selectInputClassName === undefined || null
              ? "flex items-center p-2 border border-gray-300 rounded cursor-pointer"
              : selectInputClassName
          )}
          onClick={toggleDropdown}
        >
          <span className="mr-2">Selected options:</span>
          {selectedOptions.length > 0 ? (
            selectedOptions.join(", ")
          ) : (
            <span className="italic text-gray-500">None</span>
          )}
          <FaAngleDown />
        </div>
        {isOpen && (
          <div
            className={clsx(
              optionClassName === undefined || null
                ? "absolute w-full mt-2 p-2 bg-white border border-gray-300 rounded shadow-lg"
                : optionClassName
            )}
          >
            {options.map((option) => (
              <CheckBoxField
                key={option}
                label={option}
                checked={selectedOptions.includes(option)}
                onChange={() => handleOptionClick(option)}
                labelClassName={labelClassName}
                inputClassName={inputClassName}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckBoxDropdownComponent;
export type { CheckBoxListProps };
