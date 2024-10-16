"use client";
import { useState } from "react";

export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const [page, setPage] = useState(currentPage);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    onPageChange(newPage);
  };

  return (
    <div className="flex justify-center mt-6">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => handlePageChange(index + 1)}
          className={`px-4 py-2 mx-1 rounded ${
            page === index + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
          disabled={page === index + 1}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}
