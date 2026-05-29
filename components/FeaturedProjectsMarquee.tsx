import Link from "next/link";
import { projects } from "@/lib/projects";

export function FeaturedProjectsMarquee() {
  const marqueeProjects = [...projects, ...projects];

  return (
    <section aria-labelledby="featured-projects-title" className="w-full overflow-hidden pb-24">
      <div className="mx-auto mb-9 max-w-6xl px-5 md:px-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">Featured Projects</p>
        <h2 id="featured-projects-title" className="mt-4 max-w-2xl text-2xl font-semibold leading-snug tracking-normal text-ink md:text-3xl">
          Selected explorations across UX, storytelling, data and interactive technology.
        </h2>
      </div>

      <div className="featured-marquee overflow-x-auto overflow-y-hidden">
        <div className="featured-marquee-track flex w-max gap-4 px-5 md:gap-6 md:px-16">
          {marqueeProjects.map((project, index) => (
            <article
              key={`${project.href}-${index}`}
              className="w-[78vw] shrink-0 sm:w-[24rem] md:w-[30rem] lg:w-[36rem]"
            >
              <Link
                href={project.href}
                className="group relative block aspect-video overflow-hidden rounded-sm bg-neutral-100 shadow-[0_22px_70px_rgba(23,21,18,0.12)] outline-none transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(23,21,18,0.16)] focus-visible:-translate-y-1"
                data-cursor="button"
              >
                {/* Replace project.image with your final project image when the project artwork is ready. */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04] group-hover:saturate-[0.86]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/18 to-black/4 transition duration-500 group-hover:from-black/84 group-hover:via-black/34" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/70 transition duration-300 group-hover:text-white">
                    {project.category}
                  </p>
                  <h3 className="mt-2 max-w-[22rem] text-2xl font-semibold leading-tight tracking-normal text-white/84 transition duration-300 group-hover:text-white md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-[24rem] text-sm leading-6 text-white/72 transition duration-300 group-hover:text-white/88">
                    {project.description}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
