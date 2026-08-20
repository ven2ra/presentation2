"use client";

import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { Button } from "@/components/ui/button";

const IMAGES = [
  { src: "/images/main-admin.jpg", alt: "Главная страница системы" },
  { src: "/images/new-appeal.jpg", alt: "Форма создания нового обращения" },
  { src: "/images/appeals-list.jpg", alt: "Список обращений" },
  { src: "/images/new-call.jpg", alt: "Форма записи нового звонка" },
  { src: "/images/calls-list.jpg", alt: "Список клиентских звонков" },
  { src: "/images/new-chat.jpg", alt: "Форма создания нового чата" },
  { src: "/images/chats-list.jpg", alt: "Список чатов" },
  { src: "/images/nearest.jpg", alt: "Раздел «Мои ближайшие»" },
  { src: "/images/history.jpg", alt: "История обращений" },
  { src: "/images/dashboard.jpg", alt: "Дашборд администратора" },
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
          <Button
            size="lg"
            className="h-12 rounded-full px-8 text-base font-medium shadow-sm transition-all hover:shadow-md"
          >
            Посмотреть возможности
          </Button>
        </div>
      </div>
    </ImageStreamHero>
  );
}
