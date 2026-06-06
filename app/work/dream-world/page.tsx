import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Dream World"
};

// TODO: Replace this URL if the Dream World experience moves to a different deployment.
const liveUrl = "https://yuzuleung.github.io/dream/";
const screenshotBase = "/assets/dream-world/dream_world_screenshot";

const tags = ["Interactive Experience", "Dreamcore", "Emotional UX", "Storytelling", "AI Interaction"];

const snapshot = [
  ["Role", "Designer / Frontend Developer"],
  ["Scope", "Concept Design / Visual Direction / Interaction Design / Frontend Implementation"],
  ["Focus", "Dreamcore / emotional storytelling / self-reflection / AI interaction"],
  ["Output", "Responsive immersive website"]
];

const architecture = [
  ["Reality Entrance", "A bright sunrise scene that marks the boundary between reality and dreams."],
  ["Dream World Home", "A quiet purple-blue night space that welcomes users into the experience."],
  ["Dreamcore Archive", "Personal dream memories presented as interactive visual cards."],
  ["Dream Meanings", "Symbolic themes such as water, flying, animals, home, falling, and death."],
  ["Dream Types", "Educational content about lucid dreams, nightmares, recurring dreams, and healing dreams."],
  ["Dream Science", "A soft layer about REM sleep, memory, emotion, creativity, and sleep cycles."],
  ["AI Dream Interpreter", "A reflective chat experience for gentle symbolic interpretation."]
];

const interactionCards = [
  ["Entering the Dream World", "A slow transition guides users from a bright reality entrance into a darker dream world."],
  ["Dreamcore Cards", "Desktop users click to expand dream fragments and read personal narrative details."],
  ["Mobile Flip Interaction", "Mobile users tap cards to flip between image and narrative, creating a tactile memory-card feeling."],
  ["AI Dream Interpreter", "Users write dreams and receive gentle symbolic prompts for reflection."]
];

const keyScreens = [
  ["Dream Meanings", "5_dreammeanings-symbol.png", "Symbolic meanings help users connect dream scenes with emotional interpretation."],
  ["Dream Types", "4_dreamtypes.png", "Dream categories are presented through a calm educational structure."],
  ["Dream Science", "6_dreamprinciples.png", "Dream science adds context about sleep, memory, emotion, and creativity."],
  ["AI Dream Interpreter", "7_AIchat.png", "A chat-based flow invites users to describe dreams and receive reflective prompts."]
];

const dreamcoreDetailNotes = [
  "Front side: dream image and title",
  "Desktop interaction: click to expand details",
  "Mobile interaction: tap to flip and reveal narrative"
];

const improvements = [
  "Refine the AI interpretation flow",
  "Add more dream archive entries",
  "Improve mobile interaction details",
  "Add smoother page transitions",
  "Test whether users feel emotionally engaged and safe"
];

function Section({
  id,
  label,
  title,
  body,
  children
}: {
  id: string;
  label: string;
  title: string;
  body?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 py-14 md:py-20">
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-xs font-bold uppercase tracking-[0.26em] text-tomato">{label}</p>
        <h2 className="mt-5 font-barlow text-[clamp(1.7rem,3vw,3rem)] font-semibold leading-[1.16] text-[#171512]">
          {title}
        </h2>
        {body ? <p className="mt-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">{body}</p> : null}
      </div>
      {children}
    </section>
  );
}

function SnapshotCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="border-t border-black/10 pt-5">
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#171512]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
    </article>
  );
}

function ArchitectureFlow() {
  return (
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-0 overflow-hidden border-y border-black/10 md:grid-cols-7">
        {architecture.map(([title, body], index) => (
          <article key={title} className="group relative py-6 pr-7 md:px-4 md:py-8">
            {index < architecture.length - 1 ? (
              <span className="absolute right-3 top-8 hidden text-xs font-bold text-tomato md:block">→</span>
            ) : null}
            <p className="text-[0.68rem] font-bold tracking-[0.18em] text-tomato">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="mt-4 text-sm font-semibold leading-5 text-[#171512]">{title}</h3>
            <p className="mt-3 text-xs leading-6 text-neutral-600">{body}</p>
            <div className="mt-6 h-px w-full bg-black/10 md:hidden" />
          </article>
        ))}
      </div>
    </div>
  );
}

