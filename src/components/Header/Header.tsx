import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="bg-blue-700 text-white">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <Link href="/">VidIQ Blog</Link>
          <ul className="flex gap-4">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
