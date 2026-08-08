"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, KeyboardEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

type SuggestedQuestion = {
  label: string;
  prompt: string;
};

type CoreQuestion = SuggestedQuestion & {
  id: string;
};

function isCoreQuestion(question: SuggestedQuestion): question is CoreQuestion {
  return "id" in question && typeof question.id === "string";
}

const coreQuestions: CoreQuestion[] = [
  { id: "about", label: "About Liang", prompt: "Tell me about Liang." },
  { id: "work", label: "Her work experience", prompt: "Tell me about Liang's work experience." },
  { id: "projects", label: "Her projects", prompt: "Tell me about Liang's main projects and which ones I should explore." },
  { id: "site", label: "How this site was built", prompt: "How was this portfolio designed and built?" }
];

const aboutFollowUps: SuggestedQuestion[] = [
  { label: "Education background", prompt: "Tell me about Liang's education background." },
  { label: "FinTech experience", prompt: "Tell me about Liang's fintech experience." },
  { label: "Technical background", prompt: "Tell me about Liang's technical background." },
  { label: "UX background", prompt: "Tell me about Liang's UX background." }
];

const projectFollowUps: SuggestedQuestion[] = [
  { label: "au PAY", prompt: "Tell me about Liang's au PAY project." },
  { label: "au Ponta Portal", prompt: "Tell me about Liang's au Ponta Portal project." },
  { label: "UX projects", prompt: "Which projects best show Liang's UX work?" },
  { label: "Technical projects", prompt: "Which projects best show Liang's technical background?" }
];

const productFollowUps: SuggestedQuestion[] = [
  { label: "KDDI work", prompt: "Tell me about Liang's product work at KDDI." },
  { label: "FinTech product work", prompt: "Tell me about Liang's fintech product experience." },
  { label: "Product × UX", prompt: "How does Liang combine product management and UX?" },
  { label: "Stakeholder work", prompt: "How has Liang worked with stakeholders?" }
];

const siteFollowUps: SuggestedQuestion[] = [
  { label: "Tech stack", prompt: "What technologies were used to build this portfolio?" },
  { label: "Design approach", prompt: "What design approach does this portfolio use?" },
  { label: "AI assistant", prompt: "How does this portfolio's AI assistant work?" },
  { label: "Frontend details", prompt: "Tell me about the frontend implementation of this portfolio." }
];

const auPayFollowUps: SuggestedQuestion[] = [
  { label: "His role", prompt: "What was Liang's role in the au PAY project?" },
  { label: "Technical challenges", prompt: "What was technically challenging about Liang's au PAY work?" },
  { label: "Other FinTech work", prompt: "What other fintech work has Liang done?" },
  { label: "View case study", prompt: "Share the au PAY case study link." }
];

const uxFollowUps: SuggestedQuestion[] = [
  { label: "UX projects", prompt: "Which projects best show Liang's UX work?" },
  { label: "User research", prompt: "What user research experience does Liang show in this portfolio?" },
  { label: "Design education", prompt: "Tell me about Liang's design education." },
  { label: "Product × UX", prompt: "How does Liang combine product management and UX?" }
];

const fallbackFollowUps: SuggestedQuestion[] = [
  { label: "Work experience", prompt: "Summarize Liang's work experience." },
  { label: "Strongest skills", prompt: "What are Liang's strongest skills?" },
  { label: "Best case study", prompt: "Which case study best represents Liang's product thinking?" },
  { label: "Contact context", prompt: "Why might Liang be a strong candidate?" }
];

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const assistantApiUrl = process.env.NEXT_PUBLIC_ASSISTANT_API_URL ?? `${basePath}/api/portfolio-assistant`;

const welcomeMessage: ChatMessage = {
  id: "welcome",
  role: "assistant",
  content: "Hi! What would you like to know about Liang?"
};

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12.2 2.8 14 8.6l5.8 1.8-5.8 1.8-1.8 5.8-1.8-5.8-5.8-1.8 5.8-1.8 1.8-5.8Zm6.2 11.8.8 2.4 2.4.8-2.4.8-.8 2.4-.8-2.4-2.4-.8 2.4-.8.8-2.4ZM5.4 14.7l.7 2.1 2.1.7-2.1.7-.7 2.1-.7-2.1-2.1-.7 2.1-.7.7-2.1Z"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path fill="currentColor" d="M3 20.4 21.4 12 3 3.6v6.6l10.6 1.8L3 13.8v6.6Z" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="m6.5 6.5 11 11m0-11-11 11"
      />
    </svg>
  );
}

