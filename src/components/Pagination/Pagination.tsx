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

  return (
    <div className="flex flex-wrap justify-center items-center gap-4">
      <PaginationBtn
        isDisabled={currentPage === 1}
        href={`/blog?page=${currentPage - 1}`}
        label="Previous"
      />

      <ul className="flex flex-wrap gap-4 justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index}>
            <PaginationBtn
              isActive={currentPage === index + 1}
              href={`/blog?page=${index + 1}`}
              label={`${index + 1}`}
            />
          </li>
        ))}
      </ul>

      <PaginationBtn
        isDisabled={currentPage === totalPages}
        href={`/blog?page=${currentPage + 1}`}
        label="Next"
      />
    </div>
  );
};
