type Props = {
  title?: string;
  description?: string;
};
export default function DetailsSummery({ title, description }: Props) {
  return (
    <details className="mb-0 border-b border-dashed last:border-none [&_svg]:open:-rotate-180">
      <summary className="py-4 flex cursor-pointer list-none items-center gap-4">
        <div className="w-full flex items-center justify-between font-medium md:text-base mx-lg:text-sm">
          <p
            className="tenms__paragraph"
            dangerouslySetInnerHTML={{ __html: title || "" }}
          />
          <svg
            className="rotate-0 transform transition-all duration-300 font-medium md:text-base mx-lg:text-sm"
            fill="none"
            height={20}
            width={20}
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </summary>
      <div className="pb-3">
        <div dangerouslySetInnerHTML={{ __html: description || "" }} />
      </div>
    </details>
  );
}
