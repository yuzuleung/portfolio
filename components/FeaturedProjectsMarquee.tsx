import Link from "next/link";
import { projects } from "@/lib/projects";

export function FeaturedProjectsMarquee() {
  const marqueeProjects = [...projects, ...projects];

  return (
    <section aria-labelledby="featured-projects-title" className="mt-20 w-full overflow-hidden pb-20 md:mt-24">
      <div className="mx-auto mb-8 flex max-w-6xl items-end justify-between px-5 md:px-16">
        <h2
          id="featured-projects-title"
          className="text-xs font-bold uppercase tracking-[0.22em] text-tomato"
        >
          Featured Projects
        </h2>
      </div>

      <div className="featured-marquee overflow-x-auto overflow-y-hidden">
        <div className="featured-marquee-track flex w-max gap-4 px-5 md:gap-6 md:px-16">
          {marqueeProjects.map((project, index) => (
            <article
              key={`${project.href}-${index}`}
              className="w-[72vw] shrink-0 sm:w-[21rem] md:w-[28rem] lg:w-[34rem]"
            >
              <Link
                href={project.href}
                className="group relative block aspect-[16/10] overflow-hidden bg-neutral-100 shadow-[0_20px_60px_rgba(23,21,18,0.12)]"
                data-cursor="button"
              >
                {/* Replace project.image with your final project image when the project artwork is ready. */}
                <img
                  src={project.image}
                  alt={project.alt}
                  className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-black/18 transition duration-500 group-hover:bg-black/42" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-7">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/65 transition duration-300 group-hover:text-white/85">
                    {project.type}
                  </p>
                  <h3 className="mt-2 max-w-[18rem] text-xl font-semibold leading-tight tracking-normal text-white/78 transition duration-300 group-hover:text-white md:text-2xl">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
