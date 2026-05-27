"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65 }
};

const tags = ["UX Design", "Mobile App", "AI Recommendation", "Cashless Payment", "Multilingual UX"];

const features = [
  "AI-based menu recommendations",
  "Multi-language menu support",
  "Clear menu filtering",
  "Customization for sweetness, toppings, and dietary preferences",
  "Cashless payment options such as credit card and QR payment"
];

const painPoints = [
  "Limited payment methods",
  "Difficulty for international users",
  "Complex customization",
  "Cluttered navigation"
];

const responsibilities = [
  "User research",
  "Competitive analysis",
  "Information architecture",
  "Wireframing",
  "Prototyping",
  "UI & interaction design",
  "Usability testing",
  "Iteration"
];

const processSteps = [
  ["01", "Paper wireframes", "Explored low-friction ordering flows before committing to interface detail."],
  ["02", "Digital wireframes", "Structured the core screens around menu discovery, customization, cart, and payment."],
  ["03", "Low-fidelity prototype", "Connected the main ordering path to evaluate navigation and checkout logic."],
  ["04", "Usability study", "Tested decision-making, back navigation, and checkout clarity with target users."]
];

const wireframes = [
  {
    title: "Homepage",
    goal: "Communicate the restaurant world quickly and make AI ordering easy to discover.",
    thinking: "A brand-led first screen introduces seasonal offers, recommendations, and a visible AI entry point.",
    decisions: "Hero image, AI ordering module, seasonal section, daily recommendations, and campaign cards."
  },
  {
    title: "Menu",
    goal: "Help users find menu items quickly through clear categories and discovery sections.",
    thinking: "Category tabs reduce search effort while recommendations support families and first-time visitors.",
    decisions: "Horizontal category filters, seasonal items, today's recommendations, and kid-friendly grouping."
  },
  {
    title: "Product detail",
    goal: "Clarify product information and support confident customization.",
    thinking: "Users need price, allergen information, customization, and visual confidence before adding items.",
    decisions: "Large image area, allergy notes, sweetness/topping controls, coupon visibility, and AR entry."
  },
  {
    title: "Cart",
    goal: "Make order review simple and reduce mistakes before payment.",
    thinking: "A compact summary and related recommendations keep the user oriented without adding friction.",
    decisions: "Clear item list, coupon discount, final amount, payment CTA, and add-on recommendation area."
  },
  {
    title: "Payment",
    goal: "Create a fast, reassuring cashless checkout flow.",
    thinking: "Payment choice, final price, and order confirmation need to be visible at the same decision point.",
    decisions: "Credit card, QR, and e-money options with a consolidated final price summary."
  },
  {
    title: "AI ordering",
    goal: "Reduce decision fatigue with a guided recommendation flow.",
    thinking: "Conversational questions collect group size, children, and preferences without overwhelming users.",
    decisions: "Step-by-step prompts, preference tags, personalized cards, and instant add-to-cart actions."
  },
  {
    title: "Account",
    goal: "Support repeat ordering, payment management, and language settings.",
    thinking: "Returning users need fast access to history, saved payment methods, and account preferences.",
    decisions: "Membership status, order history, saved cards, language switch, and clear logout affordance."
  }
];

const usabilityFindings = [
  [
    "Users felt too many categories and menu options made it hard to decide what to order.",
    "Introduced an AI ordering flow."
  ],
  [
    "Users were unsure how to return from product details.",
    "Added clearer navigation hierarchy and consistent back navigation."
  ],
  [
    "Users wanted a quicker and simpler checkout process.",
    "Streamlined the payment page and consolidated the final price summary."
  ]
];

const mockups = ["Homepage", "Menu", "Detail", "Detail with coupon", "Cart", "Order", "Pay", "Paying", "Confirm", "Paid", "AI", "Account"];

const accessibility = [
  "Consistent & clear navigation",
  "High contrast & readable typography",
  "Multiple input methods"
];

const nextSteps = [
  "Improve and validate the AI-assisted ordering flow",
  "Optimize responsive design",
  "Run additional usability testing"
];

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
};

