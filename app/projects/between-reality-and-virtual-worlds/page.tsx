import type { Metadata } from "next";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Between Reality and Virtual Worlds"
};

const caseStudyImages = Array.from(
  { length: 12 },
  (_, index) => assetPath(`/assets/reality-virtual-worlds/page-${String(index + 1).padStart(2, "0")}.jpg`)
);

const tags = ["Speculative Design", "Future Experience", "AI", "3D Scanning", "Virtual Travel"];

export default function BetweenRealityAndVirtualWorldsPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-10 pt-20 text-[#171512] md:px-16 md:pt-24">
      <section className="mx-auto max-w-7xl">
        <TopBackToWork />

        <div className="mt-8 max-w-5xl">
          <div className="flex gap-2.5 overflow-x-auto whitespace-nowrap pb-1">
            {tags.map((tag) => (
              <span key={tag} className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="mt-8 max-w-4xl font-barlow text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-normal">
            Between Reality and Virtual Worlds
          </h1>
          <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600">
          Preserving disappearing cities and memories through AI, 3D scanning and virtual travel.
          </p>
        </div>

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

        <BottomBackToWork className="text-neutral-500" />
      </section>
    </main>
  );
}
