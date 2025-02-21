import { POSTS_API_BASE_URL } from "@/utils/constants";
import { Post } from "@/utils/types";
import { notFound } from "next/navigation";

export const getBlogPost = async (id: string): Promise<Post> => {
  const res = await fetch(`${POSTS_API_BASE_URL}/${id}`);

  if (!res.ok) {
    return notFound();
  }

  const post = (await res.json()) as Post;

  return post;
};
