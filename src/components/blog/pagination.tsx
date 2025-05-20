"use client";

import React from "react";
import Link from "next/link";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  baseUrl: string;
}

export function Pagination({ currentPage, totalPages, baseUrl }: PaginationProps) {
  // Generate an array of page numbers to display
  const getPageRange = () => {
    const range = [];
    const maxPagesToShow = 4;

    // Always show first page
    range.push(1);

    // Handle the current page and surrounding pages
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (range.indexOf(i) === -1) {
        range.push(i);
      }
    }

    // Always show last page if there are more than one page
    if (totalPages > 1) {
      range.push(totalPages);
    }

    // Add ellipsis where needed
    const result = [];
    let prev = 0;

    for (const page of range) {
      if (prev + 1 !== page) {
        result.push(null); // Use null to represent ellipsis
      }
      result.push(page);
      prev = page;
    }

    return result;
  };

  const pageRange = getPageRange();

  return (
    <div className="flex justify-center items-center mt-12 space-x-2">
      {pageRange.map((page, index) => {
        // Return ellipsis
        if (page === null) {
          return (
            <span key={`ellipsis-${index}`} className="px-4 py-2 text-gray-500">
              ...
            </span>
          );
        }

        // Return page number
        return (
          <Link
            key={`page-${page}`}
            href={page === 1 ? baseUrl : `${baseUrl}?page=${page}`}
            className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
              page === currentPage
                ? "bg-[hsl(var(--primary))] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
}
