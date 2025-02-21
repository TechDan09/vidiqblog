import React from "react";
import Image from "next/image";
import { cx } from "@/utils/cx";
import { slugify } from "@/utils/slugify";

type Props = {
  image: string;
  title: string;
  excerpt: string;
  className?: string;
};

export const BlogCard = ({ image, title, excerpt, className }: Props) => {
  return (
    <a
      className={cx(
        "w-full h-full shadow-md rounded-lg overflow-hidden cursor-pointer block",
        className
      )}
      href={`/blog/${slugify(title)}`}
      title={title}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        className="w-full h-[250px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold hover:underline">{title}</h2>
        <p className="text-gray-500 mt-4">{excerpt}</p>
      </div>
    </a>
  );
};
