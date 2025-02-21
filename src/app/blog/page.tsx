import { BlogCard } from "@/components/BlogCard/BlogCard";
import { Pagination } from "@/components/Pagination/Pagination";
import { extractExcerpt } from "@/utils/extractExcerpt";
import { Metadata } from "next";
import { getBlogPosts } from "@/api/getBlogPosts";
import { ENTRIES_PER_PAGE } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Blog",
  description: "Blog about vidIq",
};

export default async function Blog({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  const { page } = await searchParams;
  const { posts, total } = await getBlogPosts(Number(page));

  console.log({ total, page });
  return (
    <div>
      <section className="w-full bg-blue-700 py-40">
        <h1 className="text-5xl text-white text-center">Our Blog</h1>
      </section>

      <section className="container mx-auto py-20 flex flex-wrap">
        {posts.map(({ id, title, body }, index) => (
          <article key={id} className="p-4 lg:basis-1/3 md:basis-1/2">
            <BlogCard
              id={id}
              image={`https://picsum.photos/400/250?random=${id}`}
              title={title}
              excerpt={extractExcerpt(body)}
              lazyLoadImage={Number(index) < 6}
            />
          </article>
        ))}
      </section>

      <nav className="container mx-auto flex justify-center items-center pb-10">
        <Pagination
          currentPage={Number(page) || 1}
          totalEntries={total}
          entriesPerPage={ENTRIES_PER_PAGE}
        />
      </nav>
    </div>
  );
}
