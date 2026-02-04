import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface ImpactProps {
  onNavigate: (view: ViewType) => void;
}

export const Impact: React.FC<ImpactProps> = ({ onNavigate }) => {
  const stats = [
    {
      title: "BETTER APPLICATION EXPERIENCES",
      value: "3x",
      description: "Increase in user\nengagement"
    },
    {
      title: "FASTER CYCLES OF INNOVATION",
      value: "5x",
      description: "Increase\nin ROI"
    },
    {
      title: "LOWER COST",
      value: "X/3",
      description: "Decrease in development\nand maintenance cost"
    }
  ];

  return (
    <div className="bg-[#000814] py-24 md:py-32 px-6 md:px-20 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-500/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-indigo-500/5 blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-stretch mb-20">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className={`flex-1 flex flex-col py-10 md:py-4 px-2 md:px-12 ${
                idx !== 0 ? 'border-t md:border-t-0 md:border-l border-white/20' : ''
              }`}
            >
              <h4 className="text-[10px] md:text-xs font-black tracking-[0.2em] mb-12 text-white/80">
                {stat.title}
              </h4>
              
              <div className="flex items-start space-x-6 md:space-x-8">
                <span className="text-7xl md:text-[7.5rem] font-light text-[#fef9c3] tracking-tighter leading-[0.8] font-sans">
                  {stat.value}
                </span>
                <p className="text-sm md:text-[17px] font-medium leading-[1.3] text-white/90 whitespace-pre-line pt-4 md:pt-6">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center md:justify-end border-t border-white/10 pt-12">
          <button 
            onClick={() => onNavigate('impact')}
            className="flex items-center space-x-3 group text-blue-400 hover:text-blue-300 transition-colors focus:outline-none"
          >
            <span className="text-sm font-black uppercase tracking-[0.3em]">View Detailed Case Studies</span>
            <div className="w-10 h-10 rounded-full border border-blue-400/30 flex items-center justify-center group-hover:bg-blue-400 group-hover:text-black transition-all">
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};