"use client";

import { useState } from "react";
import { assetPath } from "@/lib/assetPath";

const emailAddress = "yliang.jp@gmail.com";
const resumeHref = assetPath("/assets/resume/resume.pdf");

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M5 12h5v15H5V12Zm2.5-7A2.7 2.7 0 1 1 7.5 10 2.7 2.7 0 0 1 7.5 5ZM13 12h4.8v2.1h.1c.7-1.3 2.3-2.5 4.7-2.5 5 0 5.9 3.3 5.9 7.5V27h-5v-7c0-1.7 0-3.8-2.3-3.8s-2.7 1.8-2.7 3.7V27H13V12Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden="true">
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 9h22v15H5z" />
      <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="m5 10 11 8 11-8" />
    </svg>
  );
}

function ResumeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="currentColor" d="M6 2h8l4 4v16H6V2Zm7 1.8V7h3.2L13 3.8ZM8 11h8V9H8v2Zm0 4h8v-2H8v2Zm0 4h5v-2H8v2Z" />
    </svg>
  );
}

export function AboutContactActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [from, setFrom] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = `mailto:${emailAddress}?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(
    `From: ${from}\n\n${message}`
  )}`;

  return (
    <>
      <div className="mt-10 flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/yong-liang-022158202/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cfe3] bg-white/75 text-[#69577a] transition hover:border-[#69577a] hover:bg-white hover:text-[#24212a]"
          data-cursor="button"
        >
          <LinkedInIcon />
        </a>
        <button
          type="button"
          aria-label="Email"
          onClick={() => setIsOpen(true)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cfe3] bg-white/75 text-[#69577a] transition hover:border-[#69577a] hover:bg-white hover:text-[#24212a]"
          data-cursor="button"
        >
          <MailIcon />
        </button>
        <a
          href={resumeHref}
          target="_blank"
          rel="noreferrer"
          aria-label="Resume"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cfe3] bg-white/75 text-[#69577a] transition hover:border-[#69577a] hover:bg-white hover:text-[#24212a]"
          data-cursor="button"
        >
          <ResumeIcon />
        </a>
      </div>

      {isOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#171512]/35 px-5 backdrop-blur-sm">
          <form
            className="w-full max-w-xl rounded-md border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(23,21,18,0.18)]"
            onSubmit={(event) => {
              event.preventDefault();
              window.location.href = mailtoHref;
            }}
          >
            <div className="flex items-center justify-between gap-6">
              <h2 className="text-sm font-bold uppercase tracking-[0.22em] text-[#69577a]">Email</h2>
              <button type="button" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-neutral-500 transition hover:text-black">
                Close
              </button>
            </div>
            <label className="mt-6 block text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              From
              <input
                value={from}
                onChange={(event) => setFrom(event.target.value)}
                className="mt-2 w-full rounded-sm border border-black/10 px-4 py-3 text-base font-normal normal-case tracking-normal text-[#24212a] outline-none transition focus:border-[#69577a]"
                placeholder="your@email.com"
              />
            </label>
            <label className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              To
              <input
                value={emailAddress}
                readOnly
                className="mt-2 w-full rounded-sm border border-black/10 bg-neutral-50 px-4 py-3 text-base font-normal normal-case tracking-normal text-[#24212a] outline-none"
              />
            </label>
            <label className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              Title
              <input
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                className="mt-2 w-full rounded-sm border border-black/10 px-4 py-3 text-base font-normal normal-case tracking-normal text-[#24212a] outline-none transition focus:border-[#69577a]"
              />
            </label>
            <label className="mt-4 block text-xs font-bold uppercase tracking-[0.16em] text-neutral-500">
              Message
              <textarea
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                rows={5}
                className="mt-2 w-full resize-none rounded-sm border border-black/10 px-4 py-3 text-base font-normal normal-case tracking-normal text-[#24212a] outline-none transition focus:border-[#69577a]"
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex min-h-11 items-center rounded-full bg-[#24212a] px-5 text-sm font-bold text-white transition hover:bg-tomato"
              data-cursor="button"
            >
              Open mail app
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
