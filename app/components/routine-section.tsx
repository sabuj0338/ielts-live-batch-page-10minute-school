"use client";

type Props = {
  data: unknown;
};

export default function RoutineSection({ data }: Props) {
  return (
    <div id="routine">
      <div className="flex items-center justify-between">
        <h2 className="mb-4 text-base font-semibold md:text-2xl">
          {data?.name}
        </h2>
        <div className="flex items-center ">
          <img
            src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/1667985694407.png"
            className="h-4 w-[14px]"
            alt="download"
          />
          <div className="ml-2">
            <a
              href={data?.values?.[0]?.download_link}
              target="_blank"
              className="text-sm font-medium underline cursor-pointer text-green md:text-base"
            >
              ডাউনলোড রুটিন
            </a>
          </div>
        </div>
      </div>
      <div
        className="html-content"
        dangerouslySetInnerHTML={{ __html: data?.values?.[0]?.html }}
      ></div>
    </div>
  );
}
