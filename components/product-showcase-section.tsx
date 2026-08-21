"use client";

import * as React from "react";

const SLIDES = [
  {
    src: "/images/main-admin.png",
    alt: "Главная страница системы",
    eyebrow: "Обзор",
    title: "Один экран на весь день",
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

/** Scroll distance dedicated to each slide, as a fraction of the viewport height. */
const VH_PER_SLIDE = 0.9;

export default function ProductShowcaseSection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const node = containerRef.current;
      if (!node) return;

      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;
      const scrollable = rect.height - viewportH;

      // How far we've scrolled into the pinned section, 0 → 1.
      const progress =
        scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));

      const next = Math.min(
        SLIDES.length - 1,
        Math.floor(progress * SLIDES.length)
      );
      setIndex((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const current = SLIDES[index];

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: `${SLIDES.length * VH_PER_SLIDE * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen w-full items-center overflow-hidden px-5">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 items-center gap-14 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
          {/* Rotating screenshot */}
          <div
            className="relative aspect-[1919/1010] w-full overflow-hidden rounded-3xl border border-zinc-200 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.28)]"
            style={{ perspective: "1600px" }}
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
                      "transform 700ms cubic-bezier(0.4,0,0.2,1), opacity 700ms ease",
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

          {/* Synced text */}
          <div>
            <div key={index} className="animate-fade-up" style={{ animationDuration: "450ms" }}>
              <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5 text-xs font-medium tracking-wide text-zinc-600">
                {current.eyebrow}
              </span>
              <h3 className="mb-5 text-balance font-[family-name:var(--font-display)] text-3xl leading-[1.15] font-extrabold tracking-[-0.02em] text-zinc-950 sm:text-4xl lg:text-[2.75rem]">
                {current.title}
              </h3>
              <p className="max-w-lg text-balance text-lg leading-relaxed text-zinc-500 sm:text-xl">
                {current.description}
              </p>
            </div>

            {/* Progress bars — purely visual, no interaction required */}
            <div className="mt-10 flex items-center gap-2">
              {SLIDES.map((slide, i) => (
                <div
                  key={slide.src}
                  aria-hidden
                  className="h-1 flex-1 overflow-hidden rounded-full bg-zinc-100"
                >
                  <div
                    className="h-full rounded-full bg-zinc-900"
                    style={{
                      width: i < index ? "100%" : i === index ? "100%" : "0%",
                      transition: "width 300ms ease",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
