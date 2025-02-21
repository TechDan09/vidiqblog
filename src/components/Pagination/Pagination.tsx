"use client";

import { useEffect } from "react";
import PaginationBtn from "../PaginationBtn/PaginationBtn";

type Props = {
  totalEntries: number;
  entriesPerPage: number;
  currentPage: number;
};

export const Pagination = ({
  currentPage,
  totalEntries,
  entriesPerPage,
}: Props) => {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  useEffect(() => {
    throw new Error("test");
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <PaginationBtn
        isDisabled={currentPage === 1}
        href={`/blog?page=${currentPage - 1}`}
        label="Previous"
      />

      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationBtn
          key={index}
          isActive={currentPage === index + 1}
          href={`/blog?page=${index + 1}`}
          label={`${index + 1}`}
        />
      ))}

      <PaginationBtn
        isDisabled={currentPage === totalPages}
        href={`/blog?page=${currentPage + 1}`}
        label="Next"
      />
    </div>
  );
};
