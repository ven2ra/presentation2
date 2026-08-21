"use client";

import * as React from "react";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

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
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

export default function CtaSection() {
  const { ref, revealed } = useRevealed<HTMLDivElement>();

  return (
    <section className="dark relative overflow-hidden bg-black px-5 py-28 sm:py-36">
      {/* Radial glow, echoes the hero */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.06] blur-[140px]" />
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 opacity-[0.35] mix-blend-overlay"
      />

      <div
        ref={ref}
        className="relative mx-auto flex w-full max-w-2xl flex-col items-center gap-8 text-center"
        style={{
          opacity: revealed ? 1 : 0,
          transform: revealed ? "translateY(0)" : "translateY(24px)",
          transition: "opacity 800ms ease-out, transform 800ms ease-out",
        }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium tracking-wide text-white/60 backdrop-blur-sm">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Начните сегодня
        </span>

        <h2 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-[1.1] font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
          Готовы внедрить систему?
        </h2>

        <p className="max-w-lg text-balance text-lg leading-relaxed text-white/50 sm:text-xl">
          Первый отдел начинает работать в системе в день подключения —
          без долгого внедрения и обучения.
        </p>

        <LiquidButton
          size="xl"
          onClick={() =>
            document
              .getElementById("features")
              ?.scrollIntoView({ behavior: "smooth", block: "start" })
          }
          className="bg-white font-[family-name:var(--font-geist-sans)] text-base font-medium text-black hover:bg-white/90"
        >
          Посмотреть возможности
        </LiquidButton>
      </div>
    </section>
  );
}
