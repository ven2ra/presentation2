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
      className="h-[680px] w-full bg-background"
      cards={9}
      speed={18}
      axis={52}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-balance text-[2.75rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
            Единая рабочая среда
            <br />
            для обращений, звонков и чатов
          </h1>

          <p className="mx-auto max-w-xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Превращает хаотичный поток клиентских обращений
            <br className="hidden sm:block" />
            в контролируемый, прозрачный и измеримый процесс
          </p>
        </div>

        <div className="mt-10">
          <LiquidButton size="xl" className="text-base font-medium text-foreground">
            Посмотреть возможности
          </LiquidButton>
        </div>
      </div>
    </ImageStreamHero>
  );
}
