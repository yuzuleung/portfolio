import { projects } from "@/lib/projects";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "WORK"
};

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-28 text-ink md:px-16">
      <section className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl border-t border-black/15 pt-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-500">Selected Projects</p>
          <h1 className="mt-6 text-[clamp(1.65rem,3.2vw,3.25rem)] font-semibold leading-[1.08] tracking-normal text-tomato">
            Exploring human experiences
            <br />
            through product, visual storytelling, data and interactive technology.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-neutral-500">
            A curated set of work across product thinking, UX systems, creative technology, and visual narratives.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {projects.map((project) => (
            <article key={project.title} className="group">
              <Link
                href={project.href ?? "#"}
                className="block outline-none"
                data-cursor="button"
              >
                <figure className="relative aspect-video overflow-hidden rounded-sm bg-neutral-100 shadow-[0_18px_55px_rgba(23,21,18,0.10)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_26px_80px_rgba(23,21,18,0.15)]">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04] group-hover:saturate-[0.86]"
                  />
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/28" />
                </figure>
                <div className="border-b border-black/10 pb-8 pt-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-tomato">{project.category}</p>
                  <div className="mt-3 flex items-start justify-between gap-6">
                    <div>
                      <h2 className="text-2xl font-semibold leading-tight tracking-normal text-ink">{project.title}</h2>
                      <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">{project.description}</p>
                    </div>
                    <span className="mt-1 shrink-0 text-xs font-bold uppercase tracking-[0.16em] text-neutral-400 transition-colors group-hover:text-ink">
                      View Project →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
