import React from 'react';
import { Twitter, Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { ViewType } from '../App';

interface FooterProps {
  onNavigate: (view: ViewType, section?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-slate-50 pt-32 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          
          <div className="md:col-span-5">
            <div className="flex items-center space-x-3 mb-8">
              <img 
                src="https://png.pngtree.com/element_our/png/20180912/flash-thunder-bolt-logo-png_91803.jpg" 
                alt="Devcotel Logo" 
                className="w-10 h-10 object-cover rounded-xl shadow-lg shadow-blue-200/50"
              />
              <span className="text-2xl font-black tracking-tighter text-slate-900 uppercase">DEVCOTEL</span>
            </div>
            <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md mb-10">
              Leading the transition to autonomous enterprise systems. Building the software that builds the future.
            </p>
            <div className="flex space-x-6">
              {[Twitter, Linkedin, Github, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-blue-600 hover:border-blue-400/30 transition-all shadow-sm">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] mono text-slate-900 uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('home', 'home')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate('home', 'solutions')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Solutions</button></li>
              <li><button onClick={() => onNavigate('methods')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Methodology</button></li>
              <li><button className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Careers</button></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[10px] mono text-slate-900 uppercase tracking-[0.3em] mb-8">Intelligence</h4>
            <ul className="space-y-4">
              <li><button onClick={() => onNavigate('services')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">AI Services</button></li>
              <li><button onClick={() => onNavigate('impact')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Impact & ROI</button></li>
              <li><button className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Integrations</button></li>
              <li><button className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors">Security</button></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
               <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-4">Strategic Updates</h4>
               <p className="text-xs text-slate-500 mb-6 leading-relaxed">Join 5,000+ executives receiving our weekly AI engineering briefing.</p>
               <div className="relative">
                 <input 
                  type="email" 
                  placeholder="Corporate Email" 
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-4 px-5 text-sm focus:outline-none focus:border-blue-600 transition-colors"
                 />
                 <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-blue-600 hover:text-blue-800 transition-colors">
                   <ArrowUp size={20} className="rotate-45" />
                 </button>
               </div>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-[10px] mono text-slate-400 uppercase tracking-[0.2em]">
          <p>© 2024 DEVCOTEL INC. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy Architecture</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Legal Framework</a>
            <button onClick={scrollToTop} className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors focus:outline-none">
              <span>Back to Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};