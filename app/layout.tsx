import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/CustomCursor";
import { PageTransitionLoader } from "@/components/PageTransitionLoader";
import { PortfolioAssistantMount } from "@/components/PortfolioAssistantMount";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { assetPath } from "@/lib/assetPath";

export const metadata: Metadata = {
  title: {
    default: "HOME | Yong Liang",
    template: "%s | Yong Liang"
  },
  description: "Yong Liang portfolio.",
  icons: {
    icon: assetPath("/favicon.ico"),
    shortcut: assetPath("/favicon.ico"),
    apple: assetPath("/favicon.ico")
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&family=Noto+Serif+SC:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white font-sans text-ink antialiased">
        <PageTransitionLoader />
        <SiteHeader />
        {children}
        <SiteFooter />
        <PortfolioAssistantMount />
        <CustomCursor />
      </body>
    </html>
  );
}
