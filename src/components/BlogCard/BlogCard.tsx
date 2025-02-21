import Image from "next/image";
import { cx } from "@/utils/cx";
import Link from "next/link";

type Props = {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  className?: string;
  lazyLoadImage?: boolean;
};

export const BlogCard = ({
  id,
  image,
  title,
  excerpt,
  className,
  lazyLoadImage = false,
}: Props) => {
  return (
    <Link
      className={cx(
        "w-full h-full shadow-md rounded-lg overflow-hidden cursor-pointer block group",
        className
      )}
      href={`/blog/${id}`}
      title={title}
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={250}
        style={{ width: "400px", height: "250px" }}
        className="w-auto h-[250px] object-cover"
        priority={lazyLoadImage}
      />

      <div className="p-4">
        <h2 className="text-xl font-bold hover:underline group-hover:underline group-hover:text-blue-700">
          {title}
        </h2>
        <p className="text-gray-700 mt-4">{excerpt}</p>
      </div>
    </Link>
  );
};
