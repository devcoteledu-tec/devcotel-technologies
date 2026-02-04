import React from 'react';
import { GitBranch, Users, Zap, Shield, Search, Terminal, ArrowRight, Layout } from 'lucide-react';

const StepCard = ({ number, title, desc, icon }: any) => (
  <div className="relative p-10 bg-white border border-slate-100 rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-500 group">
    <div className="absolute -top-6 left-10 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-200">
      {number}
    </div>
    <div className="mb-8 w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">
      {desc}
    </p>
  </div>
);

const MethodsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 md:px-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-600/10 blur-[120px] rounded-full"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 text-blue-400 font-black tracking-[0.3em] uppercase text-xs mb-8">
            <GitBranch className="w-4 h-4" />
            <span>The Devcotel Blueprint</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
            Engineering <br /> <span className="text-blue-500">Intelligent</span> <br /> Momentum.
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 max-w-3xl font-light leading-snug">
            Our method is designed for speed, but built for permanence. We combine <strong>Cognitive Talent Matching</strong> with <strong>AI-Augmented Development</strong> to ship in weeks, not months.
          </p>
        </div>
      </section>

      {/* Talent Sourcing Section */}
      <section className="py-32 px-6 md:px-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">
                Cognitive <br /><span className="text-blue-600">Talent Matching</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-10 font-medium">
                Traditional recruiting is a bottleneck. We find the ideal team for your specific project using a high-dimensional analysis of engineer performance, codebase contributions, and problem-solving styles.
              </p>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-blue-600 shadow-sm"><Search size={20} /></div>
                  <span className="font-bold text-slate-700">Deep-Skill Traceability</span>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm"><Users size={20} /></div>
                  <span className="font-bold text-slate-700">Hybrid Squad Synthesis</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80" alt="Team meeting" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-blue-600 text-white p-10 rounded-[3rem] shadow-xl max-w-xs">
                <div className="text-4xl font-black mb-2">48h</div>
                <div className="text-sm font-bold uppercase tracking-widest opacity-80">Average team assembly time</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4-Step Build Cycle */}
      <section className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">OUR BUILD CYCLE</h2>
            <div className="w-24 h-2 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StepCard 
              number="01"
              title="Discovery"
              desc="We define the business bottleneck and map the technical terrain using our AI Audit framework."
              icon={<Search className="w-8 h-8" />}
            />
            <StepCard 
              number="02"
              title="Synthesis"
              desc="Rapid prototyping where AI agents generate base architectures for human engineers to refine."
              icon={<Terminal className="w-8 h-8" />}
            />
            <StepCard 
              number="03"
              title="Acceleration"
              desc="Massive parallel development cycles powered by automated testing and continuous integration."
              icon={<Zap className="w-8 h-8" />}
            />
            <StepCard 
              number="04"
              title="Governance"
              desc="Deployment with multi-layered security checks and performance monitoring agents."
              icon={<Shield className="w-8 h-8" />}
            />
          </div>
        </div>
      </section>

      {/* Interactive Feature: The Engine Room */}
      <section className="py-32 px-6 md:px-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="relative rounded-[3rem] bg-slate-900 p-2 shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" alt="Tech" className="rounded-[2.8rem] w-full h-[500px] object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center mb-6 mx-auto shadow-2xl cursor-pointer hover:scale-110 transition-transform">
                    <Layout className="text-white w-10 h-10" />
                  </div>
                  <span className="text-white font-black uppercase tracking-[0.4em] text-xs">Explore Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">THE INFRASTRUCTURE</h2>
            <p className="text-lg text-slate-500 mb-10 leading-relaxed">
              Our projects sit on a foundation of proprietary Devcotel tooling that automates dev-ops, security patching, and scaling.
            </p>
            <ul className="space-y-6">
              {[
                "Self-Healing Server Clusters",
                "Automated Penetration Testing",
                "Cognitive Load Balancers",
                "Predictive Infra Scaling"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-4">
                  <ArrowRight className="text-blue-600 w-5 h-5" />
                  <span className="font-bold text-slate-800 uppercase tracking-widest text-xs">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 md:px-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-tight uppercase">Build Smarter. <br /> Build Faster.</h2>
          <button className="px-16 py-6 bg-blue-600 hover:bg-blue-500 text-white font-black text-sm uppercase tracking-[0.4em] rounded-full transition-all shadow-2xl shadow-blue-500/20 active:scale-95">
            Discuss Your Method
          </button>
        </div>
      </section>
    </div>
  );
};

export default MethodsPage;