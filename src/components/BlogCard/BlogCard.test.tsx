import { render, screen } from "@testing-library/react";
import { BlogCard } from "./BlogCard";

describe("BlogCard", () => {
  const defaultProps = {
    id: 1,
    image: "http://test-src-url",
    title: "Test Blog Title",
    excerpt: "Test blog excerpt",
  };

  describe("when the component is rendered", () => {
    beforeEach(() => {
      render(<BlogCard {...defaultProps} />);
    });

    it("renders a link with correct href", () => {
      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", `/blog/${defaultProps.id}`);
      expect(link).toHaveAttribute("title", defaultProps.title);
    });

    it("renders the blog card elements", () => {
      const title = screen.getByText(defaultProps.title);
      expect(title).toBeInTheDocument();

      const excerpt = screen.getByText(defaultProps.excerpt);
      expect(excerpt).toBeInTheDocument();
    });

    it("renders the image with correct attributes", () => {
      const image = screen.getByRole("img");
      expect(image).toHaveAttribute("src");
      expect(image).toHaveAttribute("alt", defaultProps.title);
    });
  });
});
