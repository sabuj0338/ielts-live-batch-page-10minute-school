"use client";

import DetailsSummery from "@/components/details-summery";

type Props = {
  data: unknown;
};

export default function FaqSection({ data }: Props) {
  return (
    <div id="faq">
      <div className="mb-0 bg-[#E5E7EB] pb-2 md:mb-12 md:bg-white md:py-0">
        <div className="pb-1 bg-white md:pb-0">
          <div className="mb-0 ">
            <h2 className="mb-4 text-base font-semibold md:text-2xl" id="faq">
              {data?.name}
            </h2>
            <div className="relative mb-20">
              <div className="rounded-md md:border md:px-5">
                {data?.values?.map((item: unknown, index: number) => (
                  <DetailsSummery
                    key={index + "about"}
                    title={item?.question}
                    description={item?.answer}
                  />
                ))}
              </div>
              <button className="absolute bottom-[-15px] left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
                সকল প্রশ্ন-উত্তর{" "}
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height={18}
                  width={18}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
