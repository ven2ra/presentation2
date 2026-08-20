const FEATURES = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M10 8l6 4-6 4V8z" />
      </svg>
    ),
    title: "Единый рабочий стол",
    description:
      "Обращения, звонки и чаты в одном месте — без переключения между системами.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 14c1.5-2 3.5-3 6-3s4.5 1 6 3" />
      </svg>
    ),
    title: "Просто в использовании",
    description:
      "Интерфейс, в котором разберётся любой сотрудник за 5 минут — без обучения и инструкций.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
      </svg>
    ),
    title: "Прозрачные сроки",
    description:
      "Каждое обращение — с чётким сроком ответа и статусом «в рамках срока» или «просрочено».",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M6 8v8a2 2 0 002 2h8" />
        <path d="M18 16V8a2 2 0 00-2-2h-4" />
      </svg>
    ),
    title: "Единая история по клиенту",
    description:
      "Звонки, чаты и обращения связаны по соглашению — вся хронология видна в одном окне.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="9" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    title: "Контроль в реальном времени",
    description:
      "Дашборд администратора показывает нагрузку, отклики и просрочки за секунды.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="5" cy="19" r="2" />
        <circle cx="19" cy="19" r="2" />
        <path d="M12 7v4M12 11l-5 6M12 11l5 6" />
      </svg>
    ),
    title: "Ответственные под контролем",
    description:
      "Каждое обращение закреплено за сотрудником — видно, кто и сколько обработал.",
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative scroll-mt-6 overflow-hidden bg-black px-5 py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, white 6%, transparent) 0%, transparent 60%)," +
            "radial-gradient(#1f1f1f 1px, transparent 1px)",
          backgroundSize: "100% 100%, 22px 22px",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1100px]">
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-5 text-center sm:mb-20">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-white/60 backdrop-blur-sm">
            Возможности
          </span>

          <h2 className="text-balance font-[family-name:var(--font-playfair-display)] text-3xl leading-[1.15] font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
            Что получает уже отдел с первого дня?
          </h2>

          <p className="text-balance text-base leading-relaxed text-white/50 sm:text-lg">
            Никаких долгих внедрений и обучения — команда начинает работать
            в системе в первый же день.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <div
              key={feature.title}
              className="group relative flex flex-col gap-5 bg-[#0a0a0a] p-9 transition-colors duration-300 hover:bg-[#101010]"
            >
              <span className="pointer-events-none absolute top-7 right-8 font-[family-name:var(--font-playfair-display)] text-4xl font-semibold text-white/[0.04] transition-colors duration-300 group-hover:text-white/[0.07]">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10 group-hover:text-emerald-300">
                <div className="h-5 w-5">{feature.icon}</div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-lg leading-tight font-semibold tracking-tight text-white">
                  {feature.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-white/50">
                  {feature.description}
                </p>
              </div>

              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
