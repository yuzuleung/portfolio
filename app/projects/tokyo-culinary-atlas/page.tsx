import type { Metadata } from "next";
import { TokyoCulinaryAtlasCaseStudy } from "./TokyoCulinaryAtlasCaseStudy";

export const metadata: Metadata = {
  title: "Tokyo Culinary Atlas"
};

export default function TokyoCulinaryAtlasPage() {
  return <TokyoCulinaryAtlasCaseStudy />;
}
