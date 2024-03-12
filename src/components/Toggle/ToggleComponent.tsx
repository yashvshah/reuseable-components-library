import clsx from "clsx";
import React, { useState } from "react";

interface ToggleProps {
  onLabel: string;
  offLabel: string;
  onClickValue: () => void;
  activeClassName?: string;
  inActiveClassName?: string;
}

const ToggleComponent: React.FC<ToggleProps> = ({
  onLabel,
  offLabel,
  onClickValue,
  activeClassName,
  inActiveClassName,
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    onClickValue();
    setIsChecked(!isChecked);
  };

  return (
    <>
      {/* <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div
          className={`w-11 h-6 bg-gray-200 ${
            isChecked ? "peer-checked:bg-blue-600" : "dark:bg-gray-700"
          } peer-focus:outline-none peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:h-5 after:w-5 after:transition-all dark:border-gray-600`}
        ></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {isChecked ? onLabel : offLabel}
        </span>
      </label>
      <br/>
      <label className="themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggle}
          className="sr-only"
        />
        <span className="label flex items-center text-sm font-medium text-black">
          Light
        </span>
        <span
          className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
            isChecked ? "bg-[#212b36]" : "bg-[#CCCCCE]"
          }`}
        >
          <span
            className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
              isChecked ? "translate-x-[28px]" : ""
            }`}
          ></span>
        </span>
        <span className="label flex items-center text-sm font-medium text-black">
          Dark
        </span>
      </label>
      <br/> */}
      <label className="relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-gray-200 p-1">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked
              ? clsx(
                  activeClassName === undefined || null
                    ? "text-white bg-tint-500"
                    : activeClassName
                )
              : "text-body-color"
          }`}
        >
          {onLabel}
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked
              ? clsx(
                  activeClassName === undefined || null
                    ? "text-white bg-tint-500"
                    : activeClassName
                )
              : "text-body-color"
          }`}
        >
          {offLabel}
        </span>
      </label>
    </>
  );
};

export default ToggleComponent;
