import Link from "next/link";
import type { Metadata } from "next";
import { FeaturedProjectsMarquee } from "@/components/FeaturedProjectsMarquee";

export const metadata: Metadata = {
  title: {
    absolute: "HOME | Yong Liang"
  }
};

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-8rem)] bg-white pt-28 text-ink">
      <section className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center px-5 pb-14 text-center md:px-16">
        <h1 className="max-w-6xl font-barlow text-[clamp(1.55rem,3vw,3.25rem)] font-medium leading-[1.18] tracking-normal text-[#263039]">
          <span className="block">Hi! I&apos;m Yong Liang.</span>
          <span className="block">I’m a Product Manager / UX Designer</span>
          <span className="block">with a Front-End Engineer background.</span>
        </h1>
        <p className="mt-8 flex flex-wrap items-center justify-center gap-x-2.5 gap-y-2 text-xs font-bold uppercase tracking-[0.18em] text-tomato md:gap-x-3.5 md:text-sm">
          <span>Product Manager</span>
          <span className="text-tomato/45">/</span>
          <span>UI/UX Designer</span>
          <span className="text-tomato/45">/</span>
          <span>Frontend Engineer</span>
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-6 font-semibold text-white"
            data-cursor="button"
          >
            View work
          </Link>
        </div>
      </section>
      <FeaturedProjectsMarquee />
      {/* Optional: add photography identity section here later. Future section: Through My Lens. */}
    </main>
  );
}
