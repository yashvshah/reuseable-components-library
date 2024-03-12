import clsx from "clsx";
import React from "react";

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  activeClassName?: string;
  inActiveClassName?: string;
}

const TabComponent: React.FC<TabProps> = ({
  label,
  isActive,
  onClick,
  activeClassName,
  inActiveClassName,
}) => {
  return (
    <div
      className={`px-4 py-2 cursor-pointer border ${
        isActive
          ? clsx(
              activeClassName === undefined
                ? "bg-blue-500 text-white"
                : activeClassName
            )
          : clsx(
              inActiveClassName === undefined
                ? "bg-gray-200 text-black"
                : inActiveClassName
            )
      }`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

export default TabComponent;
