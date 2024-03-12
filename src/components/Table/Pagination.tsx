import clsx from "clsx";
import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  paginationPrevClassName?: string;
  paginationNextClassName?: string;
  paginationActiveClassName?: string;
  paginationInactiveClassname?: string;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  paginationPrevClassName,
  paginationNextClassName,
  paginationActiveClassName,
  paginationInactiveClassname,
}) => {
  const generatePageNumbers = ()=> {
    const visiblePages = 3;
    const pageNumbers: number[] = [];
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    let endPage = Math.min(totalPages, startPage + visiblePages - 1);
  
    if (totalPages <= visiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else if (endPage - startPage + 1 < visiblePages) {
      startPage = endPage - visiblePages + 1;
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };
  

  const pageNumbers = generatePageNumbers();

  return (
    <nav className="block">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={clsx(
              paginationPrevClassName === undefined || null
                ? "px-3 py-2 text-gray-500 hover:text-gray-700"
                : paginationPrevClassName
            )}
          >
            Previous
          </button>
        </li>
        {pageNumbers.map((page) => (
          <li key={page}>
            <button
              onClick={() => onPageChange(page)}
              className={clsx(
                `px-3 py-2 ,${
                  currentPage === page
                    ? paginationActiveClassName === undefined || null
                      ? "text-indigo-600 font-semibold"
                      : paginationActiveClassName
                    : paginationInactiveClassname === undefined || null
                    ? "text-gray-500 hover:text-gray-700"
                    : paginationInactiveClassname
                }`
              )}
            >
              {page}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={clsx(
              paginationNextClassName === undefined || null
                ? "px-3 py-2 text-gray-500 hover:text-gray-700"
                : paginationNextClassName
            )}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
