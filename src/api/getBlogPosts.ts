import { ENTRIES_PER_PAGE, POSTS_API_BASE_URL } from "@/utils/constants";
import { Post } from "@/utils/types";
import { notFound } from "next/navigation";

export const getBlogPosts = async (
  page = 1
): Promise<{ posts: Post[]; total: number }> => {
  const res = await fetch(
    `${POSTS_API_BASE_URL}?_page=${page}&_limit=${ENTRIES_PER_PAGE}`
  );

  if (!res.ok) {
    return notFound();
  }

  const total = res.headers.get("x-total-count");

  const posts = (await res.json()) as Post[];

  return {
    posts,
    total: Number(total),
  };
};
