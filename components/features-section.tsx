"use client";

import * as React from "react";

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

function useRevealed<T extends HTMLElement>() {
  const ref = React.useRef<T>(null);
  const [revealed, setRevealed] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number];
  index: number;
}) {
  const { ref, revealed } = useRevealed<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="group relative flex flex-col gap-5 bg-white p-9 transition-[background-color,opacity,transform] duration-700 ease-out hover:bg-zinc-50"
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "translateY(0)" : "translateY(16px)",
        transitionDelay: revealed ? `${(index % 3) * 90}ms` : "0ms",
      }}
    >
      <span className="pointer-events-none absolute top-7 right-8 font-[family-name:var(--font-display)] text-4xl font-extrabold tracking-tight text-zinc-900/[0.04] transition-colors duration-300 group-hover:text-zinc-900/[0.08]">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 text-zinc-500 transition-all duration-300 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 group-hover:text-emerald-600 group-hover:-translate-y-0.5">
        <div className="h-5 w-5">{feature.icon}</div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-[family-name:var(--font-display)] text-lg leading-tight font-semibold tracking-tight text-zinc-950">
          {feature.title}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-zinc-500">
          {feature.description}
        </p>
      </div>

      <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-emerald-500/60 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
    </div>
  );
}

export default function FeaturesSection() {
  const { ref: headerRef, revealed: headerRevealed } =
    useRevealed<HTMLDivElement>();

  return (
    <section
      id="features"
      className="relative scroll-mt-6 overflow-hidden bg-white px-5 py-28 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 60% 50% at 50% 0%, color-mix(in oklch, black 4%, transparent) 0%, transparent 60%)," +
            "radial-gradient(#e4e4e7 1px, transparent 1px)",
          backgroundSize: "100% 100%, 22px 22px",
        }}
      />
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.2] mix-blend-multiply"
      />

      <div className="relative mx-auto w-full max-w-[1100px]">
        <div
          ref={headerRef}
          className="mx-auto mb-16 flex max-w-2xl flex-col items-center gap-5 text-center transition-[opacity,transform] duration-700 ease-out sm:mb-20"
          style={{
            opacity: headerRevealed ? 1 : 0,
            transform: headerRevealed ? "translateY(0)" : "translateY(16px)",
          }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-600">
            Возможности
          </span>

          <h2 className="text-balance font-[family-name:var(--font-display)] text-3xl leading-[1.1] font-extrabold tracking-[-0.02em] text-zinc-950 sm:text-4xl lg:text-[2.75rem]">
            Что получает уже отдел с первого дня?
          </h2>

          <p className="text-balance text-base leading-relaxed text-zinc-500 sm:text-lg">
            Никаких долгих внедрений и обучения — команда начинает работать
            в системе в первый же день.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-200 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
