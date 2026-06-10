"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

const prototypeUrl = "https://www.figma.com/proto/GIQXLJETaNy3Zz51I6vZyC/Design-a-menu---payment-app-and-a-responsive-website-for-a-Japanese-restaurant?page-id=427%3A3590&node-id=427-4086&p=f&viewport=145%2C180%2C0.18&t=S5IKVD6bYqX2L4Cu-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=427%3A4086";

const navItems = [
  ["snapshot", "Project Overview"],
  ["research", "User Research"],
  ["challenge", "Challenge"],
  ["pain-points", "Pain Points"],
  ["competitive", "Competitive Analysis"],
  ["persona", "Persona"],
  ["insights", "Research Insights"],
  ["principles", "Design Principles"],
  ["journey", "User Journey"],
  ["decisions", "Key Decisions"],
  ["wireframes", "Wireframes"],
  ["usability", "Usability Study"],
  ["final-experience", "Final Experience"],
  ["accessibility", "Accessibility"],
  ["takeaways", "Takeaways"],
  ["next-steps", "Next Steps"]
] as const;

const fadeUp = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] as const }
};

const tags = ["UX Design", "Mobile App", "AI Recommendation", "Cashless Payment", "Multilingual UX"];

const overviewItems = [
  [
    "The problem",
    "Users often struggle with complex menu navigation, unclear customization flows, and limited payment methods when ordering dessert and dining items. Families and international customers also need a simpler, more intuitive ordering experience. The app aims to reduce decision-making stress through clearer menu structure, easier customization, basic language switching support, and AI-powered recommendations."
  ],
  [
    "The goal",
    "The goal of the project is to create a seamless and enjoyable ordering experience for premium dessert and dining customers. It focuses on simplifying menu navigation and customization, introducing AI-based recommendations, and enabling a smooth and convenient cashless payment flow."
  ]
];

const insights = [
  ["Decision fatigue", "Users felt overwhelmed by too many menu categories and options."],
  ["Customization friction", "Sweetness, toppings, and dietary preferences were difficult to adjust clearly."],
  ["Payment limitation", "Users expected more cashless options such as credit cards and QR payments."],
  ["Language barrier", "International users needed basic multilingual support to order confidently."]
];

const painPoints = [
  ["Limited payment methods", "Many cash-only restaurants make users expect broader cashless options such as credit cards and QR payments."],
  ["Difficulty for international users", "Menus are often available only in Japanese, so basic language support is needed to help tourists order confidently."],
  ["Complex customization", "Users found it difficult to adjust sweetness levels, toppings, and dietary preferences within existing ordering platforms."],
  ["Cluttered navigation", "Menus were often overwhelming, making it hard for users to quickly find and order their desired items."]
];

const competitiveAnalysis = [
  ["Menu discovery", "Competitor products usually support category browsing, but dessert menus can still feel dense when seasonal items, toppings, and set options are mixed together."],
  ["Customization clarity", "Most ordering flows include item options, but the hierarchy is often unclear. Sweetness, toppings, allergies, and dietary choices need a more guided structure."],
  ["Payment confidence", "Cashless payment is becoming expected, but many restaurant-specific flows still fail to show payment options and final price clearly before confirmation."],
  ["Differentiation opportunity", "A guided AI ordering flow can help families and tourists choose faster while keeping the experience enjoyable rather than purely transactional."]
];

const researchSummary =
  "I conducted user interviews, surveys, and a competitive analysis to understand customer pain points in the online ordering experience. Initially, I assumed that users mainly valued visual appeal and menu variety. However, research revealed that they struggled more with unclear menu structures, complex customization steps, and limited payment methods. Families felt stressed by multi-step flows, and many users wished for faster ways to make decisions. These insights shaped the design direction toward clearer menu filtering, simplified customization, diversified cashless payment options, and helpful AI-based recommendations to reduce cognitive load and create a more seamless, user-friendly experience.";

const principles = [
  ["Reduce decision effort", "AI recommendations help users choose faster."],
  ["Clarify customization", "Sweetness, toppings, and dietary options are structured clearly."],
  ["Build checkout confidence", "Payment options and final price are shown transparently."]
];

