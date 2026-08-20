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
    accent: true,
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
      className="flex min-h-screen items-center justify-center bg-black px-5 py-16"
      style={{
        backgroundImage: "radial-gradient(#262626 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="w-full max-w-[1100px]">
        <h2 className="mb-12 text-balance text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Что получает уже отдел с первого дня?
        </h2>

        <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-[#f0f0f0] bg-white md:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group relative border-b border-[#f0f0f0] py-9 pr-8 pl-10 transition-colors duration-200 last:border-b-0 hover:bg-[#fafafa] md:[&:nth-child(3n)]:border-r-0 md:[&:nth-child(n+4)]:border-b-0 md:border-r"
            >
              <span
                className="absolute top-7 bottom-7 left-0 rounded-r-sm"
                style={
                  feature.accent
                    ? { width: 4, background: "#3b82f6" }
                    : { width: 3, background: "#e5e7eb" }
                }
              />

              <div className="mb-5 h-6 w-6 text-[#9ca3af]">{feature.icon}</div>

              <h3 className="mb-3 text-lg leading-tight font-semibold tracking-tight text-[#111827]">
                {feature.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed text-[#6b7280]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
