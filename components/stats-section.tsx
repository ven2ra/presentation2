"use client";

import * as React from "react";

const STATS = [
  {
    from: 5,
    to: 10,
    label: "обращений в день",
    suffix: "в среднем на отдел",
  },
  {
    from: null,
    to: 3,
    label: "канала в одном окне",
    suffix: "обращения, звонки, чаты",
  },
  {
    from: null,
    to: 1,
    label: "система вместо нескольких",
    suffix: "без таблиц и мессенджеров",
  },
];

const DURATION = 1400;

function easeOutExpo(t: number) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

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
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return { ref, revealed };
}

function useCountUp(target: number, active: boolean, delay = 0) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;

    let frame: number;
    let start: number | null = null;
    const timeout = window.setTimeout(() => {
      const tick = (timestamp: number) => {
        if (start === null) start = timestamp;
        const progress = Math.min(1, (timestamp - start) / DURATION);
        setValue(Math.round(easeOutExpo(progress) * target));
        if (progress < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(frame);
    };
  }, [active, target, delay]);

  return value;
}

function StatValue({
  from,
  to,
  active,
}: {
  from: number | null;
  to: number;
  active: boolean;
}) {
  const toValue = useCountUp(to, active);
  const fromValue = useCountUp(from ?? 0, active);

  return (
    <span className="tabular-nums">
      {from !== null && (
        <>
          {fromValue}
          <span className="text-zinc-300">–</span>
        </>
      )}
      {toValue}
    </span>
  );
}

export default function StatsSection() {
  const { ref, revealed } = useRevealed<HTMLDivElement>();

  return (
    <section className="border-t border-zinc-100 bg-white px-5 py-28 sm:py-36">
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-[1200px] grid-cols-1 gap-16 sm:grid-cols-3 sm:gap-10"
      >
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            className="text-center transition-[opacity,transform] duration-700 ease-out"
            style={{
              opacity: revealed ? 1 : 0,
              transform: revealed ? "translateY(0)" : "translateY(24px)",
              transitionDelay: `${i * 120}ms`,
            }}
          >
            <div className="font-[family-name:var(--font-display)] text-7xl leading-none font-extrabold tracking-[-0.03em] text-zinc-950 sm:text-8xl lg:text-9xl">
              <StatValue from={stat.from} to={stat.to} active={revealed} />
            </div>
            <div className="mt-5 text-lg font-medium text-zinc-800 sm:text-xl">
              {stat.label}
            </div>
            <div className="mt-1 text-sm text-zinc-500 sm:text-base">
              {stat.suffix}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
