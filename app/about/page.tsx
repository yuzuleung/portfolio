import Image from "next/image";
import type { Metadata } from "next";
import { AboutContactActions } from "@/components/AboutContactActions";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "ABOUT ME"
};

const experiences = [
  {
    company: "Rakuten",
    roles: [
      {
        period: "2026.5 - Present",
        title: "Senior Product Manager",
        summary: "Leading product initiatives for Rakuten Travel advertising platforms in a global cross-functional environment, including hotel-facing ad products, campaign subscription, inbound traveler programs, and advertising UX improvements, to improve merchant conversion.",
        details: [
          "Driving initiatives including date-based hotel ad delivery, inbound traveler bonus programs, campaign subscription automation, and hotel advertising UX improvements, to improve merchant conversion.",
          "Defining product requirements and translating business needs into actionable specifications and user flows",
          "Coordinating delivery across engineering, design, business, and operations teams in Japan and India.",
          "Reviewing user journeys and product designs to improve usability while balancing advertiser needs, business value, and technical constraints."
        ]
      }
    ]
  },
  {
    company: "KDDI",
    roles: [
      {
        period: "2022.3 - 2026.4",
        title: "Product Manager",
        summary: "Led product planning and UX improvements for au PAY, working across core payment, charge, identity verification, transaction history, and external platform integrations including Amazon.",
        details: [
          "Led the renewal of transaction history experiences, covering product requirements, UX, and cross-functional delivery.",
          "Worked on charge, identity verification, and payment-related user journeys across multiple fintech flows.",
          "Supported the Amazon × au PAY integration, defining account-linking, consent, authentication, and error-handling experiences across mobile and web.",
          "Used behavioral data and user insights to identify UX issues and guide product improvements.",
        ]
      },
      {
        period: "2022.12 - 2026.2",
        title: "Frontend Engineer",
        summary: "Built and improved frontend experiences for au PAY and au Ponta Point using React, Next.js, Vue, and modern web technologies.",
        details: [
          "Developed frontend flows for payment history, charge, prepaid card, and other au PAY experiences.",
          "Contributed to the transaction history renewal, including frontend architecture and BFF-integrated UI implementation.",
          "Improved accessibility, responsive behavior, and release quality across payment-related web experiences.",
          "Bridged product requirements and implementation through close collaboration with PdMs, designers, backend engineers, and QA.",
        ]
      }
    ]
  },
  {
    company: "Fujitsu",
    roles: [
      {
        period: "2020.6 - 2022.2",
        title: "Consultant",
        summary: "Delivered medical system projects for hospitals, covering requirements definition, system development, testing, and onsite implementation.",
        details: [
          "Contributed to a large-scale electronic medical record system upgrade involving approximately 130 project members, from requirements definition through implementation.",
          "Worked on new features and enhancements for medical billing and hospital information systems.",
          "Coordinated requirements and system behavior with hospital users, internal engineers, and external stakeholders.",
          "Supported onsite testing, release, issue resolution, and system rollout in mission-critical healthcare environments."
        ]
      },
      {
        period: "2019.4 - 2020.5",
        title: "System Engineer",
        summary: "Developed and maintained medical accounting systems for hospitals, covering feature development, testing, release, and production support.",
        details: [
          "Developed and enhanced functions for medical accounting systems based on hospital operational requirements.",
          "Designed, implemented, and tested system features across the development lifecycle.",
          "Investigated defects and production issues, identified root causes, and coordinated fixes with related teams.",
          "Supported system releases and onsite implementation to ensure stable operation in hospital environments."
        ]
      }
    ]
  }
];

const certifications = [
  "Google UX Design Professional Certificate",
  "Advanced Certified Scrum Product Owner",
  "Certified Scrum Developer",
  "Certified Scrum Master",
  "Meta Front-End Developer Professional Certificate"
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
    items: [
      "Next.js",
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
      "Lightroom"
    ]
  }
];

