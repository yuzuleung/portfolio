"use client";

import dynamic from "next/dynamic";

const PortfolioAssistant = dynamic(
  () => import("@/components/PortfolioAssistant").then((module) => module.PortfolioAssistant),
  {
    ssr: false
  }
);

export function PortfolioAssistantMount() {
  return <PortfolioAssistant />;
}
