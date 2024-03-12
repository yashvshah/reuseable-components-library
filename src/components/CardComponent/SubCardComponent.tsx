import React from "react";
import clsx from "clsx";

export interface CardProps {
  profileImage: string;
  Title: string;
  subTitle1: string;
  col2Title: string;
  col3Title: string;
  data: { label: string; value: string }[];
  cardClassName?: string;
  label: string;
  items?: string[];
  children: React.ReactNode;
}

const SubCardComponent: React.FC<CardProps> = ({
  profileImage,
  Title,
  subTitle1,
  col2Title,
  col3Title,
  data,
  cardClassName,
  label,
  items,
  children,
}) => {
  return (
    <div
      className={clsx(
        "border p-6 rounded-lg md:space-x-4 mb-4 shadow-md hover:shadow-lg transition duration-300",
        cardClassName === undefined || null ? "bg-white border-gray-200" : cardClassName
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-x-4">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full mx-2 shadow-md"
            src={profileImage}
            alt="Profile"
          />
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">{Title}</h3>
            <p className="text-gray-700">{subTitle1}</p>
          </div>
        </div>
        <div className="md:text-center flex-1">
          <p className="text-gray-700">{col2Title}</p>
        </div>
        <div className="md:text-center flex-1">
          <p className="text-gray-700 uppercase">{col3Title}</p>
        </div>
      </div>
      <div>{children}</div>
      <div className="my-4 flex items-center flex-col md:flex-row space-y-4">
        <div className="xl:w-1/3 md:w-1/2 w-full">
          {data.map(({ label, value }, index) => (
            <div className="flex justify-between" key={index}>
              <p className="font-semibold text-gray-700">{label}</p>
              <p className="text-gray-600">{value}</p>
            </div>
          ))}
        </div>
        <hr className="w-28 h-px bg-gray-500 border-0 rounded md:rotate-90" />
        <div className="xl:w-2/3 md:w-1/2 w-full">
          <p className="font-semibold text-gray-700">{label}</p>
          <ol className="mt-2 block space-y-1 list-decimal list-inside text-justify lg:w-3/4">
            {items?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default SubCardComponent;
