import type { Metadata } from "next";
import { MenuPaymentCaseStudy } from "./MenuPaymentCaseStudy";

export const metadata: Metadata = {
  title: "Menu & Payment App Case Study"
};

export default function MenuPaymentAppPage() {
  return <MenuPaymentCaseStudy />;
}
