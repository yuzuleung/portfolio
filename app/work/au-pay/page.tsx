import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "au PAY"
};

const tags = [
  "Fintech",
  "Payment",
  "Product Management",
  "Frontend Engineering",
  "Requirement Definition"
];

const imageBase = "/assets/au-pay";

const roleCards = [
  ["Requirement Definition", "Clarified product requirements, user states, screen behavior, and edge cases."],
  ["Frontend Implementation", "Developed and maintained user-facing web interfaces for au PAY related flows."],
  ["User Flow Clarification", "Organized how users move through payment, charge, registration, verification, and history experiences."],
  ["Stakeholder Coordination", "Worked with marketing, designers, engineers, QA, business teams, and external partners."],
  ["Release Support", "Supported testing, issue handling, release preparation, and post-release follow-up."],
  ["UX-minded Delivery", "Identified friction during implementation and helped make flows clearer and more reliable."]
];

const transactionContributions = [
  "Clarified requirements and screen behavior",
  "Organized display conditions and edge cases",
  "Coordinated with marketing, design, engineer, and QA teams",
  "Implemented frontend components and page behavior",
  "Supported testing, issue handling, and release preparation"
];

const chargeContributions = [
  "Implemented frontend flows for charge-related experiences",
  "Clarified requirements for different charge methods",
  "Reviewed error states and edge cases",
  "Coordinated with backend, QA, and external service teams",
  "Supported release and issue resolution",
  "Helped translate technical constraints into user-facing behavior"
];

const identityContributions = [
  "Clarified user states and required actions",
  "Organized screen behavior and transition logic",
  "Coordinated requirements with marketing, system, and QA teams",
  "Supported delivery and release preparation",
  "Helped ensure the flow was understandable from the user's perspective"
];

const chargeComplexity = [
  ["Multiple Charge Methods", "Point, credit card, and bank-related charge flows had different rules and constraints."],
  ["External Integration", "Some flows depended on external services and partner-side behavior."],
  ["Error Handling", "Users needed clear feedback when charge actions could not be completed."],
  ["Release Reliability", "Payment-related flows required careful testing, QA, and release coordination."]
];

const identityComplexity = [
  ["User State Handling", "Different verification states required different screen behavior."],
  ["Regulated Flow", "The experience needed to respect financial service requirements."],
  ["Error and Recovery", "Users needed understandable feedback when actions could not be completed."],
  ["Cross-team Delivery", "The project required alignment across product, system, QA, and operational teams."]
];

const supportingContributions = [
  ["Amazon Integration", "Supported requirement clarification, UI/UX design, and delivery coordination for an external service integration."],
  ["Concur Integration", "Supported requirement clarification, UI/UX design, and delivery coordination for an external service integration."],
  ["Charge Before Payment", "Supported charge-before-paying product flows from mini-app experiences."],
  ["Pay for Prepaid Card", "Supported frontend development for the Pay for Prepaid Card project."]
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

function RoleGrid() {
  return (
    <div className="grid gap-5 md:grid-cols-3 xl:grid-cols-6">
      {roleCards.map(([title, body], index) => (
        <article key={title} className="border-t border-black/10 pt-5">
          <p className="text-[0.68rem] font-bold tracking-[0.18em] text-tomato">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 text-sm font-semibold leading-6 text-[#171512]">{title}</h3>
          <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
        </article>
      ))}
    </div>
  );
}

function BulletCards({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2">
      {items.map((item) => (
        <p key={item} className="border border-black/10 p-4 text-sm leading-7 text-neutral-600">
          {item}
        </p>
      ))}
    </div>
  );
}

function CompactCards({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([title, body]) => (
        <article key={title} className="border border-black/10 p-5">
          <h4 className="text-base font-semibold leading-6 text-[#171512]">{title}</h4>
          <p className="mt-3 text-sm leading-7 text-neutral-600">{body}</p>
        </article>
      ))}
    </div>
  );
}

function ScreenshotGrid({
  images,
  columns = "md:grid-cols-3",
  gap = "gap-8",
  figureClassName = "flex justify-center overflow-hidden",
  imageClassName = "h-auto max-h-[360px] w-auto max-w-[220px]"
}: {
  images: Array<[string, string]>;
  columns?: string;
  gap?: string;
  figureClassName?: string;
  imageClassName?: string;
}) {
  return (
    <div className={`mt-10 grid ${gap} ${columns}`}>
      {images.map(([src, alt]) => (
        <figure key={src} className={figureClassName}>
          <img src={assetPath(src)} alt={alt} className={imageClassName} />
        </figure>
      ))}
    </div>
  );
}

function OutcomeWithImage({ outcome, image, alt }: { outcome: string; image: string; alt: string }) {
  return (
    <div className="mt-5 grid gap-8 md:grid-cols-[1fr_0.62fr] md:items-center">
      <p className="text-sm leading-7 text-neutral-600">{outcome}</p>
      <figure className="flex justify-center overflow-hidden">
        <img src={assetPath(image)} alt={alt} className="h-auto max-h-[360px] w-auto max-w-[220px]" />
      </figure>
    </div>
  );
}