function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <motion.div {...fadeUp} className="mb-12 grid gap-5 border-t border-black/10 pt-6 lg:grid-cols-[0.28fr_1fr]">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b66a4d]">{eyebrow}</p>
      <div>
        <h2 className="max-w-4xl text-[clamp(2.2rem,5vw,5.6rem)] font-semibold leading-[0.96] tracking-normal text-[#161412]">
          {title}
        </h2>
        {children ? <div className="mt-7 max-w-3xl text-lg leading-8 text-black/65">{children}</div> : null}
      </div>
    </motion.div>
  );
}

function InfoCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <motion.article
      {...fadeUp}
      className="rounded-sm border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(22,20,18,0.06)]"
    >
      <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-black/45">{title}</h3>
      <div className="mt-5 text-base leading-7 text-black/72">{children}</div>
    </motion.article>
  );
}

function PainPointCard({ title, index }: { title: string; index: number }) {
  return (
    <motion.article {...fadeUp} className="rounded-sm bg-[#f4eee9] p-6">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b66a4d]">Pain point {index}</p>
      <h3 className="mt-8 text-2xl font-semibold leading-tight">{title}</h3>
    </motion.article>
  );
}

function ProcessStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <motion.article {...fadeUp} className="border-t border-black/15 pt-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#b66a4d]">{number}</p>
      <h3 className="mt-4 text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-base leading-7 text-black/62">{description}</p>
    </motion.article>
  );
}

function CaseStudyHero() {
  return (
    <section className="min-h-screen px-5 pb-24 pt-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <motion.div {...fadeUp}>
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
          <h1 className="mt-10 max-w-6xl text-[clamp(3.2rem,8vw,9rem)] font-semibold leading-[0.88] tracking-normal text-[#151311]">
            Menu & Payment App for a Japanese Dessert & Dining Restaurant
          </h1>
          <p className="mt-10 max-w-4xl text-xl leading-9 text-black/62 md:text-2xl md:leading-10">
            A mobile ordering and cashless payment experience designed to simplify menu exploration, customization, and
            checkout for families and international customers.
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-14 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-black/12 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em]">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div {...fadeUp} className="mt-20 grid gap-6 border-y border-black/10 py-7 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/42">Project duration</p>
            <p className="mt-2 text-xl font-semibold">2025.02.20 - 2025.03.20</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-black/42">Role</p>
            <p className="mt-2 text-xl font-semibold">UX Designer</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockupGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {mockups.map((screen) => (
        <motion.figure key={screen} {...fadeUp} className="rounded-[2rem] bg-[#f5f2ee] p-3 shadow-[0_24px_60px_rgba(22,20,18,0.08)]">
          {/* Replace this placeholder with the real mockup screenshot for this screen. */}
          <div className="grid aspect-[9/16] place-items-center rounded-[1.45rem] border border-black/10 bg-gradient-to-b from-white to-[#eadfd5] p-6 text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-black/36">Mockup</span>
            <figcaption className="mt-3 text-xl font-semibold text-[#171512]">{screen}</figcaption>
          </div>
        </motion.figure>
      ))}
    </div>
  );
}

