"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function PageTransitionLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      const link = target?.closest("a[href]") as HTMLAnchorElement | null;

      if (!link) return;
      if (link.target || link.hasAttribute("download")) return;

      const url = new URL(link.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.hash === window.location.hash) return;

      setIsLoading(true);
    };

    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          aria-label="Loading page"
          className="pointer-events-none fixed inset-0 z-[9998] grid place-items-center bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: "easeOut" }}
        >
          <motion.div
            className="h-10 w-10 rounded-full border border-black/15 border-t-ink"
            animate={{ rotate: 360 }}
            transition={{ duration: 0.72, ease: "linear", repeat: Infinity }}
          />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
