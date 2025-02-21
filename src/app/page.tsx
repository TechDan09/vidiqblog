import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen">
      <div className="mx-auto w-full bg-blue-700 py-40 text-center">
        <h1 className="text-5xl text-white text-center">Welcome to our Blog</h1>
        <Link
          href="/blog"
          className="text-white text-center block mt-10 hover:underline"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
