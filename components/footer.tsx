const NAV_LINKS = [
  { label: "Продукт", href: "#product" },
  { label: "Возможности", href: "#features" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-5 py-14 sm:py-16">
        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row sm:items-center">
          <div className="max-w-sm">
            <span className="font-[family-name:var(--font-display)] text-lg font-extrabold tracking-[-0.02em] text-zinc-950">
              CRM ДБО УКП
            </span>
            <p className="mt-2 text-sm leading-relaxed text-zinc-500">
              Единая рабочая среда для обращений, звонков и чатов —
              контролируемый и прозрачный процесс с первого дня.
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:support@example.com"
              className="text-sm text-zinc-500 transition-colors hover:text-zinc-950"
            >
              Написать в поддержку
            </a>
          </nav>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-zinc-100 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-zinc-400">
            © {new Date().getFullYear()} CRM ДБО УКП. Все права защищены.
          </p>
          <p className="text-xs text-zinc-400">Внутренний продукт банка</p>
        </div>
      </div>
    </footer>
  );
}
