import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

function Flex({ children, className, id }: Props) {
  const defaultClassName = "flex flex-col items-center justify-center";
  return (
    <div id={id} className={twMerge(clsx(defaultClassName, className))}>
      {children}
    </div>
  );
}

export default Flex;