function BorderedScreenshot({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="mx-auto w-full max-w-[230px] overflow-hidden border border-[#171512] bg-white">
      <img src={assetPath(src)} alt={alt} className="h-auto w-full" />
    </figure>
  );
}

function BorderedScreenshotGrid({ images }: { images: Array<[string, string]> }) {
  return (
    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {images.map(([src, alt]) => (
        <BorderedScreenshot key={src} src={src} alt={alt} />
      ))}
    </div>
  );
}

function AmazonContributionCard() {
  return (
    <article className="grid gap-8 border border-black/10 p-6 md:grid-cols-[1fr_0.58fr] md:items-center">
      <div>
        <h4 className="text-base font-semibold leading-6 text-[#171512]">Amazon Integration</h4>
        <p className="mt-3 text-sm leading-7 text-neutral-600">
          Supported requirement clarification, UI/UX design, and delivery coordination for an external service
          integration.
        </p>
      </div>
      <figure className="flex justify-center overflow-hidden">
        <img
          src={assetPath(`${imageBase}/pay_amazon.png`)}
          alt="au PAY Amazon integration screen"
          className="h-auto max-h-[360px] w-auto max-w-[220px]"
        />
      </figure>
    </article>
  );
}

function HighlightBlock({
  eyebrow,
  title,
  intro,
  challenge,
  direction,
  contribution,
  complexity,
  outcome,
  outcomeImage,
  screens
}: {
  eyebrow: string;
  title: string;
  intro: string;
  challenge: ReactNode;
  direction: ReactNode;
  contribution: string[];
  complexity?: string[][];
  outcome: string;
  outcomeImage?: ReactNode;
  screens?: ReactNode;
}) {
  return (
    <Section id={eyebrow.toLowerCase().replaceAll(" ", "-")} eyebrow={eyebrow} title={title} body={intro}>
      <div className="mx-auto max-w-5xl space-y-10">
        <article className="border-t border-black/10 pt-6">
          <h3 className="text-xl font-semibold leading-7 text-[#171512]">Challenge</h3>
          <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">{challenge}</div>
        </article>

        <article className="border-t border-black/10 pt-6">
          <h3 className="text-xl font-semibold leading-7 text-[#171512]">Product Direction</h3>
          <div className="mt-5 space-y-5 text-sm leading-7 text-neutral-600">{direction}</div>
        </article>

        <article className="border-t border-black/10 pt-6">
          <h3 className="text-xl font-semibold leading-7 text-[#171512]">My Contribution</h3>
          <div className="mt-5">
            <BulletCards items={contribution} />
          </div>
        </article>

        {complexity ? (
          <article className="border-t border-black/10 pt-6">
            <h3 className="text-xl font-semibold leading-7 text-[#171512]">Product Complexity</h3>
            <div className="mt-6">
              <CompactCards items={complexity} />
            </div>
          </article>
        ) : null}

        <article className="border-t border-black/10 pt-6">
          <h3 className="text-xl font-semibold leading-7 text-[#171512]">Outcome</h3>
          {outcomeImage ?? <p className="mt-5 text-sm leading-7 text-neutral-600">{outcome}</p>}
          {screens}
        </article>
      </div>
    </Section>
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
              au PAY is a fintech product used for everyday payments, charge flows, transaction review,
              identity-related actions, and partner services. My work focused on delivering user-facing fintech
              improvements across payment, charge, identity, and transaction experiences.
            </p>
            <div className="mt-10 grid max-w-4xl gap-x-12 gap-y-5 border-y border-black/10 py-6 md:grid-cols-3">
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Role</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Product Manager
                  <br />
                  Frontend Engineer
                </p>
              </article>
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Period</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  2022.12 - 2024.09
                  <br />
                  2025.10 - 2026.03
                </p>
              </article>
              <article>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Product Area</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">
                  Payment / Charge
                  <br />
                  Transaction History
                  <br />
                  Identity Verification
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
            id="overview"
            eyebrow="Overview"
            title="Building reliable fintech experiences inside a large-scale payment product."
            body="au PAY is a large-scale mobile payment service used across daily payment, charge, point, and transaction experiences. My work focused on translating complex business and system requirements into reliable user-facing flows, while coordinating across marketing, design, engineer, QA, and external service teams."
            noTopBorder
          >
            <p className="mx-auto -mt-6 mb-12 max-w-3xl text-center text-xs italic leading-6 text-neutral-500">
              *Due to confidentiality restrictions, internal business logic, metrics, and system specifications have
              been simplified or omitted. Public-facing product screenshots are used where possible.
            </p>
          </Section>

          <Section
            id="overall-role"
            eyebrow="Overall Role"
            title="My role was to connect product requirements with implementation reality."
          >
            <RoleGrid />
          </Section>

          <HighlightBlock
            eyebrow="Highlight 01"
            title="Transaction History Renewal"
            intro="Renewing a core transaction history experience to make payment activity easier to understand and maintain."
            challenge={
              <>
                <p>
                  Transaction history is a core trust-building function in a payment product. Users need to check what
                  happened, when it happened, how much was paid, and whether point or payment-related information is
                  correct.
                </p>
                <p>
                  The challenge was to improve a high-usage, high-trust area while handling complex data, display
                  conditions, and release constraints.
                </p>
              </>
            }
            direction={
              <>
                <p>Make transaction activity easier to understand and more reliable to use.</p>
                <p>
                  The renewal needed to improve information clarity, screen structure, maintainability, and consistency
                  across related payment and point experiences.
                </p>
              </>
            }
            contribution={transactionContributions}
            outcome="Contributed to the renewal of a core user-facing history experience, improving clarity, maintainability, and delivery quality for a key fintech flow."
            outcomeImage={
              <OutcomeWithImage
                outcome="Contributed to the renewal of a core user-facing history experience, improving clarity, maintainability, and delivery quality for a key fintech flow."
                image={`${imageBase}/pay_history.png`}
                alt="au PAY transaction history screen"
              />
            }
          />

          <HighlightBlock
            eyebrow="Highlight 02"
            title="Charge Experience Improvements"
            intro="Supporting reliable charge-related flows across point charge, credit charge, and bank charge experiences."
            challenge={
              <>
                <p>
                  Charge flows are sensitive fintech experiences. Users need to understand available methods, complete
                  actions correctly, and recover from errors without losing trust.
                </p>
                <p>
                  Different charge methods involved different business rules, external services, error states, and
                  implementation constraints.
                </p>
              </>
            }
            direction={<p>Make charge flows reliable, understandable, and consistent across multiple payment methods.</p>}
            contribution={chargeContributions}
            complexity={chargeComplexity}
            outcome="Helped deliver and maintain reliable charge experiences across multiple fintech flows while balancing user clarity, system constraints, and release quality."
            screens={
              <ScreenshotGrid
                columns="grid-cols-2 md:grid-cols-4"
                images={[
                  [`${imageBase}/pay_charge_top.PNG`, "au PAY charge top screen"],
                  [`${imageBase}/pay_credit_charge.PNG`, "au PAY credit charge screen"],
                  [`${imageBase}/pay_credit_regist.PNG`, "au PAY credit card registration screen"],
                  [`${imageBase}/pay_bank_charge.PNG`, "au PAY bank charge screen"]
                ]}
              />
            }
          />

          <HighlightBlock
            eyebrow="Highlight 03"
            title="Identity Verification"
            intro="Clarifying and delivering identity-related flows within a regulated fintech experience."
            challenge={
              <>
                <p>
                  Identity verification is a sensitive and regulated flow. Users need to understand required actions,
                  current status, and next steps clearly.
                </p>
                <p>
                  The challenge was to handle complex user states and service requirements without making the experience
                  feel confusing or unstable.
                </p>
              </>
            }
            direction={<p>Make verification-related steps clearer, more reliable, and easier to complete.</p>}
            contribution={identityContributions}
            complexity={identityComplexity}
            outcome="Contributed to a clearer and more reliable identity-related experience within au PAY."
            screens={
              <BorderedScreenshotGrid
                images={[
                  [`${imageBase}/pay_identity.png`, "au PAY identity verification screen"],
                  [`${imageBase}/pay_identity_3.png`, "au PAY identity verification guide screen"],
                  [`${imageBase}/pay_identity_4.png`, "au PAY identity verification status screen"]
                ]}
              />
            }
          />

          <Section
            id="supporting-contributions"
            eyebrow="Highlight 04"
            title="au PAY&Amazon and other UI/UX Improvements"
            body="Alongside the main projects, I also contributed to other payment-related initiatives and external integration work."
          >
            <div className="grid gap-4 md:grid-cols-2">
              <AmazonContributionCard />
              <CompactCards items={supportingContributions.slice(1)} />
            </div>
          </Section>

          <Section id="reflection" eyebrow="Reflection" title="Reliable fintech experiences are built through invisible details.">
            <div className="mx-auto max-w-4xl space-y-7 text-lg leading-9 text-neutral-600">
              <p>Working on au PAY taught me that fintech product delivery is not only about building screens.</p>
              <p>
                A reliable payment experience depends on requirement clarity, edge-case handling, error communication,
                system feasibility, frontend quality, and careful release coordination.
              </p>
              <p>
                My strength was working between product and engineering: understanding user-facing expectations,
                clarifying ambiguous requirements, and turning complex fintech flows into stable, usable experiences.
              </p>
            </div>
          </Section>
        </section>

        <BottomBackToWork className="text-neutral-500" />
      </section>
    </main>
  );
}
