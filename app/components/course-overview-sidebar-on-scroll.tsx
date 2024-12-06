"use client";

import useScrollspy from "@/hooks/useScrollspy";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function CourseOverviewSidebarOnScroll() {
  const tabRef = useRef<HTMLDivElement>(null);
  const [, setActiveTab] = useState<number>(0);

  const menus = [
    "instructors",
    "features",
    "pointers",
    "routine",
    "free_items",
    "testimonials",
    "about",
    "how_to_pay",
    "faq",
  ];

  const ids = useMemo<string[]>(() => {
    const list: string[] = [];
    if (menus) {
      menus.forEach((item: string) => {
        list.push(item);
      });
    }

    return list;
  }, [menus]);

  const activeId = useScrollspy(ids, 185);

  useEffect(() => {
    const element = document.getElementById(`@${activeId}`);
    if (element && tabRef.current) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
      //   const r = element && isInViewport(element);
      //   console.log('first',r)

      const elRight = element.offsetLeft + element.offsetWidth;
      const elLeft = element.offsetLeft;

      const elParentRight =
        tabRef.current.offsetLeft + tabRef.current.offsetWidth;
      const elParentLeft = tabRef.current.offsetLeft;

      // check if right side of the element is not in view
      if (elRight > elParentRight + tabRef.current.scrollLeft) {
        tabRef.current.scrollLeft = elRight - elParentRight;
      }

      // check if left side of the element is not in view
      else if (elLeft < elParentLeft + tabRef.current.scrollLeft) {
        tabRef.current.scrollLeft = elLeft - elParentLeft;
      }
    }
  }, [activeId]);

  const handleScrollLeft = () => {
    if (tabRef.current == null) return;
    tabRef.current.scrollLeft -= tabRef.current.offsetWidth / 2;
  };

  const handleScrollRight = () => {
    if (tabRef.current == null) return;
    tabRef.current.scrollLeft += tabRef.current.offsetWidth / 2;
  };

  const handleTabClick = useCallback((elementId: string) => {
    const tabIndex = menus.indexOf(elementId);
    setActiveTab(tabIndex);
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, []);

  return (
    <div className="sticky top-0 z-20 hidden bg-white md:block">
      <div className="tenms-carousel relative  light right">
        <div className="w-full overflow-hidden">
          <div
            className="cursor-pointer absolute right-0 top-1/2 z-[3] block -translate-y-1/2 mx-lg:hidden "
            onClick={handleScrollRight}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={32}
              fill="none"
              viewBox="0 0 33 32"
              className="xl:mr-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            className="cursor-pointer absolute left-0 top-1/2 z-[2] block -translate-y-1/2 mx-lg:hidden"
            onClick={handleScrollLeft}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={33}
              height={32}
              fill="none"
              viewBox="0 0 33 32"
              className="rotate-180 xl:ml-[-40px]"
            >
              <path
                fill="#000"
                fillOpacity="0.5"
                fillRule="evenodd"
                d="M16.757 32c8.836 0 16-7.163 16-16s-7.164-16-16-16c-8.837 0-16 7.163-16 16s7.163 16 16 16zM15.064 8.893a1 1 0 00-1.415 1.415L19.342 16l-5.693 5.692a1 1 0 001.415 1.415l6.4-6.4a1 1 0 000-1.414l-6.4-6.4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div
          ref={tabRef}
          className="scrollbar-hide relative flex flex-nowrap gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory"
        >
          <ul className="flex my-4 border-b flex-nowrap">
            <li className="text-nowrap p-2 text-base  text-gray-600 ">
              <button />
            </li>
            <li className="text-nowrap p-2 text-base  text-gray-600 ">
              <button />
            </li>
            <li
              id="@instructors"
              className={
                activeId == "instructors"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("instructors")}>
                কোর্স ইন্সট্রাক্টর
              </button>
            </li>
            <li
              id="@features"
              className={
                activeId == "features"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("features")}>
                কোর্সটি যেভাবে সাজানো হয়েছে
              </button>
            </li>
            <li
              id="@pointers"
              className={
                activeId == "pointers"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("pointers")}>
                কোর্সটি করে যা শিখবেন
              </button>
            </li>
            <li
              id="@routine"
              className={
                activeId == "routine"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("routine")}>
                ক্লাস রুটিন
              </button>
            </li>
            <li
              id="@free_items"
              className={
                activeId == "free_items"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("free_items")}>
                এই কোর্সের সাথে ফ্রি পাচ্ছেন–
              </button>
            </li>
            <li
              id="@testimonials"
              className={
                activeId == "testimonials"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("testimonials")}>
                শিক্ষার্থীরা যা বলছে
              </button>
            </li>
            <li
              id="@about"
              className={
                activeId == "about"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("about")}>
                কোর্স সম্পর্কে বিস্তারিত
              </button>
            </li>
            <li
              id="@how_to_pay"
              className={
                activeId == "how_to_pay"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("how_to_pay")}>
                যেভাবে পেমেন্ট করবেন
              </button>
            </li>
            <li
              id="@faq"
              className={
                activeId == "faq"
                  ? "text-nowrap p-2 text-base border-b-2 border-green text-green"
                  : "text-nowrap p-2 text-base  text-gray-600 "
              }
            >
              <button onClick={() => handleTabClick("faq")}>
                সচরাচর জিজ্ঞাসা
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
