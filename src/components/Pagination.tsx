'use client'
import React from 'react';

const Pagination = (props: 
  { pageNumber: number, setPageNumber: (page: number) => void, totalPages: number }
) => {
  const { pageNumber, setPageNumber, totalPages } = props;
  const handleFirstPage = () => {
    setPageNumber(1);
  };

  const handlePrevious = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const handleNext = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  const handleLastPage = () => {
    setPageNumber(totalPages);
  };

  const handlePageClick = (page: number) => {
    setPageNumber(page);
  };

  // Calculate which 3 page numbers to show
  const getVisiblePages = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (pageNumber <= 2) {
      return [1, 2, 3];
    }

    if (pageNumber === totalPages) {
      return [totalPages - 2, totalPages - 1, totalPages];
    }

    return [pageNumber - 1, pageNumber, pageNumber + 1];
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="pagination-container">
      {/* First page button */}
      <button 
        className="page-button"
        onClick={handleFirstPage}
        disabled={pageNumber === 1}
      >
        &lt;&lt;
      </button>

      {/* Previous page button */}
      <button 
        className="page-button"
        onClick={handlePrevious}
        disabled={pageNumber === 1}
      >
        &lt;
      </button>

      {/* Page numbers */}
      {visiblePages.map((page) => (
        <button
          key={page}
          className="page-button"
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      {/* Next page button */}
      <button 
        className="page-button"
        onClick={handleNext}
        disabled={pageNumber === totalPages}
      >
        &gt;
      </button>

      {/* Last page button */}
      <button 
        className="page-button"
        onClick={handleLastPage}
        disabled={pageNumber === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;