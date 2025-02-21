import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  const defaultProps = {
    totalEntries: 20,
    entriesPerPage: 5,
    currentPage: 1,
  };

  describe("When the component is rendered", () => {
    it("renders pagination with correct number of pages", () => {
      render(<Pagination {...defaultProps} />);

      const pageButtons = screen
        .getAllByRole("link")
        .filter((link) => /^[0-9]+$/.test(link.textContent || ""));

      expect(pageButtons).toHaveLength(4);
    });
  });

  describe("when the current page is the first page", () => {
    it("disables previous button on first page", () => {
      render(<Pagination {...defaultProps} />);

      const prevButton = screen.getByRole("link", { name: /previous/i });
      expect(prevButton).toHaveAttribute("aria-disabled", "true");
    });
  });

  describe("when the current page is the last page", () => {
    it("disables next button on last page", () => {
      render(<Pagination {...defaultProps} currentPage={4} />);

      const nextButton = screen.getByRole("link", { name: /next/i });
      expect(nextButton).toHaveAttribute("aria-disabled", "true");
    });
  });
});
