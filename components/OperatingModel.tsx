import React from 'react';
import { ViewType } from '../App';

interface OperatingModelProps {
  onNavigate: (view: ViewType) => void;
}

export const OperatingModel: React.FC<OperatingModelProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0076ad] relative overflow-hidden min-h-[600px] flex items-center py-16 md:py-20">
      {/* Background Decorative Vertical Bars - Precise replication of the reference layout */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[5%] top-[40%] w-[1.5%] h-[25%] bg-[#5cc8ff] opacity-40"></div>
        <div className="absolute left-[29%] top-[48%] w-[1.5%] h-[12%] bg-[#5cc8ff] opacity-40"></div>
        <div className="absolute left-[33%] top-[48%] w-[1.5%] h-[6%] bg-[#5cc8ff] opacity-40"></div>
        <div className="absolute left-[38%] top-[48%] w-[1.5%] h-[18%] bg-[#5cc8ff] opacity-40"></div>
        <div className="absolute left-[44%] top-[48%] w-[1.5%] h-[22%] bg-[#5cc8ff] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 w-full relative z-10 grid lg:grid-cols-12 gap-8 items-center">
        
        {/* Left Side: Subject Image with the iconic Blue Vertical Strip */}
        <div className="lg:col-span-6 relative h-[350px] md:h-[500px] flex items-center order-2 lg:order-1">
          {/* The main light blue vertical column behind the subject */}
          <div className="absolute left-[15%] md:left-[20%] top-[-5%] bottom-[-5%] w-[30%] md:w-[25%] bg-[#5cc8ff] z-0"></div>
          
          <div className="relative z-10 w-full flex items-center justify-center lg:justify-start">
            <div className="relative w-full max-w-[300px] md:max-w-[450px] transform -translate-x-2 md:-translate-x-4">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/041/930/971/non_2x/ai-generated-magic-butterfly-isolated-on-transparent-background-free-png.png" 
                alt="Digital Operating Model Subject" 
                className="w-full h-auto object-contain relative z-20 drop-shadow-[0_20px_40px_rgba(0,0,0,0.4)] md:drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] contrast-[1.05] brightness-[1.02]"
              />
              <div className="absolute bottom-[10%] left-0 right-0 h-3 md:h-4 bg-black/20 blur-xl rounded-full z-10 mx-auto w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Content - Exact Copy of the reference text structure */}
        <div className="lg:col-span-6 text-white pt-6 md:pt-10 lg:pt-0 order-1 lg:order-2">
          <h2 className="text-4xl md:text-[84px] font-bold mb-2 tracking-tight leading-[0.9] serif-heading">
            Digital Operating Model
          </h2>
          <p className="text-lg md:text-xl italic font-light mb-8 md:mb-12 opacity-90 tracking-wide">
            For the AI-first Enterprise
          </p>

          <div className="mb-10 md:mb-16">
            <button 
              onClick={() => onNavigate('services')}
              className="px-10 md:px-14 py-3 md:py-3.5 border-2 border-white text-white font-black text-[10px] md:text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-[#0076ad] transition-all"
            >
              Explore
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Column 1: Client Speak */}
            <div className="flex flex-col border-t border-white/20 pt-6 md:border-t-0 md:pt-0">
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-white/80 block mb-4 md:mb-6">Client Speak</span>
              <h4 className="text-[15px] md:text-[17px] font-bold leading-[1.4] mb-6 md:mb-8 pr-4">
                A transformation story of centum education to achieve faster time-to-market using mern stack and backend AI
              </h4>
              <button 
                onClick={() => window.open('https://www.claysys.com/case-studies/centum-learning/', '_blank')}
                className="flex items-center text-[11px] md:text-[12px] font-black uppercase tracking-[0.25em] hover:opacity-70 transition-opacity mt-auto"
              >
                View
              </button>
            </div>

            {/* Column 2: Client Testimonial */}
            <div className="flex flex-col border-t border-white/20 pt-6 md:border-t-0 md:pt-0">
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.25em] text-white/80 block mb-4 md:mb-6">Client Testimonial</span>
              <h4 className="text-[15px] md:text-[17px] font-bold leading-[1.4] mb-6 md:mb-8 pr-4">
                NN Life Insurance Company Partners with Devcotel for its Cloud and Agile Transformation
              </h4>
              <button 
                onClick={() => window.open('https://www.claysys.com/case-studies/nn-life-insurance/', '_blank')}
                className="flex items-center text-[11px] md:text-[12px] font-black uppercase tracking-[0.25em] hover:opacity-70 transition-opacity mt-auto"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
