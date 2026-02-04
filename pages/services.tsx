import React from 'react';
import { 
  Cpu, 
  Globe, 
  Zap, 
  MessageSquare, 
  Code, 
  Users, 
  ArrowRight, 
  Layers, 
  CheckCircle2,
  Target,
  Trophy,
  BarChart4
} from 'lucide-react';
import { ViewType } from '../App';

interface ServicesPageProps {
  onNavigate: (view: ViewType) => void;
}

const CapabilityBlock = ({ title, items, icon, colorClass, link, onNavigate }: any) => (
  <div className="flex flex-col p-10 bg-white border border-slate-100 hover:border-blue-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 rounded-[3rem] group">
    <div className={`w-16 h-16 rounded-[1.5rem] ${colorClass} flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-8 tracking-tighter uppercase leading-none">{title}</h3>
    <ul className="space-y-4 mb-10 flex-grow">
      {items.map((item: string, i: number) => (
        <li key={i} className="flex items-start space-x-3 text-[13px] text-slate-500 font-semibold leading-relaxed">
          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0 opacity-70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
    <button 
      onClick={() => onNavigate(link)}
      className="w-full py-5 bg-slate-50 text-slate-900 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] flex items-center justify-center space-x-3 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 active:scale-95"
    >
      <span>Explore Service</span>
      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
    </button>
  </div>
);

const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-white selection:bg-blue-600 selection:text-white">
      {/* Premium Hero */}
      <section className="relative pt-56 pb-40 px-6 md:px-20 bg-slate-50 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.05),transparent_70%)] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-600 font-black tracking-[0.4em] uppercase text-[10px] mb-10 bg-white px-5 py-2.5 rounded-full border border-slate-100 shadow-sm">
            <Layers className="w-4 h-4" />
            <span>Service Ecosystem</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.82] tracking-tighter mb-12 uppercase">
            Enterprise <br /><span className="text-blue-600">AI Architecture</span> <br />& Engineering.
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-4xl font-light leading-relaxed mb-16">
            We build the cognitive infrastructure of the future. Devcotel specializes in transforming legacy bottlenecks into high-velocity AI pipelines through elite engineering.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="px-14 py-6 bg-slate-900 text-white rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/10 active:scale-95">
              Request a Proposal
            </button>
            <button className="px-14 py-6 bg-white border-2 border-slate-100 text-slate-900 rounded-[2rem] font-black text-[11px] uppercase tracking-[0.3em] hover:border-slate-900 transition-all active:scale-95">
              View Capabilities
            </button>
          </div>
        </div>
      </section>

      {/* Main Service Grid */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-20 mb-32">
            <div className="lg:col-span-5">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 uppercase tracking-tighter leading-[0.9]">
                Solving the <br /><span className="text-blue-600">Unsolved.</span>
              </h2>
              <div className="w-24 h-2.5 bg-blue-600 mb-10 rounded-full"></div>
              <p className="text-xl text-slate-500 leading-relaxed font-medium max-w-md">
                Our approach integrates deep learning directly into your core business logic, ensuring that every line of code serves a strategic objective.
              </p>
            </div>
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-10">
              <CapabilityBlock 
                title="Artificial Intelligence"
                colorClass="bg-blue-50 text-blue-600"
                icon={<Cpu />}
                link="service-ai"
                onNavigate={onNavigate}
                items={['LLM Custom Fine-Tuning', 'Predictive Sales Analytics', 'Visual Intelligence Engines', 'Autonomous Decision Pipelines']}
              />
              <CapabilityBlock 
                title="Web App Development"
                colorClass="bg-indigo-50 text-indigo-600"
                icon={<Globe />}
                link="service-web-dev"
                onNavigate={onNavigate}
                items={['React & Next.js Ecosystems', 'Cross-Platform Mobile Apps', 'Scalable Microservices', 'Cloud-Native SaaS Architecture']}
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 mb-10">
            <CapabilityBlock 
              title="Workflow Automation"
              colorClass="bg-emerald-50 text-emerald-600"
              icon={<Zap />}
              link="service-automation"
              onNavigate={onNavigate}
              items={['Cognitive Workflow RPA', 'API Ecosystem Integration', 'Zero-Touch Ops', 'Real-time Event Handling']}
            />
            <CapabilityBlock 
              title="AI Chatbots (RAG)"
              colorClass="bg-purple-50 text-purple-600"
              icon={<MessageSquare />}
              link="service-chatbots"
              onNavigate={onNavigate}
              items={['Enterprise Knowledge Retrieval', 'Multi-Source Data Ingestion', 'Support Automation (24/7)', 'Secure Document Intelligence']}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            <CapabilityBlock 
              title="Custom Software"
              colorClass="bg-rose-50 text-rose-600"
              icon={<Code />}
              link="service-custom-software"
              onNavigate={onNavigate}
              items={['Legacy Modernization', 'Inventory Systems', 'Fintech Engines', 'High-Throughput Backends']}
            />
            <CapabilityBlock 
              title="Personalized Agents"
              colorClass="bg-amber-50 text-amber-600"
              icon={<Users />}
              link="service-agents"
              onNavigate={onNavigate}
              items={['Autonomous Task Forces', 'Personal AI Assistants', 'Tool-Augmented Reasoning', 'Multi-Agent Orchestration']}
            />
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-40 px-6 md:px-20 bg-slate-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=20')] opacity-5 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-32">
            <h2 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none">The Devcotel <span className="text-blue-500">ROI.</span></h2>
            <p className="text-sm text-slate-400 font-bold uppercase tracking-[0.5em]">Defining the digital advantage</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            <div className="p-12 border border-white/10 rounded-[4rem] bg-white/5 backdrop-blur-xl group hover:bg-blue-600/10 hover:border-blue-600/50 transition-all duration-500">
              <div className="w-20 h-20 rounded-[2rem] bg-blue-600 flex items-center justify-center mb-10 shadow-2xl shadow-blue-500/20">
                <Target className="w-10 h-10" />
              </div>
              <h3 className="text-7xl font-black mb-6 tracking-tighter leading-none">3X</h3>
              <p className="text-blue-400 font-black uppercase tracking-[0.3em] text-xs mb-8">User Engagement</p>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">AI-augmented UX patterns that predict user needs before they arise, creating frictionless journeys.</p>
            </div>

            <div className="p-12 border border-white/10 rounded-[4rem] bg-white/5 backdrop-blur-xl group hover:bg-indigo-600/10 hover:border-indigo-600/50 transition-all duration-500">
              <div className="w-20 h-20 rounded-[2rem] bg-indigo-600 flex items-center justify-center mb-10 shadow-2xl shadow-indigo-500/20">
                <Trophy className="w-10 h-10" />
              </div>
              <h3 className="text-7xl font-black mb-6 tracking-tighter leading-none">5X</h3>
              <p className="text-indigo-400 font-black uppercase tracking-[0.3em] text-xs mb-8">Increase in ROI</p>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">Direct dividend from process optimization, predictive accuracy, and massive operational scaling.</p>
            </div>

            <div className="p-12 border border-white/10 rounded-[4rem] bg-white/5 backdrop-blur-xl group hover:bg-emerald-600/10 hover:border-emerald-600/50 transition-all duration-500">
              <div className="w-20 h-20 rounded-[2rem] bg-emerald-600 flex items-center justify-center mb-10 shadow-2xl shadow-emerald-500/20">
                <BarChart4 className="w-10 h-10" />
              </div>
              <h3 className="text-7xl font-black mb-6 tracking-tighter leading-none">X/3</h3>
              <p className="text-emerald-400 font-black uppercase tracking-[0.3em] text-xs mb-8">Maintenance Cost</p>
              <p className="text-slate-400 font-medium leading-relaxed text-lg">Significant reduction in development lifecycle costs through automated engineering agents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 md:px-20">
        <div className="max-w-6xl mx-auto p-16 md:p-32 rounded-[5rem] bg-blue-600 text-white relative overflow-hidden text-center shadow-[0_50px_100px_-20px_rgba(59,130,246,0.3)]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">Build Your <br />Digital Legacy.</h2>
          <p className="text-2xl opacity-90 mb-16 max-w-3xl mx-auto font-light">
            Contact Devcotel today for a strategic audit of your infrastructure or a vision session for your next AI initiative.
          </p>
          <button className="px-20 py-7 bg-white text-blue-600 font-black text-[11px] uppercase tracking-[0.5em] rounded-[2rem] hover:bg-slate-50 transition-all shadow-2xl active:scale-95">
            Book a session
          </button>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;