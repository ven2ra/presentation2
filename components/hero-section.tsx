"use client";

import { ImageStreamHero } from "@/components/ui/image-stream-hero";
import { Button } from "@/components/ui/button";

const IMAGES = [
  {
    src: "/images/new-appeal.jpg",
    alt: "Форма создания нового обращения",
  },
  {
    src: "/images/nearest.jpg",
    alt: "Раздел «Мои ближайшие»",
  },
  {
    src: "/images/new-call.jpg",
    alt: "Форма записи нового звонка",
  },
  {
    src: "/images/appeal-card.jpg",
    alt: "Карточка обращения",
  },
  {
    src: "/images/call-detail.jpg",
    alt: "Детальная карточка звонка",
  },
  {
    src: "/images/history-empty.jpg",
    alt: "История обращений — пустой поиск",
  },
  {
    src: "/images/history-filled.jpg",
    alt: "История обращений с результатами",
  },
  {
    src: "/images/dashboard.jpg",
    alt: "Дашборд администратора",
  },
  {
    src: "/images/new-chat.jpg",
    alt: "Форма создания нового чата",
  },
  {
    src: "/images/main-admin.jpg",
    alt: "Главная страница администратора",
  },
];

export default function HeroSection() {
  return (
    <ImageStreamHero
      images={IMAGES}
      className="h-[640px] w-full bg-background"
      cards={9}
      speed={18}
      axis={55}
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-center gap-8 px-6 text-center">
        <div className="max-w-3xl space-y-5">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Единая рабочая среда<br />
            для обращений, звонков и чатов
          </h1>
          <p className="mx-auto max-w-xl text-balance text-base text-muted-foreground sm:text-lg">
            Превращает хаотичный поток клиентских обращений в контролируемый, прозрачный и измеримый процесс.
          </p>
        </div>

        <Button size="lg" className="mt-2 px-8">
          Посмотреть возможности
        </Button>
      </div>
    </ImageStreamHero>
  );
}
