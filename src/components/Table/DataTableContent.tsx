import clsx from "clsx";
import React from "react";
import CheckBoxFieldComponent from "../CheckBox/CheckBoxFieldComponent";

interface DataTableContentProps<T> {
  headers: string[];
  currentItems: T[];
  actions?: (item: T) => React.ReactNode;
  containerClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
}

const DataTableContent: React.FC<DataTableContentProps<any>> = ({
  headers,
  currentItems,
  actions,
  containerClassName,
  headerClassName,
  bodyClassName,
  rowClassName,
}) => (
  <table
    className={clsx(
      containerClassName === undefined || null
        ? "min-w-full divide-y divide-gray-200"
        : containerClassName
    )}
  >
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th
            key={index}
            scope="col"
            className={clsx(
              headerClassName === undefined || null
                ? "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
                : headerClassName
            )}
          >
            {header}
          </th>
        ))}
        {actions && <th>Action</th>}
      </tr>
    </thead>
    <tbody
      className={clsx(
        bodyClassName === undefined || null
          ? "bg-white divide-y divide-gray-200"
          : bodyClassName
      )}
    >
      {currentItems != null &&
        currentItems.map((item, rowIndex) => (
          <tr key={rowIndex} className={clsx("hover:bg-gray-100")}>
            {Object.keys(item).map((key, colIndex) =>
              typeof item[key] === "boolean" ? (
                <td
                  key={colIndex}
                  className={clsx(
                    rowClassName === undefined || null
                      ? "px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      : rowClassName
                  )}
                >
                  <CheckBoxFieldComponent
                    label={""}
                    checked={item[key]}
                    onChange={() => {}}
                  ></CheckBoxFieldComponent>
                </td>
              ) : (
                <td
                  key={colIndex}
                  className={clsx(
                    rowClassName === undefined || null
                      ? "px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                      : rowClassName
                  )}
                >
                  {item[key]}
                </td>
              )
            )}
            {actions && (
              <td
                className={clsx(
                  rowClassName === undefined || null
                    ? "px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    : rowClassName
                )}
              >
                {actions(item)}
              </td>
            )}
          </tr>
        ))}
    </tbody>
  </table>
);

export default DataTableContent;
