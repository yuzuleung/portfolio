import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Civic Signals Case Study"
};

const details = [
  ["Category", "Research / Mapping / Visual Systems"],
  ["Role", "Researcher, information designer, visual designer"],
  ["Focus", "Civic behavior, spatial observation, social patterns"],
  ["Output", "Mapping system, research narrative, visual identity direction"]
];

const sections = [
  {
    label: "Context",
    title: "Reading social space through traces, routes, and everyday decisions.",
    body:
      "Civic Signals is a research and mapping study exploring how people move through public space, how informal patterns emerge, and how visual systems can make complex social behavior easier to read."
  },
  {
    label: "Approach",
    title: "Observation first, form second.",
    body:
      "The project uses field observation, route mapping, photographic references, and layered notation to translate scattered behavioral signals into a visual language."
  },
  {
    label: "System",
    title: "A quiet graphic system for complex information.",
    body:
      "Lines, pins, annotations, and image fragments are arranged as a flexible mapping system. The goal is not to over-explain the city, but to reveal relationships that are usually felt before they are named."
  },
  {
    label: "Outcome",
    title: "A research artifact that sits between map, essay, and visual identity.",
    body:
      "The final direction frames civic space as a living network of choices, interruptions, and rituals, giving the project a voice that is analytical but still tactile and human."
  }
];

export default function CivicSignalsPage() {
  return (
    <main className="min-h-screen bg-white text-[#171512]">
      <section className="min-h-screen px-5 pb-20 pt-32 md:px-16">
        <div className="mx-auto max-w-7xl">
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

          <div className="mt-24 max-w-4xl">
            <h1 className="text-[clamp(4rem,12vw,11rem)] font-black leading-[0.82] tracking-normal text-[#d9f5e9]">
              Civic Signals
            </h1>
            <p className="mt-8 text-[clamp(1.8rem,3.3vw,3.7rem)] font-semibold leading-[1.08] tracking-normal">
              Mapping public behavior through spatial research, notation, and visual systems.
            </p>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/58">
              A research-led design case study about turning civic movement, memory, and informal urban patterns into a
              refined visual narrative.
            </p>
          </div>

          <div className="mt-24 grid gap-8 border-y border-black/10 py-8 md:grid-cols-4">
            {details.map(([label, value]) => (
              <div key={label}>
                <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-black/36">{label}</p>
                <p className="mt-4 text-sm font-semibold leading-6 text-black/72">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-28 md:px-16">
        <div className="mx-auto max-w-7xl">
          <figure className="overflow-hidden bg-[#f4f6f3]">
            <img
              src="/assets/project-map.png"
              alt="Civic mapping research materials"
              className="h-[62vh] w-full object-cover opacity-80 saturate-75"
            />
          </figure>
        </div>
      </section>

      {sections.map((section) => (
        <section key={section.label} className="px-5 py-24 md:px-16 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-10 border-t border-black/10 pt-8 lg:grid-cols-[0.28fr_1fr]">
            <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-black/38">{section.label}</p>
            <div>
              <h2 className="max-w-4xl text-[clamp(2.6rem,6vw,6.8rem)] font-black leading-[0.88] tracking-normal text-[#d9f5e9]">
                {section.title}
              </h2>
              <p className="mt-10 max-w-2xl text-xl leading-9 text-black/62">{section.body}</p>
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
