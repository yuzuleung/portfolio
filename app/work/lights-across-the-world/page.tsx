import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lights Across the World"
};

export default function LightsAcrossTheWorldPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-20 pt-32 text-[#171512] md:px-16">
      <section className="mx-auto max-w-7xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-black focus-visible:text-black"
          data-cursor="button"
        >
          <span className="relative h-3 w-6" aria-hidden="true">
            <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
            <span className="absolute left-0 top-1/2 h-px w-3 origin-left -translate-y-1/2 rotate-[-35deg] bg-current" />
          </span>
          Back to work
        </Link>

        <p className="mt-24 max-w-4xl text-[clamp(1.2rem,3vw,3rem)] font-semibold leading-[1.02] tracking-normal text-tomato">
          An ambient lighting experience synchronized with sunrise and sunset worldwide.
        </p>
      </section>
    </main>
  );
}
