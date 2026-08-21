"use client";

import * as React from "react";

const SLIDES = [
  {
    src: "/images/main-admin.png",
    alt: "Главная страница системы",
    eyebrow: "Обзор",
    title: "Один экран на всё утро",
    description:
      "Сотрудник видит свою нагрузку, последние обращения и быстрые действия сразу после входа — не нужно собирать картину по разным разделам.",
  },
  {
    src: "/images/dashboard.png",
    alt: "Дашборд администратора",
    eyebrow: "Аналитика",
    title: "Полная картина в одной панели",
    description:
      "Дашборд администратора показывает нагрузку по каналам, статусы обращений и просрочки в реальном времени — без экспорта в Excel и ручных отчётов.",
  },
  {
    src: "/images/new-appeal.png",
    alt: "Форма создания нового обращения",
    eyebrow: "Обращения",
    title: "Новое обращение за 30 секунд",
    description:
      "Клиент, соглашение, суть вопроса и вложения — в одной короткой форме, без лишних полей и переключений между вкладками.",
  },
  {
    src: "/images/history.png",
    alt: "История обращений",
    eyebrow: "История",
    title: "История клиента — в одном окне",
    description:
      "Все звонки, чаты и обращения по клиенту связаны по номеру соглашения. Вся хронология собрана в одной ленте, а не разбросана по системам.",
  },
  {
    src: "/images/new-call.png",
    alt: "Форма записи нового звонка",
    eyebrow: "Звонки",
    title: "Каждый звонок — под контролем",
    description:
      "Тематика, суть вопроса и статус звонка фиксируются сразу, пока разговор ещё свеж в памяти — ничего не теряется между сменами.",
  },
  {
    src: "/images/nearest.png",
    alt: "Раздел «Мои ближайшие»",
    eyebrow: "Сроки",
    title: "Ничего не просрочено",
    description:
      "«Мои ближайшие» показывают, что нужно закрыть сегодня и что уже выходит за срок — приоритеты видны с первого взгляда.",
  },
];

const ROTATE_INTERVAL = 3600;

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
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

export default function ProductShowcaseSection() {
  const { ref, revealed } = useRevealed<HTMLDivElement>();
  const [index, setIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!revealed || paused) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, ROTATE_INTERVAL);
    return () => window.clearInterval(id);
  }, [revealed, paused]);

  const current = SLIDES[index];

  return (
    <section className="bg-white px-5 py-24 sm:py-28">
      <div
        ref={ref}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        className="mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
      >
        {/* Rotating screenshot */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateX(0)" : "translateX(-48px)",
            transition: "opacity 900ms ease-out, transform 900ms ease-out",
          }}
        >
          <div
            className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)]"
            style={{ perspective: "1400px" }}
          >
            {SLIDES.map((slide, i) => {
              const offset = (i - index + SLIDES.length) % SLIDES.length;
              const isCurrent = offset === 0;
              const isNext = offset === 1;

              return (
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  className="absolute inset-0 h-full w-full object-cover"
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                    transition:
                      "transform 800ms cubic-bezier(0.4,0,0.2,1), opacity 800ms ease",
                    transform: isCurrent
                      ? "rotateY(0deg)"
                      : isNext
                        ? "rotateY(90deg)"
                        : "rotateY(-90deg)",
                    opacity: isCurrent ? 1 : 0,
                    zIndex: isCurrent ? 2 : 1,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Synced text */}
        <div
          style={{
            opacity: revealed ? 1 : 0,
            transform: revealed ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 700ms ease-out 150ms, transform 700ms ease-out 150ms",
          }}
        >
          <div
            key={index}
            className="animate-fade-up"
            style={{ animationDuration: "500ms" }}
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-600">
              {current.eyebrow}
            </span>
            <h3 className="mb-4 text-balance font-[family-name:var(--font-display)] text-2xl leading-[1.2] font-extrabold tracking-[-0.02em] text-zinc-950 sm:text-3xl">
              {current.title}
            </h3>
            <p className="max-w-md text-balance text-base leading-relaxed text-zinc-500 sm:text-lg">
              {current.description}
            </p>
          </div>

          {/* Progress dots */}
          <div className="mt-8 flex items-center gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                aria-label={`Показать: ${slide.eyebrow}`}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "24px" : "8px",
                  backgroundColor: i === index ? "#18181b" : "#e4e4e7",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
