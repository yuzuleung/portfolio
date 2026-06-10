import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "au Ponta Portal & Point Program"
};

const tags = [
  "Product Management",
  "Loyalty",
  "Rewards Experience",
  "Fintech",
  "Cross-functional Delivery"
];

const imageBase = "/assets/au-ponta";

const launchTimeline = [
  ["01", "Frame the problem", "Clarified why point-related information needed a central touchpoint."],
  ["02", "Structure requirements", "Organized service rules, user states, content priority, and release scope into implementation-ready requirements."],
  ["03", "Define user flows", "Clarified how users move between point status, history, benefits, and related services."],
  ["04", "Align stakeholders", "Coordinated with business, design, system, and service teams to keep launch decisions consistent and feasible."],
  ["05", "Prepare release", "Supported specification review, issue handling, testing, and launch preparation."]
];

const journeySteps = [
  ["Entry", "Users arrive from au PAY, au Ponta Portal, My au, My UQ, or campaign touchpoints."],
  ["Understand", "They check point balance, point history, benefit status, and why points or rewards are available."],
  ["Act", "They enter campaigns, follow benefit conditions, or move to related services where points can be earned or used."],
  ["Follow up", "They return to confirm entry states, remaining reward caps, and available next actions."]
];

const responsibilities = [
  ["Requirement Definition", "Structured product requirements around user states, benefit rules, point information, and page behavior, and translated business needs into implementable specifications."],
  ["User Flow Clarification", "Clarified how users move across point status, history, benefits, campaigns, and partner experiences."],
  ["Stakeholder Management", "Aligned business goals, design direction, system constraints, operations, and service-side expectations."],
  ["Project Coordination", "Kept dependencies visible across teams so decisions, open questions, and delivery timing stayed clear."],
  ["Release Planning", "Supported release through scope confirmation, edge-case review, user-facing communication checks, specification review, testing, issue handling, and launch preparation."],
  ["Frontend Development", "Worked with implementation partners to bridge business requirements and feasible interface behavior."]
];

const postLaunchEvolution = [
  ["Accessibility Improvements", "Accessibility reviews and UI refinements to improve usability and compliance."],
  ["Point History Renewal", "Improved information structure and transaction visibility for point-related activities."],
  [
    "Lawson Integration",
    "Supported partner integration and related user experience planning.",
    `${imageBase}/point_lawson_sp.PNG`
  ],
  ["New Money Service Launch", "Participated in introducing a new financial service experience into the portal ecosystem."],
  ["Campaign UI Experiments", "Supported A/B testing of campaign presentation and carousel interaction patterns."],
  ["Content & Navigation Optimization", "Improved discoverability across the つかう・ためる experience and promotional placements."]
];

const problemCards = [
  ["Fragmented touchpoints", "Point information was spread across multiple services and screens."],
  ["Low visibility", "Users could earn points without clearly understanding where they came from."],
  ["Unclear next action", "It was not always obvious how to earn more or where to use points."],
  ["Operational complexity", "Benefit rules, campaigns, and service links had to be translated into a simple user-facing experience."]
];

const goalCards = [
  ["Make value visible", "Show point status, recent activity, and benefit opportunities clearly."],
  ["Guide next actions", "Help users move from checking points to earning, using, or exploring services."],
  ["Connect services", "Create entry points between au PAY, Ponta, campaigns, partner services, and related au services."]
];

const keyPortalExperiences = [
  [
    "Portal Home",
    "A central entry point for point balance, recommendations, campaigns, and point-related navigation.",
    `${imageBase}/point_top_sp.PNG`,
    "au Ponta Portal top page"
  ],
  [
    "Point History",
    "A clearer view of point balance, recent transactions, monthly earned points, and point-related reports.",
    `${imageBase}/point_history_sp.PNG`,
    "Point history screen"
  ],
  [
    "Point Earn",
    "Content areas designed to help users discover where to earn points through services, campaigns, and partner offers.",
    `${imageBase}/point_save_sp.PNG`,
    "Point earn screen"
  ],
  [
    "Point Use",
    "Content areas designed to help users discover where to use points through services, campaigns, and partner offers.",
    `${imageBase}/point_use_sp.PNG`,
    "Point use screen"
  ],
  [
    "Campaign Discovery",
    "Campaign content helped users find limited-time opportunities and move from browsing to participation.",
    `${imageBase}/point_quest.PNG`,
    "Campaign quest screen"
  ],
  [
    "Earn Detail",
    "Detail pages supported deeper exploration of earning options, partner offers, and service-specific point actions.",
    `${imageBase}/point_thanks_gift.PNG`,
    "Benefit campaign screen"
  ]
];

