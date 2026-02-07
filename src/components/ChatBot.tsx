"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  role: "bot" | "user";
  content: string;
}

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
    response: `We have professional trainers across **11 states**:\n\n**Headquarters:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\n**States we serve:**\n- **Ohio** - Cleveland, Reynoldsburg\n- **California** - San Diego, Sacramento, San Jose, and more\n- **Florida** - Pensacola, Crestview, Milton, Navarre\n- **Texas** - Houston, San Antonio, Fort Worth\n- **Georgia** - Atlanta metro area\n- Plus: Indiana, Kansas, Kentucky, Massachusetts, Michigan, New Hampshire\n\nOur trainers come to you for in-home training! What area are you in?`,
  },
  contact: {
    keywords: ["contact", "phone", "call", "email", "reach", "talk", "speak", "appointment", "consult"],
    response: `Here's how to reach us:\n\n**Phone:** (866) 436-4959\n**Address:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\n**Online:**\n- Visit our Contact page to send a message\n- Instagram: @lorenzosdogtrainingteam\n- Facebook: /LorenzosDogTrainingTeam\n- YouTube: /mydogtrainingteam\n\nWe offer **free consultations** to assess your dog's needs. Call us today!`,
  },
  about: {
    keywords: ["about", "history", "story", "who", "founded", "lorenzo", "founder", "experience", "how long"],
    response: `**Lorenzo's Dog Training Team** was founded in **1987** — that's over 40 years of professional dog training!\n\nOur founder **Lorenzo** began rescuing strays at age 6. By age 10, his parents sent him to train with professionals. He funded his college education through in-home dog training.\n\nLorenzo studied various training methods in the late 1970s-80s and synthesized the best elements into his own distinctive, proven approach.\n\nToday, we have **50+ trainers across 11 states**, all trained at our 3,700 sq. ft. Cleveland headquarters. Our mission: **keeping dogs out of shelters and in happy homes**.`,
  },
  behavioral: {
    keywords: ["aggress", "bite", "bark", "anxious", "anxiety", "fear", "reactive", "behavior", "problem", "bad", "destructive", "separation"],
    response: `We specialize in behavioral challenges — it's one of our core strengths! We work with dogs that other trainers have given up on.\n\n**Common issues we address:**\n- Aggression toward people or other animals\n- Separation anxiety\n- Fear-based behaviors\n- Reactivity on leash or around triggers\n- Excessive barking\n- Destructive behavior\n- Resource guarding\n- Jumping and impulse control issues\n\nOur **Behavioral Modification** program includes a thorough assessment, a customized behavior plan, owner education, and follow-up support.\n\nContact us at **(866) 436-4959** for a free consultation!`,
  },
  puppy: {
    keywords: ["puppy", "young", "baby", "new dog", "just got", "small"],
    response: `Congratulations on your new puppy! Early training is one of the best investments you can make.\n\nOur **Basic Obedience** program covers:\n- Housebreaking and crate training\n- Basic commands (sit, stay, come, heel, down)\n- Leash manners and walking etiquette\n- Impulse control and patience building\n- Socialization foundations\n- Door manners and greeting guests\n\nWe work with dogs of **any age** — the earlier you start, the stronger the foundation. But it's never too late!\n\nCall **(866) 436-4959** to schedule a puppy training consultation.`,
  },
  facility: {
    keywords: ["facility", "building", "headquarters", "training center", "obstacle", "boarding"],
    response: `Our headquarters features a **3,700 sq. ft. training facility** in Cleveland, Ohio.\n\n**Facility highlights:**\n- Professional obstacle course\n- Indoor and outdoor boarding areas\n- Hands-on training spaces\n- Trainer development academy\n\nThis is where all our trainers learn Lorenzo's proven methodology through intensive, supervised work before being placed nationwide.\n\n**Address:** 4805 Orchard Rd., Garfield Heights, OH 44128\n\nInterested in visiting? Contact us to schedule a tour!`,
  },
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase();

  for (const [, knowledge] of Object.entries(businessKnowledge)) {
    if (knowledge.keywords.some((kw) => lower.includes(kw))) {
      return knowledge.response;
    }
  }

  if (/^(hi|hello|hey|good morning|good afternoon|howdy|greetings)/i.test(lower)) {
    return `Hello! Welcome to Lorenzo's Dog Training Team!\n\nI'm here to help you learn about our training programs, find a trainer near you, or answer any questions.\n\n**How can I help you today?**\n- Learn about our training programs\n- Find a trainer in your area\n- Get pricing information\n- Hear our story\n\nJust type your question!`;
  }

  if (/thank|thanks|appreciate/i.test(lower)) {
    return `You're welcome! If you have any more questions, feel free to ask!\n\nWhen you're ready, call us at **(866) 436-4959** or visit our Contact page. We look forward to working with you and your dog!`;
  }

  return `Thanks for your question! I'd love to help you further.\n\nFor the most detailed answer, I'd recommend:\n- **Calling us** at **(866) 436-4959**\n- **Visiting our Contact page** to send a message\n\nI can tell you about:\n- Our **training programs** and services\n- **Locations** and trainer availability\n- Our **story** and experience\n- **Behavioral issues** your dog may have\n- **Puppy training** options`;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: `Hi there! I'm the Lorenzo's Dog Training Team assistant. I can help you learn about our training programs, find a trainer near you, or answer questions about our services.\n\nWhat can I help you with today?`,
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);

    setTimeout(() => {
      const response = getBotResponse(userMessage);
      setMessages((prev) => [...prev, { role: "bot", content: response }]);
    }, 500);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isOpen ? "bg-[#1a1a2e] rotate-0" : "bg-[#B8860B] hover:bg-[#DAA520] hover:scale-110"
        }`}
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
        <div className="fixed bottom-24 right-6 z-50 w-[380px] max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden" style={{ height: "500px" }}>
          <div className="bg-[#1a1a2e] px-5 py-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-[#B8860B] rounded-full flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-sm">Lorenzo&apos;s Assistant</h3>
              <p className="text-green-400 text-xs flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full inline-block" />
                Online
              </p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gray-50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === "bot" ? "bg-[#B8860B]/10" : "bg-[#1a1a2e]"}`}>
                  {msg.role === "bot" ? <Bot className="w-4 h-4 text-[#B8860B]" /> : <User className="w-4 h-4 text-white" />}
                </div>
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "bot" ? "bg-white border border-gray-200 text-gray-700" : "bg-[#B8860B] text-white"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: msg.content
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\n/g, "<br />"),
                  }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200 bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about our training programs..."
                className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#B8860B] focus:ring-2 focus:ring-[#B8860B]/20 outline-none text-sm text-[#1a1a2e]"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="w-10 h-10 bg-[#B8860B] hover:bg-[#DAA520] disabled:bg-gray-300 rounded-xl flex items-center justify-center transition-colors"
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
