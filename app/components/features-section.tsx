"use client";

type Props = {
  data: unknown;
};

export default function FeaturesSection({ data }: Props) {
  return (
    <div id="features">
      <div className="flex flex-col gap-3">
        <h2 className=" text-xl font-semibold leading-[30px] text-black">
          {data?.name}
        </h2>
        <div className="mb-16 grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
          {data?.values?.map((item: unknown, index: number) => (
            <div
              key={index + "features"}
              className="flex flex-row items-start gap-3 m-1 "
            >
              <div>
                <div
                  className="mb-4 mx-auto opacity-0 transition-opacity duration-300 ease-in-out"
                  style={{ fontSize: 0, opacity: 1 }}
                >
                  <img
                    alt={item?.title}
                    draggable="false"
                    loading="lazy"
                    width={36}
                    height={36}
                    decoding="async"
                    data-nimg={1}
                    className=""
                    style={{ color: "transparent" }}
                    src={item?.icon}
                  />
                </div>
              </div>
              <div className="flex flex-col flex-1 gap-2">
                <h2 className="text-[18px] font-[500px] leading-[26px] text-white ">
                  {item?.title}
                </h2>
                <h2 className="text-[14px] font-[400px] leading-[22px] text-[#9CA3AF]">
                  {item?.subtitle}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
