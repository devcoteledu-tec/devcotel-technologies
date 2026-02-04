import React from 'react';
import { MessageSquare, BrainCircuit, Search, UserCheck, CheckCircle2 } from 'lucide-react';
import { ServiceContactForm } from '../components/ServiceContactForm';

const ServiceChatbotsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-32 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-8 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <MessageSquare className="w-4 h-4" />
            <span>Conversational RAG</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
            AI Chatbots <br /><span className="text-blue-600">(RAG).</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Turn your unstructured company documentation into a dynamic knowledge core. Our Retrieval-Augmented Generation (RAG) systems provide accurate, context-aware support 24/7.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {[
            {
              title: "Enterprise Knowledge",
              desc: "Instant answers derived from your internal PDF, Wiki, and database records.",
              icon: <Search className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Customer Support",
              desc: "Empathetic, brand-voice consistent AI agents that solve issues in seconds.",
              icon: <UserCheck className="w-8 h-8 text-indigo-600" />
            },
            {
              title: "Contextual RAG",
              desc: "Advanced retrieval that avoids hallucinations and cites its sources clearly.",
              icon: <BrainCircuit className="w-8 h-8 text-emerald-600" />
            }
          ].map((item, i) => (
            <div key={i} className="p-12 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all group">
              <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=1200&q=80" alt="Chatbots" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Knowledge <br/><span className="text-blue-600">Retrieved</span></h2>
            <div className="space-y-8">
              {[
                "Multi-Source Knowledge Ingestion",
                "Advanced Vector Database Setup",
                "Brand-Voice Prompt Engineering",
                "Continuous RLHF Feedback Loops"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" />
                  <span className="text-lg font-bold uppercase tracking-widest text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <ServiceContactForm defaultService="AI Chatbots (RAG)" />
        </div>
      </section>
    </div>
  );
};

export default ServiceChatbotsPage;