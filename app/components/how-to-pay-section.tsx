
"use client";

type Props = {
  data: unknown;
};

export default function HowToPaySection({ data }: Props) {
  return (
    <div id="how_to_pay">
      <div className="mb-10">
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">
          {data?.name}
        </h2>
        <div className="rounded-md md:border md:p-4 xs:py-2" dangerouslySetInnerHTML={{ __html: data?.values?.[0]?.text }}>
          
        </div>
      </div>
    </div>
  );
}
