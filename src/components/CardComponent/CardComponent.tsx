import React, { useState } from "react";
import Button from "../../components/Button/ButtonComponent";
import clsx from "clsx";

export interface CardProps {
  profileImage: string;
  Title: string;
  subTitle1: string;
  action: string;
  col4Title: string;
  col2Title: string;
  col3Title: string;
  col3SubTitle: string;
  btnClassName?: string;
  isExpandable?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const CardComponent: React.FC<CardProps> = ({
  profileImage,
  Title,
  subTitle1,
  action,
  col4Title,
  col2Title,
  col3Title,
  col3SubTitle,
  btnClassName,
  isExpandable,
  children,
  onClick,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleButtonClick = () => {
    isExpandable && setExpanded(!expanded);
    onClick();
  };
  return (
    <>
      <div className="bg-white border border-gray-200 p-6 rounded-lg flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4 mb-4 shadow-lg hover:shadow-xl transition duration-300">
        <div className="flex items-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-16 h-16 rounded-full mx-2 shadow-md"
          />
          <div className="text-left">
            <h6 className="text-2xl font-semibold text-gray-800">{Title}</h6>
            <p className="text-gray-600">{subTitle1}</p>
          </div>
        </div>
        <div className="flex-1 md:text-center">
          <h6 className="text-2xl font-semibold text-gray-800">{col2Title}</h6>
        </div>
        <div className="flex-1 text-center">
          <p className="text-lg text-gray-700">{col3Title}</p>
          <p className="text-gray-600">{col3SubTitle}</p>
        </div>
        <div className="flex-1 text-center">
          <p className="text-lg text-gray-700">{col4Title}</p>
        </div>
        <Button
          onClick={handleButtonClick}
          className={clsx(
            btnClassName === undefined || null
              ? "bg-tint-500 hover:bg-tint-600 text-white py-2 px-4 rounded-lg transition duration-300"
              : btnClassName
          )}
        >
          {action}
        </Button>
      </div>
      {expanded && <>{children}</>}
    </>
  );
};

export default CardComponent;
