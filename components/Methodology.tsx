import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface GridItemProps {
  title: string;
  image: string;
  className?: string;
}

const GridItem: React.FC<GridItemProps> = ({ title, image, className }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative overflow-hidden group cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
      />
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-0'}`}></div>
      
      {/* Label Reveal Animation */}
      <div className="absolute bottom-6 left-6 z-20 overflow-hidden">
        <h3 className={`text-white font-black text-xl md:text-2xl tracking-tight transition-all duration-700 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
          {title}
        </h3>
      </div>
      
      {/* Subtle persistent label if not hovered */}
      {!isHovered && (
        <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 z-10">
          <h3 className="text-white/90 font-bold text-base md:text-lg tracking-tight drop-shadow-md">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
};

export const Methodology: React.FC = () => {
  const bottomLinks = [
    { title: "Service offerings", link: "#" },
    { title: "Explore industries", link: "#" },
    { title: "Our platforms", link: "#" },
    { title: "Navigate your next", link: "#" },
  ];

  return (
    <div className="py-20 md:py-24 bg-white font-sans">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16 text-center">
        {/* Vertical Bars from Reference */}
        <div className="flex justify-center space-x-1.5 mb-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="w-[1px] h-4 md:h-6 bg-slate-200"></div>
          ))}
        </div>
        
        <h2 className="text-4xl md:text-7xl font-bold text-slate-900 mb-4 tracking-tight serif-heading">
          The next
        </h2>
        <p className="text-xl md:text-3xl font-light text-slate-500 max-w-4xl mx-auto leading-tight">
          We bring you powerful advantages to navigate your digital transformation
        </p>
      </div>

      {/* Main Grid Section */}
      <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-1 px-4">
        
        {/* Left Side: Large 'Experience' Image */}
        <GridItem 
          title="Experience"
          image="https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?auto=format&fit=crop&w=1200&q=80"
          className="aspect-square lg:aspect-auto lg:h-[600px]"
        />

        {/* Right Side: 2x2 Small Grid */}
        <div className="grid grid-cols-2 gap-1">
          <GridItem 
            title="Insight"
            image="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80"
            className="aspect-square"
          />
          <GridItem 
            title="Innovate"
            image="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80"
            className="aspect-square"
          />
          <GridItem 
            title="Accelerate"
            image="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
            className="aspect-square"
          />
          <GridItem 
            title="Assure"
            image="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=600&q=80"
            className="aspect-square"
          />
        </div>
      </div>

      {/* Bottom Navigation Section */}
      <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-12">
          {bottomLinks.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <h4 className="text-lg md:text-2xl font-bold text-slate-900 text-center mb-4 md:mb-6 px-2 leading-tight min-h-[3rem] flex items-center">
                {item.title}
              </h4>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-black flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#0056d2]">
                <Plus size={18} strokeWidth={3} className="md:w-5 md:h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
