"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

const prototypeUrl = "#final-experience"; // Replace this with the real prototype URL later.

const navItems = [
  ["snapshot", "Snapshot"],
  ["challenge", "Challenge"],
  ["insights", "Research Insights"],
  ["principles", "Design Principles"],
  ["journey", "User Journey"],
  ["decisions", "Key Decisions"],
  ["wireframes", "Wireframes"],
  ["final-experience", "Final Experience"],
  ["accessibility", "Accessibility"],
  ["reflection", "Reflection"]
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const }
};

const tags = ["UX Design", "Mobile App", "AI Recommendation", "Cashless Payment", "Multilingual UX"];

const snapshot = [
  ["Role", "UX Designer"],
  ["Timeline", "2025.02 - 2025.03"],
  ["Focus", "Menu discovery, customization, AI recommendation, and checkout"],
  ["Output", "Mobile app prototype and UX case study"]
];

const insights = [
  ["Decision fatigue", "Users felt overwhelmed by too many menu categories and options."],
  ["Customization friction", "Sweetness, toppings, and dietary preferences were difficult to adjust clearly."],
  ["Payment limitation", "Users expected more cashless options such as credit cards and QR payments."],
  ["Language barrier", "International users needed basic multilingual support to order confidently."]
];

const principles = [
  ["Reduce decision effort", "AI recommendations help users choose faster."],
  ["Clarify customization", "Sweetness, toppings, and dietary options are structured clearly."],
  ["Build checkout confidence", "Payment options and final price are shown transparently."]
];

const journey = [
  {
    step: "Scan QR code",
    action: "Open the restaurant menu from the table.",
    pain: "The entry point can feel unclear for first-time visitors.",
    opportunity: "Provide clear scan guidance and immediate language support."
  },
  {
    step: "Browse menu",
    action: "Explore desserts, meals, seasonal items, and recommendations.",
    pain: "Too many categories make it hard to decide quickly.",
    opportunity: "Use category structure, filters, and AI recommendations."
  },
  {
    step: "Customize order",
    action: "Adjust sweetness, toppings, and dietary preferences.",
    pain: "Customization options can feel scattered.",
    opportunity: "Group choices into a guided, step-by-step flow."
  },
  {
    step: "Select payment",
    action: "Choose a preferred cashless payment method.",
    pain: "Limited choices reduce checkout confidence.",
    opportunity: "Support credit card, QR payment, and electronic money."
  },
  {
    step: "Confirm and pay",
    action: "Review final price and complete the order.",
    pain: "Users need reassurance before payment.",
    opportunity: "Show a consolidated order and final price summary."
  }
];

const decisions = [
  {
    title: "AI Ordering Flow",
    purpose: "Reduce decision fatigue for users who do not know what to order.",
    design: "A conversational flow asks about people count, children, preferences, and category tags.",
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/11_AI%E6%B3%A8%E6%96%87%20-%20chat1.png"
  },
  {
    title: "Menu Category Structure",
    purpose: "Help users quickly find desired items.",
    design: "Menu items are organized by category, recommendation, seasonal items, and kids-friendly options.",
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/02_Menu.png"
  },
  {
    title: "Product Customization",
    purpose: "Make toppings, sweetness, and preferences easier to adjust.",
    design: "Customization options are grouped clearly on the product detail page.",
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/03_Detail.png"
  },
  {
    title: "Cashless Checkout",
    purpose: "Support Japan's expanding cashless payment behavior.",
    design: "Payment options include credit card, QR payment, electronic money, and final price confirmation.",
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/07_Pay.png"
  },
  {
    title: "Account & Reorder",
    purpose: "Support returning users and reduce repeated input.",
    design: "Users can manage payment methods, order history, language settings, and membership information.",
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/12_Account.png"
  }
];

