import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  level: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const fontSize = {
  1: "text-6xl",
  2: "text-5xl",
  3: "text-4xl",
  4: "text-3xl",
  5: "text-2xl",
};

function Title({ level, children, className }: Props) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return (
    <Tag className={twMerge(clsx(fontSize[level], className))}>{children}</Tag>
  );
}

export default Title;