function getSafeLinkProps(href: string) {
  if (href.startsWith("/")) {
    return { href: `${basePath}${href}` };
  }

  if (href.startsWith("https://") || href.startsWith("http://")) {
    return { href, target: "_blank", rel: "noreferrer" };
  }

  return { href: "#" };
}

function renderInlineMarkdown(content: string) {
  const inlinePattern = /(\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)]+)\))/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;

  for (const match of content.matchAll(inlinePattern)) {
    const [fullMatch, , boldText, linkLabel, href] = match;
    const index = match.index ?? 0;

    if (index > lastIndex) parts.push(content.slice(lastIndex, index));

    if (boldText) {
      parts.push(
        <strong key={`bold-${index}`} className="font-semibold text-inherit">
          {boldText}
        </strong>
      );
    } else if (linkLabel && href) {
      parts.push(
        <a
          key={`link-${href}-${index}`}
          {...getSafeLinkProps(href)}
          className="font-semibold text-tomato underline decoration-tomato/30 underline-offset-2 transition hover:decoration-tomato"
          data-cursor="button"
        >
          {linkLabel}
        </a>
      );
    }

    lastIndex = index + fullMatch.length;
  }

  if (lastIndex < content.length) parts.push(content.slice(lastIndex));

  return parts;
}

function renderMarkdown(content: string) {
  const lines = content.trim().split("\n");
  const blocks: React.ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) {
      index += 1;
      continue;
    }

    const unorderedItems: string[] = [];
    while (index < lines.length) {
      const match = lines[index].trim().match(/^[-*]\s+(.+)$/);
      if (!match) break;
      unorderedItems.push(match[1]);
      index += 1;
    }

    if (unorderedItems.length > 0) {
      blocks.push(
        <ul key={`ul-${index}`} className="my-2 list-disc space-y-1 pl-5">
          {unorderedItems.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInlineMarkdown(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    const orderedItems: string[] = [];
    while (index < lines.length) {
      const match = lines[index].trim().match(/^\d+\.\s+(.+)$/);
      if (!match) break;
      orderedItems.push(match[1]);
      index += 1;
    }

    if (orderedItems.length > 0) {
      blocks.push(
        <ol key={`ol-${index}`} className="my-2 list-decimal space-y-1 pl-5">
          {orderedItems.map((item, itemIndex) => (
            <li key={`${item}-${itemIndex}`}>{renderInlineMarkdown(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    const paragraphLines: string[] = [];
    while (index < lines.length) {
      const nextLine = lines[index].trim();
      if (!nextLine || /^[-*]\s+/.test(nextLine) || /^\d+\.\s+/.test(nextLine)) break;
      paragraphLines.push(nextLine);
      index += 1;
    }

    blocks.push(
      <p key={`p-${index}`} className="my-0">
        {renderInlineMarkdown(paragraphLines.join(" "))}
      </p>
    );
  }

  return <div className="space-y-2">{blocks}</div>;
}

function renderUserMessage(content: string) {
  const lines = content.split("\n");

  return lines.map((line, lineIndex) => {
    const parts: React.ReactNode[] = [];
    parts.push(line);

    return (
      <span key={`${line}-${lineIndex}`}>
        {parts.length > 0 ? parts : line}
        {lineIndex < lines.length - 1 ? <br /> : null}
      </span>
    );
  });
}

function getFollowUpsForMessage(message: string) {
  const normalized = message.toLowerCase();

  if (normalized.includes("au pay")) return auPayFollowUps;
  if (normalized.includes("ux") || normalized.includes("design") || normalized.includes("research")) return uxFollowUps;
  if (normalized.includes("project")) return projectFollowUps;
  if (normalized.includes("product") || normalized.includes("work experience") || normalized.includes("kddi")) return productFollowUps;
  if (normalized.includes("built") || normalized.includes("site") || normalized.includes("portfolio")) return siteFollowUps;
  if (normalized.includes("about liang") || normalized.includes("background") || normalized.includes("who is liang")) return aboutFollowUps;

  return fallbackFollowUps;
}

function getSuggestedQuestions(messages: ChatMessage[], askedCoreQuestionIds: string[]) {
  const latestUserMessage = [...messages]
    .reverse()
    .find((message) => message.role === "user" && message.id !== "welcome")
    ?.content ?? "";
  const remainingCoreQuestions = coreQuestions.filter((question) => !askedCoreQuestionIds.includes(question.id));

  if (!latestUserMessage) return remainingCoreQuestions.slice(0, 4);

  const contextualQuestions = getFollowUpsForMessage(latestUserMessage).filter(
    (question) => !remainingCoreQuestions.some((coreQuestion) => coreQuestion.label === question.label)
  );

  return [...remainingCoreQuestions, ...contextualQuestions].slice(0, 4);
}

export function PortfolioAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([welcomeMessage]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [askedCoreQuestionIds, setAskedCoreQuestionIds] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const canSubmit = useMemo(() => input.trim().length > 0 && input.length <= 1200 && !isLoading, [input, isLoading]);
  const hasStartedConversation = messages.length > 1;
  const currentSuggestions = useMemo(() => getSuggestedQuestions(messages, askedCoreQuestionIds), [messages, askedCoreQuestionIds]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = window.setTimeout(() => inputRef.current?.focus(), 160);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, isLoading]);

  useEffect(() => {
    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  async function submitQuestion(question: string, displayText = question, coreQuestionId?: string) {
    const trimmed = question.trim();
    const visibleText = displayText.trim();
    if (!trimmed || trimmed.length > 1200 || !visibleText || isLoading) return;

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: visibleText
    };
    const nextMessages = [...messages, userMessage];
    const apiMessages = [
      ...messages.filter((message) => message.id !== "welcome"),
      {
        role: "user" as const,
        content: trimmed
      }
    ];

    setMessages(nextMessages);
    if (coreQuestionId) {
      setAskedCoreQuestionIds((current) => current.includes(coreQuestionId) ? current : [...current, coreQuestionId]);
    }
    setInput("");
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(assistantApiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: apiMessages.map(({ role, content }) => ({ role, content }))
        })
      });

      const data = (await response.json()) as { answer?: string; error?: string };

      if (!response.ok || !data.answer) {
        throw new Error(data.error ?? "Assistant unavailable.");
      }

      setMessages((current) => [
        ...current,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.answer ?? ""
        }
      ]);
    } catch {
      setError("The assistant couldn't connect just now. Please try again in a moment.");
    } finally {
      setIsLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (canSubmit) void submitQuestion(input);
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Escape") setIsOpen(false);
  }

  return (
    <div className="fixed bottom-5 right-7 z-50 font-sans text-ink md:bottom-7 md:right-12">
      <AnimatePresence>
        {isOpen ? (
          <motion.section
            key="assistant-panel"
            layout
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className={`mb-3 flex w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-md border border-black/10 bg-white/95 shadow-[0_24px_80px_rgba(23,21,18,0.18)] backdrop-blur-md transition-[height] duration-300 ${
              hasStartedConversation ? "h-[min(620px,calc(100vh-7rem))]" : "h-[min(470px,calc(100vh-7rem))]"
            }`}
            role="dialog"
            aria-modal="false"
            aria-labelledby="portfolio-assistant-title"
          >
            <header className="flex items-start justify-between gap-4 border-b border-black/10 px-5 py-4">
              <div>
                <p id="portfolio-assistant-title" className="font-barlow text-lg font-semibold leading-6">
                  Ask about Liang
                </p>
                <p className="mt-1 text-xs font-medium leading-5 text-neutral-500">
                  Projects, experience, skills, or this portfolio.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-black/10 text-neutral-500 transition hover:border-tomato hover:text-tomato focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato"
                aria-label="Close portfolio assistant"
                data-cursor="button"
              >
                <CloseIcon />
              </button>
            </header>

            <div ref={scrollRef} className="flex-1 overflow-y-auto px-5 py-5">
              <div className="space-y-4">
                {messages.map((message) => (
                  <article
                    key={message.id}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[86%] rounded-md px-4 py-3 text-sm leading-6 ${
                        message.role === "user"
                          ? "bg-ink text-white"
                          : "border border-black/10 bg-[#f8f6fb] text-[#332f3b]"
                      }`}
                    >
                      {message.role === "assistant" ? renderMarkdown(message.content) : renderUserMessage(message.content)}
                    </div>
                  </article>
                ))}

                {isLoading ? (
                  <div className="flex justify-start">
                    <div className="animate-pulse rounded-md border border-black/10 bg-[#f8f6fb] px-4 py-3 text-sm font-medium text-neutral-500">
                      ✦ Thinking...
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="sticky bottom-0 z-10 bg-white px-4 py-4">
              <div className="mb-3 flex flex-wrap gap-2">
                {currentSuggestions.map((question) => (
                  <button
                    key={question.label}
                    type="button"
                    disabled={isLoading}
                    onClick={() => void submitQuestion(question.prompt, question.label, isCoreQuestion(question) ? question.id : undefined)}
                    className="min-h-9 rounded-full border border-black/[0.08] bg-white/70 px-3.5 py-1.5 text-left text-xs font-semibold leading-5 text-neutral-500 transition hover:border-tomato/40 hover:bg-white hover:text-tomato focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato disabled:cursor-not-allowed disabled:opacity-50"
                    data-cursor="button"
                  >
                    {question.label}
                  </button>
                ))}
              </div>
              {error ? <p className="mb-3 text-xs font-medium leading-5 text-tomato">{error}</p> : null}
              {input.length > 1200 ? (
                <p className="mb-3 text-xs font-medium leading-5 text-tomato">Please keep the question under 1200 characters.</p>
              ) : null}
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  className="min-h-11 flex-1 rounded-full border border-black/10 bg-white px-4 text-sm outline-none transition placeholder:text-neutral-400 focus:border-tomato focus:ring-2 focus:ring-tomato/15"
                  placeholder="Ask anything about Liang..."
                  aria-label="Ask anything about Liang"
                  maxLength={1300}
                />
                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition hover:bg-tomato focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato disabled:cursor-not-allowed disabled:bg-neutral-300"
                  aria-label="Send question"
                  data-cursor="button"
                >
                  <SendIcon />
                </button>
              </div>
            </form>
          </motion.section>
        ) : null}
      </AnimatePresence>

      <div className="flex flex-col items-center gap-3">
        {!isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{
              opacity: [1, 0.35, 1],
              y: 0
            }}
            transition={{
              opacity: {
                delay: 0.5,
                duration: 2.8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.45
              },
              y: {
                delay: 0.2,
                duration: 0.28,
                ease: [0.22, 1, 0.36, 1]
              }
            }}
            className="pointer-events-none max-w-[calc(100vw-2rem)] rounded-md border border-white/70 bg-white/75 px-3.5 py-2 text-right shadow-[0_14px_42px_rgba(23,21,18,0.12)] backdrop-blur-md"
          >
            <motion.div
              animate={{ scale: [1, 1.015, 1] }}
              transition={{
              duration: 2.8,
              ease: "easeInOut",
              repeat: Infinity,
              repeatDelay: 0.45
            }}
            >
              <p className="text-sm font-semibold leading-5 text-ink">Hi, I&apos;m Liang.</p>
              <p className="mt-0.5 whitespace-nowrap text-sm font-semibold leading-5 text-tomato">Ask about me</p>
            </motion.div>
          </motion.div>
        ) : null}

        <motion.button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex h-14 w-14 items-center justify-center rounded-full border border-black/10 bg-white text-ink shadow-[0_14px_45px_rgba(23,21,18,0.16)] transition hover:border-tomato hover:text-tomato focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tomato"
          aria-label={isOpen ? "Close portfolio assistant" : "Open portfolio assistant"}
          aria-expanded={isOpen}
          data-cursor="button"
        >
          <SparkleIcon />
        </motion.button>
      </div>
    </div>
  );
}
