"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/assetPath";

const accent = "#C89830";

const screen = (path: string) => assetPath(`/assets/Menu_App_img/${path}`);

const heroScreens = [
  "hi-fi_prototype/iphone16pro_img/01_Homepage.png",
  "hi-fi_prototype/iphone16pro_img/03_Detail.png",
  "hi-fi_prototype/iphone16pro_img/07_Pay.png"
];

const finalScreens = [
  ["Homepage", "hi-fi_prototype/iphone16pro_img/01_Homepage.png"],
  ["Menu", "hi-fi_prototype/iphone16pro_img/02_Menu.png"],
  ["Detail", "hi-fi_prototype/iphone16pro_img/03_Detail.png"],
  ["Cart", "hi-fi_prototype/iphone16pro_img/05_Go%20to%20Cart.png"],
  ["Order", "hi-fi_prototype/iphone16pro_img/06_Order.png"],
  ["Pay", "hi-fi_prototype/iphone16pro_img/07_Pay.png"],
  ["Confirm", "hi-fi_prototype/iphone16pro_img/09_Confirm.png"],
  ["AI Ordering", "hi-fi_prototype/iphone16pro_img/11_AI%E6%B3%A8%E6%96%87%20-%20chat1.png"],
  ["Account", "hi-fi_prototype/iphone16pro_img/12_Account.png"]
];

const wireframeScreens = [
  ["Homepage", "wireframe/01%20Homepage.png", "Create a clear first entry point for menu browsing and AI support."],
  ["Menu", "wireframe/02%20Menu.png", "Reduce decision effort through category structure and visual filtering."],
  ["Product Detail", "wireframe/03%20Detail.png", "Surface customization choices before users enter checkout."],
  ["Payment", "wireframe/07%20Pay.png", "Consolidate price, payment method, and confirmation in one focused step."]
];

const principles = [
  ["Reduce decision effort", "AI recommendations and clearer categories help customers choose faster."],
  ["Clarify customization", "Sweetness, toppings, and dietary choices are surfaced before checkout."],
  ["Build payment confidence", "Credit card, QR payment, and final price are visible before confirmation."]
];

const painPoints = [
  "Limited payment methods",
  "Difficulty for international users",
  "Complex customization",
  "Cluttered navigation"
];

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Section({
  number,
  label,
  children
}: {
  number: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="relative border-t border-[#ede7de]/10 py-24 md:py-32">
      <span className="pointer-events-none absolute right-0 top-12 hidden font-serif text-[11rem] leading-none text-[#ede7de]/[0.03] lg:block">
        {number}
      </span>
      <Reveal>
        <div className="mb-10 flex items-center gap-4">
          <p className="text-xs font-bold uppercase tracking-[0.32em] text-[#C89830]">
            {number} / {label}
          </p>
          <span className="h-px flex-1 bg-[#ede7de]/10" />
        </div>
        {children}
      </Reveal>
    </section>
  );
}

function PhoneFrame({ src, label }: { src: string; label: string }) {
  return (
    <figure className="mx-auto w-[150px] sm:w-[180px]">
      <div className="relative rounded-[2rem] border-[7px] border-[#050505] bg-[#050505] shadow-[0_28px_60px_rgba(0,0,0,0.35)]">
        <div className="absolute left-1/2 top-2 z-10 h-4 w-16 -translate-x-1/2 rounded-full bg-[#050505]" />
        <img
          src={src}
          alt={label}
          className="aspect-[9/19] w-full rounded-[1.55rem] object-cover"
        />
      </div>
      <figcaption className="mt-4 text-center text-[0.65rem] font-bold uppercase tracking-[0.24em] text-[#ede7de]/45">
        {label}
      </figcaption>
    </figure>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div>
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.3em] text-[#C89830]">{title}</p>
      <p className="mt-3 text-sm leading-6 text-[#ede7de]/70">{value}</p>
    </div>
  );
}

