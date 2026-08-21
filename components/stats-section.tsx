const STATS = [
  { value: "5–10", label: "обращений в день", suffix: "в среднем на отдел" },
  { value: "3", label: "канала в одном окне", suffix: "обращения, звонки, чаты" },
  { value: "1", label: "система вместо нескольких", suffix: "без таблиц и мессенджеров" },
];

export default function StatsSection() {
  return (
    <section className="border-t border-zinc-100 bg-white px-5 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <div className="font-[family-name:var(--font-display)] text-5xl font-extrabold tracking-[-0.02em] text-zinc-950 sm:text-6xl">
              {stat.value}
            </div>
            <div className="mt-3 text-base font-medium text-zinc-800">
              {stat.label}
            </div>
            <div className="mt-1 text-sm text-zinc-500">{stat.suffix}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
