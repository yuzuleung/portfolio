import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Soft Witness"
};

const pdfPages = Array.from({ length: 30 }, (_, index) => `/assets/google-ux-case-pages/page-${String(index + 1).padStart(2, "0")}.png`);

export default function SoftWitnessPage() {
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

        <div className="mt-12 space-y-8">
          {pdfPages.map((page, index) => (
            <figure key={page} className="bg-white">
              <img
                src={page}
                alt={`Google UX Design Certificate Portfolio Project page ${index + 1}`}
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
