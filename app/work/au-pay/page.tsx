import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "au PAY"
};

const tags = [
  "Product Management",
  "Fintech",
  "Payment Experience",
  "Frontend Development",
  "Cross-functional Delivery"
];

const imageBase = "/assets/au-pay";

const launchTimeline = [
  ["01", "Frame the problem", "Clarified user pain points across payment, charge, transaction history, and identity-related flows."],
  ["02", "Structure requirements", "Organized product rules, edge cases, UI states, and service constraints into delivery-ready requirements."],
  ["03", "Define user flows", "Mapped key payment and charge journeys so users could understand status, next action, and completion states."],
  ["04", "Align stakeholders", "Coordinated with business, design, engineering, QA, and partner teams to keep product decisions consistent."],
  ["05", "Prepare release", "Supported specification review, frontend implementation checks, issue handling, testing, and release readiness."]
];

const journeySteps = [
  ["Entry", "Users arrive from au PAY, campaign touchpoints, partner services, or payment-related navigation."],
  ["Understand", "They need to quickly understand balance, charge options, transaction status, and identity-related requirements."],
  ["Act", "They complete payment, charge, verification, or partner-service actions with clear confirmation and recovery paths."],
  ["Follow up", "They return to review transaction history, check status, and continue related financial actions."]
];

const responsibilities = [
  ["Requirement Definition", "Structured product requirements around user states, service rules, edge cases, and implementation behavior."],
  ["User Flow Clarification", "Clarified how users move across payment, charge, transaction history, identity verification, and partner flows."],
  ["Stakeholder Management", "Aligned product goals, design direction, system constraints, QA concerns, and business-side expectations."],
  ["Project Coordination", "Kept dependencies visible across teams so decisions, open questions, and delivery timing stayed clear."],
  ["Release Planning", "Supported release through scope confirmation, issue handling, testing, and user-facing communication checks."],
  ["Frontend Development", "Implemented and reviewed frontend behavior while bridging product requirements and technical feasibility."]
];

const problemCards = [
  ["Complex financial flows", "Payment, charge, and verification experiences required clear guidance across many user states."],
  ["High reliability expectations", "Users expect financial actions to feel predictable, recoverable, and easy to confirm."],
  ["Fragmented entry points", "Users could arrive from payment screens, campaigns, transaction history, partner flows, and account-related pages."],
  ["Operational complexity", "Business rules, system constraints, QA coverage, and release timing had to be translated into stable product behavior."]
];

const goalCards = [
  ["Make actions clear", "Help users understand what they can do, what state they are in, and what should happen next."],
  ["Support trust", "Design and implement financial flows with careful attention to confirmation, status visibility, and edge cases."],
  ["Connect delivery", "Bridge product planning, frontend implementation, QA review, and stakeholder alignment through release."]
];

const keyProductExperiences = [
  [
    "Transaction History",
    "A clearer way for users to review payment activity, status, service context, and recent financial actions.",
    "History"
  ],
  [
    "Payment Experience",
    "Interface behavior that helps users complete payment actions with confidence and understand the result.",
    "Pay"
  ],
  [
    "Charge Experience",
    "Charge flows designed around different funding methods, conditions, limits, and user expectations.",
    "Charge"
  ],
  [
    "Identity Verification",
    "Sensitive verification flows that require trust, clear next steps, and careful handling of states.",
    "Verify"
  ],
  [
    "Partner Integration",
    "Connected external service journeys with au PAY behavior in a way that remained coherent for users.",
    "Partner"
  ],
  [
    "Release Support",
    "Cross-functional checks around requirements, implementation behavior, QA feedback, and launch readiness.",
    "Release"
  ]
];

