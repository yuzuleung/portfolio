import type { Metadata } from "next";
import { BottomBackToWork, TopBackToWork } from "@/components/BackToWorkLinks";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: "au PAY"
};

const heroImage = assetPath("/assets/au-pay/au_pay_top.png");
const detailImage = assetPath("/assets/au-pay/au_pay.png");

const highlights = [
  ["Role", "Product Manager / UI/UX / Frontend"],
  ["Domain", "Fintech mobile payment experience"],
  ["Focus", "Payment entry, point ecosystem, campaign visibility"]
];

export default function AuPayPage() {
  return (
    <main className="min-h-screen bg-white px-5 pb-10 pt-20 text-[#171512] md:px-16 md:pt-24">
      <section className="mx-auto max-w-7xl">
        <TopBackToWork />

        <div className="mt-8 grid gap-12 lg:grid-cols-[0.78fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-tomato">
              Fintech / Product Management / UI/UX
            </p>
            <h1 className="mt-6 max-w-3xl font-barlow text-[clamp(2.4rem,6vw,5.8rem)] font-semibold leading-[0.92] tracking-normal">
              au PAY
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl md:leading-9">
              A mobile payment product experience centered on code payment, point services, daily finance actions, and campaign discovery.
            </p>
          </div>

          <div className="grid gap-4 border-y border-black/10 py-6 md:grid-cols-3 lg:mb-2">
            {highlights.map(([label, value]) => (
              <article key={label}>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-tomato">{label}</p>
                <p className="mt-3 text-sm leading-6 text-neutral-600">{value}</p>
              </article>
            ))}
          </div>
        </div>

        <figure className="mt-16 bg-[#f7f7f6] px-4 py-10 md:px-10 md:py-14">
          <img
            src={heroImage}
            alt="au PAY home and code payment screens"
            className="mx-auto h-auto w-full max-w-5xl object-contain"
          />
        </figure>

        <section className="mx-auto grid max-w-6xl gap-10 py-16 md:grid-cols-[0.7fr_1fr] md:items-center md:py-24">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-tomato">Product Surface</p>
            <h2 className="mt-5 font-barlow text-[clamp(1.8rem,3vw,3.4rem)] font-semibold leading-[1.05]">
              Making everyday payment actions easy to scan.
            </h2>
            <p className="mt-6 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
              The interface brings together balance, barcode payment, QR code payment, charge actions, point services, coupons, and pickup campaigns in a compact mobile layout.
            </p>
          </div>

          <figure className="bg-[#f7f7f6] px-6 py-10">
            <img
              src={detailImage}
              alt="au PAY mobile home screen"
              className="mx-auto h-auto max-h-[48rem] w-full object-contain"
            />
          </figure>
        </section>

        <BottomBackToWork className="text-neutral-500" />
      </section>
    </main>
  );
}
