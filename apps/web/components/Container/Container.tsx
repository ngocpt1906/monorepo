import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props) {
  return (
    <div className={twMerge(clsx("w-full", className))}>
      <div className="w-full max-w-[1440px] m-auto">{children}</div>
    </div>
  );
}

export default Container;
