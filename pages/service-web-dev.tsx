import React from 'react';
import { Globe, Code, Layers, Smartphone, CheckCircle2 } from 'lucide-react';
import { ServiceContactForm } from '../components/ServiceContactForm';

const ServiceWebDevPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-32 px-6 md:px-20 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-600 font-black tracking-[0.3em] uppercase text-[10px] mb-8 bg-blue-50 px-4 py-2 rounded-full border border-blue-100">
            <Globe className="w-4 h-4" />
            <span>Digital Platforms</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 leading-[0.85] tracking-tighter mb-10 uppercase">
            Web App <br /><span className="text-blue-600">Engineering.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-500 max-w-3xl font-light leading-relaxed">
            We don't just build websites; we engineer resilient digital ecosystems. Our stack is optimized for performance, scalability, and an uncompromising user experience.
          </p>
        </div>
      </section>

      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {[
            {
              title: "SaaS Platforms",
              desc: "Complex multi-tenant architectures built for global enterprise scale.",
              icon: <Layers className="w-8 h-8 text-blue-600" />
            },
            {
              title: "Next.js Excellence",
              desc: "Zero-latency, SEO-optimized web applications with edge computing.",
              icon: <Code className="w-8 h-8 text-indigo-600" />
            },
            {
              title: "PWA & Mobile",
              desc: "High-performance mobile-first experiences that work offline and on any device.",
              icon: <Smartphone className="w-8 h-8 text-emerald-600" />
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

      <section className="py-32 px-6 md:px-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="rounded-[4rem] overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80" alt="Web Dev" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase">Modern <br/>Stack <span className="text-white/70">Reliability</span></h2>
            <div className="space-y-8">
              {[
                "Microservices Architecture",
                "Cloud-Native Serverless Deployment",
                "Real-time WebSocket Integration",
                "Enterprise-Grade Security Headers"
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
          <ServiceContactForm defaultService="Web App Development" />
        </div>
      </section>
    </div>
  );
};

export default ServiceWebDevPage;