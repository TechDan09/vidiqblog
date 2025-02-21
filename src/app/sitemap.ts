import { BASE_URL, POSTS_API_BASE_URL } from "@/utils/constants";
import { MetadataRoute } from "next";

async function fetchDynamicRoutes(): Promise<{ id: string }[]> {
  const res = await fetch(`${POSTS_API_BASE_URL}`);
  const posts = await res.json();

  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = BASE_URL;

  const dynamicRoutes = await fetchDynamicRoutes();

  const paths = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString() },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString() },
    ...dynamicRoutes.map((route) => ({
      url: `${baseUrl}/blog/${route.id}`,
      lastModified: new Date().toISOString(),
    })),
  ];

  return paths;
}
