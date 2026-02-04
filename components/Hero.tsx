import React from 'react';
import { ViewType } from '../App';

interface HeroProps {
  onNavigate: (view: ViewType, section?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const words = [
    { text: "We", bold: false },
    { text: "leverage", bold: false },
    { text: "AI", bold: false },
    { text: "to", bold: false },
    { text: "build", bold: false },
    { text: "projects", bold: false },
    { text: "that", bold: false },
    { text: "deliver", bold: false },
    { text: "3x engagement,", bold: true },
    { text: "accelerate", bold: false },
    { text: "innovation", bold: false },
    { text: "with", bold: false },
    { text: "5x ROI,", bold: true },
    { text: "and", bold: false },
    { text: "achieve", bold: false },
    { text: "X/3 cost reduction", bold: true },
    { text: "in", bold: false },
    { text: "maintenance.", bold: false },
  ];

  return (
    <div className="relative min-h-screen bg-white flex flex-col items-center justify-center pt-24 md:pt-32 pb-20 px-4 md:px-6 overflow-hidden">
      
      {/* SCATTERED 3D ASSETS */}
      <div className="absolute top-[8%] left-[5%] md:top-[12%] md:left-[10%] w-24 md:w-48 pointer-events-none z-0">
        <div className="relative">
          <div className="absolute top-0 right-0 z-20 bg-[#69db7c] text-black text-[9px] md:text-[11px] font-bold px-2 py-0.5 rounded-full tag-shadow flex items-center transform -rotate-3 translate-x-1/2 -translate-y-1/2">
            <span>BUILD!</span>
          </div>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/060/058/543/non_2x/impressive-rare-3d-printed-object-prototype-plastic-material-no-background-with-transparent-background-free-png.png" 
            alt="3D Shape 1" 
            className="w-full h-auto object-contain animate-float opacity-70 md:opacity-100"
          />
        </div>
      </div>

      <div className="absolute top-[10%] right-[3%] md:top-[15%] md:right-[8%] w-28 md:w-56 pointer-events-none z-0">
        <img 
          src="https://static.vecteezy.com/system/resources/thumbnails/042/148/426/small/ai-generated-abstract-iridescent-cloth-simulation-free-png.png" 
          alt="3D Shape 2" 
          className="w-full h-auto object-contain animate-float-delayed opacity-60 md:opacity-90"
        />
      </div>

      <div className="absolute top-[45%] left-[-5%] md:top-[40%] md:left-[2%] w-24 md:w-52 pointer-events-none z-0">
        <div className="relative">
          <div className="absolute top-1/2 left-0 z-20 bg-[#ffe066] text-black text-[9px] md:text-[11px] font-bold px-2 py-0.5 rounded-full tag-shadow flex items-center transform -rotate-12 -translate-x-1/4">
            <span>AI REVOLUTION</span>
          </div>
          <img 
            src="https://static.vecteezy.com/system/resources/previews/049/106/929/non_2x/abstract-metallic-sculpture-with-a-transparent-background-3d-rendering-of-a-shiny-silver-object-png.png" 
            alt="3D Shape 3" 
            className="w-full h-auto object-contain animate-float-slow opacity-60 md:opacity-100"
          />
        </div>
      </div>

      <div className="absolute top-[50%] right-[-8%] md:top-[45%] md:right-[2%] w-32 md:w-64 pointer-events-none z-0">
        <div className="relative">
          <div className="absolute bottom-0 right-1/4 z-20 bg-[#f783ac] text-black text-[9px] md:text-[11px] font-bold px-2 py-0.5 rounded-full tag-shadow flex items-center transform rotate-6">
            <span>DEPLOY#</span>
          </div>
          <img 
            src="https://png.pngtree.com/png-vector/20240202/ourmid/pngtree-dodecahedron-abstract-shape-3d-illustration-png-image_11590235.png" 
            alt="3D Shape 4" 
            className="w-full h-auto object-contain animate-float opacity-50 md:opacity-100"
          />
        </div>
      </div>

      {/* CENTER CONTENT */}
      <div className="max-w-7xl text-center z-10 w-full relative">
        <h1 className="text-[3.15rem] sm:text-[4.2rem] md:text-[6.3rem] lg:text-[8.4rem] font-extrabold tracking-tighter mb-6 md:mb-10 leading-[1.05]">
          <span className="premium-animated-mantra block sm:inline">
            Automate Your
          </span>{" "}
          <span className="premium-animated-mantra block sm:inline">
            Real World Problems!
          </span>
        </h1>
        <div className="text-base sm:text-lg md:text-2xl text-gray-500 mb-8 md:mb-12 leading-relaxed font-normal max-w-4xl mx-auto flex flex-wrap justify-center gap-x-1.5 md:gap-x-2 gap-y-1">
          {words.map((word, index) => (
            <span 
              key={index} 
              className={`animate-drop-fall ${word.bold ? 'text-black font-bold' : ''}`}
              style={{ animationDelay: `${index * 40}ms` }}
            >
              {word.text}
            </span>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => onNavigate('home', 'solutions')}
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#1a1a1a] text-white font-bold rounded-2xl hover:bg-black transition-all shadow-2xl shadow-black/20 text-lg md:text-xl tracking-tight active:scale-95 focus:outline-none"
          >
            Start your journey
          </button>
          <button 
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 border-2 border-black text-black font-bold rounded-2xl hover:bg-black hover:text-white transition-all text-lg md:text-xl tracking-tight active:scale-95 focus:outline-none"
          >
            Services we offer
          </button>
        </div>
      </div>

      {/* LOGO BAR */}
      <div className="mt-20 md:mt-28 text-center w-full max-w-6xl mx-auto z-10">
        <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12">
          Empowering teams at global scale
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-30 grayscale contrast-125 px-4">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple" className="h-5 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Google_Product_Logo.svg" alt="Google" className="h-5 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Dribbble_logo.svg" alt="Dribbble" className="h-4 md:h-6" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="Slack" className="h-5 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt="Notion" className="h-5 md:h-7" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/df/Shopify_logo.svg" alt="Shopify" className="h-5 md:h-7" />
        </div>
      </div>
    </div>
  );
};