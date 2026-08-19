"use client";

import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

export interface ImageStreamHeroImage {
  src: string;
  alt: string;
}

export interface ImageStreamHeroProps
  extends React.HTMLAttributes<HTMLDivElement> {
  images: ImageStreamHeroImage[];
  cards?: number;
  speed?: number;
  axis?: number;
  children?: React.ReactNode;
}

export function ImageStreamHero({
  images,
  cards = 8,
  speed = 20,
  axis = 45,
  className,
  children,
  ...props
}: ImageStreamHeroProps) {
  const columns = React.useMemo(() => {
    const count = Math.max(1, cards);
    return Array.from({ length: count }, (_, columnIndex) => {
      const columnImages = Array.from(
        { length: Math.max(2, Math.ceil(images.length / count) + 1) },
        (_, i) => images[(columnIndex + i * count) % images.length]
      ).filter(Boolean);
      return columnImages;
    });
  }, [images, cards]);

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center gap-4"
        style={{
          transform: `rotate(${axis - 90}deg) scale(1.6)`,
        }}
        aria-hidden="true"
      >
        {columns.map((columnImages, columnIndex) => {
          const reverse = columnIndex % 2 === 1;
          const duration = speed + (columnIndex % 3) * 4;
          return (
            <div
              key={columnIndex}
              className="relative h-[140vmax] w-32 shrink-0 overflow-hidden sm:w-40"
            >
              <div
                className="absolute inset-x-0 top-0 flex flex-col gap-4"
                style={{
                  animation: `image-stream-scroll ${duration}s linear infinite`,
                  animationDirection: reverse ? "reverse" : "normal",
                }}
              >
                {[...columnImages, ...columnImages].map((image, i) => (
                  <div
                    key={`${image.src}-${i}`}
                    className="relative aspect-[3/2] w-full overflow-hidden rounded-xl border border-border/50 bg-muted shadow-sm"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="200px"
                      className="object-cover opacity-80"
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" />

      <div className="relative z-10 h-full">{children}</div>

      <style jsx global>{`
        @keyframes image-stream-scroll {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-50%);
          }
        }
      `}</style>
    </div>
  );
}
