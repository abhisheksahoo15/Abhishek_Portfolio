import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

const faqs: Record<string, string> = {
  'hi': "Hey there! 👋 I'm Abhi-AI, Abhishek's digital assistant. Ask me anything about his skills, projects, or how to get in touch!",
  'hello': "Hello! 😄 I'm Abhi-AI. How can I help you today? You can ask me about Abhishek's work, skills, or Getsetai!",
  'who are you': "I'm Abhi-AI — a custom chatbot built to represent Abhishek Sahoo's portfolio. Ask me about his projects, experience, or blogs!",
  'projects': "Abhishek has built a wide range of projects including:\n• AI Data Pipeline Dashboard\n• Premium ID Management SaaS\n• Getsetai Innovation Lab\n• Cable Billing Automation System\n\nHead to the Projects section to explore them with full details!",
  'skills': "Abhishek is proficient in:\n⚡ React, Next.js, React Native\n⚡ Node.js, Express, MongoDB\n⚡ Azure Cloud, GitHub CI/CD\n⚡ Framer Motion, Tailwind CSS\n⚡ AI integration & UX design",
  'contact': "You can reach Abhishek via:\n📧 Email — available on request\n🔗 LinkedIn — linked in the footer\n🐦 Twitter — linked in the footer\n\nOr just drop a message via Getsetai!",
  'getsetai': "Getsetai Innovation Lab is Abhishek's own AI-powered learning and innovation platform for the next generation of tech enthusiasts. Visit the Community section to learn more!",
  'blog': "Abhishek writes about AI interface design, product building, and React performance. Check out the Blog page from the footer or navbar!",
  'experience': "Abhishek has 3+ years of experience spanning:\n• Founding Getsetai Innovation Lab\n• Frontend Architecture for Open Source\n• Finalist at Global AI Summit Hackathon",
  'resume': "You can download Abhishek's full resume directly from the hero section using the 'Download Resume' button. 📄",
  'certifications': "Abhishek holds certifications in:\n🏆 Advanced React Architecture\n🏆 AI & Data Pipelines (DeepLearning.AI)\n🏆 Cloud Solutions on Azure (Microsoft)",
  'default': "That's a great question! I'm still learning. The best way to get a detailed answer is to reach out to Abhishek directly via the social links in the footer. Is there something else I can help with?",
};

function getBotResponse(input: string): string {
  const lower = input.toLowerCase().trim();
  for (const key of Object.keys(faqs)) {
    if (lower.includes(key)) return faqs[key];
  }
  return faqs['default'];
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Hey! 👋 I'm **Abhi-AI**. Ask me anything about Abhishek — his projects, skills, blogs or Getsetai!" },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setMessages(prev => [...prev, { role: 'user', text: trimmed }]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: getBotResponse(trimmed) }]);
    }, 900);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-neon to-magenta-neon text-white flex items-center justify-center shadow-[0_0_25px_rgba(0,240,255,0.5)] hover:shadow-[0_0_35px_rgba(252,15,192,0.7)] transition-all duration-300"
        aria-label="Toggle Chatbot"
      >
        <AnimatePresence mode="wait">
          {open
            ? <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}><X className="w-7 h-7" /></motion.span>
            : <motion.span key="chat" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }}><MessageSquare className="w-7 h-7" /></motion.span>
          }
        </AnimatePresence>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] sm:w-[400px] h-[520px] flex flex-col ai-glass-panel rounded-[2rem] overflow-hidden shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-cyan-neon to-magenta-neon p-5 flex items-center gap-3 flex-shrink-0">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border-2 border-white/40">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-black text-lg leading-none">Abhi-AI</p>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  <span className="text-white/80 text-xs font-medium">Always online</span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-neon to-magenta-neon flex items-center justify-center mr-2 flex-shrink-0 mt-1 shadow-md">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div className={`max-w-[78%] px-4 py-3 rounded-2xl text-sm leading-relaxed whitespace-pre-line font-medium ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-neon to-magenta-neon text-white rounded-br-sm shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                      : 'bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-200 rounded-bl-sm border border-gray-200 dark:border-white/10'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-cyan-neon to-magenta-neon flex items-center justify-center shadow-md flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5 items-center">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="w-2 h-2 bg-cyan-neon rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                    ))}
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200 dark:border-white/10 flex items-center gap-3 flex-shrink-0 bg-white/50 dark:bg-black/30">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKey}
                placeholder="Ask about projects, skills..."
                className="flex-1 bg-gray-100 dark:bg-white/10 border border-gray-200 dark:border-white/10 rounded-xl px-4 py-2.5 text-sm font-medium text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:border-cyan-neon transition-colors"
              />
              <button
                onClick={sendMessage}
                className="w-10 h-10 rounded-xl bg-gradient-to-r from-cyan-neon to-magenta-neon flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-[0_0_10px_rgba(0,240,255,0.4)] flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
