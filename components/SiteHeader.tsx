"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/study", label: "Study" },
  { href: "/about", label: "About Me" }
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="fixed left-0 right-0 top-0 z-30 flex items-center justify-between px-5 py-5 text-ink md:px-16">
      <Link href="/" className="text-lg font-bold uppercase tracking-[0.08em]" data-cursor="button">
        Yong Liang
      </Link>
      <nav className="flex gap-5 text-xs font-bold uppercase tracking-[0.08em] md:gap-10" aria-label="Primary navigation">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 transition-colors hover:text-black focus-visible:text-black after:absolute after:bottom-0 after:left-1/2 after:h-px after:w-full after:origin-center after:-translate-x-1/2 after:scale-x-0 after:bg-current after:transition-transform after:duration-200 after:ease-out hover:after:scale-x-100 focus-visible:after:scale-x-100 ${isActive ? "text-black" : "text-neutral-500"}`}
              data-cursor="button"
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
