import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Between Reality and Virtual Worlds"
};

const caseStudyImages = Array.from(
  { length: 12 },
  (_, index) => `/assets/reality-virtual-worlds/page-${String(index + 1).padStart(2, "0")}.jpg`
);

export default function BetweenRealityAndVirtualWorldsPage() {
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
          Preserving disappearing cities and memories through AI, 3D scanning and virtual travel.
        </p>

        <div className="mt-16 space-y-8">
          {caseStudyImages.map((image, index) => (
            <figure key={image} className="bg-white">
              <img
                src={image}
                alt={`Between Reality and Virtual Worlds case study page ${index + 1}`}
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