function Section({
  id,
  eyebrow,
  title,
  body,
  noTopBorder = false,
  children
}: {
  id?: string;
  eyebrow: string;
  title: string;
  body?: string;
  noTopBorder?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-32 py-14 md:py-20 ${noTopBorder ? "" : "border-t border-black/10"}`}>
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-tomato">{eyebrow}</p>
        <h2 className="mt-5 font-barlow text-[clamp(1.7rem,3vw,3rem)] font-semibold leading-[1.16] text-[#171512]">
          {title}
        </h2>
        {body ? <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">{body}</p> : null}
      </div>
      {children}
    </section>
  );
}

function ProductImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <figure className={`overflow-hidden ${className}`}>
      <img src={assetPath(src)} alt={alt} className="h-auto w-full" />
    </figure>
  );
}

function PhoneScreenshotGrid({
  images,
  columns = "md:grid-cols-3"
}: {
  images: Array<[string, string]>;
  columns?: string;
}) {
  return (
    <div className={`grid items-start gap-5 ${columns}`}>
      {images.map(([src, alt]) => (
        <figure key={src} className="overflow-hidden">
          <img src={assetPath(src)} alt={alt} className="h-auto w-full" />
        </figure>
      ))}
    </div>
  );
}

function SnapshotStrip() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <article className="border-t border-black/10 pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">The Problem</p>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          Ponta-related information was spread across multiple touchpoints, making it difficult for users to understand
          where points came from, what benefits were available, and what action they should take next.
        </p>
        <div className="mt-7 grid gap-4">
          {problemCards.map(([title, body]) => (
            <div key={title} className="border border-black/10 p-5">
              <h3 className="text-base font-semibold leading-6 text-[#171512]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </article>
      <article className="border-t border-black/10 pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">The Goal</p>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          Create a clearer loyalty hub that connects point balance, point history, earning opportunities, benefits, and
          related au services into one understandable product experience.
        </p>
        <div className="mt-7 grid gap-4">
          {goalCards.map(([title, body]) => (
            <div key={title} className="border border-black/10 p-5">
              <h3 className="text-base font-semibold leading-6 text-[#171512]">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p>
            </div>
          ))}
        </div>
      </article>
    </div>
  );
}

function Timeline() {
  return (
    <div className="grid gap-4 md:grid-cols-5">
      {launchTimeline.map(([step, title, body]) => (
        <article key={step} className="border border-black/10 p-5">
          <p className="font-barlow text-3xl font-semibold leading-none text-tomato">{step}</p>
          <h3 className="mt-6 text-base font-semibold leading-6 text-[#171512]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
        </article>
      ))}
    </div>
  );
}

function JourneyFlow() {
  return (
    <div className="grid gap-4 md:grid-cols-4">
      {journeySteps.map(([title, body], index) => (
        <article key={title} className="relative border border-black/10 bg-white p-6">
          {index < journeySteps.length - 1 ? (
            <span className="absolute -right-3 top-8 hidden text-sm font-bold text-tomato md:block">→</span>
          ) : null}
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-tomato">
            Step {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="mt-5 text-lg font-semibold text-[#171512]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
        </article>
      ))}
    </div>
  );
}

function ResponsibilityGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
      {responsibilities.map(([title, body], index) => (
        <article key={title} className="border-t border-black/10 pt-5">
          <p className="text-[0.68rem] font-bold tracking-[0.18em] text-tomato">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 whitespace-nowrap text-sm font-semibold leading-6 text-[#171512]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
        </article>
      ))}
    </div>
  );
}

function KeyPortalExperiences() {
  return (
    <div className="mt-12">
      <div className="mb-8 max-w-3xl">
        <h3 className="text-lg font-semibold leading-7 text-[#171512]">Key Portal Experiences</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Public-facing screens from the released product experience.
        </p>
      </div>
      <div className="grid gap-x-7 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
        {keyPortalExperiences.map(([title, body, src, alt]) => (
          <article key={title}>
            <h4 className="text-sm font-semibold leading-6 text-[#171512]">{title}</h4>
            <p className="mt-3 min-h-28 text-xs leading-6 text-neutral-600">{body}</p>
            <figure className="mt-7 overflow-hidden">
              <img src={assetPath(src)} alt={alt} className="h-auto w-full" />
            </figure>
          </article>
        ))}
      </div>
    </div>
  );
}

function ImprovementTimeline() {
  return (
    <div className="grid gap-8">
      {postLaunchEvolution.map(([title, body, image], index) => (
        <article key={title} className="grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[0.78fr_1fr] md:items-center">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-tomato">
              Evolution {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-7 text-[#171512]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
          </div>
          {image ? (
            <figure className="flex justify-center overflow-hidden">
              <img
                src={assetPath(image)}
                alt="Lawson Integration screen"
                className="h-auto max-h-[360px] w-auto max-w-[220px]"
              />
            </figure>
          ) : (
            <figure className="flex aspect-[16/9] items-center justify-center border border-dashed border-black/20 px-6 text-center">
              <figcaption className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
                Placeholder image
              </figcaption>
            </figure>
          )}
        </article>
      ))}
    </div>
  );
}

export default function AuPontaPortalPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-14 pt-20 text-[#171512] md:px-16 md:pt-24">
      <section className="mx-auto max-w-7xl">
        <TopBackToWork />

        <section className="grid gap-12 pb-16 pt-4 lg:grid-cols-[1.18fr_0.82fr] lg:items-center">
          <div>
            <div className="flex gap-2.5 overflow-x-auto whitespace-nowrap pb-1">
              {tags.map((tag) => (
                <span key={tag} className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-8 max-w-none font-barlow text-[clamp(2rem,4vw,4.6rem)] font-semibold leading-[0.95] tracking-normal lg:whitespace-nowrap">
              au Ponta Portal & Point Program
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">
              Building a loyalty touchpoint that helps users understand, earn, use, and feel the value of Ponta points
              across the au ecosystem.
            </p>
            <div className="mt-10 grid max-w-4xl gap-x-12 gap-y-5 border-y border-black/10 py-6 md:grid-cols-3">
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Role</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Product Manager
                  <br />
                  Project Manager
                  <br />
                  Front-End Engineer
                </p>
              </article>
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Timeline</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  2022.03–2022.12
                  <br />
                  2024.10–2025.09
                </p>
              </article>
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Scope</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  0 - 1 launch
                  <br />
                  Benefit experience
                  <br />
                  Post-launch improvements
                </p>
              </article>
            </div>
          </div>

          <figure className="flex justify-center overflow-hidden lg:justify-end">
            <img
              src={assetPath(`${imageBase}/au_ponta_app.png`)}
              alt="au Ponta Portal app screens"
              className="h-auto max-h-[700px] w-auto max-w-full object-contain"
            />
          </figure>
        </section>

        <section className="mx-auto max-w-6xl">
          <Section
            id="snapshot"
            eyebrow="Project Overview"
            title="A loyalty product touchpoint inside a large fintech ecosystem."
            body="au Ponta Portal was created as a central touchpoint for Ponta-related experiences within the au ecosystem.
            The product aimed to help users check point status, understand where points came from, discover ways to earn and use points, and move smoothly across related services."
            noTopBorder
          >
            <p className="mx-auto -mt-6 mb-12 max-w-3xl text-center text-xs italic leading-6 text-neutral-500">
              *Due to confidentiality restrictions, internal business logic, metrics, and system specifications have
              been simplified or omitted. Public-facing product screenshots are used where possible.
            </p>
            <SnapshotStrip />
          </Section>

          <section className="border-t border-black/10 py-14 md:py-20">
            <ProductImage src={`${imageBase}/au_ponta_pc.png`} alt="au Ponta Portal desktop overview" />
          </section>

          <Section
            id="responsibilities"
            eyebrow="My Responsibilities"
            title="Owning the product work between business intent and delivery detail."
          >
            <ResponsibilityGrid />
          </Section>

          <Section
            id="challenge"
            eyebrow="Challenge"
            title="The product needed to turn scattered point information into clear user action."
          >
            <JourneyFlow />
          </Section>

          <Section
            id="portal-launch"
            eyebrow="Highlight 01"
            title="Portal Launch"
            body="The launch work focused on turning a new loyalty touchpoint from 0->1 into a release-ready product experience.
            The launch focused on building the foundation of a new loyalty touchpoint: point balance, point history, earning and usage guidance, benefit communication, and cross-service navigation."
          >
            <Timeline />
            <KeyPortalExperiences />
          </Section>

          <Section
            id="benefits"
            eyebrow="Highlight 02"
            title="au / UQ User Benefits"
            body="The benefit experience had to explain campaign entry, eligibility, entry-state handling, reward conditions, remaining reward caps, and cross-service entry paths."
          >
            <div className="grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-center">
              <PhoneScreenshotGrid
                columns="grid-cols-3"
                images={[
                  [`${imageBase}/au_uq_campaign_1.PNG`, "au UQ campaign entry screen"],
                  [`${imageBase}/au_uq_campaign_2.jpg`, "au UQ campaign condition screen"],
                  [`${imageBase}/au_uq_campaign_3.jpg`, "au UQ campaign reward screen"]
                ]}
              />
              <div className="grid gap-5">
                {[
                  ["Eligibility and entry states", "Clarified whether users could participate, had already entered, or needed to complete another action."],
                  ["Reward condition explanation", "Structured condition copy so users could understand how benefits were earned and what still remained."],
                  ["Remaining reward cap display", "Prepared a display pattern for monthly cap visibility without overwhelming the page."],
                  ["Cross-service entry paths", "Connected au PAY, au Ponta Portal, My au, and My UQ into a more coherent benefit journey."]
                ].map(([title, body]) => (
                  <article key={title} className="border-t border-black/10 pt-5">
                    <h3 className="text-lg font-semibold text-[#171512]">{title}</h3>
                    <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
                  </article>
                ))}
              </div>
            </div>
          </Section>

          <Section
            id="post-launch-evolution"
            eyebrow="Post-launch Evolution"
            title="Continuously improving the portal through accessibility, experimentation, and service expansion."
            body="After launch, I continued supporting the evolution of the portal through accessibility improvements, service integrations, experimentation, and operational enhancements."
          >
            <ImprovementTimeline />
          </Section>

          <Section id="reflection" eyebrow="Reflection" title="Loyalty product design is not only about rewards.">
            <div className="mx-auto max-w-4xl space-y-7 text-lg leading-9 text-neutral-600">
              <p>This project taught me that loyalty product design is not only about rewards.</p>
              <p>A good loyalty experience needs to make value visible, understandable, and actionable.</p>
              <p>
                Working on au Ponta Portal helped me understand how large-scale digital products are shaped by product
                strategy, requirement definition, operational constraints, system feasibility, and careful user-facing
                communication.
              </p>
            </div>
          </Section>

          <section className="border-t border-black/10 py-14 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-tomato">Final CTA</p>
              <h2 className="mt-5 font-barlow text-[clamp(1.7rem,3vw,3rem)] font-semibold leading-[1.16]">
                Real-world loyalty product delivery
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                A product case study about building a clearer point and benefit experience within a large-scale fintech
                ecosystem.
              </p>
            </div>
          </section>
        </section>

        <BottomBackToWork className="text-neutral-500" />
      </section>
    </main>
  );
}