function DarkCard({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border border-[#ede7de]/10 bg-[#171512] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.22)]">
      <h3 className="text-lg font-semibold text-[#f4efe8]">{title}</h3>
      <div className="mt-4 text-sm leading-7 text-[#ede7de]/62">{children}</div>
    </div>
  );
}

export function MenuPaymentEditorialCaseStudy() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#100f0d] text-[#ede7de]">
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-24 pt-28 md:px-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:pb-32 lg:pt-36">
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.28em] text-[#ede7de]/55 transition hover:text-[#ede7de]"
            data-cursor="button"
          >
            <span className="h-px w-8 bg-current" />
            Back to work
          </Link>
          <p className="mt-20 text-xs font-bold uppercase tracking-[0.42em] text-[#C89830]">
            UX Design Case Study
          </p>
          <h1 className="mt-7 max-w-4xl font-serif text-[clamp(3.5rem,10vw,8.8rem)] leading-[0.9] tracking-[-0.04em] text-[#f8f2ea]">
            Menu & Payment App
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#ede7de]/68 md:text-xl">
            A mobile ordering and cashless payment experience for Japanese dessert and dining restaurants,
            designed to reduce menu confusion, simplify customization, and support families and international
            customers.
          </p>

          <div className="mt-14 grid gap-8 border-y border-[#ede7de]/10 py-8 sm:grid-cols-3">
            <Stat title="Role" value="UX Designer" />
            <Stat title="Timeline" value="2025.02.20 — 2025.03.20" />
            <Stat title="Focus" value="Research / IA / Wireframes / Prototype / Usability Testing" />
          </div>
        </Reveal>

        <Reveal className="relative">
          <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#C89830]/10 blur-3xl" />
          <div className="grid grid-cols-3 items-end gap-4">
            {heroScreens.map((src, index) => (
              <div key={src} className={index === 1 ? "-mt-10" : "mt-16"}>
                <PhoneFrame src={screen(src)} label={["Home", "Detail", "Payment"][index]} />
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <Section number="01" label="Overview">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-[0.95] tracking-[-0.035em]">
              A clearer way to explore, customize, and pay.
            </h2>
            <div className="grid gap-5 md:grid-cols-3">
              <DarkCard title="Product">
                A mobile ordering and cashless payment solution for Japanese dessert and dining restaurants.
              </DarkCard>
              <DarkCard title="Context">
                Increasing demand from tourist customers and families created a need for simpler digital ordering.
              </DarkCard>
              <DarkCard title="Key Features">
                AI recommendations, multilingual menu support, filtering, customization, and cashless payment.
              </DarkCard>
            </div>
          </div>
        </Section>

        <Section number="02" label="Problem">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <h2 className="max-w-xl font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
                Ordering felt harder than it needed to be.
              </h2>
              <p className="mt-8 max-w-2xl text-lg leading-9 text-[#ede7de]/62">
                Users struggled with complex menu navigation, unclear customization flows, and limited payment
                methods. Families and international customers needed a more intuitive ordering experience.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((point) => (
                <div key={point} className="border border-[#ede7de]/10 bg-[#171512] p-6">
                  <span className="block h-1 w-10 bg-[#C89830]" />
                  <p className="mt-8 text-xl font-semibold text-[#f4efe8]">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section number="03" label="Research">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="font-serif text-[clamp(2.4rem,4vw,4.8rem)] leading-none tracking-[-0.035em]">
                Research shifted the design away from surface appeal.
              </h2>
            </div>
            <div className="space-y-7 text-lg leading-9 text-[#ede7de]/65">
              <p>
                I conducted user interviews, surveys, and competitive analysis. At first, I assumed users mainly
                valued visual appeal and menu variety.
              </p>
              <p>
                The research showed a deeper issue: users struggled more with unclear menu structures, complex
                customization, and limited payment methods. This shifted the solution toward clearer filtering,
                diversified cashless payment, and AI-assisted recommendations.
              </p>
            </div>
          </div>
        </Section>

        <Section number="04" label="Persona">
          <div className="grid overflow-hidden border border-[#ede7de]/10 bg-[#171512] md:grid-cols-[0.42fr_0.58fr]">
            <div className="bg-[#ede7de]/5 p-8">
              <img
                src={screen("persona/Tanaka.jpeg")}
                alt="Persona portrait for Misaki Tanaka"
                className="aspect-[4/5] w-full object-cover"
              />
              <h2 className="mt-8 font-serif text-4xl text-[#f8f2ea]">Misaki Tanaka</h2>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-[#C89830]">Busy mother of two</p>
            </div>
            <div className="grid gap-6 p-8 md:grid-cols-2 md:p-10">
              <DarkCard title="Need">
                A kid-friendly digital menu with clear navigation and helpful recommendations because ordering with
                children can become stressful and time-consuming.
              </DarkCard>
              <DarkCard title="Goals">
                Quickly find kid-friendly items, reduce ordering stress, and use simple cashless payment.
              </DarkCard>
              <DarkCard title="Frustrations">
                Complex menus, long ordering time, and limited payment options.
              </DarkCard>
              <DarkCard title="Design Implication">
                The experience needed to be calm, direct, multilingual, and easy to complete with minimal decision
                load.
              </DarkCard>
            </div>
          </div>
        </Section>

        <Section number="05" label="Design Principles">
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map(([title, description]) => (
              <DarkCard key={title} title={title}>
                {description}
              </DarkCard>
            ))}
          </div>
        </Section>

        <Section number="06" label="Wireframes">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-serif text-[clamp(2.4rem,4vw,4.8rem)] leading-none tracking-[-0.035em]">
                From rough flow to product logic.
              </h2>
              <div className="mt-10 space-y-5">
                {[
                  ["Paper Wireframes", "Exploring the basic structure of the ordering flow."],
                  ["Digital Wireframes", "Translating rough ideas into screen-level product logic."],
                  ["Low-fidelity Prototype", "Connecting screens to validate navigation, customization, and checkout."]
                ].map(([title, text]) => (
                  <div key={title} className="border-l border-[#C89830] pl-5">
                    <h3 className="text-lg font-semibold text-[#f4efe8]">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#ede7de]/58">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <img
                  src={screen("Paper%20wireframes.jpeg")}
                  alt="Paper wireframes for menu and payment app"
                  className="max-h-[420px] w-full border border-[#ede7de]/10 object-cover shadow-[0_26px_70px_rgba(0,0,0,0.25)]"
                />
              </div>
              {wireframeScreens.map(([title, src, text]) => (
                <figure key={title} className="border border-[#ede7de]/10 bg-[#171512] p-4">
                  <img src={screen(src)} alt={`${title} wireframe`} className="aspect-[4/3] w-full object-contain" />
                  <figcaption className="mt-4">
                    <p className="font-semibold text-[#f4efe8]">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-[#ede7de]/55">{text}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>

        <Section number="07" label="Testing">
          <div className="grid gap-5 md:grid-cols-3">
            <DarkCard title="Too many choices">
              Users felt too many categories made it hard to decide. I introduced AI ordering as a faster path.
            </DarkCard>
            <DarkCard title="Unclear back flow">
              Users were unsure how to return from product details. I strengthened the navigation hierarchy.
            </DarkCard>
            <DarkCard title="Slow checkout">
              Users wanted a quicker payment flow. I consolidated price summary and payment confirmation.
            </DarkCard>
          </div>
        </Section>

        <Section number="08" label="Final Design">
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5.5rem)] leading-[0.95] tracking-[-0.035em]">
              A calmer flow from discovery to checkout.
            </h2>
            <p className="text-lg leading-9 text-[#ede7de]/62">
              Final screens use visual menus, clearer product details, and a focused payment path to help customers
              move from browsing to confirmation with less friction.
            </p>
          </div>

          <div className="mb-16 grid gap-8 md:grid-cols-3">
            {[
              ["AI Ordering", "hi-fi_prototype/iphone16pro_img/11_AI%E6%B3%A8%E6%96%87%20-%20chat1.png"],
              ["Product Detail", "hi-fi_prototype/iphone16pro_img/03_Detail.png"],
              ["Payment", "hi-fi_prototype/iphone16pro_img/07_Pay.png"]
            ].map(([label, src]) => (
              <PhoneFrame key={label} src={screen(src)} label={label} />
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {finalScreens.map(([label, src]) => (
              <div key={label} className="bg-[#171512] p-5">
                <PhoneFrame src={screen(src)} label={label} />
              </div>
            ))}
          </div>
        </Section>

        <Section number="09" label="Prototype">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <h2 className="font-serif text-[clamp(2.4rem,4vw,4.8rem)] leading-none tracking-[-0.035em]">
                Motion made the payment flow easier to evaluate.
              </h2>
              <p className="mt-8 text-lg leading-9 text-[#ede7de]/62">
                The prototype video shows menu browsing, item customization, checkout, payment, and confirmation
                as one connected product experience.
              </p>
            </div>
            <video
              src={screen("Design%20a%20menu%20%26%20payment%20app%20and%20a%20responsive%20website%20for%20a%20Japanese%20restaurant.MOV")}
              className="max-h-[620px] w-full bg-[#171512] object-contain shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
        </Section>

        <Section number="10" label="Reflection">
          <div className="grid gap-10 pb-10 lg:grid-cols-2">
            <DarkCard title="Impact">
              The final design simplifies the ordering flow from item selection to payment, reducing decision-making
              effort and improving clarity for adults, families, and first-time users.
            </DarkCard>
            <DarkCard title="What I learned">
              User research can reveal pain points beyond visual preference, and AI-assisted ordering can support
              users who struggle with navigation and decision-making.
            </DarkCard>
          </div>
        </Section>
      </div>
    </main>
  );
}
