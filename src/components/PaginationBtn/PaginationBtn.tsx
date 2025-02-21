import { cx } from "@/utils/cx";
import Link from "next/link";

type Props = {
  isDisabled?: boolean;
  href: string;
  label: string;
  isActive?: boolean;
  className?: string;
};

const PaginationBtn = ({
  isDisabled,
  isActive,
  href,
  label,
  className,
}: Props) => {
  return (
    <Link
      href={href}
      className={cx(
        "px-4 py-2 rounded-md transition duration-300 bg-gray-700 text-white hover:bg-blue-700",
        isDisabled && "opacity-40  pointer-events-none cursor-default",
        isActive && "bg-blue-700",
        className
      )}
      aria-disabled={isDisabled}
    >
      {label}
    </Link>
  );
};

export default PaginationBtn;
