import React from 'react';
import { Users, Bot, Target, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { ServiceContactForm } from '../components/ServiceContactForm';

const ServiceAgentsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-32 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-8 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <Users className="w-4 h-4" />
            <span>Autonomous Workforce</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
            Personalized <br /><span className="text-blue-600">Agents.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Deployment of task-specific AI agents that operate independently within your secure cloud. These are not just chatbots; they are autonomous actors capable of complex reasoning and tool usage.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {[
            {
              title: "Autonomous Agents",
              desc: "AI that uses tools (APIs, Browsers) to complete multi-step business objectives.",
              icon: <Bot className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Personal Assistants",
              desc: "Hyper-customized AI for executives that manage scheduling, research, and drafting.",
              icon: <Target className="w-8 h-8 text-indigo-600" />
            },
            {
              title: "Secure Sandboxing",
              desc: "Running powerful agents in air-gapped environments to ensure data zero-leakage.",
              icon: <ShieldCheck className="w-8 h-8 text-emerald-600" />
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

      <section className="py-32 px-6 md:px-20 bg-blue-700 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1531746790731-6c087fecd05a?auto=format&fit=crop&w=1200&q=80" alt="Agents" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Agency <br/><span className="text-white/60">Defined</span></h2>
            <div className="space-y-8">
              {[
                "Advanced LLM Reasoning Loops",
                "Long-Term Context Memory (Vector)",
                "Action-Oriented Tool Integration",
                "Autonomous Goal Decomposition"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle2 className="text-white w-6 h-6" />
                  <span className="text-lg font-bold uppercase tracking-widest text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <ServiceContactForm defaultService="Personalized Agents" />
        </div>
      </section>
    </div>
  );
};

export default ServiceAgentsPage;