import React from "react";

interface RecordsPerPageProps {
  itemsPerPage: number;
  itemsPerPageOptions: number[];
  onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const RecordsPerPage: React.FC<RecordsPerPageProps> = ({
  itemsPerPage,
  itemsPerPageOptions,
  onItemsPerPageChange,
}) => (
  <div className="mb-4">
    <label className="mr-2">Show Records Per Page:</label>
    <select onChange={onItemsPerPageChange} value={itemsPerPage}>
      {itemsPerPageOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default RecordsPerPage;
