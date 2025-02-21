import { extractExcerpt } from "./extractExcerpt";

describe("extractExcerpt", () => {
  describe("when function is called with default length", () => {
    it("should return first 20 words by default", () => {
      const text =
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud";
      const result = extractExcerpt(text);
      expect(result).toBe(
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut"
      );
    });
  });

  describe("when function is called with custom length", () => {
    it("should return the first n words", () => {
      const text = "The quick brown fox jumps over the lazy dog";
      const result = extractExcerpt(text, 5);
      expect(result).toBe("The quick brown fox jumps");
    });
  });

  describe("when function is called with text shorter than specified length", () => {
    it("should return the original text", () => {
      const text = "Hello world today";
      const result = extractExcerpt(text, 5);
      expect(result).toBe("Hello world today");
    });
  });

  describe("when function is called with multiple spaces between words", () => {
    it("should return the first n words", () => {
      const text = "Hello   world    today   is    beautiful";
      const result = extractExcerpt(text, 3);
      expect(result).toBe("Hello world today");
    });
  });
});
