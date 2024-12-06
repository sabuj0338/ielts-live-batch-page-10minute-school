"use client";

import { ClassAttributes, HTMLAttributes, JSX } from "react";

export default function ArrowNextIconButton(
  props: JSX.IntrinsicAttributes &
    ClassAttributes<HTMLDivElement> &
    HTMLAttributes<HTMLDivElement>
) {
  return (
    <div
      className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer"
      {...props}
    >
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
        <path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM241 377c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87-87-87c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L345 239c9.4 9.4 9.4 24.6 0 33.9L241 377z" />
      </svg>
    </div>
  );
}
