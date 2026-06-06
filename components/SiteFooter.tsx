export function SiteFooter() {
  return (
    <footer
      className="relative z-10 flex flex-col items-center justify-center gap-4 px-5 py-4 text-neutral-500 md:flex-row md:gap-5"
    >
      <p className="text-sm font-medium">© 2026 Yong Liang | Tokyo</p>
      <div className="flex items-center gap-3">
        <a
          href="https://www.linkedin.com/in/yong-liang-022158202/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-neutral-700"
          aria-label="LinkedIn"
          data-cursor="button"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
            <path fill="currentColor" d="M5 12h5v15H5V12Zm2.5-7A2.7 2.7 0 1 1 7.5 10 2.7 2.7 0 0 1 7.5 5ZM13 12h4.8v2.1h.1c.7-1.3 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.5V27h-5v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V27H13V12Z" />
          </svg>
        </a>
        <a
          href="mailto:yliang.jp@gmail.com"
          className="inline-flex h-7 w-7 items-center justify-center rounded-full text-neutral-700"
          aria-label="Email"
          data-cursor="button"
        >
          <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 9h22v15H5z"
            />
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="m5 10 11 8 11-8"
            />
          </svg>
        </a>
      </div>
    </footer>
  );
}
