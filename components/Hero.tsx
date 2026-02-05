import React from 'react';
import { ViewType } from '../App';
import { ArrowRight, Zap, Target, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onNavigate: (view: ViewType, section?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const impactMetrics = [
    {
      value: "3x",
      label: "User Engagement",
      sub: "Better experiences",
      icon: <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-500" />,
      delay: "100ms"
    },
    {
      value: "5x",
      label: "Increase in ROI",
      sub: "Innovation cycles",
      icon: <Target className="w-4 h-4 md:w-5 md:h-5 text-indigo-500" />,
      delay: "200ms"
    },
    {
      value: "X/3",
      label: "Maintenance Cost",
      sub: "Lower dev expense",
      icon: <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-emerald-500" />,
      delay: "300ms"
    }
  ];

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-28 md:pt-32 pb-20 px-4 md:px-6 overflow-hidden">
      
      {/* SCATTERED 3D ASSETS - 2 LARGER ASSETS WITH ROTATION */}
      <div className="absolute top-[8%] left-[2%] md:left-[5%] w-32 md:w-96 pointer-events-none z-0">
        <div className="relative">
          <div className="absolute top-0 right-0 z-20 bg-[#69db7c] text-[8px] md:text-[11px] font-bold px-2 py-0.5 rounded-full tag-shadow flex items-center transform -rotate-3 translate-x-1/4 -translate-y-1/2">
            <span>BUILD!</span>
          </div>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/060/058/543/non_2x/impressive-rare-3d-printed-object-prototype-plastic-material-no-background-with-transparent-background-free-png.png" 
            alt="3D Shape 1" 
            className="w-full h-auto object-contain animate-spin-slow opacity-40 md:opacity-100"
          />
        </div>
      </div>

      <div className="absolute bottom-[10%] right-[2%] md:right-[5%] w-40 md:w-[512px] pointer-events-none z-0">
        <div className="relative">
          <div className="absolute bottom-0 right-1/4 z-20 bg-[#f783ac] text-[8px] md:text-[11px] font-bold px-2 py-0.5 rounded-full tag-shadow flex items-center transform rotate-6">
            <span>DEPLOY#</span>
          </div>
          <img 
            src="https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-dodecahedron-abstract-shape-3d-illustration-png-image_11590235.png" 
            alt="3D Shape 4" 
            className="w-full h-auto object-contain animate-spin-slow opacity-30 md:opacity-100"
          />
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-7xl text-center z-10 w-full relative">
        <h1 className="text-[2.8rem] sm:text-[4.2rem] md:text-[6.3rem] lg:text-[8.4rem] font-extrabold tracking-tighter mb-8 md:mb-12 leading-[1.05] px-2">
          <span className="premium-animated-mantra block sm:inline">
            Automate Your
          </span>{" "}
          <span className="premium-animated-mantra block sm:inline">
            Real World Problems!
          </span>
        </h1>

        <div className="mb-12 md:mb-20 max-w-5xl mx-auto px-2 md:px-4">
          <p className="text-slate-400 font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-xs mb-8 md:mb-10 animate-drop-fall">
            We leverage AI to build projects that deliver:
          </p>
          
          <div className="grid grid-cols-3 divide-x divide-slate-100">
            {impactMetrics.map((metric, i) => (
              <div 
                key={i} 
                className="px-1 md:px-8 flex flex-col items-center animate-drop-fall"
                style={{ animationDelay: metric.delay }}
              >
                <div className="mb-2 md:mb-4 opacity-40 scale-75 md:scale-100">{metric.icon}</div>
                <div className="text-2xl sm:text-4xl md:text-7xl font-black text-slate-900 tracking-tighter mb-1 md:mb-2">
                  {metric.value}
                </div>
                <div className="text-[6px] sm:text-[8px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] text-slate-900 mb-0.5 leading-tight">
                  {metric.label}
                </div>
                <div className="hidden sm:block text-[6px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest italic leading-tight">
                  {metric.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 px-6">
          <button 
            onClick={() => onNavigate('home', 'solutions')}
            className="group w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 bg-[#1a1a1a] text-white font-black rounded-2xl hover:bg-black transition-all shadow-2xl shadow-black/20 text-[10px] md:text-sm uppercase tracking-[0.3em] active:scale-95 flex items-center justify-center space-x-4"
          >
            <span>Start your journey</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-10 md:px-14 py-5 md:py-6 border-2 border-slate-100 text-slate-900 font-black rounded-2xl hover:border-slate-900 transition-all text-[10px] md:text-sm uppercase tracking-[0.3em] active:scale-95"
          >
            Services we offer
          </button>
        </div>
      </div>

      {/* LOGO BAR */}
      <div className="mt-20 md:mt-32 text-center w-full max-w-6xl mx-auto z-10">
        <p className="text-[8px] md:text-[9px] font-black text-slate-400 uppercase tracking-[0.3em] mb-8 md:mb-10">
          Empowering teams at global scale
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-20 opacity-30 grayscale contrast-125 px-8">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-4 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Google_Product_Logo.svg" alt="Google" className="h-4 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Dribbble_logo.svg" alt="Dribbble" className="h-3 md:h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="h-4 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="h-4 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Shopify_logo.svg" alt="Shopify" className="h-4 md:h-7" />
        </div>
      </div>
    </div>
  );
};
