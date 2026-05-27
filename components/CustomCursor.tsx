"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type CursorVariant = "default" | "button";

const OUTER_SIZE = 52;
const INNER_SIZE = 26;
const BUTTON_CURSOR_SIZE = 39;

const interactiveSelector = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "[role='button']",
  "[data-cursor='button']",
  "[data-cursor-label]",
  "[data-cursor='dark']",
  "[data-cursor-theme='dark']"
].join(",");

export function CustomCursor() {
  const pathname = usePathname();
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<CursorVariant>("default");
  const [cursorLabel, setCursorLabel] = useState<string | null>(null);

  const outerSpringX = useSpring(mouseX, { stiffness: 1400, damping: 48, mass: 0.08 });
  const outerSpringY = useSpring(mouseY, { stiffness: 1400, damping: 48, mass: 0.08 });

  const outerX = useTransform(outerSpringX, (value) => value - OUTER_SIZE / 2);
  const outerY = useTransform(outerSpringY, (value) => value - OUTER_SIZE / 2);
  const innerX = useTransform(mouseX, (value) => value - (variant === "default" ? INNER_SIZE : BUTTON_CURSOR_SIZE) / 2);
  const innerY = useTransform(mouseY, (value) => value - (variant === "default" ? INNER_SIZE : BUTTON_CURSOR_SIZE) / 2);
  const labelX = useTransform(mouseX, (value) => value + 18);
  const labelY = useTransform(mouseY, (value) => value + 18);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateEnabled = () => {
      setIsEnabled(finePointer.matches);
    };

    updateEnabled();
    finePointer.addEventListener("change", updateEnabled);

    return () => finePointer.removeEventListener("change", updateEnabled);
  }, []);

  useEffect(() => {
    if (!isEnabled) return;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
      setIsVisible(true);

      const target = event.target instanceof Element ? event.target : null;
      const interactiveElement = target?.closest(interactiveSelector) ?? null;

      if (!interactiveElement) {
        setVariant("default");
        setCursorLabel(null);
        return;
      }

      setCursorLabel(interactiveElement.getAttribute("data-cursor-label"));
      setVariant("button");
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isEnabled, mouseX, mouseY]);

  useEffect(() => {
    if (!isEnabled) return;

    const frame = window.requestAnimationFrame(() => {
      const x = mouseX.get();
      const y = mouseY.get();

      if (x < 0 || y < 0) return;

      const target = document.elementFromPoint(x, y);
      const interactiveElement = target?.closest(interactiveSelector) ?? null;

      setIsVisible(true);
      setVariant(interactiveElement ? "button" : "default");
      setCursorLabel(interactiveElement?.getAttribute("data-cursor-label") ?? null);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [isEnabled, mouseX, mouseY, pathname]);

  if (!isEnabled) return null;

  const isButton = variant !== "default";
  const hasLabel = Boolean(cursorLabel);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] rounded-full"
        initial={false}
        animate={{
          opacity: isVisible ? (isButton ? 0.24 : 0.72) : 0,
          scale: isVisible ? (isButton ? 0 : 1) : 0.6,
          backgroundColor: "#e5e7eb"
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        style={{
          width: OUTER_SIZE,
          height: OUTER_SIZE,
          x: outerX,
          y: outerY
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] rounded-full"
        initial={false}
        animate={{
          opacity: isVisible && !hasLabel ? 1 : 0,
          scale: isVisible ? 1 : 0.5,
          backgroundColor: isButton ? "#fffaf1" : "#c7cbd1"
        }}
        transition={{ duration: 0.16, ease: "easeOut" }}
        style={{
          width: isButton ? BUTTON_CURSOR_SIZE : INNER_SIZE,
          height: isButton ? BUTTON_CURSOR_SIZE : INNER_SIZE,
          x: innerX,
          y: innerY,
          mixBlendMode: isButton ? "difference" : "normal"
        }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10001] whitespace-nowrap rounded-full bg-[#4f8dff]/92 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(79,141,255,0.24)]"
        initial={false}
        animate={{
          opacity: isVisible && hasLabel ? 1 : 0,
          scale: isVisible && hasLabel ? 1 : 0.94
        }}
        transition={{ duration: 0.14, ease: "easeOut" }}
        style={{
          x: labelX,
          y: labelY
        }}
      >
        {cursorLabel}
      </motion.div>
    </>
  );
}