const persona = {
  name: "Misaki Tanaka",
  image: "/assets/Menu_App_img/persona/Tanaka.jpeg",
  role: "Primary user",
  age: "35",
  education: "Bachelor's degree",
  hometown: "Tokyo, Japan",
  family: "Married, two kids (5 & 8 years old)",
  occupation: "Office Worker & Mother of Two",
  quote: "I want to create wonderful memories with my kids while enjoying delicious desserts.",
  description:
    "Misaki Tanaka is a busy mother of two who needs a kid-friendly digital menu with clear navigation and helpful AI recommendations because her children struggle to understand complex menus, making the ordering process stressful and time-consuming.",
  scenario:
    "Misaki is a busy mother who works part-time and spends weekends with her kids. She enjoys visiting family-friendly restaurants and dessert cafes, where she can relax while her children enjoy their favorite sweets. However, ordering can be stressful, as her kids have trouble understanding the menu and often change their minds. She wishes for a kid-friendly digital menu with AI recommendations and voice order features to make the experience smoother. She is also interested in a membership program that offers discounts for frequent visits.",
  goals: [
    "Enjoy quality time with her kids at a family-friendly dessert cafe.",
    "Find a simple and stress-free way to order food so her children can participate.",
    "Get rewards and discounts through a membership program for frequent visits."
  ],
  needs: ["Kid-friendly menu structure", "AI recommendations", "Voice order support", "Membership and discounts"],
  frustrations: [
    "Complicated ordering processes make it hard for her kids to choose.",
    "Long wait times make her children impatient.",
    "Limited kid-friendly payment options make checkout inconvenient."
  ]
};

const journey = [
  {
    step: "Scan QR code",
    action: "Open the restaurant menu from the table.",
    pain: "The entry point can feel unclear for first-time visitors.",
    emotion: "Unsure",
    opportunity: "Provide clear scan guidance and immediate language support."
  },
  {
    step: "Browse menu",
    action: "Explore desserts, meals, seasonal items, and recommendations.",
    pain: "Too many categories make it hard to decide quickly.",
    emotion: "Overwhelmed",
    opportunity: "Use category structure, filters, and AI recommendations."
  },
  {
    step: "Customize order",
    action: "Adjust sweetness, toppings, and dietary preferences.",
    pain: "Customization options can feel scattered.",
    emotion: "Careful",
    opportunity: "Group choices into a guided, step-by-step flow."
  },
  {
    step: "Review cart",
    action: "Check selected items, quantity, customization, and total price.",
    pain: "Users need to make sure the order is correct before paying.",
    emotion: "Reassured",
    opportunity: "Make the cart summary compact, readable, and easy to edit."
  },
  {
    step: "Select payment",
    action: "Choose a preferred cashless payment method.",
    pain: "Limited choices reduce checkout confidence.",
    emotion: "Confident",
    opportunity: "Support credit card, QR payment, and electronic money."
  },
  {
    step: "Confirm and pay",
    action: "Review final price and complete the order.",
    pain: "Users need reassurance before payment.",
    emotion: "Relieved",
    opportunity: "Show a consolidated order and final price summary."
  }
];

