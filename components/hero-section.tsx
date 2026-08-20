"use client";

import { motion } from "framer-motion";
import { Clock, MessageSquare, CheckCircle2 } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Radial glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8f000]/15 blur-[120px]" />

      {/* Decorative shapes */}
      <div className="pointer-events-none absolute left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-3xl border border-[#c8f000]/20" />
      <div className="pointer-events-none absolute right-20 top-32 h-32 w-32 rounded-full border border-[#c8f000]/15" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10 inline-flex items-center gap-2 rounded-full border border-[#c8f000]/40 bg-[#c8f000]/10 px-4 py-1.5"
        >
          <span className="h-2 w-2 rounded-full bg-[#c8f000]" />
          <span className="text-xs font-medium tracking-wide text-[#c8f000]">
            ПЛАТФОРМА ДЛЯ ВСЕХ
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl text-4xl font-semibold leading-[1.15] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]"
        >
          Единая рабочая
          <br />
          среда для
          <br />
          обращений,
          <br />
          звонков и чатов
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg"
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
            className="group inline-flex items-center gap-2 rounded-full bg-[#c8f000] px-8 py-4 text-base font-medium text-black transition-all hover:bg-[#d4ff1a] hover:shadow-[0_0_40px_-8px_#c8f000]"
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
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
              <Clock className="h-5 w-5 text-[#c8f000]" />
            </div>
            <span className="text-sm text-zinc-400">В реальном времени</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
              <MessageSquare className="h-5 w-5 text-[#c8f000]" />
            </div>
            <span className="text-sm text-zinc-400">Все каналы вместе</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">
              <CheckCircle2 className="h-5 w-5 text-[#c8f000]" />
            </div>
            <span className="text-sm text-zinc-400">Полный контроль</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
