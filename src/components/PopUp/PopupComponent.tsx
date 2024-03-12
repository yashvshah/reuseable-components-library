import { clsx } from "clsx";
import React from "react";
import { Link } from "react-router-dom";

interface PopupProps {
  isOpen: boolean;
  children: React.ReactNode;
  linkLabel?: string;
  onButtonClick?: (values: any) => void;
  linkClassName?: string;
  popupClassName?: string;
  onClose: () => void;
  showCloseButton?: boolean;
  showBackButton?: boolean; // Added prop to manage back button visibility
  onBackClick?: () => void; // Added prop to handle back button click
}

const PopupComponent: React.FC<PopupProps> = ({
  isOpen,
  children,
  linkLabel,
  onButtonClick,
  onClose,
  linkClassName,
  popupClassName,
  showCloseButton = true,
  showBackButton = false, // Default value for showBackButton
  onBackClick, // Added prop to handle back button click
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
      <div
        className={clsx(
          "relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-lg",
          (popupClassName !== undefined || null) && popupClassName
        )}
      >
        <span className="absolute top-0 right-0 p-4">
          {showCloseButton && (
            <button className="text-2xl font-semibold" onClick={onClose}>
              &times;
            </button>
          )}
        </span>
        <span className="absolute top-0 left-0 p-4">
          {showBackButton && (
            <button className="text-2xl font-semibold" onClick={onBackClick}>
              &#8592;
            </button>
          )}
        </span>
        {children}
        <Link
          to=""
          className={clsx(
            "mt-4 p-2 rounded-md text-center",
            linkClassName === undefined || null
              ? "bg-blue-500 text-white"
              : linkClassName
          )}
          onClick={onButtonClick}
        >
          {linkLabel}
        </Link>
      </div>
    </div>
  );
};

export default PopupComponent;