const decisions = [
  {
    title: "AI Ordering Flow",
    purpose: "Reduce decision fatigue, especially for families and first-time visitors.",
    design: "A guided question-based flow helps users choose suitable menu items without feeling overwhelmed.",
    goals: [
      "Recommend suitable menu items automatically based on party size, attributes, and preferences.",
      "Break questions into a conversational flow so users can answer without hesitation.",
      "Support family users by suggesting options matched to children and reducing ordering effort.",
      "Keep actions simple so users can add recommended items to the cart immediately."
    ],
    process: [
      "Conversational UI: ask in the order of greeting, party size, children, and preferred categories.",
      "Preference tags: let users reflect taste data through simple tags such as sweets, food, and light options.",
      "Personalized recommendation: generate suitable menu items from user input and present them as visible cards.",
      "Immediate action: place add-to-cart buttons near each recommended item to keep the flow uninterrupted."
    ],
    annotations: [
      "Question-based UI: simple questions about party size, children, and preferences keep the flow easy to follow.",
      "Category selection tags: users can enter taste preferences quickly and improve recommendation accuracy.",
      "Add to cart: suitable menu items stay actionable so users can order without extra detours."
    ],
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/11_AI%E6%B3%A8%E6%96%87%20-%20chat2.png"
  },
  {
    title: "Menu Category Structure",
    purpose: "Help users quickly find desired items.",
    design: "Menu items are organized by category, recommendation, seasonal items, and kids-friendly options.",
    goals: [
      "Organize a broad dessert and dining menu into clear categories.",
      "Make seasonal items and recommendations visible without overwhelming the screen.",
      "Help family users find kid-friendly choices faster."
    ],
    process: [
      "Use horizontal category tabs to keep navigation compact.",
      "Group products by user intent: seasonal, dessert, food, drink, set, and goods.",
      "Place recommendations and family-friendly items in visible blocks to reduce scanning effort."
    ],
    annotations: [
      "Category tabs: users can switch between menu types quickly.",
      "Seasonal recommendation area: high-interest items are surfaced early.",
      "Grid layout: product photos, names, and prices remain easy to compare."
    ],
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/02_Menu.png"
  },
  {
    title: "Product Customization",
    purpose: "Make toppings, sweetness, and preferences easier to adjust.",
    design: "Customization options are grouped clearly on the product detail page.",
    goals: [
      "Let users understand ingredients, price, and options before adding an item.",
      "Make sweetness, toppings, coupons, and dietary choices easier to adjust.",
      "Reduce anxiety by showing the result of customization clearly."
    ],
    process: [
      "Keep product imagery and basic information at the top.",
      "Use option groups instead of long forms for customization.",
      "Show selected options and price changes before users move to the cart."
    ],
    annotations: [
      "Product detail: image and basic information establish confidence.",
      "Option controls: sweetness and toppings are separated into clear groups.",
      "Coupon and price feedback: users can confirm changes before checkout."
    ],
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/03_Detail.png"
  },
  {
    title: "Cashless Checkout",
    purpose: "Support Japan's expanding cashless payment behavior.",
    design: "Payment options include credit card, QR payment, electronic money, and final price confirmation.",
    goals: [
      "Support multiple cashless payment options for local and international users.",
      "Show total price, selected method, and confirmation in one clear flow.",
      "Make checkout feel fast while preserving user confidence."
    ],
    process: [
      "Place the final price summary before payment selection.",
      "Group payment methods by familiar categories such as card, QR payment, and electronic money.",
      "Keep confirmation actions visually clear and easy to verify."
    ],
    annotations: [
      "Payment summary: users can confirm total price before paying.",
      "Payment methods: several cashless options are visible in one place.",
      "Confirmation button: the primary action remains easy to identify."
    ],
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/07_Pay.png"
  },
  {
    title: "Account & Reorder",
    purpose: "Support returning users and reduce repeated input.",
    design: "Users can manage payment methods, order history, language settings, and membership information.",
    goals: [
      "Help returning users access order history and account settings quickly.",
      "Support repeated orders, language settings, and payment management.",
      "Create a lightweight membership area without distracting from ordering."
    ],
    process: [
      "Prioritize essential account functions in a simple vertical list.",
      "Keep payment, order history, and language settings close together.",
      "Use consistent bottom navigation so users can return to ordering at any time."
    ],
    annotations: [
      "Profile area: users can identify their account at a glance.",
      "Account menu: repeated actions are collected into one screen.",
      "Persistent navigation: users can return to menu, cart, or AI ordering quickly."
    ],
    image: "/assets/Menu_App_img/hi-fi_prototype/iphone16pro_img/12_Account.png"
  }
];

const wireframeScreens = [
  ["Homepage", "/assets/Menu_App_img/wireframe/01%20Homepage.png"],
  ["Menu", "/assets/Menu_App_img/wireframe/02%20Menu.png"],
  ["Product Detail", "/assets/Menu_App_img/wireframe/03%20Detail.png"],
  ["Cart", "/assets/Menu_App_img/wireframe/05%20Go%20to%20Cart.png"],
  ["Payment", "/assets/Menu_App_img/wireframe/07%20Pay.png"],
  ["AI Ordering", "/assets/Menu_App_img/wireframe/11%20AI-1.png"]
];

