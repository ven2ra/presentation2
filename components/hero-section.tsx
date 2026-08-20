"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, CheckCircle2 } from "lucide-react";
import { ArcRevealHero } from "@/components/ruixen/arc-reveal-hero";
import { HeroTitleAnimation } from "@/components/ruixen/hero-title-animation";

const GREETINGS = [
  { text: "Звонки" },
  { text: "Чаты" },
  { text: "Обращения" },
  { text: "Аналитика" },
  { text: "История" },
  { text: "Готовы?" },
];

export default function HeroSection() {
  return (
    <ArcRevealHero
      greetings={GREETINGS}
      greetingHold={900}
      revealDuration={1900}
      storageKey="crm-hero-intro"
      className="bg-white text-zinc-950"
    >
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Soft radial accent */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-100 blur-[120px]" />

        {/* Decorative shapes */}
        <div className="pointer-events-none absolute left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-3xl border border-zinc-200" />
        <div className="pointer-events-none absolute right-20 top-32 h-32 w-32 rounded-full border border-zinc-200" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5"
          >
            <span className="h-2 w-2 rounded-full bg-zinc-900" />
            <span className="text-xs font-medium tracking-wide text-zinc-600">
              ПЛАТФОРМА ДЛЯ ВСЕХ
            </span>
          </motion.div>

          {/* Headline */}
          <HeroTitleAnimation className="max-w-4xl" />

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-500 sm:text-lg"
          >
            Превращает хаотичный поток клиентских обращений в
            <br className="hidden sm:block" />
            контролируемый, прозрачный и измеримый процесс — обращения,
            <br className="hidden sm:block" />
            звонки и чаты в одном месте.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12"
          >
            <button
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="group inline-flex items-center gap-2 rounded-full bg-zinc-950 px-8 py-4 text-base font-medium text-white transition-all hover:bg-zinc-800 hover:shadow-[0_0_40px_-8px_rgba(0,0,0,0.35)]"
            >
              Показать возможности
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-24 flex flex-wrap items-center justify-center gap-10 sm:gap-16"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
                <Clock className="h-5 w-5 text-zinc-700" />
              </div>
              <span className="text-sm text-zinc-500">В реальном времени</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
                <MessageSquare className="h-5 w-5 text-zinc-700" />
              </div>
              <span className="text-sm text-zinc-500">Все каналы вместе</span>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50">
                <CheckCircle2 className="h-5 w-5 text-zinc-700" />
              </div>
              <span className="text-sm text-zinc-500">Полный контроль</span>
            </div>
          </motion.div>
        </div>
      </div>
    </ArcRevealHero>
  );
}
