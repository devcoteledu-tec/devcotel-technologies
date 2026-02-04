import React from 'react';
import { Target, Eye, Rocket, Shield, Users, Zap } from 'lucide-react';

const ValueCard = ({ icon, title, desc }: any) => (
  <div className="p-10 bg-white border border-slate-100 rounded-[3rem] hover:shadow-2xl transition-all duration-500 group">
    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{title}</h3>
    <p className="text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-32 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-8 bg-blue-50 px-4 py-2 rounded-full">
            <Rocket className="w-4 h-4" />
            <span>The Devcotel Story</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
            Human <br /><span className="text-blue-600">Vision.</span> <br />Machine <br /><span className="text-blue-600">Precision.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed">
            Devcotel was founded on a singular realization: traditional software development is too slow for the real world. We built a firm that uses AI to accelerate the path from problem to solution.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="p-12 bg-blue-600 rounded-[4rem] text-white">
              <Target className="w-12 h-12 mb-8 opacity-80" />
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Our Mission</h2>
              <p className="text-xl font-medium opacity-90 leading-relaxed">
                To bridge the gap between complex real-world challenges and high-performance digital solutions by leveraging the full spectrum of Artificial Intelligence.
              </p>
            </div>
            <div className="p-12 bg-slate-900 rounded-[4rem] text-white">
              <Eye className="w-12 h-12 mb-8 opacity-80" />
              <h2 className="text-4xl font-black mb-6 uppercase tracking-tighter">Our Vision</h2>
              <p className="text-xl font-medium opacity-90 leading-relaxed">
                To become the global blueprint for autonomous enterprise engineering, where software doesn't just serve users—it anticipates them.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter uppercase">Building the <br /><span className="text-blue-600">Next Frontier.</span></h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              We don't just hire developers; we architect hybrid squads. Every Devcotel engineer operates at the intersection of traditional computer science and modern machine learning.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">500+</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-black text-blue-600 mb-2">98%</div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Client Retention</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase">Our Core Values</h2>
          <div className="w-24 h-2 bg-blue-600 mx-auto mt-8 rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ValueCard icon={<Zap />} title="Velocity" desc="We move fast without breaking things, thanks to automated safety nets." />
          <ValueCard icon={<Shield />} title="Integrity" desc="Data privacy and ethical AI are baked into every line of code we ship." />
          <ValueCard icon={<Users />} title="Empathy" desc="We build for people. Technology is the tool; human experience is the goal." />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;