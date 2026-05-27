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
        <div className="border-t border-black/15 pt-7 text-center">
          <h1 className="text-2xl font-bold leading-9 tracking-[0.08em] text-tomato">
            Exploring human experiences
            <br />
            through product, visual storytelling, data and interactive technology.
          </h1>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title}>
              <Link
                href={project.href ?? "#"}
                className="group relative block aspect-[16/9] overflow-hidden bg-neutral-100 shadow-[0_18px_45px_rgba(23,21,18,0.12)]"
                data-cursor="button"
              >
                <figure className="h-full w-full">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.035] group-hover:saturate-75"
                  />
                </figure>
                <div className="absolute inset-0 flex flex-col justify-end bg-neutral-500/0 p-7 text-white opacity-0 transition duration-300 group-hover:bg-neutral-500/60 group-hover:opacity-100 group-focus-visible:bg-neutral-500/60 group-focus-visible:opacity-100 md:p-9">
                  <span className="mb-7 h-1 w-12 bg-tomato" />
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/75 drop-shadow">{project.type}</p>
                  <h2 className="mt-3 max-w-md text-[clamp(1.25rem,2vw,2.125rem)] font-semibold leading-tight tracking-normal drop-shadow-lg">
                    {project.title}
                  </h2>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
