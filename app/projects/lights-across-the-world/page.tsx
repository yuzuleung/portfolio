import type { Metadata } from "next";
import type { ReactNode } from "react";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "Lights Across the World"
};

const assetBase = "/assets/Lights_Across_the_World";
const heroImage = assetPath(`${assetBase}/Lights_Across_the_World.png`); // TODO: Replace with the final world map screenshot if updated.
const localDemoVideo = assetPath(`${assetBase}/1day.mov`); // TODO: Replace or add a longer demo video URL when ready.
const demoUrl = "";
const externalVideoUrl = "";

const tags = ["Data-driven Art", "API Visualization", "World Map", "Time-based Interaction", "Creative Coding"];

const snapshot = [
  ["Role", "Designer / Developer"],
  ["Data", "53 cities / 21 countries"],
  ["Tools", "Open-Meteo API / JavaScript / World Map Data"],
  ["Focus", "Time, light, geography, and seasonal rhythm"]
];

const pipeline = [
  "City list",
  "Open-Meteo API request",
  "Sunrise / sunset data",
  "UTC time conversion",
  "Day / night judgment",
  "City light visualization"
];

const timeLogic = [
  ["UTC comparison", "Local sunrise and sunset times are converted into a unified UTC-based system."],
  ["Night state", "Nighttime is shown as a glowing golden light; daytime becomes a quiet dark marker."],
  ["Cross-date logic", "Night can begin on one calendar date and continue into the next morning."],
  ["Polar conditions", "Polar day, polar night, and seasonal daylight shifts require special handling."]
];

const interactions = [
  [
    "24-hour Playback",
    "User action: play one day of time. Purpose: show how city lights turn on and off across the planet."
  ],
  [
    "365-day Playback",
    "User action: play a full year. Purpose: reveal seasonal daylight changes across latitudes."
  ],
  [
    "Pause / Stop",
    "User action: pause the timeline. Purpose: let viewers observe a specific moment and compare cities."
  ],
  [
    "Date & Time Control",
    "User action: choose a date and UTC time. Purpose: support focused exploration beyond passive playback."
  ],
  [
    "Country Filter",
    "User action: select countries or regions. Purpose: reduce visual noise while keeping the global context."
  ]
];

const visualSystem = [
  ["Dark world map", "Low-contrast geography keeps the focus on time and light."],
  ["Golden city lights", "Glowing halos represent nighttime and create a poetic urban rhythm."],
  ["Minimal labels", "Labels stay quiet so the map feels atmospheric rather than dashboard-like."],
  ["Soft motion", "Time-based changes are smooth and observational, not flashy."]
];

const keyExperience = [
  ["Default world map view", "A dark, quiet map establishes the global stage."],
  ["City lights at night", "Cities illuminate when their local night begins."],
  ["24-hour playback state", "A full-day cycle shows lights moving across time zones."],
  ["365-day seasonal playback", "Annual playback reveals daylight duration changes throughout the year."],
  ["Polar / high-latitude behavior", "Polar day and polar night show how latitude changes the rhythm of light."],
  ["Country filter state", "Filtering helps viewers focus on selected regions without losing the global context."]
];

const challenges = [
  "API limits and response speed",
  "Local cache and fallback JSON",
  "UTC time conversion",
  "Date-crossing nighttime logic",
  "Polar day / polar night handling",
  "Balancing accuracy and poetic expression"
];

const improvements = [
  "Add more cities and regions",
  "Improve label collision and readability",
  "Add smoother animation transitions",
  "Make the map more responsive on mobile",
  "Add richer storytelling for polar day, polar night, and seasonal daylight changes",
  "Improve interaction details for comparison between cities"
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

function SnapshotCard({ title, body, className = "" }: { title: string; body: string; className?: string }) {
  return (
    <article className={`border-t border-black/10 pt-5 ${className}`}>
      <h3 className="text-xs font-bold uppercase tracking-[0.22em] text-[#171512]">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{body}</p>
    </article>
  );
}

function DataPipeline() {
  return (
    <div className="grid gap-3 md:grid-cols-6">
      {pipeline.map((step, index) => (
        <article key={step} className="border border-black/10 bg-white p-4">
          <p className="text-[0.65rem] font-bold tracking-[0.18em] text-tomato">{String(index + 1).padStart(2, "0")}</p>
          <h3 className="mt-4 text-sm font-semibold leading-5 text-[#171512]">{step}</h3>
        </article>
      ))}
    </div>
  );
}

function CardGrid({ items }: { items: string[] | string[][] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {items.map((item) => {
        const [title, body] = Array.isArray(item) ? item : [item, ""];
        return (
          <SnapshotCard key={title} title={title} body={body} />
        );
      })}
    </div>
  );
}

function VisualSystemBlock() {
  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_0.72fr] lg:items-center">
      <figure className="overflow-hidden shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
        <img src={heroImage} alt="Lights Across the World map visualization" className="aspect-video h-full w-full object-cover" />
        <figcaption className="mt-3 px-1 text-xs font-medium leading-5 text-neutral-500">
          World map visualization with quiet geography, glowing city lights, and minimal labels.
        </figcaption>
      </figure>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
        {visualSystem.map(([title, body]) => (
          <SnapshotCard key={title} title={title} body={body} />
        ))}
      </div>
    </div>
  );
}

function KeyExperienceBlock() {
  return (
    <div className="space-y-8">
      <figure className="overflow-hidden shadow-[0_18px_55px_rgba(23,21,18,0.08)]">
        <video
          src={localDemoVideo}
          className="h-auto w-full object-contain transition duration-500 hover:scale-[1.01]"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      </figure>
      <div className="grid gap-5 md:grid-cols-3">
        {keyExperience.map(([title, body]) => (
          <SnapshotCard key={title} title={title} body={body} />
        ))}
      </div>
    </div>
  );
}

export default function LightsAcrossTheWorldPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-14 pt-20 text-[#171512] md:px-16 md:pt-24">
      <section className="mx-auto max-w-7xl">
        <TopBackToWork />

        <section className="grid gap-12 pb-16 pt-4 lg:grid-cols-[0.9fr_1fr] lg:items-center">
          <div>
            <div className="flex gap-2.5 overflow-x-auto whitespace-nowrap pb-1">
              {tags.map((tag) => (
                <span key={tag} className="shrink-0 rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-neutral-500">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="mt-8 max-w-4xl font-barlow text-[clamp(2rem,4vw,4.2rem)] font-semibold leading-[0.95] tracking-normal">
              Lights Across the World
            </h1>
            <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#171512] md:text-xl">
              The Earth never sleeps. Its lights simply move.
            </p>
            <p className="mt-5 max-w-3xl text-xl leading-9 text-neutral-600">
              Visualizing sunrise, sunset, and the rhythm of cities through real astronomical data.
            </p>
            {demoUrl || externalVideoUrl ? (
              <div className="mt-10 flex flex-wrap gap-4">
                {demoUrl ? (
                  <a href={demoUrl} className="inline-flex min-h-12 items-center rounded-full bg-[#171512] px-6 text-sm font-bold text-white transition hover:bg-tomato" data-cursor="button">
                    View Interactive Demo
                  </a>
                ) : null}
                {externalVideoUrl ? (
                  <a href={externalVideoUrl} className="inline-flex min-h-12 items-center rounded-full border border-black/15 px-6 text-sm font-bold text-[#171512] transition hover:border-tomato hover:text-tomato" data-cursor="button">
                    Watch Demo Video
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
          <figure className="overflow-hidden">
            <video
              src={localDemoVideo}
              className="h-auto w-full object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </figure>
        </section>

        <Section
          id="snapshot"
          label="Project Snapshot"
          title="A poetic visualization built from real sunrise and sunset data."
          body="Using Open-Meteo API data, the project transforms annual sunrise and sunset times from 53 cities into glowing lights on a dark world map."
        >
          <div className="grid gap-7 md:grid-cols-4">
            {snapshot.map(([title, body]) => (
              <SnapshotCard key={title} title={title} body={body} />
            ))}
          </div>
        </Section>

        <Section
          id="concept"
          label="Concept"
          title="The Earth never sleeps. Its lights simply move."
          body="Somewhere in the world, a city is always entering night. Somewhere else, another city is welcoming morning."
        >
          <div className="mx-auto max-w-4xl space-y-7 text-lg leading-9 text-neutral-600">
            <p>
              Lights Across the World transforms sunrise and sunset data into glowing city lights, allowing viewers to feel
              the Earth’s daily rhythm through time, geography, and motion.
            </p>
            <p>
              The goal was not only to visualize astronomical data accurately, but to make the movement of time feel quiet,
              shared, and alive.
            </p>
          </div>
        </Section>

        <Section id="data-system" label="Data & System" title="From astronomical data to glowing city lights.">
          <div className="space-y-10">
            <div className="mx-auto max-w-4xl text-center text-lg leading-9 text-neutral-600">
              <p>
                The project uses Open-Meteo Archive API data to collect annual sunrise and sunset times for 53 cities
                across 21 countries, including cities from polar, high-latitude, mid-latitude, and equatorial areas.
                Local cache and fallback JSON support a stable demo experience.
              </p>
            </div>
            <DataPipeline />
          </div>
        </Section>

        <Section id="time-logic" label="Time Logic" title="A unified time system for comparing cities across the world.">
          <div className="space-y-8">
            <p className="mx-auto max-w-4xl text-center text-lg leading-9 text-neutral-600">
              Each city’s local sunrise and sunset time is converted into a UTC-based time system, making it possible to
              compare cities across time zones. Nighttime becomes a glowing golden light; daytime becomes a small dark marker.
            </p>
            <CardGrid items={timeLogic} />
          </div>
        </Section>

        <Section id="interaction" label="Interaction Design" title="Moving between poetic experience and analytical observation.">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {interactions.map(([title, body]) => (
              <SnapshotCard key={title} title={title} body={body} className="border border-black/10 p-5" />
            ))}
          </div>
        </Section>

        <Section
          id="visual-system"
          label="Visual System"
          title="Scientific enough to read, poetic enough to feel."
          body="The visual system uses a dark low-contrast world map, golden city lights, soft halo effects, and minimal labels. The map remains quiet so that the rhythm of light becomes the emotional focus."
        >
          <VisualSystemBlock />
        </Section>

        <Section id="key-experience" label="Key Experience" title="The never-sleeping Earth appears through city lights.">
          <KeyExperienceBlock />
        </Section>

        <Section id="technical-challenges" label="Technical Challenges" title="Making real data stable, readable, and emotionally expressive.">
          <CardGrid items={challenges} />
        </Section>

        <Section id="reflection" label="Reflection" title="Real-world data can become an emotional visual experience.">
          <div className="mx-auto max-w-4xl space-y-8 text-lg leading-9 text-neutral-600">
            <p>
              This project helped me understand how real-world data can become an emotional visual experience. By
              transforming sunrise and sunset data into city lights, I explored how time, geography, and seasonal change
              can be felt rather than only calculated.
            </p>
            <p>
              I also learned that data visualization is not only about accuracy. It is also about designing a meaningful
              relationship between information, motion, and human perception.
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