function DesignIntention() {
  return (
    <div className="mx-auto max-w-4xl text-center">
      <div className="space-y-7 text-lg leading-9 text-neutral-600">
        <p>
          The experience is designed as a quiet transition from reality into a dreamlike emotional space. A bright sunrise
          marks the boundary of the real world, while the purple-blue dream world uses moonlight, galaxy imagery,
          translucent layers, and slow interaction to invite reflection.
        </p>
        <p>
          The goal is not only to show dream-related information, but to make users feel as if they are entering fragments
          of memory.
        </p>
      </div>
    </div>
  );
}

function VisualDirection() {
  const images = [
    ["Reality Entrance", "1_reality.png"],
    ["Dream World Home", "2_home.png"]
  ];

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <div className="mx-auto max-w-4xl space-y-6 text-center text-lg leading-9 text-neutral-600">
        <p>
          The sunrise ocean torii image acts as a symbolic threshold — a calm moment before crossing from reality into
          dreams. From there, the interface shifts into moonlight, galaxy imagery, translucent layers, and darker
          dreamcore scenes.
        </p>
        <p>
          Purple-blue tones, soft blur, quiet spacing, and poetic Japanese typography slow the browsing rhythm down so
          the experience feels more reflective than informational.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map(([title, image]) => (
          <figure key={title}>
            <img src={assetPath(`${screenshotBase}/${image}`)} alt={title} className="aspect-video h-full w-full object-cover" />
            <figcaption className="mt-4 text-center text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              {title}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function KeyScreensGallery() {
  return (
    <div className="mx-auto grid max-w-6xl gap-16">
      <figure>
        <div className="overflow-hidden shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
          <img
            src={assetPath(`${screenshotBase}/2_home.png`)}
            alt="Dream World Home featured screen"
            className="aspect-video h-full w-full object-cover"
          />
        </div>
        <figcaption className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
          The central dream world interface uses purple-blue night imagery to create a calm and immersive atmosphere.
        </figcaption>
      </figure>

      <div>
        <div className="mb-5 flex items-center gap-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-tomato">Reality Entrance</h3>
          <div className="h-px flex-1 bg-black/10" />
        </div>
        <div className="grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_12rem]">
          <figure className="overflow-hidden shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
            <img src={assetPath(`${screenshotBase}/1_reality.png`)} alt="Reality Entrance desktop" className="aspect-video h-full w-full object-cover" />
          </figure>
          <figure className="mx-auto w-40 md:w-full">
            <div className="overflow-hidden rounded-[1.6rem] border-[6px] border-[#171512] bg-[#f7f5f8] shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
              <img src={assetPath(`${screenshotBase}/1_reality_SP.png`)} alt="Reality Entrance mobile" className="aspect-[9/19] h-full w-full object-cover" />
            </div>
          </figure>
        </div>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-neutral-600">
          The sunrise ocean torii image acts as a symbolic threshold — a calm moment before crossing from reality into dreams.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-tomato">Dreamcore Interaction</p>
          <h3 className="mt-5 font-barlow text-3xl font-semibold leading-tight text-[#171512]">Memory cards that open slowly.</h3>
          <p className="mt-5 text-sm leading-7 text-neutral-600">
            Dream memories are presented as interactive cards. On desktop, cards expand; on mobile, they flip to reveal
            narrative details.
          </p>
          <ul className="mt-6 space-y-3">
            {dreamcoreDetailNotes.map((note) => (
              <li key={note} className="border-l border-tomato pl-4 text-sm leading-6 text-neutral-600">
                {note}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-5">
          <figure className="overflow-hidden shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
            <img src={assetPath(`${screenshotBase}/3_dreamcore-1.png`)} alt="Dreamcore Archive" className="aspect-video h-full w-full object-cover" />
          </figure>
          <figure className="overflow-hidden shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
            <img src={assetPath(`${screenshotBase}/3_dreamcore-3.png`)} alt="Dreamcore Card Detail" className="aspect-video h-full w-full object-cover" />
          </figure>
        </div>
      </div>

      <div>
        <div className="mb-6 flex items-center gap-5">
          <h3 className="text-sm font-bold uppercase tracking-[0.22em] text-tomato">Supporting Screens</h3>
          <div className="h-px flex-1 bg-black/10" />
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {keyScreens.map(([title, image, body]) => (
            <figure key={title} className="overflow-hidden bg-white shadow-[0_12px_38px_rgba(23,21,18,0.06)]">
              <img src={assetPath(`${screenshotBase}/${image}`)} alt={title} className="aspect-video h-full w-full object-cover" />
              <figcaption className="px-1 py-4">
                <p className="text-sm font-semibold text-[#171512]">{title}</p>
                <p className="mt-2 text-xs leading-6 text-neutral-600">{body}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}

function DemoVideos() {
  return (
    <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <figure>
        <video
          src={assetPath(`${screenshotBase}/dream_PC.mov`)}
          className="aspect-video w-full bg-neutral-100 object-cover shadow-[0_18px_55px_rgba(23,21,18,0.08)]"
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
        <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">Desktop interaction</figcaption>
      </figure>
      <figure>
        <video
          src={assetPath(`${screenshotBase}/dream_SP.mov`)}
          className="mx-auto aspect-[9/19] max-h-[34rem] w-full rounded-[1.6rem] border-[6px] border-[#171512] bg-neutral-100 object-cover shadow-[0_18px_55px_rgba(23,21,18,0.08)]"
          muted
          loop
          playsInline
          controls
          preload="metadata"
        />
        <figcaption className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-neutral-400">Mobile interaction</figcaption>
      </figure>
    </div>
  );
}

export default function DreamWorldPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-14 pt-20 text-[#171512] md:px-16 md:pt-24">
      <section className="mx-auto max-w-7xl">
        <TopBackToWork />

        <section className="grid gap-12 pb-16 pt-4 lg:grid-cols-[0.95fr_1fr] lg:items-center">
          <div>
            <div className="flex gap-2.5 overflow-x-auto whitespace-nowrap pb-1">
              {["Interactive Experience", "Dreamcore", "Emotional UX", "Storytelling", "AI Interaction"].map((tag) => (
                <span key={tag} className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-8 font-barlow text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-normal">
              Dream World
            </h1>
            <p className="mt-9 max-w-3xl text-xl leading-9 text-neutral-600">
              An immersive web experience exploring dreams, memory, and subconscious emotions.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href={liveUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-12 items-center rounded-full bg-[#171512] px-6 text-sm font-bold text-white transition hover:bg-tomato" data-cursor="button">
                Enter the Dream World
              </a>
              <a href="#concept" className="inline-flex min-h-12 items-center rounded-full border border-black/15 px-6 text-sm font-bold text-[#171512] transition hover:border-tomato hover:text-tomato" data-cursor="button">
                View Concept
              </a>
            </div>
          </div>
          <figure>
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="block cursor-default overflow-hidden shadow-[0_24px_70px_rgba(23,21,18,0.08)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(23,21,18,0.12)]"
              data-cursor-label="click and enter the experience"
            >
              <img
                src={assetPath(`${screenshotBase}/1_reality.png`)}
                alt="Dream World reality entrance screenshot"
                className="h-auto w-full transition duration-700 hover:scale-[1.015]"
              />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="mx-auto mt-5 flex w-fit text-xs font-bold uppercase tracking-[0.18em] text-[#171512] transition hover:text-tomato"
              data-cursor="button"
            >
              Enter the Dream World
            </a>
          </figure>
        </section>

        <Section id="snapshot" label="Project Snapshot" title="A responsive immersive website for emotional self-reflection.">
          <div className="grid gap-7 md:grid-cols-4">
            {snapshot.map(([title, body]) => (
              <SnapshotCard key={title} title={title} body={body} />
            ))}
          </div>
        </Section>

        <Section
          id="concept"
          label="Concept"
          title="Dreams as emotional memory fragments"
          body="A quiet web experience exploring dreams, memory, and subconscious emotions."
        >
          <div className="mx-auto max-w-4xl space-y-7 text-lg leading-9 text-neutral-600">
            <p>
              Dreams are not random images. They are emotional fragments of memory, fear, nostalgia, and subconscious
              thoughts.
            </p>
            <p>
              Dream World began from my personal experience of frequently having vivid and surreal dreams. Instead of
              treating dreams only as mysterious images, I designed this website as a quiet space where personal dream
              memories can be visualized, organized, and reflected on through dreamcore imagery, symbolic interpretation,
              and AI interaction.
            </p>
          </div>
        </Section>

        <Section id="architecture" label="Experience Architecture" title="A clear path from reality into the dream world.">
          <ArchitectureFlow />
        </Section>

        <Section
          id="visual-direction"
          label="Visual Design"
          title="Photography, dreamcore imagery, and quiet digital atmosphere."
        >
          <VisualDirection />
        </Section>

        <Section
          id="design-intention"
          label="Design Intention"
          title="A quiet transition from reality into memory."
        >
          <DesignIntention />
        </Section>

        <Section id="interaction" label="Interaction Design" title="Calm interactions that encourage exploration rather than speed.">
          <div className="grid gap-5 md:grid-cols-2">
            {interactionCards.map(([title, body]) => (
              <SnapshotCard key={title} title={title} body={body} />
            ))}
          </div>
        </Section>

        <Section id="key-screens" label="Key Screens" title="Curated screens from the final responsive experience.">
          <KeyScreensGallery />
        </Section>

        <Section id="demo-videos" label="Demo Videos" title="Desktop and mobile interaction demos.">
          <DemoVideos />
        </Section>

        <Section id="ai-interpreter" label="AI Dream Interpreter" title="A reflective companion, not a diagnosis tool.">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.86fr]">
            <div className="space-y-7 text-lg leading-9 text-neutral-600">
              <p>
                The AI Dream Interpreter is designed as a reflective companion, not a diagnosis tool. Users can write
                about their dreams and receive symbolic prompts for self-reflection.
              </p>
              <p className="border-l border-tomato pl-5 text-base leading-8 text-neutral-600">
                This is not a medical diagnosis. If users have serious psychological concerns, they should consult a
                professional.
              </p>
              <p>Design tone: gentle, safe, reflective.</p>
            </div>
            <figure className="overflow-hidden bg-[#f7f5f8] shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
              <img src={assetPath(`${screenshotBase}/7_AIchat.png`)} alt="AI Dream Interpreter screen" className="h-auto w-full" />
            </figure>
          </div>
        </Section>

        <Section id="reflection" label="Reflection" title="A website can become an emotional space.">
          <div className="mx-auto max-w-4xl space-y-8 text-lg leading-9 text-neutral-600">
            <p>
              This project helped me explore how a website can become an emotional space rather than only an information
              interface.
            </p>
            <p>
              By combining personal memories, dreamcore visuals, symbolic interpretation, and AI interaction, I explored
              how digital experiences can support self-reflection and emotional storytelling.
            </p>
            <h3 className="pt-2 text-xs font-bold uppercase tracking-[0.22em] text-tomato">
              What I would improve next
            </h3>
            <div className="grid gap-4 md:grid-cols-2">
              {improvements.map((item) => (
                <div key={item} className="text-sm font-semibold leading-7 text-neutral-600">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <BottomBackToWork className="text-neutral-500" />
      </section>
    </main>
  );
}
