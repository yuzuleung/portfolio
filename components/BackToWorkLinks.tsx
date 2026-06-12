"use client";

import Link from "next/link";

export function BackArrow() {
  return (
    <span className="relative h-3 w-6" aria-hidden="true">
      <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-3 origin-left -translate-y-1/2 rotate-[-35deg] bg-current" />
    </span>
  );
}

export function TopBackToWork() {
  return (
    <Link
      id="top-back-to-projects"
      href="/projects"
      className="inline-flex items-center text-neutral-500 transition-colors hover:text-black focus-visible:text-black"
      aria-label="Back to projects"
      data-cursor="button"
    >
      <BackArrow />
    </Link>
  );
}

export function BottomBackToWork({ className = "", linkClassName = "" }: { className?: string; linkClassName?: string }) {
  return (
    <div className={`pt-7 ${className}`}>
      <Link
        href="/projects"
        className={`inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] transition hover:text-black ${linkClassName}`}
        data-cursor="button"
      >
        <BackArrow />
        Back to Projects
      </Link>
    </div>
  );
}
