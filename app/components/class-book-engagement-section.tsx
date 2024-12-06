"use client";

type Props = {
  data: unknown;
};

export default function ClassBookEngagementSection({ data }: Props) {
  const item = data?.values?.[0];
  return (
    <div id="demo_class_book_engagement">
      <div
        style={{
          backgroundImage:
            "url(https://cdn.10minuteschool.com/images/Free_class_card_BG_1722414654287.png)",
          backgroundSize: "cover",
        }}
        className="flex gap-4 p-4 mb-8 overflow-hidden md:p-8 rounded-xl md:mb-12"
      >
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.10minuteschool.com/images/customicon_1722414519957.png"
            style={{ height: 40 }}
            className="mb-4"
          />
          <h2
            className="text-xl font-semibold"
            style={{ color: item?.title_color }}
          >
            {item?.title}
          </h2>
          <p className="mt-2 text-base" style={{ color: "#f1eded" }}>
            {item?.description}
          </p>
          <button className="mt-6 button primary">
            {item?.cta?.text}
          </button>
        </div>
        <div className="items-center hidden w-1/2 md:flex">
          <img
            src="https://cdn.10minuteschool.com/images/Live-Class_1722414830821.png"
            height={200}
          />
        </div>
      </div>
    </div>
  );
}
