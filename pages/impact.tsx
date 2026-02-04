
import React from 'react';
import { ArrowUpRight, CheckCircle2, BarChart, Globe, Zap, Users, Target } from 'lucide-react';

const CaseStudyCard = ({ title, industry, result, description, image }: any) => (
  <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:shadow-2xl transition-all duration-500">
    <div className="h-64 overflow-hidden relative">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
        {industry}
      </div>
    </div>
    <div className="p-8">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl font-bold text-slate-900 leading-tight">{title}</h3>
        <ArrowUpRight className="text-blue-600 w-6 h-6 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
      <p className="text-slate-500 mb-8 leading-relaxed">
        {description}
      </p>
      <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Outcome</span>
        <span className="text-xl font-black text-blue-600">{result}</span>
      </div>
    </div>
  </div>
);

const ImpactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-100/50 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 text-blue-600 font-black tracking-widest uppercase text-xs mb-6">
            <BarChart className="w-4 h-4" />
            <span>Measurable Excellence</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 leading-[0.9] tracking-tighter mb-8 max-w-4xl">
            Driving ROI Through <br /><span className="text-blue-600 italic">Intelligent</span> Engineering.
          </h1>
          <p className="text-xl md:text-2xl text-slate-500 max-w-2xl font-medium leading-relaxed">
            Devcotel redefines the economics of software. We leverage AI to automate build cycles, and we are on a mission to deliver <span className="text-blue-600 font-black">500 transformative AI projects</span> across the globe.
          </p>
        </div>
      </section>

      {/* Deep Stats Section */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { label: 'Capital Saved Per Client', value: '₹45K+', icon: <Zap className="text-yellow-500" /> },
            { label: 'Strategic Active Partners', value: '3+', icon: <Users className="text-blue-500" /> },
            { label: 'Mission Project Target', value: '500', icon: <Target className="text-emerald-500" /> }
          ].map((stat, i) => (
            <div key={i} className="p-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-8">
                {stat.icon}
              </div>
              <div className="text-4xl font-black text-slate-900 mb-2">{stat.value}</div>
              <div className="text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* The Devcotel Difference (Team & Methodology) */}
      <section className="py-24 px-6 md:px-20 bg-blue-50">
        <div className="max-w-7xl mx-auto">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                 <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tight">How we find the <br/><span className="text-blue-600">Perfect Team</span>.</h2>
                 <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Traditional firms spend months recruiting. We use <strong>Cognitive Talent Matching</strong> to assemble the ideal squad in 48 hours. Our mission to build 500 projects starts with these elite engineering clusters.
                 </p>
                 <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                       <div className="bg-white p-3 rounded-xl shadow-sm"><Zap className="text-blue-600 w-6 h-6"/></div>
                       <div>
                          <h4 className="font-bold text-slate-900 text-lg">Instant Squad Assembly</h4>
                          <p className="text-slate-500">AI-driven matching based on project complexity and technical stack.</p>
                       </div>
                    </div>
                    <div className="flex items-start space-x-4">
                       <div className="bg-white p-3 rounded-xl shadow-sm"><Users className="text-indigo-600 w-6 h-6"/></div>
                       <div>
                          <h4 className="font-bold text-slate-900 text-lg">Hybrid Intelligent Teams</h4>
                          <p className="text-slate-500">Every engineer is paired with a Devcotel AI Agent, effectively doubling throughput.</p>
                       </div>
                    </div>
                 </div>
              </div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1522071823991-b9671f9d7f1f?auto=format&fit=crop&w=1200&q=80" alt="Team matching" className="w-full h-full object-cover" />
              </div>
           </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Global Success</h2>
              <p className="text-lg text-slate-500 font-medium">Real results from our AI-first development methodology.</p>
            </div>
            <button className="px-8 py-4 bg-black text-white rounded-2xl font-bold text-sm tracking-tight hover:bg-slate-800 transition-all">
              All Case Studies
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CaseStudyCard 
              title="Global Logistics Optimization"
              industry="Supply Chain"
              result="42% Fuel Savings"
              description="Implemented autonomous routing agents that reduced idle time and optimized delivery sequences across 4 continents."
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
            />
            <CaseStudyCard 
              title="Predictive Health Analytics"
              industry="Healthcare"
              result="3.2x Patient Outcome"
              description="Developed a machine learning model that predicts patient readmission risks with 94% accuracy, allowing early intervention."
              image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
            />
            <CaseStudyCard 
              title="Algorithmic Retail Pricing"
              industry="E-Commerce"
              result="18% Revenue Lift"
              description="Real-time dynamic pricing engine that processes 2M+ market data points daily to maximize margins without losing volume."
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 md:px-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-black mb-8 leading-tight tracking-tighter">Ready to Scale?</h2>
          <p className="text-xl md:text-2xl font-medium opacity-90 mb-12 max-w-3xl mx-auto">
            Schedule a session with our Strategy Lab and join our mission to build the future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="w-full sm:w-auto px-12 py-5 bg-white text-blue-600 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-slate-100 transition-all shadow-xl">
              Book a Consultation
            </button>
            <button className="w-full sm:w-auto px-12 py-5 bg-blue-700 text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-blue-800 transition-all border border-white/20">
              Download Mission Roadmap
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ImpactPage;
