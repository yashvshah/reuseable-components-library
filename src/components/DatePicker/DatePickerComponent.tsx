import { clsx } from "clsx";
import React from "react";

interface DatePickerProps {
  dateInputClassName?: string;
  spanClassName?: string;
}

const DatePickerComponent: React.FC<DatePickerProps> = ({
  dateInputClassName,
  spanClassName,
}) => {
  return (
    <div className="flex items-center">
      <input
        name="start"
        type="date"
        className={clsx(
          dateInputClassName === undefined || null
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            : dateInputClassName
        )}
        placeholder="Select date start"
      />
      <span
        className={clsx(spanClassName === undefined || null ? "mx-4 text-gray-500" : spanClassName)}
      >
        to
      </span>
      <input
        name="end"
        type="date"
        className={clsx(
          dateInputClassName === undefined || null
            ? "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            : dateInputClassName
        )}
        placeholder="Select date end"
      />
    </div>
  );
};

export default DatePickerComponent;
