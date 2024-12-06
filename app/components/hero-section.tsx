
"use client";

type Props = {
  data: unknown;
  refProp?: (node?: Element | null | undefined) => void;
};

export default function HeroSection({ data, refProp }: Props) {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://cdn.10minuteschool.com/images/ui_%281%29_1716445506383.jpeg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="skills-landing"
      className="min-h-[900px] md:min-h-[300px]"
    >
      <div className="container relative flex flex-col gap-4 md:flex-row md:gap-12 pb-6 md:py-10 min-h-[300px]">
        <div className="order-1 flex flex-col justify-center flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div className="block mt-4 md:mt-0 md:hidden">
            <div className="relative overflow-hidden bg-black youtube-video aspect-video">
              <div className="relative">
                <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={56}
                    height={56}
                    fill="none"
                    viewBox="0 0 56 56"
                  >
                    <circle
                      cx={28}
                      cy={28}
                      r={28}
                      fill="#fff"
                      fillOpacity="0.5"
                    />
                    <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
                    <path
                      fill="#1CAB55"
                      d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                    />
                  </svg>
                </span>
                <div className="thumb-wrap">
                  <span>
                    <div
                      className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: 0, opacity: 1 }}
                    >
                      <img
                        alt="image"
                        draggable="false"
                        width={867}
                        height={480}
                        decoding="async"
                        data-nimg={1}
                        className="w-full"
                        src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=867&h=480"
                        style={{ color: "transparent" }}
                      />
                    </div>
                  </span>
                </div>
              </div>
              <div>
                <div className="absolute  left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
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
                <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
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
              </div>
            </div>
            <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
              <div>
                <div>
                  <div className="relative  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
                    <div
                      className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: 0, opacity: 1 }}
                    >
                      <img
                        alt="preview_gallery"
                        data-original-src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg"
                        draggable="false"
                        loading="lazy"
                        width={86}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        style={{ color: "transparent" }}
                        src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=86&h=50"
                      />
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                        style={{ fontSize: 0, opacity: 1 }}
                      >
                        <img
                          alt="Play The Video"
                          data-original-src="/images/annual_exam/play_icon_2.svg"
                          draggable="false"
                          width={20}
                          height={20}
                          decoding="async"
                          data-nimg={1}
                          className=""
                          style={{ color: "transparent" }}
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=20&h=20"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="relative  w-[55px] rounded cursor-pointer border-0">
                    <div
                      className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: 0, opacity: 1 }}
                    >
                      <img
                        alt="preview_gallery"
                        data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png"
                        draggable="false"
                        loading="lazy"
                        width={86}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        style={{ color: "transparent" }}
                        src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png?w=86&h=50"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <div className="relative  w-[55px] rounded cursor-pointer border-0">
                    <div
                      className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: 0, opacity: 1 }}
                    >
                      <img
                        alt="preview_gallery"
                        data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png"
                        draggable="false"
                        loading="lazy"
                        width={86}
                        height={50}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        style={{ color: "transparent" }}
                        src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png?w=86&h=50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block md:hidden">
              <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl" />
              <div className="mb-4 text-sm font-normal" />
            </div>
          </div>
          <div
            className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
            style={{ fontSize: 0, opacity: 1 }}
          >
            <img
              alt="image"
              data-original-src="https://cdn.10minuteschool.com/images/live_icon_1712036077434.png"
              draggable="false"
              loading="lazy"
              width={105}
              height={40}
              decoding="async"
              data-nimg={1}
              className="mb-2"
              style={{ color: "transparent" }}
              src="https://cdn.10minuteschool.com/images/live_icon_1712036077434.png?w=105&h=40"
            />
          </div>
          <h1 className="text-white mb-2 text-[21px] font-semibold  md:text-4xl">
            {data?.title}
          </h1>
          <div className="mb-2" />
          <div>
            <div
              className="text-gray-400 "
              style={{
                overflow: "hidden",
                height: "auto",
                maskImage: "none",
              }}
            >
              <div dangerouslySetInnerHTML={{ __html: data?.description }}/>
            </div>
          </div>
          <div className="mt-4 mb-6">
            <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2">
              <div className="flex col-auto gap-2 py-1 text-white">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt="image"
                    data-original-src="https://cdn.10minuteschool.com/images/calendar_icon_1712035999525.png"
                    draggable="false"
                    loading="lazy"
                    width={25}
                    height={25}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    src="https://cdn.10minuteschool.com/images/calendar_icon_1712035999525.png?w=25&h=25"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-base md:text-lg flex-1">
                  কোর্সের সময়সীমা: ৩ মাস
                </p>
              </div>
              <div className="flex col-auto gap-2 py-1 text-white">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt="image"
                    data-original-src="https://cdn.10minuteschool.com/images/clock_icon_1712036033856.png"
                    draggable="false"
                    loading="lazy"
                    width={25}
                    height={25}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    src="https://cdn.10minuteschool.com/images/clock_icon_1712036033856.png?w=25&h=25"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-base md:text-lg flex-1">
                  শনি, সোম, বুধ (সন্ধ্যা ৬টা - ৭:৩০টা)
                </p>
              </div>
              <div className="flex col-auto gap-2 py-1 text-white">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt="image"
                    data-original-src="https://cdn.10minuteschool.com/images/timer_icon_1712036115283.png"
                    draggable="false"
                    loading="lazy"
                    width={25}
                    height={25}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    src="https://cdn.10minuteschool.com/images/timer_icon_1712036115283.png?w=25&h=25"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-base md:text-lg flex-1">
                  ১০ম ব্যাচের ভর্তি চলছে
                </p>
              </div>
              <div className="flex col-auto gap-2 py-1 text-white">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt="image"
                    data-original-src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png"
                    draggable="false"
                    loading="lazy"
                    width={25}
                    height={25}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png?w=25&h=25"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-base md:text-lg flex-1">আসন বাকি: ১০০ টি</p>
              </div>
              <div className="flex col-auto gap-2 py-1 text-white">
                <div
                  className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt="image"
                    data-original-src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png"
                    draggable="false"
                    loading="lazy"
                    width={25}
                    height={25}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    src="https://cdn.10minuteschool.com/images/seat_icon_1712036020069.png?w=25&h=25"
                    style={{ color: "transparent" }}
                  />
                </div>
                <p className="text-base md:text-lg flex-1">
                  ১ম থেকে ৯ম ব্যাচে মোট শিক্ষার্থী সংখ্যা: ১০৩০
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="mb-4 text-gray-400">১০ম ব্যাচের ভর্তি শেষ হবে:</p>
              <div className="flex gap-4">
                <div className="text-white">
                  <span
                    className="flex items-center justify-center text-2xl md:text-4xl"
                    style={{
                      borderRadius: 14,
                      border: "3px solid rgb(74, 74, 74)",
                      background:
                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                      height: 70,
                      width: 65,
                    }}
                  >
                    31
                  </span>
                  <p className="mt-2 text-sm text-center text-gray-300">Days</p>
                </div>
                <div className="text-white">
                  <span
                    className="flex items-center justify-center text-2xl md:text-4xl"
                    style={{
                      borderRadius: 14,
                      border: "3px solid rgb(74, 74, 74)",
                      background:
                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                      height: 70,
                      width: 65,
                    }}
                  >
                    16
                  </span>
                  <p className="mt-2 text-sm text-center text-gray-300">
                    Hours
                  </p>
                </div>
                <div className="text-white">
                  <span
                    className="flex items-center justify-center text-2xl md:text-4xl"
                    style={{
                      borderRadius: 14,
                      border: "3px solid rgb(74, 74, 74)",
                      background:
                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                      height: 70,
                      width: 65,
                    }}
                  >
                    26
                  </span>
                  <p className="mt-2 text-sm text-center text-gray-300">
                    Minutes
                  </p>
                </div>
                <div className="text-white">
                  <span
                    className="flex items-center justify-center text-2xl md:text-4xl"
                    style={{
                      borderRadius: 14,
                      border: "3px solid rgb(74, 74, 74)",
                      background:
                        "linear-gradient(158deg, rgb(0, 0, 0) 10.11%, rgba(27, 27, 27, 0.79) 39.39%, rgb(35, 35, 35) 95.29%)",
                      height: 70,
                      width: 65,
                    }}
                  >
                    48
                  </span>
                  <p className="mt-2 text-sm text-center text-gray-300">
                    Seconds
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          ref={refProp}
          className="w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white absolute right-0 md:top-[50px] md:absolute"
        >
          <div className="md:sticky md:top-[112px] ">
            <div className=" md:border">
              <div className="hidden p-1 md:block" id="">
                <div className="relative overflow-hidden bg-black youtube-video aspect-video">
                  <div className="relative">
                    <span className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={56}
                        height={56}
                        fill="none"
                        viewBox="0 0 56 56"
                      >
                        <circle
                          cx={28}
                          cy={28}
                          r={28}
                          fill="#fff"
                          fillOpacity="0.5"
                        />
                        <circle cx="27.999" cy={28} r="25.415" fill="#fff" />
                        <path
                          fill="#1CAB55"
                          d="M37.492 26.268c1.334.77 1.334 2.694 0 3.464l-12.738 7.355c-1.334.77-3-.193-3-1.732v-14.71c0-1.539 1.666-2.501 3-1.732l12.738 7.355z"
                        />
                      </svg>
                    </span>
                    <div className="thumb-wrap">
                      <span>
                        <div
                          className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="IELTS LIVE Batch"
                            data-original-src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg"
                            draggable="false"
                            width={867}
                            height={480}
                            decoding="async"
                            data-nimg={1}
                            className="w-full"
                            src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=867&h=480"
                            style={{ color: "transparent" }}
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="absolute  left-[10px] top-1/2 -translate-y-1/2 z-[4] h-[25px] w-[25px] cursor-pointer">
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
                    <div className="absolute right-[10px] top-1/2 z-[4] -translate-y-1/2 h-[25px] w-[25px] cursor-pointer">
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
                  </div>
                </div>
                <div className="flex gap-4 p-4 overflow-x-auto hideScrollbar">
                  <div>
                    <div>
                      <div className="relative  w-[55px] rounded cursor-pointer overflow-hidden outline outline-[2px] outline-[#1CAB55]">
                        <div
                          className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="preview_gallery"
                            data-original-src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg"
                            draggable="false"
                            loading="lazy"
                            width={86}
                            height={50}
                            decoding="async"
                            data-nimg={1}
                            className=""
                            style={{ color: "transparent" }}
                            src="https://cdn.10minuteschool.com/images/thumbnails/ielts-live-batch-10-thumbnail.jpg?w=86&h=50"
                          />
                        </div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                          <div
                            className="undefined opacity-0 transition-opacity duration-300 ease-in-out"
                            style={{ fontSize: 0, opacity: 1 }}
                          >
                            <img
                              alt="Play The Video"
                              data-original-src="/images/annual_exam/play_icon_2.svg"
                              draggable="false"
                              width={20}
                              height={20}
                              decoding="async"
                              data-nimg={1}
                              className=""
                              style={{ color: "transparent" }}
                              src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg?w=20&h=20"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="relative  w-[55px] rounded cursor-pointer border-0">
                        <div
                          className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="preview_gallery"
                            data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png"
                            draggable="false"
                            loading="lazy"
                            width={86}
                            height={50}
                            decoding="async"
                            data-nimg={1}
                            className=""
                            style={{ color: "transparent" }}
                            src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-1_1726737209001.png?w=86&h=50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      <div className="relative  w-[55px] rounded cursor-pointer border-0">
                        <div
                          className="rounded opacity-0 transition-opacity duration-300 ease-in-out"
                          style={{ fontSize: 0, opacity: 1 }}
                        >
                          <img
                            alt="preview_gallery"
                            data-original-src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png"
                            draggable="false"
                            loading="lazy"
                            width={86}
                            height={50}
                            decoding="async"
                            data-nimg={1}
                            className=""
                            style={{ color: "transparent" }}
                            src="https://cdn.10minuteschool.com/images/catalog/media/PDP_Banner-2_1726735930745.png?w=86&h=50"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block md:hidden">
                  <h1 className="text-gray mb-3 mt-3 text-[21px] font-semibold md:text-4xl">
                    IELTS LIVE Batch
                  </h1>
                  <div className="mb-4 text-sm font-normal" />
                </div>
              </div>
              <div className="hidden md:block">
                <div className="w-full p-4 md:h-auto " id="variant">
                  <div className="relative md:static ">
                    <div>
                      <div className="flex flex-col w-full">
                        <div>
                          <div className="flex items-center justify-between md:flex-col md:items-start">
                            <div className="md:mb-3">
                              <div className="inline-block text-2xl font-semibold">
                                ৳8500
                              </div>
                              <span className="infline-flex">
                                <del className="ml-2 text-base font-normal md:text-xl">
                                  ৳10000
                                </del>
                                <div className="c-Tukmu inline-block">
                                  <p className="card-price">1500 ৳ ছাড়</p>
                                </div>
                              </span>
                              <p className="text-xs font-normal text-gray-500 md:text-base">
                                ব্যাচ ১০: ৬ জানুয়ারি, ২০২৫ - মার্চ ১৯, ২০২৫
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center justify-between mb-2" />
                        </div>
                        <button className=" bg-green whitespace-nowrap button primary text-center md:w-full centered-buttons">
                          কোর্সটি কিনুন
                        </button>
                      </div>
                    </div>
                    <div className="absolute md:static top-[-45px] left-0 ">
                      <p className="hidden md:block text-base text-[#F3764E] py-4">
                        ১০ম ব্যাচের ভর্তি শেষ হবে:৬ জানুয়ারী, ২০২৫
                      </p>
                      <p className="md:hidden text-xs text-white bg-[#DA4C5A] p-2 rounded-full">
                        ১০ম ব্যাচের ভর্তি শেষ হবে: 31:16:26:48
                      </p>
                    </div>
                    <div className="hidden md:block" />
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="grid py-2 md:p-4">
                  <p className="mb-4 text-xl font-semibold">
                    এই কোর্সে যা থাকছে
                  </p>
                  {data?.checklist?.map((item, index) => (
                    <div key={index + "checklist"} className="flex items-center mb-3 leading-5">
                    <div
                      className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                      style={{ fontSize: 0, opacity: 1 }}
                    >
                      <img
                        alt="icon"
                        draggable="false"
                        loading="lazy"
                        width={20}
                        height={20}
                        decoding="async"
                        data-nimg={1}
                        className=""
                        style={{ color: "transparent" }}
                        src={item?.icon}
                      />
                    </div>
                    <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                      {item?.text}
                    </h4>
                  </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="justify-between hidden mt-4 text-sm text-center text-gray-400 md:flex md:flex-col lg:flex lg:flex-row">
              <span>কোর্সটি সম্পর্কে বিস্তারিত জানতে</span>
              <span className="flex items-center justify-center ml-2 underline cursor-pointer text-green">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
                </svg>{" "}
                <span className="ml-1">ফোন করুন (16910)</span>
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
