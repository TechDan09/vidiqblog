import { extractExcerpt } from "@/utils/extractExcerpt";
import { Post } from "@/utils/types";
import Image from "next/image";
import PaginationBtn from "@/components/PaginationBtn/PaginationBtn";
import { POSTS_API_BASE_URL } from "@/utils/constants";
import Script from "next/script";
import { generateJsonLd } from "@/utils/generateJsonLd";
import { getBlogPost } from "@/api/getBlogPost";

export async function generateStaticParams() {
  const res = await fetch(`${POSTS_API_BASE_URL}`);
  const posts = await res.json();

  return posts.map((post: { id: number }) => ({
    id: post.id.toString(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await fetch(`${POSTS_API_BASE_URL}/${id}`);

  if (!res.ok) {
    return;
  }

  const post = (await res.json()) as Post;

  return {
    title: post.title,
    description: extractExcerpt(post.body),
    keywords: "vidiq blog, Blog",
    openGraph: {
      title: post.title,
      description: extractExcerpt(post.body),
      images: [
        {
          url: `https://picsum.photos/1280/400?random=${post.id}`,
          width: 1280,
          height: 400,
        },
      ],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const post = await getBlogPost(id);

  const { title, body, id: postId } = post;
  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateJsonLd(post)),
        }}
      />
      <article className="container mx-auto py-10">
        <div className="flex flex-col gap-4">
          <Image
            src={`https://picsum.photos/1280/400?random=${postId}`}
            alt={title}
            width={800}
            height={600}
            className="rounded-lg w-full h-[150px] md:h-[400px] object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />

          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-700">{body}</p>

          <div className="flex gap-4 justify-between pt-5">
            <PaginationBtn
              href={`/blog/${Number(id) - 1}`}
              label="Previous"
              isDisabled={Number(id) === 1}
              className="bg-blue-700"
            />

            <PaginationBtn
              href={`/blog/${Number(id) + 1}`}
              label="Next"
              isDisabled={Number(id) === 100}
              className="bg-blue-700"
            />
          </div>
        </div>
      </article>
    </>
  );
}