const finalScreens = [
  ["Home", "/assets/Menu_App_img/hi-fi_prototype/full_img/01%20Homepage.png"],
  ["Menu", "/assets/Menu_App_img/hi-fi_prototype/full_img/02%20Menu.png"],
  ["Product Detail", "/assets/Menu_App_img/hi-fi_prototype/full_img/03%20Detail.png"],
  ["Cart", "/assets/Menu_App_img/hi-fi_prototype/full_img/05%20Go%20to%20Cart.png"],
  ["Order", "/assets/Menu_App_img/hi-fi_prototype/full_img/06%20Order.png"],
  ["Payment", "/assets/Menu_App_img/hi-fi_prototype/full_img/07%20Pay.png"],
  ["Paying", "/assets/Menu_App_img/hi-fi_prototype/full_img/08%20Paying.png"],
  ["Confirmation", "/assets/Menu_App_img/hi-fi_prototype/full_img/09%20Confirm.png"],
  ["Paid", "/assets/Menu_App_img/hi-fi_prototype/full_img/10%20Paid.png"],
  ["AI Ordering", "/assets/Menu_App_img/hi-fi_prototype/full_img/11%20AI%E6%B3%A8%E6%96%87%20-%20chat1.png"],
  ["Account", "/assets/Menu_App_img/hi-fi_prototype/full_img/12%20Account.png"]
];

const accessibilityItems = [
  ["Consistent navigation", "Clear layout and recognizable navigation icons support easier movement."],
  ["Readable typography", "High contrast and legible font sizes improve readability."],
  ["Multiple input methods", "Touch-friendly actions, AI assistance, and future voice support make ordering more accessible."]
];

const nextSteps = [
  "Improve and validate the AI-assisted ordering flow by refining recommendations, enhancing preference detection, and exploring voice-assisted interactions to better support users who struggle with menu navigation or decision-making.",
  "Optimize responsive design by further refining the desktop and mobile versions to enhance adaptability across different screen sizes while maintaining usability.",
  "Run additional rounds of usability testing to identify remaining friction points in navigation, customization, and checkout flow, ensuring a smoother and more intuitive end-to-end experience."
];

const usabilityFindings = [
  [
    "Too many categories",
    "Users felt too many categories and menu options made it hard to decide what to order.",
    "Introduced an AI ordering flow to reduce decision-making effort."
  ],
  [
    "Unclear return path",
    "Users were unsure how to return from product details.",
    "Added clearer navigation hierarchy and consistent back-navigation."
  ],
  [
    "Slow checkout",
    "Users wanted a quicker and simpler checkout process.",
    "Streamlined the payment page and consolidated the final price summary."
  ]
];

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
    <motion.section {...fadeUp} id={id} className="scroll-mt-32 pb-16">
      <div className="flex items-center gap-6">
        <p className="shrink-0 text-xs font-bold uppercase tracking-[0.22em] text-tomato">{eyebrow}</p>
        <span className="h-px flex-1 bg-black/10" aria-hidden="true" />
      </div>
      <h2 className="mt-6 max-w-6xl font-barlow text-[clamp(1.35rem,2.6vw,2.4rem)] font-semibold leading-[1.05]">
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

