import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dream World"
};

const liveUrl = "https://yuzuleung.github.io/dream/";

const planImages = Array.from(
  { length: 10 },
  (_, index) => `/assets/dream-world-plan/page-${String(index + 1).padStart(2, "0")}.jpg`
);

const sections = [
  {
    title: "Concept",
    body: [
      "Dreams are deeply personal yet strangely universal experiences.",
      "This project explores how dreams, emotions, and subconscious memories can be visualized through immersive web experiences inspired by Dreamcore aesthetics.",
      "By combining personal dream narratives with psychological interpretations and interactive storytelling, the website encourages users to reflect on their own inner worlds and emotional landscapes."
    ]
  },
  {
    title: "Audience",
    body: [
      "This experience is designed for people who frequently remember vivid dreams, are interested in psychology and self-reflection, feel emotionally connected to surreal or nostalgic imagery, enjoy immersive narrative experiences, and seek quiet introspective digital spaces.",
      "The project especially resonates with users drawn to dreamcore aesthetics, emotional storytelling, and symbolic interpretation."
    ]
  },
  {
    title: "Experience Goal",
    body: [
      "The experience aims to create a calm emotional space between reality and dreams.",
      "Through slow interaction, poetic visuals, and reflective storytelling, users are encouraged to pause, observe, remember, and interpret their own emotional landscapes."
    ]
  },
  {
    title: "Emotional Research",
    body: [
      "The project began from a personal fascination with dreams and recurring surreal experiences.",
      "Research explored dream psychology, subconscious symbolism, emotional memory, recurring dream patterns, and dreamcore culture.",
      "The findings revealed that dreams often function as emotional mirrors, reflecting fear, nostalgia, loneliness, hope, and unresolved memories."
    ]
  },
  {
    title: "Information Architecture",
    body: [
      "The website is structured as a layered dream exploration experience: Reality Entrance, Dream World, Dreamcore Archive, Dream Meanings, Dream Types, Dream Science, and AI Dream Interpreter.",
      "Each section explores dreams from emotional, symbolic, psychological, scientific, and interactive perspectives, gradually moving users from reality into deeper layers of subconscious exploration."
    ]
  },
  {
    title: "Interaction Design",
    body: [
      "The interaction design focuses on immersion, quiet exploration, and emotional pacing.",
      "Key interactions include card-based dream exploration, hover and expand interactions on desktop, flip-card interactions on mobile, layered transitions between reality and dream states, an AI chat interface, and persistent navigation.",
      "The interface intentionally slows down interaction speed to encourage reflection and emotional engagement."
    ]
  },
  {
    title: "Visual Language",
    body: [
      "The visual direction combines dreamcore aesthetics, personal photography, AI-generated dream imagery, cinematic gradients, and purple and midnight-blue tones.",
      "The Reality entrance uses warm sunrise photography taken by myself, while Dream World transitions into darker cosmic imagery featuring galaxies, moonlight, and surreal environments.",
      "Semi-transparent layers, blurred backgrounds, and generous spacing reinforce the feeling of drifting between reality and dreams."
    ]
  },
  {
    title: "Dreamcore Archive",
    body: [
      "The archive visualizes personal dream memories as interactive collectible cards.",
      "Dream scenes include golden grasslands, underwater worlds, empty classrooms, falling dreams, rainy commutes, old living rooms, and floating needles in the sky.",
      "Each dream is paired with emotional categories, symbolic meanings, and narrative descriptions."
    ]
  },
  {
    title: "AI Dream Interpreter",
    body: [
      "An AI-assisted chat experience allows users to describe their dreams and receive symbolic interpretations.",
      "The goal is not clinical diagnosis, but emotional reflection and self-understanding.",
      "The interface includes conversational UI, emotional guidance, safety notes, and interpretive hints."
    ]
  },
  {
    title: "Reflection",
    body: [
      "This project taught me how digital experiences can become emotional spaces rather than purely functional interfaces.",
      "I became especially interested in narrative interaction, emotional pacing, immersive storytelling, dream-inspired visual systems, and the relationship between technology and subconscious memory.",
      "The project deepened my interest in experience design that exists between reality, emotion, and imagination."
    ]
  }
];

export default function DreamWorldPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-24 pt-32 text-[#171512] md:px-16">
      <section className="mx-auto max-w-7xl">
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

        <p className="mx-auto mt-24 max-w-4xl text-center text-[clamp(1.35rem,3vw,3rem)] font-semibold leading-tight tracking-normal text-tomato">
          An immersive digital experience exploring dreams, memory and subconscious emotions.
        </p>

        <div className="py-20 md:py-28">
          <a
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
            className="group mx-auto block w-full max-w-4xl"
            data-cursor="button"
            data-cursor-label="click and enter the experience"
            aria-label="Open Dream World interactive website"
          >
            <figure className="relative overflow-hidden bg-[#f5eef8] shadow-[0_28px_90px_rgba(77,52,112,0.2)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_34px_110px_rgba(77,52,112,0.28)]">
              <img
                src="/assets/dream-world-reality.jpg"
                alt="Dream World reality entrance screenshot"
                className="h-auto w-full transition duration-700 group-hover:scale-[1.015]"
              />
            </figure>
            <p className="mt-6 text-center text-xs font-bold uppercase tracking-[0.24em] text-neutral-500 transition-colors group-hover:text-black">
              Visit Interactive Website
            </p>
          </a>
        </div>

        <section className="mx-auto max-w-5xl border-t border-black/10 pt-16">
          <div className="grid gap-x-12 gap-y-14 md:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title}>
                <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-tomato">{section.title}</h2>
                <div className="mt-5 space-y-4 text-base leading-7 text-black/62">
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-24 max-w-6xl space-y-8">
          {planImages.map((image, index) => (
            <figure key={image} className="bg-white">
              <img
                src={image}
                alt={`Dream World project document page ${index + 1}`}
                className="h-auto w-full"
              />
            </figure>
          ))}
        </section>
      </section>
    </main>
  );
}
