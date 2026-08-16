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
  {
    title: "Lawson Integration",
    body: "Supported partner integration and related user experience planning.",
    image: `${imageBase}/point_lawson_sp.PNG`,
    imageAlt: "Lawson Integration screen"
  },
  {
    title: "Accessibility Improvements",
    body: "Accessibility reviews and UI refinements to improve usability and compliance.",
    image: `${imageBase}/accessibility.png`,
    imageAlt: "Accessibility improvement screen"
  },
  {
    title: "Point History Renewal",
    body: "Improved information structure and transaction visibility for point-related activities.",
    fullWidth: true,
    images: [
      [`${imageBase}/point_history_sp.PNG`, "Point history screen"],
      [`${imageBase}/point_history_2_sp.PNG`, "Point history detail screen"],
      [`${imageBase}/point_history_3_sp.PNG`, "Point history report screen"],
      [`${imageBase}/point_calendar_sp.PNG`, "Point calendar screen"]
    ]
  },
  {
    title: "Campaign UI Experiments",
    body: "Supported A/B testing of campaign presentation and carousel interaction patterns.",
    image: `${imageBase}/point_carousel.jpg`,
    imageAlt: "Campaign carousel experiment screen"
  },
  {
    title: "New Money Service Launch",
    body: "Participated in introducing a new financial service experience into the portal ecosystem."
  },
  {
    title: "Content & Navigation Optimization",
    body: "Improved discoverability across the つかう・ためる experience and promotional placements."
  }
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

const benefitFlow = [
  "Notice benefit",
  "Check eligibility",
  "Enter campaign",
  "Use au PAY",
  "Check expected reward",
  "Confirm granted points"
];

const benefitContributions = [
  "Eligibility and user-state definition",
  "Entry flow and entry-state behavior",
  "Reward condition communication",
  "Remaining reward cap display",
  "Cross-service touchpoints across au PAY, au Ponta Portal, My au, and My UQ",
  "Edge case review for contract status, entry timing, and reward calculation",
  "Coordination with business, system, app, portal, CS, and analytics-related teams"
];

