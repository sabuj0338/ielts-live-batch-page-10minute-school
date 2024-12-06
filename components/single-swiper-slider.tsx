"use client";
import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { type Swiper as SwiperRef } from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import ArrowNextIconButton from "./icons/ArrowNextIconButton";
import ArrowPrevIconButton from "./icons/ArrowPrevIconButton";

type Props = {
  children: React.ReactNode;
  arrow?: boolean;
};

export default function SingleSwiperSlider({ children, arrow }: Props) {
  const swiperRef = useRef<SwiperRef>();
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        initialSlide={0}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: true,
        // }}
        pagination={{
          clickable: true,
        }}
        // loop={true}
        // navigation={{
        //   prevEl: ".mui-arrow-icon-button-prev",
        //   nextEl: ".mui-arrow-icon-button-next",
        // }}
        modules={[Pagination, Navigation, Autoplay]}
        // onSwiper={it => (sliderRef.current = it)}
      >
        {React.Children.map(children, (child) => (
          <SwiperSlide>{child}</SwiperSlide>
        ))}
      </Swiper>

      {arrow && (
        <>
          <div className="h-full absolute top-0 left-0 z-[10] flex flex-col items-center justify-center">
            <ArrowPrevIconButton
              onClick={() => swiperRef.current?.slidePrev()}
            />
          </div>

          <div className="h-full absolute top-0 left-0 z-[10] flex flex-col items-center justify-center">
            <ArrowNextIconButton
              onClick={() => swiperRef.current?.slideNext()}
            />
          </div>
        </>
      )}
    </div>
  );
}