export function MenuPaymentCaseStudy() {
  return (
    <main className="bg-[#fbfaf8] text-[#171512]">
      <CaseStudyHero />

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Overview" title="A sharper ordering system for modern dining.">
            <p>
              The product is a mobile ordering and cashless payment solution for Japanese dessert and dining restaurants,
              shaped around increasing demand from tourists and family customers.
            </p>
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <InfoCard title="Product">A mobile ordering and cashless payment solution for Japanese dessert and dining restaurants.</InfoCard>
            <InfoCard title="Context">Increasing demand from tourists and family customers created a need for clearer menu browsing and faster checkout.</InfoCard>
            <InfoCard title="Key features">
              <ul className="space-y-2">
                {features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Problem" title="Ordering felt harder than it needed to be.">
            <p>
              Users often struggle with complex menu navigation, unclear customization flows, and limited payment methods
              when ordering dessert and dining items. Families and international customers need a simpler and more
              intuitive ordering experience.
            </p>
          </SectionTitle>
          <div className="grid gap-5 md:grid-cols-4">
            {painPoints.map((point, index) => <PainPointCard key={point} title={point} index={index + 1} />)}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <InfoCard title="Goal">
            The goal is to create a seamless and enjoyable ordering experience by simplifying menu navigation, improving
            customization, introducing AI-based recommendations, and enabling a smooth cashless payment flow.
          </InfoCard>
          <InfoCard title="My role">
            <p className="font-semibold text-[#171512]">UX Designer</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {responsibilities.map((item) => (
                <span key={item} className="rounded-full bg-[#f1e7df] px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em]">
                  {item}
                </span>
              ))}
            </div>
          </InfoCard>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Research" title="The real friction was structural, not visual.">
            <p>
              I conducted user interviews, surveys, and competitive analysis. Initially, I assumed users mainly valued
              visual appeal and menu variety. Research showed that users struggled more with unclear menu structures,
              complex customization steps, and limited payment methods. These insights shifted the design direction toward
              clearer filtering, simplified customization, diversified cashless payment, and AI recommendations.
            </p>
          </SectionTitle>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1fr]">
          <motion.div {...fadeUp} className="rounded-sm bg-[#171512] p-8 text-white md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">Persona</p>
            <h2 className="mt-8 text-[clamp(2.3rem,5vw,5rem)] font-semibold leading-none">Misaki Tanaka</h2>
            <p className="mt-8 text-lg leading-8 text-white/68">
              A busy mother of two who needs a kid-friendly digital menu with clear navigation and helpful AI
              recommendations because her children struggle to understand complex menus, making ordering stressful and
              time-consuming.
            </p>
          </motion.div>
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard title="Goals">
              <ul className="space-y-2">
                <li>Quickly find kid-friendly menu items</li>
                <li>Reduce ordering stress</li>
                <li>Use simple cashless payment</li>
              </ul>
            </InfoCard>
            <InfoCard title="Frustrations">
              <ul className="space-y-2">
                <li>Complex menus</li>
                <li>Long ordering time</li>
                <li>Limited payment options</li>
              </ul>
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Process" title="From rough structure to testable product logic." />
          <div className="grid gap-8 md:grid-cols-4">
            {processSteps.map(([number, title, description]) => (
              <ProcessStep key={title} number={number} title={title} description={description} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Wireframes" title="Screen decisions with a product lens." />
          <div className="grid gap-5 md:grid-cols-2">
            {wireframes.map((screen) => (
              <InfoCard key={screen.title} title={screen.title}>
                <p><span className="font-semibold text-[#171512]">Design goal:</span> {screen.goal}</p>
                <p className="mt-4"><span className="font-semibold text-[#171512]">Design thinking:</span> {screen.thinking}</p>
                <p className="mt-4"><span className="font-semibold text-[#171512]">Key UI decisions:</span> {screen.decisions}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Usability study" title="Testing clarified where confidence broke down." />
          <div className="grid gap-5 lg:grid-cols-3">
            {usabilityFindings.map(([finding, solution], index) => (
              <InfoCard key={finding} title={`Finding ${index + 1}`}>
                <p>{finding}</p>
                <p className="mt-5 font-semibold text-[#171512]">Solution: {solution}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Final design" title="A flexible mobile system ready for real mockups." />
          <MockupGrid />
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Accessibility" title="Designed for clarity, confidence, and multiple ways to act." />
          <div className="grid gap-5 md:grid-cols-3">
            {accessibility.map((item) => (
              <InfoCard key={item} title={item}>
                The interface uses predictable navigation, clear hierarchy, readable contrast, and touch-friendly
                interactions to support a broader range of users.
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <InfoCard title="Impact">
            The final design simplifies the entire ordering flow from item selection to payment, reducing decision-making
            effort and improving clarity for adults, families, and first-time users.
          </InfoCard>
          <InfoCard title="What I learned">
            I learned how user research can uncover real pain points, how iterative design improves usability, and how
            AI-assisted ordering can support users who struggle with menu navigation and decision-making.
          </InfoCard>
        </div>
      </section>

      <section className="px-5 py-24 md:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Next steps" title="Further validation before visual polish." />
          <div className="grid gap-5 md:grid-cols-3">
            {nextSteps.map((step) => (
              <InfoCard key={step} title={step}>
                Continue refining the product direction with evidence from more targeted user feedback.
              </InfoCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
