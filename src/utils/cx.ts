import classNames from "classnames";
import { ClassNameValue, twMerge } from "tailwind-merge";

export function cx(...inputs: ClassNameValue[]) {
  return twMerge(classNames(inputs));
}