function PersonaPanel() {
  return (
    <div className="grid overflow-hidden bg-white shadow-[0_20px_70px_rgba(23,21,18,0.06)] md:grid-cols-[0.36fr_0.64fr]">
      <div className="bg-[#f7f4f1] p-6 text-center">
        <img src={assetPath(persona.image)} alt="Persona portrait for Misaki Tanaka" className="mx-auto aspect-square w-36 rounded-full object-cover" />
        <h3 className="mt-5 text-xl font-semibold">{persona.name}</h3>
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-tomato">{persona.role}</p>
        <dl className="mt-6 grid gap-2 text-left text-xs leading-5 text-neutral-600">
          {[
            ["Age", persona.age],
            ["Education", persona.education],
            ["Hometown", persona.hometown],
            ["Family", persona.family],
            ["Occupation", persona.occupation]
          ].map(([label, value]) => (
            <div key={label} className="grid grid-cols-[5.5rem_1fr] gap-2">
              <dt className="font-bold text-[#171512]">{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-6 text-left">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Needs</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {persona.needs.map((item) => (
              <li key={item} className="rounded-full border border-black/10 bg-white px-3 py-1.5 text-[0.68rem] font-semibold text-neutral-600">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid gap-5 p-6 md:grid-cols-2">
        <div className="md:col-span-2">
          <p className="text-base italic leading-7 text-[#171512]">“{persona.quote}”</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Goals</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-neutral-600">
            {persona.goals.map((goal) => (
              <li key={goal}>{goal}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Frustrations</p>
          <ul className="mt-3 space-y-1.5 text-sm leading-6 text-neutral-600">
            {persona.frustrations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Story</p>
          <p className="mt-3 text-sm leading-6 text-neutral-600">{persona.scenario}</p>
        </div>
      </div>
    </div>
  );
}

function CaseStudyHero() {
  return (
    <section className="px-5 pb-16 pt-20 md:px-16 md:pt-24">
      <div className="mx-auto max-w-7xl">
        <TopBackToWork />

        <motion.div {...fadeUp} className="mt-8 grid gap-12 lg:grid-cols-[1fr_0.42fr] lg:items-center">
          <div>
            <div className="flex gap-2.5 overflow-x-auto whitespace-nowrap pb-1">
              {tags.map((tag) => (
                <span key={tag} className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="mt-10 max-w-4xl font-barlow text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-normal">
              Menu & Payment App
              <span className="block text-neutral-400">for a Japanese Dessert & Dining Restaurant</span>
            </h1>
            <p className="mt-10 max-w-5xl text-xl leading-9 text-neutral-600">
              A mobile ordering and cashless payment experience and AI Recommendation designed to reduce menu confusion, simplify
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

            <dl className="mt-14 grid gap-5 border-t border-black/10 pt-8 md:grid-cols-[0.18fr_0.2fr_0.62fr]">
              {[
                ["Role", "UX Designer"],
                ["Timeline", "2025.02 - 2025.03"],
                [
                  "Responsibilities",
                  "User Research / Competitive Analysis / Information Architecture / Wireframing / Prototyping / UI & Interaction Design / Usability Testing & Iteration, etc."
                ]
              ].map(([label, value]) => (
                <div key={label}>
                  <dt className="text-xs font-bold uppercase tracking-[0.26em] text-[#171512]">{label}</dt>
                  <dd className="mt-5 text-base leading-7 text-neutral-600">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-[20rem] overflow-hidden [clip-path:inset(0_8.8%_0_8.8%_round_2.35rem)] sm:[clip-path:inset(0_8.6%_0_8.6%_round_2.7rem)]">
              <video
                className="block h-auto max-h-[34rem] w-full object-contain"
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
          </div>
        </motion.div>

        <motion.figure {...fadeUp} className="mt-20 overflow-hidden rounded-sm">
          <img
            src={assetPath("/assets/Menu_App_img/Menu_App_img.png")}
            alt="Mobile app prototype screens arranged across multiple phone mockups"
            className="block h-auto w-full"
          />
        </motion.figure>
      </div>
    </section>
  );
}

function UserJourneyMap() {
  return (
    <div className="bg-white shadow-[0_18px_70px_rgba(23,21,18,0.06)]">
      <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-6">
          {journey.map((item, index) => (
            <article key={item.step} className="border-b border-black/10 p-5 xl:border-b-0 xl:border-r xl:last:border-r-0">
              <p className="text-[0.65rem] font-bold tracking-[0.18em] text-tomato">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-sm font-semibold text-[#171512]">{item.step}</h3>
              <p className="mt-4 text-xs leading-5 text-neutral-600">{item.action}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-neutral-400">Pain</p>
              <p className="mt-2 text-xs leading-5 text-neutral-600">{item.pain}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-neutral-400">Emotion</p>
              <p className="mt-2 text-xs leading-5 text-neutral-600">{item.emotion}</p>
              <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-neutral-400">Opportunity</p>
              <p className="mt-2 text-xs leading-5 text-neutral-600">{item.opportunity}</p>
            </article>
          ))}
      </div>
    </div>
  );
}

function DesignDecisionBlock({
  title,
  purpose,
  design,
  annotations,
  image,
  index
}: (typeof decisions)[number] & { index: number }) {
  return (
    <article className="border-t border-black/10 pt-10">
      <div className="max-w-4xl">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">
          Design Decision {String(index).padStart(2, "0")}
        </p>
        <h3 className="mt-5 font-barlow text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-tight">{title}</h3>
        <p className="mt-5 text-lg leading-8 text-neutral-600">{design}</p>
      </div>

      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.34fr_0.66fr]">
        <div className="grid gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Purpose</p>
            <p className="mt-3 text-base leading-7 text-neutral-600">{purpose}</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#171512]">Design Response</p>
            <p className="mt-3 text-base leading-7 text-neutral-600">{design}</p>
          </div>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_13rem]">
          <figure className="flex justify-center">
            <img src={assetPath(image)} alt={`${title} screen`} className="h-auto w-full max-w-[26rem] object-contain" />
          </figure>
          <div className="grid gap-4">
            {annotations.map((note) => {
              const [label, ...rest] = note.split(":");
              const body = rest.join(":").trim();

              return (
                <div key={note} className="border-l-2 border-tomato/70 bg-white py-4 pl-4">
                  <p className="text-sm font-semibold text-[#171512]">{label}</p>
                  <p className="mt-2 text-xs leading-5 text-neutral-500">{body || note}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </article>
  );
}

function WireframeThumb({ title, image }: { title: string; image: string }) {
  return (
    <figure>
      <img src={assetPath(image)} alt={`${title} wireframe`} className="mx-auto h-auto max-h-[24rem] w-full object-contain" />
      <figcaption className="mt-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-neutral-400">
        {title}
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
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {finalScreens.map(([title, src]) => (
          <figure
            key={title}
            className="group overflow-hidden rounded-sm transition duration-300 hover:-translate-y-1"
          >
            <figcaption className="pb-4 text-center text-sm font-bold text-[#171512]">{title}</figcaption>
            <img
              src={assetPath(src)}
              alt={`${title} screen`}
              className="mx-auto h-auto max-h-[64rem] w-full object-contain transition duration-500 group-hover:scale-[1.03]"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}

function CaseStudyCTA() {
  return (
    <section id="cta" className="px-5 pb-14 md:px-16">
      <motion.div {...fadeUp} className="mx-auto max-w-7xl border-t border-black/10 pt-16">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">Prototype</p>
        <h2 className="mt-6 max-w-4xl font-barlow text-[clamp(1rem,1.8vw,1.9rem)] font-semibold leading-tight">
          Explore the prototype
        </h2>
        <p className="mt-8 max-w-4xl text-xl leading-9 text-neutral-600">
          View the interactive ordering flow from menu discovery to payment.
        </p>
        <div className="mt-10 flex flex-col items-start gap-14">
          <a
            href={prototypeUrl}
            className="inline-flex min-h-12 items-center rounded-full bg-[#171512] px-6 text-sm font-bold text-white transition hover:bg-tomato"
            data-cursor="button"
          >
            View Prototype
          </a>
          <BottomBackToWork className="pt-0 text-neutral-500" />
        </div>
      </motion.div>
    </section>
  );
}

export function MenuPaymentCaseStudy() {
  return (
    <main className="bg-white text-[#171512]">
      <CaseStudyHero />

      <div className="px-5 pb-10 md:px-16">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[11rem_minmax(0,1fr)] xl:gap-10">
          <CaseNav />

          <div>
            <Section id="snapshot" eyebrow="Project Overview" title="Defining the core ordering problem and product goal.">
              <div className="grid gap-8 md:grid-cols-2">
                {overviewItems.map(([title, body]) => (
                  <SnapshotCard key={title} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="research" eyebrow="User Research" title="Research revealed that clarity mattered more than visual variety.">
              <p className="max-w-6xl text-center text-xl leading-9 text-neutral-600">{researchSummary}</p>
            </Section>

            <Section id="challenge" eyebrow="Challenge" title="Reduce decision fatigue while keeping the ordering experience enjoyable and flexible.">
              <p className="max-w-6xl text-xl leading-9 text-neutral-600">
                Users often face friction when ordering from dessert and dining menus: too many choices, unclear
                customization, limited payment options, and language barriers. Families and tourists especially need a
                simpler, faster, and more intuitive ordering experience.
              </p>
            </Section>

            <Section id="pain-points" eyebrow="Pain Points" title="Four recurring issues shaped the direction of the product.">
              <div className="grid gap-5 md:grid-cols-4">
                {painPoints.map(([title, body], index) => (
                  <SimpleCard key={title} index={index + 1} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="competitive" eyebrow="Competitive Analysis" title="Auditing adjacent ordering and payment patterns.">
              <div className="grid gap-5 md:grid-cols-2">
                {competitiveAnalysis.map(([title, body], index) => (
                  <SimpleCard key={title} index={index + 1} title={title} body={body} />
                ))}
              </div>
            </Section>

            <Section id="persona" eyebrow="Persona" title="Designing for a family customer who needs speed and clarity.">
              <PersonaPanel />
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
              <UserJourneyMap />
            </Section>

            <Section id="decisions" eyebrow="Key Design Decisions" title="Product decisions that connect research with interface design.">
              <div className="grid gap-y-16">
                {decisions.map((decision, index) => (
                  <DesignDecisionBlock key={decision.title} {...decision} index={index + 1} />
                ))}
              </div>
            </Section>

            <Section id="wireframes" eyebrow="Wireframes & Iteration" title="Testing structure before visual polish.">
              <div className="grid gap-6 md:grid-cols-3">
                <SimpleCard
                  title="Paper wireframes"
                  body="I first mapped the basic ordering structure with rough sketches, focusing on entry, menu discovery, customization, cart review, and payment sequence."
                />
                <SimpleCard
                  title="Digital wireframes"
                  body="The structure was translated into screen-level logic to test hierarchy, navigation, and key ordering actions."
                />
                <SimpleCard
                  title="Low-fidelity prototype"
                  body="Core screens were connected to validate whether users could move from browsing to checkout with less confusion."
                />
              </div>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
                {wireframeScreens.map(([title, image]) => (
                  <WireframeThumb key={title} title={title} image={image} />
                ))}
              </div>
            </Section>

            <Section id="usability" eyebrow="Usability Study" title="Findings from the early prototype guided the final design changes.">
              <p className="max-w-6xl text-xl leading-9 text-neutral-600">
                I conducted a usability study on the early prototype to understand which parts of the ordering flow
                caused confusion or slowed users down. The study revealed three key issues that guided changes in the
                final design.
              </p>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {usabilityFindings.map(([title, problem, solution], index) => (
                  <article key={title} className="rounded-sm bg-[#f7f7f7] p-6">
                    <p className="flex h-11 w-11 items-center justify-center rounded-full bg-tomato text-lg font-bold text-white">
                      {index + 1}
                    </p>
                    <h3 className="mt-6 text-lg font-semibold">{title}</h3>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">{problem}</p>
                    <p className="mt-4 text-sm leading-6 text-neutral-600">→ {solution}</p>
                  </article>
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

            <Section id="takeaways" eyebrow="Takeaways" title="Research, iteration, and AI-assisted flow shaped a clearer ordering experience.">
              <div>
                <p className="max-w-6xl text-xl leading-9 text-neutral-600">
                  The final design simplifies the entire ordering flow, from selecting items to completing payment,
                  reducing decision-making effort and improving clarity for both adults and families. The introduction
                  of the AI ordering flow especially helped first-time users choose items more confidently, while the
                  streamlined checkout experience minimized friction and made the process faster and easier.
                </p>
                <p className="mt-8 max-w-6xl text-xl leading-9 text-neutral-600">
                  Through this project, I learned the importance of user research in uncovering real pain points and how
                  iterative design improvements based on feedback can enhance usability. I also gained practical
                  experience in structuring an AI-assisted ordering flow, designing for families with diverse needs, and
                  creating responsive, intuitive interfaces that support smoother and more confident user interactions.
                </p>
              </div>
            </Section>

            <Section id="next-steps" eyebrow="Next Steps" title="Future improvements for a stronger end-to-end experience.">
              <div className="grid gap-5 md:grid-cols-3">
                {nextSteps.map((item, index) => (
                  <article key={item} className="rounded-sm bg-[#f7f7f7] p-8 text-center">
                    <p className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-neutral-600 text-xl font-bold text-white">
                      {index + 1}
                    </p>
                    <p className="mt-8 text-base leading-7 text-neutral-600">{item}</p>
                  </article>
                ))}
              </div>
            </Section>
          </div>
        </div>
      </div>

      <CaseStudyCTA />
    </main>
  );
}
