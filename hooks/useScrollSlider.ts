"use client";

import { useRef } from "react";

export default function useScrollSlider<T extends HTMLElement>() {
  const tabRef = useRef<T>(null);

  const onScrollLeft = () => {
    if(tabRef.current == null)  return;
    tabRef.current.scrollLeft -= tabRef.current.offsetWidth / 2;
  };

  const onScrollRight = () => {
    if(tabRef.current == null)  return;
    tabRef.current.scrollLeft += tabRef.current.offsetWidth / 2;
  };

  return {
    tabRef,
    onScrollLeft,
    onScrollRight,
  };
}
