import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  describe("When the component is rendered", () => {
    it("renders the logo with correct link", () => {
      const logo = screen.getByText("VidIQ Blog");
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute("href", "/");
    });

    it("renders navigation links", () => {
      const homeLink = screen.getByRole("link", { name: "Home" });
      const blogLink = screen.getByRole("link", { name: "Blog" });

      expect(homeLink).toBeInTheDocument();
      expect(homeLink).toHaveAttribute("href", "/");

      expect(blogLink).toBeInTheDocument();
      expect(blogLink).toHaveAttribute("href", "/blog");
    });
  });
});
