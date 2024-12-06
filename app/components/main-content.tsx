"use client";

import { useMemo } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import AboutSection from "./about-section";
import BottomNavigationBar from "./bottom-navigationbar";
import ClassBookEngagementSection from "./class-book-engagement-section";
import CourseOverviewSidebarOnScroll from "./course-overview-sidebar-on-scroll";
import FaqSection from "./faq-section";
import FeaturesSection from "./features-section";
import FreeItemsSection from "./free-items-section";
import HeroSection from "./hero-section";
import HowToPaySection from "./how-to-pay-section";
import InstructorsSection from "./instructors-section";
import MobileViewCourseOverview from "./mobile-view-course-overview";
import PointersSection from "./pointers-section";
import RoutineSection from "./routine-section";
import SidebarContent from "./sidebar-content";
import TestimonialsSection from "./testimonials-section";

type Variant = {
  demo_class_book_engagement: unknown[];
  offers: unknown[];
  bundle_items: unknown[];
  instructors: unknown[];
  features: unknown[];
  pointers: unknown[];
  routine: unknown[];
  free_items: unknown[];
  testimonials: unknown[];
  content_preview: unknown[];
  about: unknown[];
  feature_explanations: unknown[];
  certificate: unknown[];
  how_to_pay: unknown[];
  faq: unknown[];
};
type Props = {
  variant: unknown;
};
export default function MainContent({ variant }: Props) {
  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0,
  });

  const sectionData = useMemo<Variant>(() => {
    return {
      demo_class_book_engagement: variant?.data?.sections?.find(
        (i) => i?.type == "demo_class_book_engagement"
      ),
      offers: variant?.data?.sections?.find((i) => i?.type == "offers"),
      bundle_items: variant?.data?.sections?.find(
        (i) => i?.type == "bundle_items"
      ),
      instructors: variant?.data?.sections?.find(
        (i) => i?.type == "instructors"
      ),
      features: variant?.data?.sections?.find((i) => i?.type == "features"),
      pointers: variant?.data?.sections?.find((i) => i?.type == "pointers"),
      routine: variant?.data?.sections?.find((i) => i?.type == "routine"),
      free_items: variant?.data?.sections?.find((i) => i?.type == "free_items"),
      testimonials: variant?.data?.sections?.find(
        (i) => i?.type == "testimonials"
      ),
      content_preview: variant?.data?.sections?.find(
        (i) => i?.type == "content_preview"
      ),
      about: variant?.data?.sections?.find((i) => i?.type == "about"),
      feature_explanations: variant?.data?.sections?.find(
        (i) => i?.type == "feature_explanations"
      ),
      certificate: variant?.data?.sections?.find(
        (i) => i?.type == "certificate"
      ),
      how_to_pay: variant?.data?.sections?.find((i) => i?.type == "how_to_pay"),
      faq: variant?.data?.sections?.find((i) => i?.type == "faq"),
    };
  }, [variant]);
  console.log(variant);

  return (
    <div>
      <HeroSection data={variant?.data} refProp={ref} />
      <MobileViewCourseOverview />
      <BottomNavigationBar />
      <main className="container flex flex-col gap-4 md:flex-row md:gap-12 ">
        <section className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <div>
            <CourseOverviewSidebarOnScroll />
            <div className="pt-[140px] -mt-[140px]">
              <div>
                <ClassBookEngagementSection data={sectionData?.demo_class_book_engagement}/>
              </div>
              <div>
                <InstructorsSection data={sectionData?.instructors}/>
              </div>
              <div>
                <FeaturesSection data={sectionData?.features}/>
              </div>
              <div>
                <PointersSection data={sectionData?.pointers}/>
              </div>
              <div>
                <RoutineSection data={sectionData?.routine}/>
              </div>
              <div>
                <FreeItemsSection data={sectionData?.free_items}/>
              </div>
              <div>
                <TestimonialsSection data={sectionData?.testimonials}/>
              </div>
              <div />
              <div>
                <AboutSection data={sectionData?.about}/>
              </div>
              <div>
                <div id="feature_explanations" />
              </div>
              <div>
                <div id="certificate" />
              </div>
              <div>
                <HowToPaySection data={sectionData?.how_to_pay}/>
              </div>
              <div>
                <FaqSection data={sectionData?.faq}/>
              </div>
            </div>
            <section className="">
              <div className="mb-6 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
                <div className="bg-white pb-6 md:pb-0">
                  <div className="mb-0 ">
                    <h2 className="mb-4 text-xl font-semibold md:text-2xl">
                      আরও কোন জিজ্ঞাসা আছে?
                    </h2>
                    <div className="md:max-w-[300px]">
                      <a href="tel:16910">
                        <div className="flex w-full items-center justify-center rounded border border-[#E5E7EB] py-3 hover:border-[#1CAB55] md:max-w-[300px] md:rounded-lg md:px-6 md:py-5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={28}
                            height={28}
                            fill="none"
                            viewBox="0 0 29 28"
                            className="w-[17px] h-[17px] md:w-6 md:h-6"
                          >
                            <path
                              stroke="#1CAB55"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.223"
                              d="M17.246 2.917a9.298 9.298 0 018.213 8.204M17.246 7.05a5.164 5.164 0 014.083 4.083"
                            />
                            <path
                              stroke="#1CAB55"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2.223"
                              d="M13.37 14.551c4.655 4.653 5.71-.73 8.673 2.231 2.857 2.856 4.5 3.428.88 7.047-.454.364-3.334 4.748-13.457-5.373C-.658 8.335 3.722 5.451 4.086 4.998c3.629-3.628 4.193-1.977 7.05.879 2.961 2.962-2.42 4.022 2.235 8.674z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <h3 className="ml-2 text-base font-medium text-[#1CAB55] md:text-lg">
                            কল করুন 16910 নম্বরে
                          </h3>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>
        <SidebarContent hidden={isIntersecting ? "hidden" : ""} />
      </main>
    </div>
  );
}
