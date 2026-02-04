import React from 'react';
import { Brain, Cpu, Database, Eye, CheckCircle2 } from 'lucide-react';
import { ServiceContactForm } from '../components/ServiceContactForm';

const ServiceAIPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-32 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-8 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <Brain className="w-4 h-4" />
            <span>Core Intelligence</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
            Artificial <br /><span className="text-blue-600">Intelligence.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Beyond the hype, we build robust AI architectures that solve non-trivial business challenges. From predictive modeling to deep neural networks, we turn data into high-velocity decisions.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {[
            {
              title: "Machine Learning",
              desc: "Predictive analytics and pattern recognition that anticipates market shifts.",
              icon: <Cpu className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Computer Vision",
              desc: "Visual intelligence systems for automation, security, and quality control.",
              icon: <Eye className="w-8 h-8 text-indigo-600" />
            },
            {
              title: "Big Data Synthesis",
              desc: "Turning petabytes of raw data into clean, actionable executive insights.",
              icon: <Database className="w-8 h-8 text-emerald-600" />
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

      <section className="py-32 px-6 md:px-20 bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">The AI <br/><span className="text-blue-600">Edge</span></h2>
            <div className="space-y-8">
              {[
                "Custom Neural Network Architectures",
                "Scalable GPU-Optimized Infrastructure",
                "Ethical AI Governance Frameworks",
                "Real-time Inference Pipelines"
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <CheckCircle2 className="text-blue-600 w-6 h-6" />
                  <span className="text-lg font-bold text-slate-300 uppercase tracking-widest text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[3rem] overflow-hidden shadow-2xl bg-blue-600/10 border border-white/10 p-1">
            <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80" alt="AI Tech" className="w-full h-full object-cover rounded-[2.8rem]" />
          </div>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <ServiceContactForm defaultService="Artificial Intelligence" />
        </div>
      </section>
    </div>
  );
};

export default ServiceAIPage;