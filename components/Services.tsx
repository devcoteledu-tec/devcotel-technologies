import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="relative bg-[#8b2d88] overflow-hidden min-h-[700px] md:min-h-[800px] flex items-center py-20 md:py-24">
      {/* Background Decorative Rectangles */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-20">
        <div className="absolute right-[10%] top-[10%] w-32 h-[80%] bg-white/20"></div>
        <div className="absolute right-[25%] top-[40%] w-12 h-[60%] bg-white/10"></div>
        <div className="absolute right-[5%] bottom-[10%] w-16 h-[30%] bg-white/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6 md:mb-8 leading-[0.95] max-w-xl">
            Empowering Talent <br /> Transformations
          </h2>
          
          <p className="text-lg md:text-2xl font-light italic mb-10 md:mb-12 opacity-90 max-w-lg">
            Embrace the talent revolution to remain relevant in the future.
          </p>

          <div className="mb-16 md:mb-20">
            <button className="px-10 md:px-12 py-3 md:py-3.5 border-2 border-white text-white font-black text-xs md:text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#8b2d88] transition-all">
              Explore
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 border-t border-white/20 pt-8 max-w-2xl">
            <div>
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] opacity-80 block mb-4 md:mb-6">Insights</span>
              <h4 className="text-lg md:text-xl font-bold leading-tight mb-4 md:mb-6">
                Improving productivity with <br className="hidden md:block" /> digital field workforce management
              </h4>
              <a href="#" className="flex items-center text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                View <ArrowRight className="ml-2 w-3.5 md:w-4 h-3.5 md:h-4" />
              </a>
            </div>

            <div className="border-t border-white/10 pt-10 md:border-t-0 md:pt-0">
              <span className="hidden md:block text-[11px] font-black uppercase tracking-[0.3em] opacity-0 mb-6">.</span>
              <h4 className="text-lg md:text-xl font-bold leading-tight mb-4 md:mb-6">
                Developing talent for our digital <br className="hidden md:block" /> future
              </h4>
              <a href="#" className="flex items-center text-xs md:text-sm font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                View <ArrowRight className="ml-2 w-3.5 md:w-4 h-3.5 md:h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual Side (Single Image Composition) */}
        <div className="w-full lg:w-1/2 mt-16 md:mt-24 lg:mt-0 flex justify-center lg:justify-end relative">
          <div className="relative w-full max-w-[320px] md:max-w-lg aspect-[4/5] z-20">
            <div className="relative w-full h-full overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-4 border-white/10 group">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/035/801/847/large_2x/ai-generated-a-dog-and-cat-standing-on-a-purple-background-free-photo.jpg" 
                alt="Talent Transformation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8b2d88]/60 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 p-3 md:p-4 bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/20">
                 <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">DEVCOTEL</div>
                 <div className="text-xs md:text-sm font-bold text-white">Impact Series</div>
              </div>
            </div>
            
            <div className="absolute -top-10 -right-10 md:-top-12 md:-right-12 w-48 md:w-64 h-48 md:h-64 bg-white/5 rounded-full blur-[60px] md:blur-[80px] pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  );
};
