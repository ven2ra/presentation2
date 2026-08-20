"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#0B0F19]">
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B0F19] via-[#111827] to-[#1e1b4b]" />
      <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-violet-600/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-20 lg:flex-row lg:py-28">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl text-center lg:text-left"
        >
          <h1 className="font-[family-name:var(--font-display)] text-4xl leading-[1.12] font-extrabold tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
            Единая рабочая среда
            <br />
            для обращений, звонков и чатов
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-slate-300 sm:text-xl">
            Превращает хаотичный поток клиентских обращений в контролируемый,
            прозрачный и измеримый процесс — обращения, звонки и чаты в одном месте.
          </p>

          <div className="mt-10 flex justify-center lg:justify-start">
            <Button
              size="lg"
              onClick={() =>
                document
                  .getElementById("features")
                  ?.scrollIntoView({ behavior: "smooth", block: "start" })
              }
              className="h-13 rounded-full bg-white px-8 text-base font-medium text-black hover:bg-slate-100"
            >
              Посмотреть возможности
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Product screenshot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative w-full max-w-lg lg:max-w-xl"
        >
          <div className="relative aspect-[4/3]">
            <img
              src="/images/main-admin.png"
              alt="Главная страница системы"
              className="h-full w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/10"
            />
            {/* Soft glow under the screenshot */}
            <div className="absolute -bottom-10 left-1/2 h-24 w-3/4 -translate-x-1/2 rounded-full bg-violet-500/30 blur-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
