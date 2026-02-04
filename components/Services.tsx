
import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <div className="relative bg-[#8b2d88] overflow-hidden min-h-[800px] flex items-center py-24">
      {/* Background Decorative Rectangles */}
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none opacity-20">
        <div className="absolute right-[10%] top-[10%] w-32 h-[80%] bg-white/20"></div>
        <div className="absolute right-[25%] top-[40%] w-12 h-[60%] bg-white/10"></div>
        <div className="absolute right-[5%] bottom-[10%] w-16 h-[30%] bg-white/30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 flex flex-col lg:flex-row items-center">
        
        {/* Left Content Side */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[0.95] max-w-xl">
            Empowering Talent <br /> Transformations
          </h2>
          
          <p className="text-xl md:text-2xl font-light italic mb-12 opacity-90 max-w-lg">
            Embrace the talent revolution to remain relevant in the future.
          </p>

          <div className="mb-20">
            <button className="px-12 py-3 border-2 border-white text-white font-black text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-[#8b2d88] transition-all">
              Explore
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12 border-t border-white/20 pt-8 max-w-2xl">
            <div>
              <span className="text-[11px] font-black uppercase tracking-[0.3em] opacity-80 block mb-6">Insights</span>
              <h4 className="text-xl font-bold leading-tight mb-6">
                Improving productivity with <br /> digital field workforce management
              </h4>
              <a href="#" className="flex items-center text-sm font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                View <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>

            <div>
              <span className="hidden md:block text-[11px] font-black uppercase tracking-[0.3em] opacity-0 block mb-6">.</span>
              <h4 className="text-xl font-bold leading-tight mb-6">
                Developing talent for our digital <br /> future
              </h4>
              <a href="#" className="flex items-center text-sm font-black uppercase tracking-[0.2em] hover:opacity-70 transition-opacity">
                View <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Visual Side (Single Image Composition) */}
        <div className="w-full lg:w-1/2 mt-24 lg:mt-0 flex justify-end relative">
          <div className="relative w-full max-w-lg aspect-[4/5] z-20">
            <div className="relative w-full h-full overflow-hidden rounded-[2.5rem] shadow-2xl border-4 border-white/10 group">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/035/801/847/large_2x/ai-generated-a-dog-and-cat-standing-on-a-purple-background-free-photo.jpg" 
                alt="Talent Transformation" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#8b2d88]/60 via-transparent to-transparent"></div>
              
              {/* Floating Brand Badge */}
              <div className="absolute bottom-8 left-8 p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20">
                 <div className="text-[10px] font-black uppercase tracking-widest text-white/70 mb-1">DEVCOTEL</div>
                 <div className="text-sm font-bold text-white"></div>
              </div>
            </div>
            
            {/* Background Decorative element */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none"></div>
          </div>
        </div>

      </div>
    </div>
  );
};