const wireframeItems = [
  {
    title: "Paper wireframes",
    body: "Explored basic ordering structure before committing to detailed interface decisions.",
    image: "/assets/Menu_App_img/Paper%20wireframes.jpeg"
  },
  {
    title: "Digital wireframes",
    body: "Translated rough ideas into screen-level product logic for homepage, menu, detail, and payment.",
    image: "/assets/Menu_App_img/wireframe/01%20Homepage.png"
  },
  {
    title: "Low-fidelity prototype",
    body: "Connected key screens to test navigation, customization, and checkout flow.",
    image: "/assets/Menu_App_img/wireframe/07%20Pay.png"
  }
];

const usabilityFindings = [
  ["Too many categories made it hard to decide.", "Introduced AI ordering flow."],
  ["Users were unsure how to return from product details.", "Added clearer navigation hierarchy and consistent back navigation."],
  ["Users wanted faster checkout.", "Streamlined the payment page and consolidated the final price summary."]
];

const finalScreens = [
  ["Home", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/01_Homepage.png"],
  ["Menu", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/02_Menu.png"],
  ["Product Detail", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/03_Detail.png"],
  ["Cart", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/05_Go%20to%20Cart.png"],
  ["Payment", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/07_Pay.png"],
  ["Confirmation", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/09_Confirm.png"],
  ["AI Ordering", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/11_AI%E6%B3%A8%E6%96%87%20-%20chat1.png"],
  ["Account", "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/12_Account.png"]
];

const accessibilityItems = [
  ["Consistent navigation", "Clear layout and recognizable navigation icons support easier movement."],
  ["Readable typography", "High contrast and legible font sizes improve readability."],
  ["Multiple input methods", "Touch-friendly actions, AI assistance, and future voice support make ordering more accessible."]
];

function BackArrow() {
  return (
    <span className="relative h-3 w-6" aria-hidden="true">
      <span className="absolute left-0 top-1/2 h-px w-6 -translate-y-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-3 origin-left -translate-y-1/2 rotate-[-35deg] bg-current" />
    </span>
  );
}

function FloatingBackToWork() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const anchor = document.getElementById("top-back-to-work");
    if (!anchor) return;

    const observer = new IntersectionObserver(([entry]) => setIsVisible(!entry.isIntersecting), { threshold: 0 });
    observer.observe(anchor);
    return () => observer.disconnect();
  }, []);

  return (
    <Link
      href="/work"
      className={`fixed bottom-7 left-7 z-40 hidden items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition duration-300 hover:text-black lg:inline-flex ${
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      data-cursor="button"
    >
      <BackArrow />
      Back to work
    </Link>
  );
}

function CaseNav() {
  const [active, setActive] = useState("snapshot");

  const handleClick = (id: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
    setActive(id);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-24% 0px -60% 0px", threshold: [0.1, 0.35, 0.6] }
    );

    navItems.forEach(([id]) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="hidden self-start lg:sticky lg:top-[7.5rem] lg:block">
      <nav aria-label="Case study navigation" className="w-44">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">Case Study</p>
        <div className="mt-7 space-y-1">
          {navItems.map(([id, label], index) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={handleClick(id)}
              className={`flex items-center gap-3 border-l py-2 pl-4 text-xs font-semibold transition-colors ${
                active === id
                  ? "border-tomato text-tomato"
                  : "border-black/10 text-neutral-400 hover:border-black/25 hover:text-[#171512]"
              }`}
              data-cursor="button"
            >
              <span className="w-5 text-[0.68rem] text-current/55">{String(index + 1).padStart(2, "0")}</span>
              <span>{label}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: ReactNode }) {
  return (
    <motion.section {...fadeUp} id={id} className="scroll-mt-28 pb-16">
      <div className="flex items-center gap-6">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-tomato">{eyebrow}</p>
        <span className="h-px flex-1 bg-black/10" aria-hidden="true" />
      </div>
      <h2 className="mt-6 max-w-3xl font-barlow text-[clamp(1.35rem,2.6vw,2.4rem)] font-semibold leading-[1.05]">
        {title}
      </h2>
      <div className="mt-9">{children}</div>
    </motion.section>
  );
}

function SnapshotCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="border-t border-black/10 pt-5">
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#171512]">{title}</h3>
      <p className="mt-5 text-base leading-7 text-neutral-600">{body}</p>
    </article>
  );
}

function SimpleCard({ index, title, body }: { index?: number; title: string; body: string }) {
  return (
    <article className="rounded-sm border border-black/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,21,18,0.08)]">
      {index ? <p className="text-xs font-bold tracking-[0.18em] text-tomato">{String(index).padStart(2, "0")}</p> : null}
      <h3 className={index ? "mt-4 text-lg font-semibold" : "text-lg font-semibold"}>{title}</h3>
      <p className="mt-4 text-base leading-7 text-neutral-600">{body}</p>
    </article>
  );
}

function CaseStudyHero() {
  return (
    <section className="px-5 pb-20 pt-32 md:px-16">
      <div className="mx-auto max-w-7xl">
        <Link
          id="top-back-to-work"
          href="/work"
          className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 transition-colors hover:text-black"
          data-cursor="button"
        >
          <BackArrow />
          Back to work
        </Link>

        <motion.div {...fadeUp} className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-center">
          <div>
            <div className="flex flex-wrap gap-2.5">
              {tags.map((tag) => (
                <span key={tag} className="rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-10 max-w-4xl font-barlow text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-normal">
              Menu & Payment App
              <span className="block text-neutral-400">for a Japanese Dessert & Dining Restaurant</span>
            </h1>
            <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-600">
              A mobile ordering and cashless payment experience designed to reduce menu confusion, simplify
              customization, and support families and international customers.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={prototypeUrl}
                className="inline-flex min-h-12 items-center rounded-full bg-[#171512] px-6 text-sm font-bold text-white transition hover:bg-tomato"
                data-cursor="button"
              >
                View Prototype
              </a>
              <a
                href="#snapshot"
                className="inline-flex min-h-12 items-center rounded-full border border-black/15 px-6 text-sm font-bold text-[#171512] transition hover:border-tomato hover:text-tomato"
                data-cursor="button"
              >
                Explore Process
              </a>
            </div>

            <dl className="mt-14 grid gap-8 border-t border-black/10 pt-8 md:grid-cols-3">
              {[
                ["Role", "UX Designer"],
                ["Timeline", "2025.02 - 2025.03"],
                ["Scope", "User Research / IA / Wireframing / Prototyping / UI Design / Usability Testing"]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.26em] text-[#171512]">{label}</dt>
                  <dd className="mt-5 text-base leading-7 text-neutral-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <video
              className="max-h-[34rem] w-full max-w-[20rem] object-contain"
              autoPlay
              loop
              muted
              preload="auto"
              playsInline
              src={assetPath("/assets/Menu_App_img/Design%20a%20menu%20%26%20payment%20app%20and%20a%20responsive%20website%20for%20a%20Japanese%20restaurant.MOV")}
            >
              Your browser does not support the prototype video.
            </video>
          </div>
        </motion.div>

        <motion.figure {...fadeUp} className="mt-20 overflow-hidden rounded-sm">
          <img
            src={assetPath("/assets/Menu_App_img.png")}
            alt="Mobile app prototype screens arranged across multiple phone mockups"
            className="block h-auto w-full"
          />
        </motion.figure>
      </div>
    </section>
  );
}

function JourneyStep({ step, action, pain, opportunity, index }: (typeof journey)[number] & { index: number }) {
  return (
    <article className="min-w-0 border-l border-black/10 pl-5">
      <p className="text-xs font-bold tracking-[0.18em] text-tomato">{String(index).padStart(2, "0")}</p>
      <h3 className="mt-4 text-xl font-semibold">{step}</h3>
      <p className="mt-5 text-sm font-semibold text-[#171512]">Action</p>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{action}</p>
      <p className="mt-5 text-sm font-semibold text-[#171512]">Pain point</p>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{pain}</p>
      <p className="mt-5 text-sm font-semibold text-[#171512]">Opportunity</p>
      <p className="mt-2 text-sm leading-6 text-neutral-600">{opportunity}</p>
    </article>
  );
}

function DesignDecisionBlock({ title, purpose, design, image, index }: (typeof decisions)[number] & { index: number }) {
  return (
    <article className="grid items-center gap-8 border-t border-black/10 py-10 lg:grid-cols-[0.9fr_1fr]">
      <div>
        <p className="text-xs font-bold tracking-[0.18em] text-tomato">{String(index).padStart(2, "0")}</p>
        <h3 className="mt-5 text-2xl font-semibold">{title}</h3>
        <div className="mt-7 grid gap-5 md:grid-cols-2 lg:grid-cols-1">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Purpose</p>
            <p className="mt-3 text-base leading-7 text-neutral-600">{purpose}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Design</p>
            <p className="mt-3 text-base leading-7 text-neutral-600">{design}</p>
          </div>
        </div>
      </div>
      <figure className="overflow-hidden rounded-sm bg-[#f4f2ef] p-5">
        <img src={assetPath(image)} alt={`${title} screen`} className="mx-auto h-auto max-h-[32rem] w-full max-w-[16rem] object-contain" />
      </figure>
    </article>
  );
}

function WireframeCard({ title, body, image }: (typeof wireframeItems)[number]) {
  return (
    <figure className="overflow-hidden rounded-sm border border-black/10 bg-white">
      <div className="aspect-video bg-[#f4f2ef] p-4">
        <img src={assetPath(image)} alt={title} className="h-full w-full object-contain" />
      </div>
      <figcaption className="p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-neutral-600">{body}</p>
      </figcaption>
    </figure>
  );
}

function MockupGallery() {
  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-3 text-sm font-semibold text-neutral-500">
        {["Scan QR", "Explore menu", "Customize", "Review cart", "Pay", "Confirmation"].map((item, index) => (
          <span key={item} className="inline-flex items-center gap-3">
            {item}
            {index < 5 ? <span className="text-tomato">→</span> : null}
          </span>
        ))}
      </div>

      {/* Replace these screen paths with final mockup screenshots if needed. */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {finalScreens.map(([title, src]) => (
          <figure
            key={title}
            className="group overflow-hidden rounded-sm border border-black/10 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(23,21,18,0.08)]"
          >
            <div className="flex aspect-[9/16] justify-center overflow-hidden rounded-sm bg-[#f4f2ef] p-5">
              <img
                src={assetPath(src)}
                alt={`${title} screen`}
                className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <figcaption className="pt-4 text-sm font-bold text-[#171512]">{title}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCTA() {
  return (
    <section id="cta" className="px-5 pb-28 md:px-16">
      <motion.div {...fadeUp} className="mx-auto max-w-7xl border-t border-black/10 pt-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">Prototype</p>
        <h2 className="mt-6 max-w-3xl font-barlow text-[clamp(1.8rem,3.6vw,3.8rem)] font-semibold leading-[0.95]">
          Explore the prototype
        </h2>
        <p className="mt-8 max-w-2xl text-xl leading-9 text-neutral-600">
          View the interactive ordering flow from menu discovery to payment.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={prototypeUrl}
            className="inline-flex min-h-12 items-center rounded-full bg-[#171512] px-6 text-sm font-bold text-white transition hover:bg-tomato"
            data-cursor="button"
          >
            View Prototype
          </a>
          <Link
            href="/work"
            className="inline-flex min-h-12 items-center rounded-full border border-black/15 px-6 text-sm font-bold transition hover:border-tomato hover:text-tomato"
            data-cursor="button"
          >
            Back to Work
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export function MenuPaymentCaseStudy() {
  return (
    <main className="bg-white text-[#171512]">
      <CaseStudyHero />
      <FloatingBackToWork />

      <div className="px-5 pb-20 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] xl:gap-10">
          <CaseNav />

          <div>
            <Section id="snapshot" eyebrow="Project Snapshot" title="A focused mobile ordering experience for modern restaurant customers.">
              <div className="grid gap-6 md:grid-cols-4">
                {snapshot.map(([title, body]) => (
                  <SnapshotCard key={title} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="challenge" eyebrow="Challenge" title="Reduce decision fatigue without making ordering feel rigid.">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr]">
                <p className="max-w-3xl text-xl leading-9 text-neutral-600">
                  Users often face friction when ordering from dessert and dining menus: too many choices, unclear
                  customization, limited payment options, and language barriers. Families and tourists especially need a
                  simpler, faster, and more intuitive ordering experience.
                </p>
                <aside className="border-l-2 border-tomato bg-white p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-tomato">Design challenge</p>
                  <p className="mt-5 text-2xl font-semibold leading-tight">
                    The design challenge was to reduce decision fatigue while keeping the ordering experience enjoyable and flexible.
                  </p>
                </aside>
              </div>
            </Section>

            <Section id="insights" eyebrow="Research Insights" title="Research shifted the focus from visual appeal to ordering clarity.">
              <div className="grid gap-5 md:grid-cols-2">
                {insights.map(([title, body], index) => (
                  <SimpleCard key={title} index={index + 1} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="principles" eyebrow="Design Principles" title="Three principles translated research into product decisions.">
              <div className="grid gap-6 md:grid-cols-3">
                {principles.map(([title, body], index) => (
                  <SimpleCard key={title} index={index + 1} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="journey" eyebrow="User Journey" title="A cleaner path from QR scan to confident payment.">
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
                {journey.map((step, index) => (
                  <JourneyStep key={step.step} {...step} index={index + 1} />
                ))}
              </div>
            </Section>

            <Section id="decisions" eyebrow="Key Design Decisions" title="Product decisions that connect research with interface design.">
              <div>
                {decisions.map((decision, index) => (
                  <DesignDecisionBlock key={decision.title} {...decision} index={index + 1} />
                ))}
              </div>
            </Section>

            <Section id="wireframes" eyebrow="Wireframes & Iteration" title="Testing structure before visual polish.">
              <div className="grid gap-5 lg:grid-cols-3">
                {wireframeItems.map((item) => (
                  <WireframeCard key={item.title} {...item} />
                ))}
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {usabilityFindings.map(([finding, iteration], index) => (
                  <SimpleCard key={finding} index={index + 1} title={finding} body={`Iteration: ${iteration}`} />
                ))}
              </div>
            </Section>

            <Section id="final-experience" eyebrow="Final Experience" title="A complete ordering flow from menu discovery to payment.">
              <MockupGallery />
            </Section>

            <Section id="accessibility" eyebrow="Accessibility" title="Readable, predictable, and touch-friendly.">
              <div className="grid gap-6 md:grid-cols-3">
                {accessibilityItems.map(([title, body], index) => (
                  <SimpleCard key={title} index={index + 1} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="reflection" eyebrow="Reflection" title="Small moments of friction can shape the entire ordering experience.">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.72fr]">
                <p className="text-xl leading-9 text-neutral-600">
                  This project helped me understand how small moments of friction can accumulate in a mobile ordering
                  flow. By combining user research, structured information architecture, AI-assisted recommendation, and
                  clearer checkout design, I learned how UX can reduce stress while making a digital experience feel more
                  confident and enjoyable.
                </p>
                <aside className="border-l-2 border-tomato bg-white p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-tomato">What I would improve next</p>
                  <ul className="mt-5 space-y-3 text-base leading-7 text-neutral-600">
                    <li>Validate AI recommendations with more users</li>
                    <li>Refine multilingual support</li>
                    <li>Improve responsive design</li>
                    <li>Run another usability testing round</li>
                  </ul>
                </aside>
              </div>
            </Section>
          </div>
        </div>
      </div>

      <CaseStudyCTA />
    </main>
  );
}
