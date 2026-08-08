import { NextResponse } from "next/server";
import { askPortfolioAssistant, type PortfolioChatMessage } from "@/lib/ai/portfolioAssistant";

export const runtime = "nodejs";

const MAX_MESSAGES = 12;
const MAX_MESSAGE_LENGTH = 1200;

function isValidMessage(message: unknown): message is PortfolioChatMessage {
  if (!message || typeof message !== "object") return false;

  const candidate = message as Record<string, unknown>;
  return (
    (candidate.role === "user" || candidate.role === "assistant") &&
    typeof candidate.content === "string" &&
    candidate.content.trim().length > 0 &&
    candidate.content.length <= MAX_MESSAGE_LENGTH
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: unknown };
    const messages = Array.isArray(body.messages) ? body.messages : [];

    if (messages.length === 0 || messages.length > MAX_MESSAGES || !messages.every(isValidMessage)) {
      return NextResponse.json(
        { error: "Please send a shorter portfolio question." },
        { status: 400 }
      );
    }

    const answer = await askPortfolioAssistant(messages);
    return NextResponse.json({ answer });
  } catch (error) {
    console.error("[portfolio-assistant]", error instanceof Error ? error.message : error);
    const status = error instanceof Error && error.message.includes("OPENAI_API_KEY") ? 503 : 500;

    return NextResponse.json(
      { error: "The assistant is temporarily unavailable. Please try again in a moment." },
      { status }
    );
  }
}
