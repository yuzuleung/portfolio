import Image from "next/image";
import type { Metadata } from "next";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "ABOUT ME"
};

const journey = [
  {
    company: "Rakuten",
    roles: [
      {
        period: "2026.5 - Present",
        title: "Senior Product Manager",
        text: "Working on travel and advertising platform products in an international, cross-functional environment."
      }
    ]
  },
  {
    company: "KDDI",
    roles: [
      {
        period: "2022.3 - 2026.4",
        title: "Product Manager",
        text: "Led product planning, UX improvements, and frontend implementation for au PAY fintech services, working across product, design, engineering, and QA."
      },
      {
        period: "2022.12 - 2026.2",
        title: "Frontend Engineer",
        text: "Developed and maintained frontend applications for payment and fintech platforms."
      }
    ]
  },
  {
    company: "Fujitsu",
    roles: [
      {
        period: "2020.6 - 2022.2",
        title: "Consultant",
        text: "Built a foundation in enterprise systems, healthcare workflows, client communication, and structured problem solving."
      },
      {
        period: "2019.4 - 2020.5",
        title: "System Engineer",
        text: "Participated in the development and maintenance of healthcare systems for hospitals and medical institutions."
      }
    ]
  }
];

const education = [
  {
    school: "Musashino Art University",
    degree: "Bachelor of Design Information",
    period: "2025.04 - Present",
    focus: "Focused on web design, information design, graphic design, visual communication, and creative expression."
  },
  {
    school: "Okayama University",
    degree: "Master of Pharmacy",
    period: "2016.10 - 2018.09",
    focus:
      "Conducted a genetic analysis study on bacteria that cause food poisoning. Built a research-based foundation in scientific thinking, analytical reasoning, and structured problem solving."
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
    title: "Product",
    items: [
      "Product Strategy",
      "Requirement Definition",
      "Agile/Scrum",
      "Stakeholder Communication",
      "Data-informed UX Improvement",
      "Product Management",
      "Project Management"
    ]
  },
  {
    title: "Design",
    items: [
      "UI/UX Design",
      "Product Design",
      "Information Design",
      "Design Systems",
      "Creative Strategy",
      "Graphic Design",
      "Social Project Design"
    ]
  },
  {
    title: "Technical",
    items: ["Next.js",
      "React",
      "Vue",
      "TypeScript",
      "Javascript",
      "HTML5 / CSS",
      "PHP",
      "GitHub",
      "AWS",
      "Figma",
      "Illustration",
      "Photoshop",
      "Lightroom"]
  }
];

const certifications = [
  "Google UX Design Professional Certificate",
  "Advanced Certified Scrum Product Owner",
  "Certified Scrum Developer",
  "Certified Scrum Master",
  "Meta Front-End Developer Professional Certificate"
];

const languages = [
  { name: "Chinese", level: "Native", width: "100%" },
  { name: "Japanese", level: "Native", width: "100%" },
  { name: "English", level: "Professional", width: "84%" }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-bold uppercase tracking-[0.2em] text-tomato">{children}</p>;
}

function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M6.5 4.5h11v9.2l-3.2 1.1L12 17l-2.3-2.2-3.2-1.1V4.5Z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
        d="M9 8h6M9 11h6m-5.2 4.2L8.7 20l3.3-1.7 3.3 1.7-1.1-4.8"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-28 text-ink md:px-16">
      <section className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-20">
        <div>
          <SectionLabel>About</SectionLabel>
          <h1 className="mt-6 max-w-4xl font-barlow text-[clamp(2.6rem,4vw,5.8rem)] font-semibold leading-[0.98] tracking-normal text-ink">
            Product, UX, Frontend and Visual Storytelling.
          </h1>
          <p className="mt-20 max-w-3xl text-lg leading-8 text-neutral-600">
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
            <div className="relative mt-5 space-y-10 pl-10 before:absolute before:left-[7px] before:top-10 before:h-[calc(100%-2.5rem)] before:w-px before:bg-neutral-200">
              {journey.map((item) => (
                <article
                  key={item.company}
                  className="relative pt-7 before:absolute before:-left-10 before:top-8 before:h-3.5 before:w-3.5 before:rounded-full before:bg-neutral-400"
                >
                  <h2 className="text-2xl font-semibold leading-tight tracking-normal text-ink">{item.company}</h2>
                  <div className="mt-5 space-y-7">
                    {item.roles.map((role) => (
                      <div key={`${item.company}-${role.title}`}>
                        <p className="text-xs font-semibold leading-6 tracking-[0.12em] text-neutral-400">{role.period}</p>
                        <h3 className="mt-1 text-base font-semibold tracking-normal text-tomato">{role.title}</h3>
                        <p className="mt-3 max-w-2xl text-base leading-7 text-neutral-600">{role.text}</p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="mt-20">
            <SectionLabel>Education</SectionLabel>
            <div className="mt-7 space-y-6">
              {education.map((item) => (
                <article key={item.school}>
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                    <h2 className="text-2xl font-semibold leading-tight tracking-normal text-ink">{item.school}</h2>
                    <p className="shrink-0 text-xs font-bold leading-6 tracking-[0.14em] text-neutral-400">{item.period}</p>
                  </div>
                  <p className="mt-2 text-base font-semibold tracking-normal text-tomato">{item.degree}</p>
                  <p className="mt-4 max-w-3xl text-base leading-7 text-neutral-600">{item.focus}</p>
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

          <section className="mt-20 pt-8">
            <SectionLabel>Beyond Work</SectionLabel>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-neutral-600">
              I’m inspired by photography, travel, and psychology. I enjoy observing how emotions, memories, and
              aesthetics influence the way people experience products and spaces.
            </p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-neutral-600">
              I am also a freelance photographer, capturing emotions, cultures, and diverse experiences through my lens.
            </p>
          </section>
        </div>

        <aside className="lg:pt-12">
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

          <section className="mt-8 pt-6 lg:mt-10">
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

          <section className="mt-10 pt-7">
            <SectionLabel>Credentials</SectionLabel>
            <div className="mt-6 space-y-3">
              {certifications.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm font-semibold leading-6 text-neutral-700">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-black/10 text-tomato">
                    <CertificateIcon />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10 pt-7">
            <SectionLabel>Languages</SectionLabel>
            <div className="mt-6 space-y-3">
              {languages.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <span className="text-neutral-600">{item.name}</span>
                    <span className="font-semibold text-ink">{item.level}</span>
                  </div>
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-neutral-100">
                    <span className="block h-full rounded-full bg-tomato/70" style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </aside>
      </section>
    </main>
  );
}
