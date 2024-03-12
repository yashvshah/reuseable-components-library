import React from "react";

interface TableRowProps {
  data: any[];
}

const TableRow: React.FC<TableRowProps> = ({ data }) => {
  return (
    <tr className="hover:bg-gray-100">
      {data.map((item, index) => (
        <td
          key={index}
          className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
        >
          {item}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;
