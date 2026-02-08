"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { useSiteData } from "@/lib/site-context";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

const CMS_URL = process.env.NEXT_PUBLIC_CMS_URL || "https://dashboard.gideoncode.com";
const SITE_DOMAIN = process.env.NEXT_PUBLIC_SITE_DOMAIN || "";

// Fallback local knowledge for when CMS chat is unavailable
const businessKnowledge: Record<string, { keywords: string[]; response: string }> = {
  services: {
    keywords: ["service", "training", "program", "offer", "what do you", "help", "teach"],
    response: `We offer six comprehensive training programs:\n\n**Basic Obedience** - Foundation training with commands like sit, stay, come, heel, and leash manners.\n\n**Behavioral Modification** - For dogs with aggression, anxiety, fear, reactivity, or other behavioral challenges.\n\n**Service Dog Training** - Professional service dog preparation including task training and public access readiness.\n\n**Specialty Training** - Advanced off-leash control, confidence building, scent work, and task-specific skills.\n\n**Protection Training** - Controlled protection work while maintaining obedience and social reliability.\n\n**Group Training** - Socialization and commands in a supportive group environment.\n\nWould you like details about any specific program?`,
  },
  pricing: {
    keywords: ["price", "cost", "how much", "fee", "rate", "afford", "payment", "pay"],
    response: `Great question! Our training programs are customized to each dog's unique needs, so pricing varies based on the specific program and your goals.\n\n**To get pricing information:**\n- Call us at **(866) 436-4959**\n- Fill out our contact form on the Contact page\n- We offer free consultations to assess your dog's needs\n\nWe're committed to making professional training accessible. Contact us and we'll work with you to find the right program!`,
  },
  locations: {
    keywords: ["location", "where", "area", "state", "near me", "city", "address", "find"],
    response: `We have professional trainers across **11 states**:\n\n**Headquarters:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\n**States we serve:**\n- **Ohio** - Cleveland, Reynoldsburg\n- **California** - San Diego, San Jose, and more\n- **Florida** - Pensacola, Crestview, Milton, Navarre\n- **Texas** - Houston, San Antonio, Fort Worth\n- **Georgia** - Atlanta metro area\n- Plus: Indiana, Kansas, Kentucky, Massachusetts, Michigan, New Hampshire\n\nOur trainers come to you for in-home training! What area are you in?`,
  },
  contact: {
    keywords: ["contact", "phone", "call", "email", "reach", "talk", "speak", "appointment", "consult"],
    response: `Here's how to reach us:\n\n**Phone:** (866) 436-4959\n**Address:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\n**Online:**\n- Visit our Contact page to send a message\n- Instagram: @lorenzosdogtrainingteam\n- Facebook: /LorenzosDogTrainingTeam\n- YouTube: /mydogtrainingteam\n\nWe offer **free consultations** to assess your dog's needs. Call us today!`,
  },
  about: {
    keywords: ["about", "history", "story", "who", "founded", "lorenzo", "founder", "experience", "how long"],
    response: `**Lorenzo's Dog Training Team** was founded in **1987** — that's over 40 years of professional dog training!\n\nOur founder **Lorenzo** began rescuing strays at age 6. By age 10, his parents sent him to train with professionals. He funded his college education through in-home dog training.\n\nToday, we have **50+ trainers across 11 states**, all trained at our 3,700 sq. ft. Cleveland headquarters. Our mission: **keeping dogs out of shelters and in happy homes**.`,
  },
  behavioral: {
    keywords: ["aggress", "bite", "bark", "anxious", "anxiety", "fear", "reactive", "behavior", "problem", "bad", "destructive", "separation"],
    response: `We specialize in behavioral challenges — it's one of our core strengths! We work with dogs that other trainers have given up on.\n\n**Common issues we address:**\n- Aggression toward people or other animals\n- Separation anxiety\n- Fear-based behaviors\n- Reactivity on leash or around triggers\n- Excessive barking\n- Destructive behavior\n\nContact us at **(866) 436-4959** for a free consultation!`,
  },
  puppy: {
    keywords: ["puppy", "young", "baby", "new dog", "just got", "small"],
    response: `Congratulations on your new puppy! Early training is one of the best investments you can make.\n\nOur **Basic Obedience** program covers:\n- Housebreaking and crate training\n- Basic commands (sit, stay, come, heel, down)\n- Leash manners and walking etiquette\n- Impulse control and patience building\n- Socialization foundations\n\nCall **(866) 436-4959** to schedule a puppy training consultation.`,
  },
  facility: {
    keywords: ["facility", "building", "headquarters", "training center", "obstacle", "boarding"],
    response: `Our headquarters features a **3,700 sq. ft. training facility** in Cleveland, Ohio.\n\n**Facility highlights:**\n- Professional obstacle course\n- Indoor and outdoor boarding areas\n- Hands-on training spaces\n- Trainer development academy\n\n**Address:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\nInterested in visiting? Contact us to schedule a tour!`,
  },
};

function getLocalResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [, knowledge] of Object.entries(businessKnowledge)) {
    if (knowledge.keywords.some((kw) => lower.includes(kw))) {
      return knowledge.response;
    }
  }

  if (/^(hi|hello|hey|good morning|good afternoon|howdy|greetings)/i.test(lower)) {
    return `Hello! Welcome to Lorenzo's Dog Training Team!\n\nI'm here to help you learn about our training programs, find a trainer near you, or answer any questions.\n\nJust type your question!`;
  }

  if (/thank|thanks|appreciate/i.test(lower)) {
    return `You're welcome! If you have any more questions, feel free to ask!\n\nWhen you're ready, call us at **(866) 436-4959** or visit our Contact page.`;
  }

  return `Thanks for your question! I'd love to help you further.\n\nFor the most detailed answer, I'd recommend:\n- **Calling us** at **(866) 436-4959**\n- **Visiting our Contact page** to send a message\n\nI can tell you about our **training programs**, **locations**, **story**, **behavioral issues**, or **puppy training**.`;
}

export default function ChatBot() {
  const siteData = useSiteData();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize session
  useEffect(() => {
    const stored = localStorage.getItem(`chatbot_session_${SITE_DOMAIN}`);
    if (stored) {
      setSessionId(stored);
    } else {
      const newSession = crypto.randomUUID();
      localStorage.setItem(`chatbot_session_${SITE_DOMAIN}`, newSession);
      setSessionId(newSession);
    }
  }, []);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Welcome message on first open
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: `Hi! Welcome to ${siteData.brand.name}. How can I help you today?`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, siteData.brand.name, messages.length]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // Try CMS chat endpoint first
      const res = await fetch(`${CMS_URL}/api/public/${SITE_DOMAIN}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: userMessage.content,
          sessionId,
          history: messages.slice(-10),
        }),
      });

      if (!res.ok) throw new Error("Chat API unavailable");

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        },
      ]);
    } catch {
      // Fallback to local knowledge base
      const localResponse = getLocalResponse(userMessage.content);
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: crypto.randomUUID(),
            role: "assistant",
            content: localResponse,
            timestamp: new Date(),
          },
        ]);
      }, 300);
    } finally {
      setIsLoading(false);
    }
  };

  if (process.env.NEXT_PUBLIC_CHATBOT_ENABLED === "false") {
    return null;
  }

  const primaryColor = siteData.brand.primaryColor || "#C8102E";
  const secondaryColor = siteData.brand.secondaryColor || "#091353";

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-[0_24px_60px_-30px_rgba(18,26,21,0.8)] flex items-center justify-center transition-all duration-300 ${
          isOpen ? "rotate-0" : "hover:scale-110"
        }`}
        style={{ backgroundColor: isOpen ? secondaryColor : primaryColor }}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
      >
        {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-7 h-7 text-white" />}
      </button>

      {!isOpen && (
        <div className="fixed bottom-[4.5rem] right-6 z-50 pointer-events-none">
          <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse" />
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-[#F9FAFB] rounded-lg shadow-[0_28px_70px_-35px_rgba(18,26,21,0.75)] border border-[#e5e7eb] flex flex-col overflow-hidden" style={{ height: "500px" }}>
          <div
            className="px-5 py-4 flex items-center gap-3"
            style={{
              backgroundImage: `linear-gradient(135deg, ${secondaryColor} 0%, #0B1A5E 100%)`,
            }}
          >
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ backgroundColor: primaryColor }}>
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">{siteData.brand.name}</h3>
              <p className="text-[#C8102E] text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-[#C8102E] rounded-full inline-block" />
                Usually replies instantly
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-[#F5F7FA]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div
                  className="w-8 h-8 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: msg.role === "assistant" ? "#E5E7EB" : secondaryColor }}
                >
                  {msg.role === "assistant" ? (
                    <Bot className="w-4 h-4" style={{ color: primaryColor }} />
                  ) : (
                    <User className="w-4 h-4 text-white" />
                  )}
                </div>
                <div
                  className={`max-w-[75%] rounded-[22px] px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "assistant" ? "bg-white border border-[#e5e7eb] text-[#3b3b3b]" : "text-white"
                  }`}
                  style={msg.role === "user" ? { backgroundColor: primaryColor } : undefined}
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-2xl flex items-center justify-center" style={{ backgroundColor: "#E5E7EB" }}>
                  <Bot className="w-4 h-4" style={{ color: primaryColor }} />
                </div>
                <div className="bg-white border border-[#e5e7eb] rounded-[22px] px-4 py-3 text-sm text-gray-400">
                  Typing...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-[#e5e7eb] bg-[#F9FAFB]">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Type a message..."
                className="flex-1 px-4 py-2.5 rounded-md border border-[#e5e7eb] bg-white/80 outline-none text-sm text-[#091353] shadow-[0_12px_30px_-25px_rgba(27,42,35,0.4)]"
                style={{ borderColor: input ? primaryColor : undefined }}
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="w-10 h-10 rounded-2xl flex items-center justify-center transition-colors disabled:opacity-50 shadow-[0_10px_26px_-18px_rgba(199,107,69,0.7)]"
                style={{ backgroundColor: primaryColor }}
                aria-label="Send message"
              >
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