const languages = [
  { name: "Chinese", level: "Native", width: "100%" },
  { name: "Japanese", level: "Native", width: "100%" },
  { name: "English", level: "Professional", width: "84%" }
];

function SectionHeading({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-3 text-[#69577a]">
      <span className="flex h-5 w-5 items-center justify-center">{icon}</span>
      <h2 className="text-2xl font-bold tracking-tight">{children}</h2>
    </div>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M9 4h6a2 2 0 0 1 2 2v2h3a2 2 0 0 1 2 2v8.5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3V6a2 2 0 0 1 2-2Zm6 4V6H9v2h6Z"
      />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="m12 2 2.25 2.22 3.14-.45 1.38 2.85 2.86 1.37-.46 3.14L23.4 13.4l-2.23 2.25.46 3.14-2.86 1.38-1.38 2.86-3.14-.46L12 24.8l-2.25-2.23-3.14.46-1.38-2.86-2.86-1.38.46-3.14L.6 13.4l2.23-2.27-.46-3.14 2.86-1.37 1.38-2.85 3.14.45L12 2Zm-1.08 14.68 6.26-6.26-1.62-1.62-4.64 4.64-2.48-2.48-1.62 1.62 4.1 4.1Z"
      />
    </svg>
  );
}

function LanguageIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M5 3h8v2H9.85a16.9 16.9 0 0 1-1.7 5.1c.72.84 1.57 1.6 2.56 2.3l-1.18 1.7a15.17 15.17 0 0 1-2.43-2.2 15.98 15.98 0 0 1-3.86 3.88L2 14.12a13.42 13.42 0 0 0 3.83-3.92A15.21 15.21 0 0 1 3.9 6.9l1.78-.83c.32.78.75 1.56 1.28 2.32.4-.95.67-2.08.82-3.39H2V3h3Zm11.95 3h2.1L23 21h-2.1l-.82-3h-4.16l-.82 3H13l3.95-15Zm-.5 10h3.1L18 10.36 16.45 16Z"
      />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f6fb] px-5 pb-20 pt-28 text-[#24212a] md:px-16">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
        <div>
          <h1 className="max-w-3xl text-[clamp(2.4rem,5vw,4.6rem)] font-bold leading-[1.02] tracking-normal text-[#69577a]">
            Hi, I’m Yong Liang
          </h1>
          <p className="mt-20 max-w-3xl text-lg leading-8 text-[#332f3b]">
            A Tokyo-based product professional with a background in{" "}
            <span className="font-semibold text-tomato">product management</span>,{" "}
            <span className="font-semibold text-tomato">UX design</span>, and{" "}
            <span className="font-semibold text-tomato">frontend engineering</span>. Over the past several years, I’ve
            worked across fintech products, healthcare systems, and digital advertising platforms, collaborating with
            cross-functional teams to build user-centered experiences. My work sits at the intersection of product
            thinking, engineering, and design. I’m especially interested in how thoughtful interaction, storytelling, and
            aesthetics can shape meaningful digital experiences. Outside of work, I enjoy traveling, photography, and
            exploring the relationship between design and human emotion.
          </p>

          <AboutContactActions />

          <section className="mt-[5.5rem]">
            <SectionHeading icon={<BriefcaseIcon />}>Work Experience</SectionHeading>
            <div className="relative ml-1 pl-9 before:absolute before:left-[7px] before:top-1 before:h-full before:w-px before:bg-[#ded7e7]">
              {experiences.map((item) => (
                <article key={item.company} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-9 top-1 h-3.5 w-3.5 rounded-full bg-[#7d6a91]" />
                  <h3 className="text-2xl font-bold leading-tight text-[#201a27]">{item.company}</h3>
                  <div className="mt-6 space-y-6">
                    {item.roles.map((role) => (
                      <div key={`${item.company}-${role.title}`}>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8a789d]">{role.period}</p>
                        <h4 className="mt-2 text-lg font-bold text-[#69577a]">{role.title}</h4>
                        <p className="mt-2 text-base leading-7 text-[#332f3b]">{role.summary}</p>
                        <div className="mt-4 rounded-md border border-black/10 bg-white/70 p-5 shadow-sm">
                          <ul className="space-y-1 text-base leading-6 text-[#34303b]">
                            {role.details.map((detail) => (
                              <li key={detail} className="flex gap-3">
                                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#69577a]" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16">
            <SectionHeading icon={<BriefcaseIcon />}>Education</SectionHeading>
            <div className="space-y-8">
              <article>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                  <h3 className="text-2xl font-bold text-[#201a27]">Musashino Art University</h3>
                  <p className="shrink-0 text-xs font-bold tracking-[0.12em] text-[#8a789d] md:mt-1">2025.04 - Present</p>
                </div>
                <p className="mt-4 text-base font-semibold text-[#69577a]">Bachelor of Design, Design Informatics</p>
                <p className="mt-5 rounded-md border border-black/10 bg-white/70 p-5 text-base leading-7 text-[#332f3b] shadow-sm">
                  Focused on web design, information design, graphic design, visual communication, and creative expression.
                </p>
              </article>
              <article>
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between md:gap-8">
                  <h3 className="text-2xl font-bold text-[#201a27]">Okayama University</h3>
                  <p className="shrink-0 text-xs font-bold tracking-[0.12em] text-[#8a789d] md:mt-1">2016.10 - 2018.09</p>
                </div>
                <p className="mt-4 text-base font-semibold text-[#69577a]">Master of Pharmaceutical Sciences</p>
                <p className="mt-5 rounded-md border border-black/10 bg-white/70 p-5 text-base leading-7 text-[#332f3b] shadow-sm">
                  Conducted a genetic analysis study on bacteria that cause food poisoning. Built a research-based foundation in
                  scientific thinking, analytical reasoning, and structured problem solving.
                </p>
              </article>
            </div>
          </section>

          <section className="mt-16">
            <SectionHeading icon={<BadgeIcon />}>Beyond Work</SectionHeading>
            <p className="max-w-3xl text-base leading-8 text-[#332f3b]">
              I’m inspired by photography, travel, and psychology. I enjoy observing how emotions, memories, and
              aesthetics influence the way people experience products and spaces.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[#332f3b]">
              I am also a freelance photographer, capturing emotions, cultures, and diverse experiences through my lens.
            </p>
          </section>
        </div>

        <aside className="space-y-12 lg:pt-6">
          <section>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-[#292431]">
              <Image
                src={assetPath("/assets/AboutMe.JPG")}
                alt="Yong Liang"
                fill
                className="object-cover"
                sizes="360px"
                priority
              />
            </div>
          </section>

          <section>
            <SectionHeading icon={<BriefcaseIcon />}>Skills</SectionHeading>
            <div className="space-y-6 rounded-md border border-black/10 bg-white/70 p-6 shadow-sm">
              {skillGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#69577a]">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-sm border border-[#d8cfe3] bg-[#fbf9fd] px-3 py-2 text-xs font-semibold text-[#332f3b]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading icon={<BadgeIcon />}>Certifications</SectionHeading>
            <div className="space-y-3 rounded-md border border-black/10 bg-white/80 p-6 shadow-sm">
              {certifications.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f0ebf5] text-[#69577a]">
                    <BadgeIcon />
                  </span>
                  <h3 className="text-sm font-bold leading-6">{item}</h3>
                </div>
              ))}
            </div>
          </section>

          <section>
            <SectionHeading icon={<LanguageIcon />}>Languages</SectionHeading>
            <div className="space-y-5 rounded-md border border-black/10 bg-white/70 p-6 shadow-sm">
              {languages.map((item) => (
                <div key={item.name}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span>{item.name}</span>
                    <span className="font-bold text-[#69577a]">{item.level}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-black/5">
                    <span className="block h-full rounded-full bg-[#69577a]" style={{ width: item.width }} />
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
