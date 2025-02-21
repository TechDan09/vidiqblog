import { BlogCard } from "@/components/BlogCard/BlogCard";
import { getExcerpts } from "@/utils/getExcerpts";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function getBlogPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Blog() {
  const posts = await getBlogPosts();

  return (
    <div>
      <div className="w-full bg-blue-500 py-40">
        <h1 className="text-5xl text-white text-center">Our Blog</h1>
      </div>

      <div className="container mx-auto py-20 flex flex-wrap">
        {posts.map((post) => (
          <div className="p-4 lg:basis-1/3 md:basis-1/2" key={post.id}>
            <BlogCard
              image={`https://picsum.photos/300/200?random=${post.id}`}
              title={post.title}
              excerpt={getExcerpts(post.body)}
              className=""
            />
          </div>
        ))}
      </div>
    </div>
  );
}