const postLaunchEvolution = [
  ["Transaction History Renewal", "Improved information structure, status visibility, and transaction review behavior."],
  ["Payment & Charge Refinements", "Supported refinements across point charge, credit charge, bank charge, and related payment paths."],
  ["Identity Verification Updates", "Reviewed sensitive user states, edge cases, and release behavior for verification-related flows."],
  ["Partner Service Integration", "Supported integration planning and user-facing behavior for external service connections."],
  ["Operational Improvements", "Helped clarify requirements, QA concerns, issue handling, and release communication."],
  ["Frontend Quality", "Implemented and reviewed UI behavior to keep product intent aligned with real interface states."]
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

function SnapshotStrip() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <article className="border-t border-black/10 pt-6">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">The Problem</p>
        <p className="mt-5 text-base leading-8 text-neutral-600">
          au PAY is a large-scale fintech product where everyday payment actions need to stay clear across many services,
          entry points, states, and operational constraints.
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
          Improve product experiences across payment, charge, transaction history, verification, and partner-service
          flows through product planning, frontend development, and cross-functional delivery.
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

function KeyProductExperiences() {
  return (
    <div className="mt-12">
      <div className="mb-8 max-w-3xl">
        <h3 className="text-lg font-semibold leading-7 text-[#171512]">Key au PAY Experiences</h3>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Product areas prepared for more detailed screenshots and final case study evidence.
        </p>
      </div>
      <div className="grid gap-x-7 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
        {keyProductExperiences.map(([title, body, label]) => (
          <article key={title}>
            <h4 className="text-sm font-semibold leading-6 text-[#171512]">{title}</h4>
            <p className="mt-3 min-h-28 text-xs leading-6 text-neutral-600">{body}</p>
            <figure className="mt-7 flex aspect-[9/16] items-center justify-center border border-dashed border-black/20 px-4 text-center">
              <figcaption className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">{label}</figcaption>
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
      {postLaunchEvolution.map(([title, body], index) => (
        <article key={title} className="grid gap-8 border-t border-black/10 pt-8 md:grid-cols-[0.78fr_1fr] md:items-center">
          <div>
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-tomato">
              Evolution {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 text-xl font-semibold leading-7 text-[#171512]">{title}</h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
          </div>
          <figure className="flex aspect-[16/9] items-center justify-center border border-dashed border-black/20 px-6 text-center">
            <figcaption className="text-xs font-bold uppercase tracking-[0.22em] text-neutral-400">
              Placeholder image
            </figcaption>
          </figure>
        </article>
      ))}
    </div>
  );
}

export default function AuPayPage() {
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
              au PAY
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">
              Delivering fintech product improvements through product management, frontend development, and
              cross-functional collaboration.
            </p>
            <div className="mt-10 grid max-w-4xl gap-x-12 gap-y-5 border-y border-black/10 py-6 md:grid-cols-3">
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Role</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Product Manager
                  <br />
                  Front-End Engineer
                  <br />
                  Project Coordinator
                </p>
              </article>
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Timeline</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  2022.03–2026
                  <br />
                  Ongoing improvements
                </p>
              </article>
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Scope</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Product improvements
                  <br />
                  Frontend delivery
                  <br />
                  Release coordination
                </p>
              </article>
            </div>
          </div>

          <figure className="flex justify-center overflow-hidden lg:justify-end">
            <img
              src={assetPath(`${imageBase}/au_pay.png`)}
              alt="au PAY product screen"
              className="h-auto max-h-[700px] w-auto max-w-full object-contain"
            />
          </figure>
        </section>

        <section className="mx-auto max-w-6xl">
          <Section
            id="snapshot"
            eyebrow="Project Overview"
            title="A large-scale payment product shaped through product planning and frontend delivery."
            body="au PAY is a fintech product used for everyday payments, charge flows, transaction review, identity-related actions, and partner services. My work focused on making complex product behavior clearer, more reliable, and easier to deliver across teams."
            noTopBorder
          >
            <p className="mx-auto -mt-6 mb-12 max-w-3xl text-center text-xs italic leading-6 text-neutral-500">
              *Due to confidentiality restrictions, internal business logic, metrics, and system specifications have
              been simplified or omitted. Public-facing product screenshots are used where possible.
            </p>
            <SnapshotStrip />
          </Section>

          <section className="border-t border-black/10 py-14 md:py-20">
            <ProductImage src={`${imageBase}/au_pay_pc.png`} alt="au PAY desktop overview" />
          </section>

          <Section
            id="responsibilities"
            eyebrow="My Responsibilities"
            title="Owning product detail across planning, implementation, and release."
          >
            <ResponsibilityGrid />
          </Section>

          <Section
            id="challenge"
            eyebrow="Challenge"
            title="The product needed to make financial actions clear, reliable, and release-ready."
          >
            <JourneyFlow />
          </Section>

          <Section
            id="selected-projects"
            eyebrow="Highlight 01"
            title="Product Improvement Work"
            body="The work focused on improving key product surfaces across transaction review, payment and charge flows, identity verification, partner integrations, and release coordination."
          >
            <Timeline />
            <KeyProductExperiences />
          </Section>

          <Section
            id="post-launch-evolution"
            eyebrow="Post-launch Evolution"
            title="Continuously improving a large-scale fintech product through delivery and refinement."
            body="After each release, the work continued through product refinements, operational follow-up, QA feedback, frontend quality checks, and stakeholder coordination."
          >
            <ImprovementTimeline />
          </Section>

          <Section id="reflection" eyebrow="Reflection" title="Large-scale fintech work made reliability part of product design.">
            <div className="mx-auto max-w-4xl space-y-7 text-lg leading-9 text-neutral-600">
              <p>
                Working on au PAY taught me that payment product design is not only about completing a transaction.
              </p>
              <p>
                A good fintech experience needs to make status, conditions, recovery paths, and next actions visible
                before users feel uncertain.
              </p>
              <p>
                This work helped me connect product thinking, frontend engineering, stakeholder management, and release
                discipline inside a large-scale digital service.
              </p>
            </div>
          </Section>

          <section className="border-t border-black/10 py-14 md:py-20">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.26em] text-tomato">Final CTA</p>
              <h2 className="mt-5 font-barlow text-[clamp(1.7rem,3vw,3rem)] font-semibold leading-[1.16]">
                Real-world fintech product delivery
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                A product case study about improving payment, charge, transaction, and verification experiences inside
                a large-scale fintech ecosystem.
              </p>
            </div>
          </section>
        </section>

        <BottomBackToWork className="text-neutral-500" />
      </section>
    </main>
  );
}
