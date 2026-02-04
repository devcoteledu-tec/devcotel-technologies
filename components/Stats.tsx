
import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Monitor, Calendar, Database } from 'lucide-react';

export const Stats: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how much of the section is visible
      // 0 when top is at bottom of screen, 1 when bottom is at top
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);
      
      if (progress > 0.1) {
        setIsAnimated(true);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    {
      title: "24x7 AI ACCESS",
      desc: "Monitor your systems anywhere anytime, either using your mobile, desktop or laptop. Track AI performance metrics and view development logs offline or stream live deployment data directly.",
      icon: (
        <div className="relative w-full h-48 flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-black/5 rounded-full scale-75 opacity-50"></div>
          <div className="relative z-10 flex flex-col items-center text-[#1e293b]">
             <div className="bg-white p-6 rounded-3xl shadow-xl border border-yellow-200">
                <Monitor className="w-20 h-20 text-[#0056d2]" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "AI POWERED ROADMAPS",
      desc: "Now plan your innovation cycles with the help of our AI-Powered Project Timetable. Get a fully customized development schedule that helps you launch better and be ready for global market shifts.",
      icon: (
        <div className="relative w-full h-48 flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-black/5 rounded-full scale-75 opacity-50"></div>
          <div className="relative z-10">
             <div className="bg-white p-6 rounded-3xl shadow-xl border border-yellow-200">
                <Calendar className="w-20 h-20 text-indigo-600" />
             </div>
          </div>
        </div>
      )
    },
    {
      title: "INTELLIGENT KNOWLEDGE BASE",
      desc: "Get every little information you need on all modules through our RAG-enabled systems, live technical sessions, and automated documentation logs. High-speed retrieval for elite teams.",
      icon: (
        <div className="relative w-full h-48 flex items-center justify-center mb-8">
          <div className="absolute inset-0 bg-black/5 rounded-full scale-75 opacity-50"></div>
          <div className="relative z-10">
             <div className="bg-white p-6 rounded-3xl shadow-xl border border-yellow-200">
                <Database className="w-20 h-20 text-blue-700" />
             </div>
          </div>
        </div>
      )
    }
  ];

  // Base radius from scroll (0 to 150vw)
  const baseRadius = scrollProgress * 150;
  // Interaction bonus (expand more if mouse is moving in)
  const interactionScale = isHovering ? 1.05 : 1;
  const finalRadius = `${baseRadius * interactionScale}vw`;

  return (
    <div 
      ref={sectionRef} 
      className="py-48 bg-[#FFD700] relative overflow-hidden text-slate-900"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      
      {/* Cinematic White Circle - Interactive & Scroll Responsive */}
      <div 
        className="absolute rounded-full bg-white shadow-[0_0_150px_rgba(255,255,255,1)] pointer-events-none flex items-center justify-center transition-transform duration-[150ms] ease-out origin-center"
        style={{ 
          width: finalRadius, 
          height: finalRadius,
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          zIndex: 5,
          opacity: Math.min(1, scrollProgress * 2)
        }}
      >
        {/* "DEV" Staggered Lettering inside the expanding circle */}
        <div className="flex justify-center items-center space-x-6 select-none scale-50 md:scale-100">
          <span className={`text-[#FFD700] text-9xl md:text-[18rem] font-black tracking-tighter transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[200ms] transform drop-shadow-2xl ${isAnimated ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
            D
          </span>
          <span className={`text-[#FFD700] text-9xl md:text-[18rem] font-black tracking-tighter transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[400ms] transform drop-shadow-2xl ${isAnimated ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
            E
          </span>
          <span className={`text-[#FFD700] text-9xl md:text-[18rem] font-black tracking-tighter transition-all duration-1000 ease-[cubic-bezier(0.34,1.56,0.64,1)] delay-[600ms] transform drop-shadow-2xl ${isAnimated ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 translate-y-20'}`}>
            V
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className={`text-center mb-32 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-5xl md:text-7xl font-black text-[#1e293b] tracking-tight uppercase drop-shadow-sm mix-blend-multiply">
            Features of Devcotel Engineering
          </h2>
          <div className="w-32 h-2.5 bg-slate-900 mx-auto mt-8 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24 mb-16">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center text-center group transition-all duration-1000 relative`}
              style={{ 
                transitionDelay: `${800 + (idx * 200)}ms`,
                opacity: isAnimated ? 1 : 0,
                transform: isAnimated ? 'translateY(0)' : 'translateY(60px)'
              }}
            >
              <div className="transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-black text-[#1e293b] uppercase tracking-wider mb-6 group-hover:text-blue-700 transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#1e293b]/80 font-bold leading-relaxed text-lg max-w-sm px-4">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        <div className={`flex justify-center mt-20 transition-all duration-1000 delay-[1400ms] ${isAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
          <button className="px-16 py-5 bg-slate-900 hover:bg-black text-white font-black text-sm uppercase tracking-[0.4em] rounded-full flex items-center transition-all shadow-2xl hover:shadow-black/20 transform hover:-translate-y-2 active:scale-95">
            Platform Details
            <ChevronRight className="ml-4 w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};
