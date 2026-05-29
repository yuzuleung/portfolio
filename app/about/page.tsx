import Image from "next/image";
import type { Metadata } from "next";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "ABOUT ME"
};

const journey = [
  {
    company: "Fujitsu",
    period: "2019.4 - 2022.2",
    role: "Systems Engineering → Healthcare DX Consulting",
    focus: "Built a foundation in enterprise systems, healthcare workflows, and structured problem solving.",
    strengths: ["Systems Thinking", "Client Communication", "Healthcare DX"]
  },
  {
    company: "KDDI",
    period: "2022.3 - 2026.4",
    role: "Product Management + Frontend Engineering",
    focus: "Moved closer to user experience through fintech product planning, UX improvement, and frontend implementation.",
    strengths: ["Product Planning", "UX Improvement", "React / Frontend"]
  },
  {
    company: "Rakuten",
    period: "2026.5 - Present",
    role: "Senior Product Manager",
    focus: "Working on travel and advertising platform products in an international, cross-functional environment.",
    strengths: ["Product Strategy", "Agile Delivery", "Global Collaboration"]
  }
];

const pillars = [
  {
    title: "Product",
    text: "Defining clear product direction, aligning teams, and turning ambiguous needs into useful experiences."
  },
  {
    title: "UX",
    text: "Designing flows, structures, and interactions that reduce friction and support real user behavior."
  },
  {
    title: "Frontend",
    text: "Understanding how interface decisions become real products through code, systems, and constraints."
  },
  {
    title: "Design",
    text: "Using visual hierarchy, rhythm, and storytelling to make digital experiences feel thoughtful."
  }
];

const skillGroups = [
  {
    title: "Design",
    items: ["UI/UX Design", "Product Design", "Visual Systems", "Typography", "Creative Strategy", "Illustration"]
  },
  {
    title: "Technical",
    items: ["Next.js", "React", "Typescript", "HTML5", "CSS", "PHP", "AWS", "Figma", "Illustrator", "Photoshop", "Lightroom"]
  }
];

const certifications = ["Google UX Design", "Advanced CSPO & CSD", "Meta Frontend Developer", "Certified Scrum Master"];

const languages = [
  { name: "Chinese", level: "Native" },
  { name: "Japanese", level: "Business" },
  { name: "English", level: "Professional" }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">{children}</p>;
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-28 text-ink md:px-16">
      <section className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div>
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-barlow text-[clamp(2.6rem,6vw,5.8rem)] font-semibold leading-[0.98] tracking-normal text-ink">
            Product, UX, code and visual storytelling.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600">
            I’m Yong Liang, a Tokyo-based multidisciplinary designer and product professional working across{" "}
            <span className="font-semibold text-tomato">product</span>,{" "}
            <span className="font-semibold text-tomato">UX</span>,{" "}
            <span className="font-semibold text-tomato">frontend</span>, and{" "}
            <span className="font-semibold text-tomato">design</span>. My background connects enterprise systems,
            fintech products, platform strategy, and creative technology.
          </p>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
            I care about calm interfaces, useful systems, and stories that make technology feel more human.
          </p>

          <section className="mt-16 md:mt-20">
            <SectionLabel>Growth Journey</SectionLabel>
            <div className="mt-8 space-y-8">
              {journey.map((item, index) => (
                <article key={item.company} className="grid gap-5 border-t border-black/10 pt-7 md:grid-cols-[120px_minmax(0,1fr)]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">{item.period}</p>
                    <p className="mt-3 text-xs font-semibold text-neutral-400">{String(index + 1).padStart(2, "0")}</p>
                  </div>
                  <div>
                    <h2 className="text-3xl font-semibold leading-tight tracking-normal text-ink">{item.company}</h2>
                    <p className="mt-2 text-sm font-bold uppercase tracking-[0.14em] text-tomato">{item.role}</p>
                    <p className="mt-4 max-w-2xl text-base leading-7 text-neutral-600">{item.focus}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.strengths.map((strength) => (
                        <span key={strength} className="rounded-full border border-black/10 px-3 py-1.5 text-xs font-semibold text-neutral-600">
                          {strength}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <SectionLabel>How I Work</SectionLabel>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {pillars.map((pillar) => (
                <article key={pillar.title} className="border border-black/10 p-6">
                  <h2 className="text-2xl font-semibold tracking-normal text-ink">{pillar.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-neutral-600">{pillar.text}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-20 border-t border-black/10 pt-8">
            <SectionLabel>Beyond Work</SectionLabel>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              I’m inspired by photography, travel, architecture, and visual culture. Recently, I’ve been exploring how
              design, storytelling, and creative technology can shape emotional digital experiences.
            </p>
          </section>
        </div>

        <aside className="space-y-10 lg:pt-24">
          <section>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
              <Image
                src={assetPath("/assets/AboutMe.JPG")}
                alt="Yong Liang"
                fill
                className="object-cover"
                sizes="340px"
                priority
              />
            </div>
          </section>

          <section className="border-t border-black/10 pt-7">
            <SectionLabel>Skills</SectionLabel>
            <div className="mt-6 space-y-8">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-base font-semibold text-ink">{group.title}</h2>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full bg-neutral-100 px-3 py-1.5 text-xs font-semibold text-neutral-600">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-black/10 pt-7">
            <SectionLabel>Credentials</SectionLabel>
            <div className="mt-6 space-y-3">
              {certifications.map((item) => (
                <p key={item} className="text-sm font-semibold text-neutral-700">
                  {item}
                </p>
              ))}
            </div>
          </section>

          <section className="border-t border-black/10 pt-7">
            <SectionLabel>Languages</SectionLabel>
            <div className="mt-6 space-y-3">
              {languages.map((item) => (
                <div key={item.name} className="flex items-center justify-between gap-4 text-sm">
                  <span className="text-neutral-600">{item.name}</span>
                  <span className="font-semibold text-ink">{item.level}</span>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
