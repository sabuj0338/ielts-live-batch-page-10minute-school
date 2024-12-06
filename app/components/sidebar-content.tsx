"use client";

type Props = {
  hidden: string;
};
export default function SidebarContent({ hidden }: Props) {
  return (
    <section
      className={`w-full md:max-w-[330px] lg:max-w-[400px] order-2 bg-white ${hidden}`}
    >
      <div className={`md:sticky md:top-[56px]`}>
        <div className=" md:border">
          <div
            className="hidden p-1 md:block"
            id="trailer_sticky"
            style={{ display: "none" }}
          >
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
            <div className="w-full p-4 md:h-auto" id="variant">
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
                    ১০ম ব্যাচের ভর্তি শেষ হবে: 31:16:38:7
                  </p>
                </div>
                <div className="hidden md:block" />
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="grid py-2 md:p-4">
              <p className="mb-4 text-xl font-semibold">এই কোর্সে যা থাকছে</p>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    ৩৬টি লাইভ ক্লাস (১ ঘণ্টার লেকচার + ৩০ মিনিট প্রশ্নোত্তর)
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/mock_test.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    ৮টি Reading Practice Test
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    ৮টি Listening Practice Test
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/Quiz.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    ২টি Complete Mock Test
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/digital-book_work-book.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    ১০টি Practice PDF Mock Test
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/others.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    মেন্টরদের সাথে ১:১ নির্দেশনা সেশন
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/facebook-community.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    ফেসবুক সাপোর্ট গ্রুপ
                  </h4>
                </div>
              </div>
              <div>
                <div className="flex items-center mb-3 leading-5">
                  <div
                    className="inline-block h-[20px] w-[20px] opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt="icon"
                      data-original-src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png"
                      draggable="false"
                      loading="lazy"
                      width={20}
                      height={20}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      style={{ color: "transparent" }}
                      src="https://cdn.10minuteschool.com/images/PDP/course-fact-icons/time-limit.png?w=20&h=20"
                    />
                  </div>
                  <h4 className="mb-0 inline-block pl-4 tracking-[0.005em] text-[#111827]">
                    কোর্সের মেয়াদ ১২ মাস
                  </h4>
                </div>
              </div>
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
  );
}
