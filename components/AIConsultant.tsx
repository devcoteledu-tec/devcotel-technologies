
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getAIConsultation } from '../services/geminiService';
import { Message } from '../types';

export const AIConsultant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Welcome to the Devcotel AI Strategy Lab. I'm your advisor today. Tell me about an operational bottleneck or a vision for a new platform, and I'll draft an AI-centric roadmap for you." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const response = await getAIConsultation(input, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response || "Consultation error. Please try again." }]);
    setIsLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 relative z-10">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 text-blue-500 font-black tracking-widest uppercase text-xs mb-4">
           <Sparkles className="w-4 h-4" />
           <span>Interactive Strategy</span>
        </div>
        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">Start Your Digital Transformation</h2>
        <p className="text-slate-400 max-w-2xl mx-auto">Get an instant feasibility assessment and architectural overview for your AI project from our virtual strategist.</p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8 h-[700px]">
        {/* Left Info Panel */}
        <div className="hidden lg:flex flex-col space-y-4">
           <div className="bg-[#0f172a] p-8 rounded-2xl border border-white/5 flex-grow">
              <h4 className="text-white font-bold mb-6 flex items-center">
                <div className="w-1 h-4 bg-blue-600 mr-3 rounded"></div>
                Strategy Insights
              </h4>
              <ul className="space-y-6">
                {[
                  { l: 'Feasibility', v: 'Analysis of AI implementation effort.' },
                  { l: 'ROI Projection', v: 'Estimated time-to-value for deployment.' },
                  { l: 'Stack Advisory', v: 'Best-fit technologies for your scale.' }
                ].map((item, i) => (
                  <li key={i}>
                    <div className="text-blue-500 font-bold text-xs uppercase mb-1">{item.l}</div>
                    <div className="text-sm text-slate-400 leading-relaxed">{item.v}</div>
                  </li>
                ))}
              </ul>
           </div>
           <div className="bg-blue-600 p-8 rounded-2xl text-white">
              <div className="text-sm font-bold uppercase tracking-widest opacity-80 mb-2">Next Step</div>
              <div className="text-xl font-bold leading-tight">Schedule a Human Deep-Dive Session</div>
           </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-2 flex flex-col bg-[#0f172a] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
          <div className="p-5 border-b border-white/5 bg-[#020617]/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
               <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
               <span className="text-sm font-bold text-white uppercase tracking-widest">AI Strategist v4.2</span>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-grow overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-blue-600/20"
          >
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] flex space-x-4 ${msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`flex-shrink-0 w-10 h-10 rounded flex items-center justify-center ${msg.role === 'user' ? 'bg-blue-600' : 'bg-[#020617] border border-white/10'}`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-blue-500" />}
                  </div>
                  <div className={`p-5 rounded-xl leading-relaxed text-sm ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-[#020617] text-slate-300 border border-white/5 shadow-lg'}`}>
                    <div className="prose prose-invert prose-blue max-w-none">
                      {msg.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-[#020617] border border-white/10 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-blue-500" />
                  </div>
                  <div className="p-5 rounded-xl bg-[#020617] border border-white/5">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-6 border-t border-white/5 bg-[#020617]/30">
            <div className="relative group">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Briefly describe your business challenge..."
                className="w-full bg-[#020617] border border-white/10 rounded-lg py-5 pl-8 pr-16 text-white focus:outline-none focus:ring-2 focus:ring-blue-600/50 transition-all placeholder:text-slate-600"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white rounded transition-all"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
