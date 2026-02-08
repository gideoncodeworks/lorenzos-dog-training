"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Phone, ArrowLeft, Bot, User } from "lucide-react";
import Link from "next/link";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || "https://dashboard.gideoncode.com";
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || "";

// Local knowledge fallback
const businessKnowledge: Record<string, { keywords: string[]; response: string }> = {
  services: {
    keywords: ["service", "training", "program", "offer", "what do you", "help", "teach"],
    response: `We offer comprehensive training programs:\n\n**Basic Obedience** - Foundation training with sit, stay, come, heel, and leash manners.\n\n**Behavioral Modification** - For aggression, anxiety, fear, and reactivity.\n\n**Service Dog Training** - Task training and public access readiness.\n\n**Specialty Training** - Advanced off-leash, confidence building, and scent work.\n\nWould you like details about any program?`,
  },
  pricing: {
    keywords: ["price", "cost", "how much", "fee", "rate", "afford", "payment"],
    response: `Our programs are customized to each dog's needs, so pricing varies.\n\n**To get pricing:**\n- Call **(866) 436-4959**\n- Fill out our contact form\n- We offer free consultations!\n\nContact us and we'll find the right program for you!`,
  },
  locations: {
    keywords: ["location", "where", "area", "state", "near me", "city", "address"],
    response: `We have trainers across **11 states**:\n\n**HQ:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\n**States:** Ohio, California, Florida, Texas, Georgia, Indiana, Kansas, Kentucky, Massachusetts, Michigan, New Hampshire\n\nWhat area are you in?`,
  },
  contact: {
    keywords: ["contact", "phone", "call", "email", "reach", "talk", "appointment"],
    response: `**Phone:** (866) 436-4959\n**Address:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\nWe offer **free consultations**. Call us today!`,
  },
  about: {
    keywords: ["about", "history", "story", "who", "founded", "lorenzo", "experience"],
    response: `**Lorenzo's Dog Training Team** was founded in **1987** — over 40 years of professional training!\n\nToday we have **50+ trainers across 11 states**. Our mission: keeping dogs out of shelters and in happy homes.`,
  },
  behavioral: {
    keywords: ["aggress", "bite", "bark", "anxious", "anxiety", "fear", "reactive", "behavior", "problem"],
    response: `We specialize in behavioral challenges — it's our strength!\n\n**We address:**\n- Aggression\n- Separation anxiety\n- Fear-based behaviors\n- Reactivity\n- Excessive barking\n- Destructive behavior\n\nCall **(866) 436-4959** for a free consultation!`,
  },
};

function getLocalResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [, knowledge] of Object.entries(businessKnowledge)) {
    if (knowledge.keywords.some((kw) => lower.includes(kw))) {
      return knowledge.response;
    }
  }
  if (/^(hi|hello|hey|good morning|good afternoon)/i.test(lower)) {
    return `Hello! Welcome to Lorenzo's Dog Training Team!\n\nI can help you learn about our training programs or find a trainer near you.\n\nWhat can I help you with?`;
  }
  if (/thank|thanks/i.test(lower)) {
    return `You're welcome! Call us at **(866) 436-4959** when you're ready!`;
  }
  return `I'd love to help! For detailed answers:\n- **Call** (866) 436-4959\n- Visit our **Contact page**\n\nI can tell you about our **training programs**, **locations**, or **behavioral issues**.`;
}

export default function ChatPage() {
  const [visitorId] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("lorenzo_visitor_id");
      if (stored) return stored;
      const newId = `visitor-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      localStorage.setItem("lorenzo_visitor_id", newId);
      return newId;
    }
    return `visitor-${Date.now()}`;
  });

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content: "Hi! I'm the Lorenzo's Dog Training assistant. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    inputRef.current?.focus();

    try {
      const res = await fetch(`${CMS_URL}/api/public/${SITE_DOMAIN}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId: visitorId,
          history: messages.slice(-10),
        }),
      });

      if (!res.ok) throw new Error("Chat API unavailable");

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: data.response,
        },
      ]);
    } catch {
      const localResponse = getLocalResponse(userMessage.content);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: (Date.now() + 1).toString(),
            role: "assistant",
            content: localResponse,
          },
        ]);
      }, 300);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col bg-[#F5F7FA] z-50">
      {/* Header */}
      <div className="bg-[#091353] text-white px-4 py-3 flex items-center justify-between flex-shrink-0 safe-top">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="h-5 w-5" />
          </Link>
          <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-sm">Lorenzo&apos;s Assistant</p>
            <p className="text-xs text-blue-200/70">Usually replies instantly</p>
          </div>
        </div>
        <a
          href="tel:8664364959"
          className="flex items-center gap-1 text-xs bg-[#C8102E] px-3 py-1.5 rounded-full hover:bg-[#A00D24] transition-colors"
        >
          <Phone className="h-3 w-3" />
          Call
        </a>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-2 ${message.role === "user" ? "flex-row-reverse" : ""}`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                message.role === "assistant" ? "bg-gray-200" : "bg-[#091353]"
              }`}
            >
              {message.role === "assistant" ? (
                <Bot className="w-4 h-4 text-[#C8102E]" />
              ) : (
                <User className="w-4 h-4 text-white" />
              )}
            </div>
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                message.role === "user"
                  ? "bg-[#C8102E] text-white rounded-br-md"
                  : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-md"
              }`}
            >
              <p
                className="text-sm whitespace-pre-wrap"
                dangerouslySetInnerHTML={{
                  __html: message.content
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                    .replace(/\n/g, "<br />"),
                }}
              />
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              <Bot className="w-4 h-4 text-[#C8102E]" />
            </div>
            <div className="bg-white shadow-sm border border-gray-100 rounded-2xl rounded-bl-md px-4 py-3">
              <div className="flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white border-t border-gray-200 flex-shrink-0 safe-bottom">
        <div className="flex gap-2">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 border border-gray-300 rounded-full px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:border-[#C8102E]"
            disabled={isLoading}
            autoComplete="off"
            enterKeyHint="send"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            className="w-12 h-12 bg-[#C8102E] text-white rounded-full flex items-center justify-center hover:bg-[#A00D24] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">
          Call (866) 436-4959 for immediate help
        </p>
      </div>
    </div>
  );
}
