"use client";

import DetailsSummery from "@/components/details-summery";

type Props = {
  data: unknown;
};
export default function AboutSection({ data }: Props) {
  return (
    <div id="about">
      <div className="mb-6 md:mb-10 mt-4 max-w-[900px] md:mt-[42px] ">
        <div className="mt-10 md:mt-0">
          <h2 className="text-xl font-semibold md:mb-4 md:text-2xl">
            {data?.name}
          </h2>

          <div className="rounded-lg py-2 md:border md:px-5 ">
            {data?.values?.map((item: unknown, index: number) => (
              <DetailsSummery
                key={index + "about"}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
