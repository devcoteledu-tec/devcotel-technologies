
import React from 'react';

export const OperatingModel: React.FC = () => {
  return (
    <div className="bg-[#0076ad] relative overflow-hidden min-h-[600px] flex items-center py-20">
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
        <div className="lg:col-span-6 relative h-[500px] flex items-center">
          {/* The main light blue vertical column behind the subject */}
          <div className="absolute left-[20%] top-[-10%] bottom-[-10%] w-[25%] bg-[#5cc8ff] z-0"></div>
          
          <div className="relative z-10 w-full flex items-center justify-center lg:justify-start">
            {/* 
               Subject image: Using the provided puppy URL. 
               To handle the "dots" (fake transparency checkerboard), we apply a brightness/contrast 
               tweak and a subtle shadow that helps separate the subject if it's a cutout.
            */}
            <div className="relative w-full max-w-[450px] transform -translate-x-4">
              <img 
                src="https://static.vecteezy.com/system/resources/previews/041/930/971/non_2x/ai-generated-magic-butterfly-isolated-on-transparent-background-free-png.png" 
                alt="Digital Operating Model Subject" 
                className="w-full h-auto object-contain relative z-20 drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] contrast-[1.05] brightness-[1.02]"
              />
              
              {/* Optional: Add a subtle 'branch' or 'base' element to ground the puppy like the ants on a branch */}
              <div className="absolute bottom-[10%] left-0 right-0 h-4 bg-black/20 blur-xl rounded-full z-10 mx-auto w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Right Side: Content - Exact Copy of the reference text structure */}
        <div className="lg:col-span-6 text-white pt-10 lg:pt-0">
          <h2 className="text-6xl md:text-[84px] font-bold mb-2 tracking-tight leading-[0.9] serif-heading">
            Digital Operating Model
          </h2>
          <p className="text-xl italic font-light mb-12 opacity-90 tracking-wide">
            For the AI-first Enterprise
          </p>

          <div className="mb-16">
            <button className="px-14 py-3.5 border-2 border-white text-white font-black text-xs uppercase tracking-[0.25em] hover:bg-white hover:text-[#0076ad] transition-all">
              Explore
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Column 1: Client Speak */}
            <div className="flex flex-col">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/80 block mb-6">Client Speak</span>
              <h4 className="text-[17px] font-bold leading-[1.4] mb-8 pr-4">
                A transformation story of BASF Agricultural Solutions to achieve faster time-to-market using DevOps and DataOps
              </h4>
              <button className="flex items-center text-[12px] font-black uppercase tracking-[0.25em] hover:opacity-70 transition-opacity mt-auto">
                View
              </button>
            </div>

            {/* Column 2: Client Testimonial */}
            <div className="flex flex-col">
              <span className="text-[11px] font-black uppercase tracking-[0.25em] text-white/80 block mb-6">Client Testimonial</span>
              <h4 className="text-[17px] font-bold leading-[1.4] mb-8 pr-4">
                NN Life Insurance Company Partners with Devcotel for its Cloud and Agile Transformation
              </h4>
              <button className="flex items-center text-[12px] font-black uppercase tracking-[0.25em] hover:opacity-70 transition-opacity mt-auto">
                View
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
