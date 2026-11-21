// Numbered list styled like a record's tracklist — the brand's rhythm motif.
export function Tracklist({
  items,
  tone = "light",
  prefix = "",
}: {
  items: { title: string; body: string }[];
  tone?: "light" | "dark";
  prefix?: string;
}) {
  const dark = tone === "dark";
  return (
    <ol className={`border-t ${dark ? "border-line-dark" : "border-line"}`}>
      {items.map((item, i) => (
        <li
          key={i}
          className={`grid grid-cols-[3.25rem_1fr] gap-x-4 border-b py-5 md:grid-cols-[5rem_minmax(0,16rem)_1fr] md:gap-x-8 md:py-6 ${
            dark ? "border-line-dark" : "border-line"
          }`}
        >
          <span className={`pt-0.5 text-sm font-medium tabular-nums ${dark ? "text-gold" : "text-gold-ink"}`}>
            {prefix}
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-medium leading-snug tracking-[-0.015em]">{item.title}</h3>
          <p className={`col-start-2 mt-1 md:col-start-3 md:mt-0 ${dark ? "text-white/65" : "text-text-2"}`}>{item.body}</p>
        </li>
      ))}
    </ol>
  );
}
