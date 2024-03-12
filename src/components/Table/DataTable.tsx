import React, { useState } from "react";
import Pagination from "./Pagination";
import RecordsPerPage from "./RecordsPerPage";
import DataTableContent from "./DataTableContent";

interface TableProps<T> {
  headers: string[];
  data: T[];
  actions?: (item: T) => React.ReactNode;
  itemsPerPageOptions?: number[];
  containerClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  rowClassName?: string;
  paginationPrevClassName?: string;
  paginationNextClassName?: string;
  paginationActiveClassName?: string;
  paginationInactiveClassname?: string;
}

const DataTable = <T extends Record<string, any>>({
  headers,
  data,
  actions,
  itemsPerPageOptions = [2, 4, 6],
  containerClassName,
  headerClassName,
  bodyClassName,
  rowClassName,
  paginationPrevClassName,
  paginationNextClassName,
  paginationActiveClassName,
  paginationInactiveClassname,
}: TableProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems =
    data != null ? data.slice(indexOfFirstItem, indexOfLastItem) : [];

  const totalPages = data != null ? Math.ceil(data.length / itemsPerPage) : 0;

  return (
    <div className="overflow-x-auto">
      <RecordsPerPage
        itemsPerPage={itemsPerPage}
        itemsPerPageOptions={itemsPerPageOptions}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
      <DataTableContent
        headers={headers}
        currentItems={currentItems}
        actions={actions}
        containerClassName={containerClassName}
        bodyClassName={bodyClassName}
        headerClassName={headerClassName}
        rowClassName={rowClassName}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        paginationActiveClassName={paginationActiveClassName}
        paginationInactiveClassname={paginationInactiveClassname}
        paginationNextClassName={paginationNextClassName}
        paginationPrevClassName={paginationPrevClassName}
      />
    </div>
  );
};

export default DataTable;