const benefitComplexity = [
  [
    "User Type Logic",
    "Different user types such as au, UQ, and non-eligible users needed to be handled clearly."
  ],
  [
    "Entry State Handling",
    "Users needed different experiences before entry, after entry, and when additional action was required."
  ],
  [
    "Reward Calculation",
    "Reward communication needed to reflect contract, payment, timing, and campaign conditions."
  ],
  [
    "Expected vs. Confirmed Points",
    "The experience needed to distinguish expected reward information from confirmed granted points."
  ],
  [
    "Cross-service Touchpoints",
    "The journey connected au PAY, au Ponta Portal, My au, My UQ, notifications, and customer support."
  ],
  [
    "System Coordination",
    "The project required coordination across many internal systems and teams while keeping the user experience simple."
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

function PortalLaunchDetail() {
  return (
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      <article className="border-t border-black/10 pt-6">
        <h3 className="text-xl font-semibold leading-7 text-[#171512]">Challenge</h3>
        <p className="mt-5 text-sm leading-7 text-neutral-600">
          Ponta-related information was spread across multiple services and screens. Users needed a central place to
          understand their point status, point history, earning opportunities, usage options, campaigns, and related
          services.
        </p>
      </article>

      <article className="border-t border-black/10 pt-6">
        <h3 className="text-xl font-semibold leading-7 text-[#171512]">Product Direction</h3>
        <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">
          <p>Position au Ponta Portal as a central point hub.</p>
          <p>
            The portal needed to make point value visible, understandable, and actionable by connecting point balance,
            point history, earning and usage guidance, benefit communication, and cross-service navigation.
          </p>
        </div>
      </article>

      <article className="border-t border-black/10 pt-6">
        <h3 className="text-xl font-semibold leading-7 text-[#171512]">My Contribution</h3>
        <div className="mt-5 grid gap-3">
          {[
            "Structured product requirements around point status, history, campaigns, and service navigation.",
            "Clarified user flows across portal home, point history, earn, use, and campaign-related pages.",
            "Coordinated with business, design, system, and service teams.",
            "Supported specification review, issue handling, testing, and release preparation."
          ].map((item) => (
            <p key={item} className="border border-black/10 p-4 text-sm leading-7 text-neutral-600">
              {item}
            </p>
          ))}
        </div>
      </article>

      <article className="border-t border-black/10 pt-6">
        <h3 className="text-xl font-semibold leading-7 text-[#171512]">Outcome</h3>
        <p className="mt-5 text-sm leading-7 text-neutral-600">
          Established au Ponta Portal as a central loyalty touchpoint where users could check points, understand point
          activity, discover ways to earn and use points, and move to related services.
        </p>
      </article>
    </div>
  );
}

function ImprovementTimeline() {
  return (
    <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
      {postLaunchEvolution.map((item, index) => (
        <article
          key={item.title}
          className={`grid gap-6 border-t border-black/10 pt-8 ${
            item.fullWidth ? "md:col-span-2 md:grid-cols-[0.42fr_1fr]" : "sm:grid-cols-[1fr_0.72fr]"
          } sm:items-center`}
        >
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-tomato">
              Evolution {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-[#171512]">{item.title}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{item.body}</p>
          </div>
          {item.images ? (
            <div className="grid gap-5 sm:grid-cols-4">
              {item.images.map(([src, alt]) => (
                <figure key={src} className="flex justify-center overflow-hidden">
                  <img src={assetPath(src)} alt={alt} className="h-auto max-h-[360px] w-auto max-w-[220px]" />
                </figure>
              ))}
            </div>
          ) : item.image ? (
            <figure className="flex justify-center overflow-hidden">
              <img
                src={assetPath(item.image)}
                alt={item.imageAlt}
                className="h-auto max-h-[360px] w-auto max-w-[220px]"
              />
            </figure>
          ) : null}
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
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Period</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  2022.03–2022.12, 2024.10–2025.09
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
            <PortalLaunchDetail />
          </Section>

          <Section
            id="benefits"
            eyebrow="Highlight 02"
            title="au / UQ User Benefits"
            body="The au / UQ Benefits project extended au Ponta Portal into a reward communication experience connected with au PAY usage."
          >
            <div className="mx-auto max-w-5xl space-y-10">
              <div className="space-y-5 text-base leading-8 text-neutral-600">
                <p>
                  The goal was to help eligible au and UQ users notice reward opportunities, enter the benefit
                  program, understand conditions, and check reward-related information across multiple service
                  touchpoints.
                </p>
              </div>

              <article className="border-t border-black/10 pt-6">
                <h3 className="text-xl font-semibold leading-7 text-[#171512]">Challenge</h3>
                <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">
                  <p>
                    The benefit looked simple to users, but the service logic behind it was complex. Users needed to
                    understand whether they were eligible, whether they had entered the benefit, when the benefit
                    applied, which payments were covered, how much reward potential remained, and where to check
                    expected or confirmed points.
                  </p>
                  <p>
                    The product challenge was to translate complex eligibility, entry, payment, and reward rules into a
                    clear user-facing experience.
                  </p>
                </div>
              </article>

              <article className="border-t border-black/10 pt-6">
                <h3 className="text-xl font-semibold leading-7 text-[#171512]">Key Experience Flow</h3>
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  {benefitFlow.map((step, index) => (
                    <div key={step} className="flex items-center gap-3">
                      <span className="border border-black/10 px-3 py-2 text-xs font-semibold text-neutral-600">
                        {step}
                      </span>
                      {index < benefitFlow.length - 1 ? <span className="text-sm font-bold text-tomato">→</span> : null}
                    </div>
                  ))}
                </div>
                <div className="mt-8 grid gap-6 md:grid-cols-3 md:gap-8">
                  {[
                    [`${imageBase}/au_uq_campaign_1.PNG`, "au UQ campaign entry screen"],
                    [`${imageBase}/au_uq_campaign_2.jpg`, "au UQ campaign condition screen"],
                    [`${imageBase}/au_uq_campaign_3.jpg`, "au UQ campaign reward screen"]
                  ].map(([src, alt]) => (
                    <figure key={src} className="mx-auto w-[62%] overflow-hidden md:w-[68%]">
                      <img src={assetPath(src)} alt={alt} className="h-auto w-full" />
                    </figure>
                  ))}
                </div>
              </article>

                <article className="border-t border-black/10 pt-6">
                  <h3 className="text-xl font-semibold leading-7 text-[#171512]">Product Direction</h3>
                  <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">
                    <p>Translate complex benefit rules into a simple user-facing journey.</p>
                    <p>
                      Instead of exposing system logic to users, the experience needed to clearly communicate: “Am I
                      eligible?” “Have I entered?” “What should I do next?” “How much benefit can I still receive?”
                      “Where can I confirm the result?”
                    </p>
                  </div>
                </article>

                <article className="border-t border-black/10 pt-6">
                  <h3 className="text-xl font-semibold leading-7 text-[#171512]">My Contribution</h3>
                  <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">
                    <p>
                      As Product Manager, my role focused on clarifying business and service requirements, organizing
                      user-facing states, and coordinating delivery across multiple systems and touchpoints.
                    </p>
                    <div className="grid gap-3 md:grid-cols-2">
                      {benefitContributions.map((item) => (
                        <p key={item} className="border border-black/10 p-4">
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </article>

                <article className="border-t border-black/10 pt-6">
                  <h3 className="text-xl font-semibold leading-7 text-[#171512]">Product Complexity</h3>
                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    The biggest challenge was not only creating a campaign page, but making the benefit work reliably
                    across many user states and service touchpoints.
                  </p>
                  <div className="mt-6 grid gap-4 md:grid-cols-2">
                    {benefitComplexity.map(([title, body]) => (
                      <div key={title} className="border border-black/10 p-5">
                        <h4 className="text-base font-semibold leading-6 text-[#171512]">{title}</h4>
                        <p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p>
                      </div>
                    ))}
                  </div>
                </article>

                <article className="border-t border-black/10 pt-6">
                  <h3 className="text-xl font-semibold leading-7 text-[#171512]">Design / Product Intention</h3>
                  <p className="mt-5 text-sm leading-7 text-neutral-600">
                    The experience needed to make the benefit feel easy to understand, even when the underlying rules
                    were complex. The goal was to help users recognize the benefit, understand their current state, and
                    know the next action without exposing internal system logic.
                  </p>
                </article>

                <article className="border-t border-black/10 pt-6">
                  <h3 className="text-xl font-semibold leading-7 text-[#171512]">Reflection</h3>
                  <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">
                    <p>
                      This project taught me that product management in a large-scale fintech ecosystem is often about
                      simplifying complexity.
                    </p>
                    <p>
                      A good benefit experience is not only about offering rewards. It also needs clear eligibility
                      communication, reliable state handling, understandable reward feedback, and careful coordination
                      between business rules and system behavior.
                    </p>
                  </div>
                </article>
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
