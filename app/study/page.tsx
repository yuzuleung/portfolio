import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STUDY"
};

const studyProjects = [
  {
    course: "Design Studio",
    title: "Course Project 01",
    description: "A space for coursework, school experiments, process studies, and MAU design projects."
  },
  {
    course: "Research / Methods",
    title: "Course Project 02",
    description: "Use this page to separate academic exploration from selected professional portfolio work."
  },
  {
    course: "Visual Communication",
    title: "Course Project 03",
    description: "Replace these cards with assignments, sketches, prototypes, and classroom outcomes."
  }
];

export default function StudyPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-28 text-ink md:px-16">
      <section>
        <div className="border-t border-black/15 pt-7">
          <p className="text-xs font-bold uppercase tracking-[0.08em] text-tomato">Musashino Art University</p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {studyProjects.map((project) => (
            <article key={project.title} className="border-t border-black/15 pt-5">
              <p className="text-xs font-bold uppercase tracking-[0.08em] text-sage">{project.course}</p>
              <h2 className="mt-4 text-2xl font-semibold">{project.title}</h2>
              <p className="mt-4 leading-7 text-black/65">{project.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
