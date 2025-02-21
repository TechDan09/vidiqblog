import { generateJsonLd } from "./generateJsonLd";
import { POSTS_API_BASE_URL } from "./constants";

describe("generateJsonLd", () => {
  const mockPost = {
    userId: 1,
    id: 123,
    title: "Test Post Title",
    body: "This is a test post body with multiple words to test the excerpt functionality",
  };

  it("should generate correct JSON-LD structure", () => {
    const result = generateJsonLd(mockPost);

    expect(result).toEqual({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      url: `${POSTS_API_BASE_URL}/${mockPost.id}`,
      headline: mockPost.title,
      image: `https://picsum.photos/1280/400?random=${mockPost.id}`,
      keywords: "vidiq blog, Blog",
      datePublished: "2025-02-20",
      dateCreated: "2025-02-20",
      dateModified: "2025-02-20",
      description:
        "This is a test post body with multiple words to test the excerpt functionality",
      articleBody: mockPost.body,
      author: {
        "@type": "Person",
        name: "Daniel Ogaga",
      },
    });
  });
});
