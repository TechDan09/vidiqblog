"use client";

import Link from "next/link";

export default function Error() {
  return (
    <div className="container mx-auto py-10 text-center">
      <h1 className="text-red-500 text-2xl">Unexpected Error!</h1>
      <p>Something went wrong...</p>
      <p>Were sorry for the inconvenience.</p>
      <Link href="/" className="text-blue-700">
        Home!
      </Link>
    </div>
  );
}
