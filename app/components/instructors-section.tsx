"use client";

type Props = {
  data: unknown;
};

export default function InstructorsSection({ data }: Props) {
  return (
    <div id="instructors">
      <div className="mb-10 xs:bg-[#EEF2F4] xs:py-2 ">
        <div className="pt-4 pb-2 bg-white relative">
          <h2 className="mb-4 text-xl font-semibold md:text-2xl">
            {data?.name}
          </h2>
          <div className="grid grid-cols-1 px-4 mb-4 border rounded-md lg:grid-cols-2">
            {data?.values?.map((item: unknown, index: number) => (
              <div key={index + "instructors"} className="flex items-start py-2 pb-0 last:pb-5 md:p-5 lg:pb-5">
                <div
                  className="mt-2 rounded-md"
                  style={{
                    width: 73,
                    height: 73,
                    position: "relative",
                    overflow: "hidden",
                    minWidth: 50,
                  }}
                >
                  <div
                    className="rounded-md overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out"
                    style={{ fontSize: 0, opacity: 1 }}
                  >
                    <img
                      alt={item?.name}
                      draggable="false"
                      loading="lazy"
                      width={73}
                      height={73}
                      decoding="async"
                      data-nimg={1}
                      className=""
                      src={item?.image}
                      style={{ color: "transparent" }}
                    />
                  </div>
                </div>
                <div className="flex-1 ml-3">
                  <h3 className="text-lg">{item?.name}</h3>
                  <div className="text-sm">
                    <p dangerouslySetInnerHTML={{ __html: item?.description }}/>
                    <br />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="absolute bottom-2 left-1/2 flex translate-x-[-50%] items-center gap-2 rounded-full bg-white px-4 py-1 text-sm text-gray-500 shadow-[0px_0px_17.0361px_#E7EAF7] hover:bg-gray-50 hover:text-gray-700">
            বিস্তারিত দেখুন{" "}
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
  );
}
