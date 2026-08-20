"use client";

import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { LiquidButton } from "@/components/ui/liquid-glass-button";

const IMAGES = [
  { src: "/images/main-admin.png", alt: "Главная страница системы" },
  { src: "/images/new-appeal.png", alt: "Форма создания нового обращения" },
  { src: "/images/appeals-list.png", alt: "Список обращений" },
  { src: "/images/new-call.png", alt: "Форма записи нового звонка" },
  { src: "/images/calls-list.png", alt: "Список клиентских звонков" },
  { src: "/images/new-chat.png", alt: "Форма создания нового чата" },
  { src: "/images/chats-list.png", alt: "Список чатов" },
  { src: "/images/nearest.png", alt: "Раздел «Мои ближайшие»" },
  { src: "/images/history.png", alt: "История обращений" },
  { src: "/images/dashboard.png", alt: "Дашборд администратора" },
];

export default function HeroSection() {
  return (
    <ImageStreamHero
      images={IMAGES}
      className="dark h-[720px] w-full bg-background"
      cards={9}
      speed={18}
      axis={52}
    >
      {/* mute the raw screenshots so the corridor reads as atmosphere, not noise */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[4] backdrop-brightness-[0.55] backdrop-saturate-[0.55] backdrop-contrast-[1.05]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[5] bg-[radial-gradient(ellipse_65%_55%_at_50%_52%,color-mix(in_oklch,var(--background)_92%,transparent)_0%,color-mix(in_oklch,var(--background)_55%,transparent)_45%,transparent_75%)]"
      />
      <div
        aria-hidden
        className="bg-grain pointer-events-none absolute inset-0 z-[6] opacity-[0.35] mix-blend-overlay"
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-between px-6 py-16 text-center sm:py-20">
        <div className="flex flex-col items-center gap-7">
          <span
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-[family-name:var(--font-geist-sans)] text-xs font-medium tracking-wide text-white/70 backdrop-blur-sm"
            style={{ animationDelay: "0ms" }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            CRM ДБО УКП
          </span>

          <h1
            className="animate-fade-up max-w-3xl text-balance font-[family-name:var(--font-playfair-display)] text-[2.75rem] leading-[1.12] font-semibold tracking-tight text-foreground sm:text-5xl lg:text-[3.75rem]"
            style={{ animationDelay: "90ms" }}
          >
            Единая рабочая среда
            <br />
            для обращений, звонков и чатов
          </h1>
        </div>

        <div className="flex flex-col items-center gap-9">
          <p
            className="animate-fade-up mx-auto max-w-xl text-balance font-[family-name:var(--font-geist-sans)] text-lg leading-relaxed text-muted-foreground sm:text-xl"
            style={{ animationDelay: "180ms" }}
          >
            Превращает хаотичный поток клиентских обращений
            <br className="hidden sm:block" />
            в контролируемый, прозрачный и измеримый процесс
          </p>

          <LiquidButton
            size="xl"
            onClick={() =>
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            className="animate-fade-up group bg-white font-[family-name:var(--font-geist-sans)] text-base font-medium text-black shadow-[0_8px_30px_-8px_rgba(255,255,255,0.35)] hover:bg-white/90"
            style={{ animationDelay: "270ms" }}
          >
            Посмотреть возможности
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M3.5 8h9M8.5 3.5 13 8l-4.5 4.5"
                stroke="currentColor"
                strokeWidth={1.6}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </LiquidButton>

          <a
            href="#features"
            className="animate-fade-up group flex flex-col items-center gap-1.5 font-[family-name:var(--font-geist-sans)] text-xs tracking-wide text-white/40 transition-colors hover:text-white/70"
            style={{ animationDelay: "360ms" }}
          >
            <span className="uppercase">Что внутри</span>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="h-3.5 w-3.5 animate-bounce"
            >
              <path
                d="M3 6l5 5 5-5"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
    </ImageStreamHero>
  );
}
