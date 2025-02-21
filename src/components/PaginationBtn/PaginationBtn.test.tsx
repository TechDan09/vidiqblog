import { render, screen } from "@testing-library/react";
import PaginationBtn from "./PaginationBtn";

describe("PaginationBtn", () => {
  describe("When the component is rendered", () => {
    it("renders as a link with right label", () => {
      render(<PaginationBtn href="/test" label="Next" />);

      const button = screen.getByRole("link", { name: "Next" });
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("href", "/test");
    });
  });

  describe("When the component is disabled", () => {
    it("applies disabled styles", () => {
      render(<PaginationBtn href="/test" label="Next" isDisabled={true} />);

      const button = screen.getByRole("link", { name: "Next" });
      expect(button).toHaveAttribute("aria-disabled", "true");
    });
  });
});
