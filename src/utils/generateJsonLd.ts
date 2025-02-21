import { POSTS_API_BASE_URL } from "./constants";
import { extractExcerpt } from "./extractExcerpt";
import { Post } from "./types";

export const generateJsonLd = (post: Post) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    url: `${POSTS_API_BASE_URL}/${post.id}`,
    headline: post.title,
    image: `https://picsum.photos/1280/400?random=${post.id}`,
    keywords: "vidiq blog, Blog",
    datePublished: "2025-02-20",
    dateCreated: "2025-02-20",
    dateModified: "2025-02-20",
    description: extractExcerpt(post.body),
    articleBody: post.body,
    author: {
      "@type": "Person",
      name: "Daniel Ogaga",
    },
  };
};
