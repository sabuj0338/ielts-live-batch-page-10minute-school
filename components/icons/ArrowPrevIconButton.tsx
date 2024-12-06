"use client";

import { ClassAttributes, HTMLAttributes } from "react";

export default function ArrowPrevIconButton(props: JSX.IntrinsicAttributes & ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="absolute  left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer" {...props}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth={0}
        viewBox="0 0 512 512"
        color="white"
        style={{ color: "white" }}
        height={25}
        width={25}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM271 135c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-87 87 87 87c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L167 273c-9.4-9.4-9.4-24.6 0-33.9L271 135z" />
      </svg>
    </div>
  );
}
