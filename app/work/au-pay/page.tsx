import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "au PAY"
};

export default function AuPayPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-5 py-32 text-ink">
      <h1 className="text-3xl font-semibold tracking-[0.08em] md:text-5xl">
        Upcoming
      </h1>
    </main>
  );
}
