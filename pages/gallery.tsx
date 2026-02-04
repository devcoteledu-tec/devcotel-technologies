import React from 'react';
import { Camera, Image as ImageIcon } from 'lucide-react';

const GalleryItem = ({ image, title, size }: any) => (
  <div className={`relative overflow-hidden group cursor-pointer rounded-[2.5rem] shadow-xl ${size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}`}>
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
    <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
      <div className="text-[10px] font-black text-blue-400 uppercase tracking-widest mb-2">Devcotel Moments</div>
      <h3 className="text-2xl font-black text-white uppercase tracking-tighter leading-tight">{title}</h3>
    </div>
  </div>
);

const GalleryPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-48 pb-20 px-6 md:px-20 bg-slate-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 text-blue-600 font-black tracking-widest uppercase text-xs mb-8">
            <Camera className="w-4 h-4" />
            <span>Visualizing Impact</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8 uppercase">Impact <br /> <span className="text-blue-600 italic">Gallery.</span></h1>
        </div>
      </section>

      {/* Grid */}
      <section className="py-24 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <GalleryItem 
            image="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
            title="Strategic Team Planning" 
            size="large"
          />
          <GalleryItem 
            image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
            title="Global Headquarters" 
          />
          <GalleryItem 
            image="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80" 
            title="Innovation Lab" 
          />
          <GalleryItem 
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" 
            title="Coding Marathon" 
          />
          <GalleryItem 
            image="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" 
            title="Server Architecture" 
          />
          <GalleryItem 
            image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" 
            title="Collaborative Design" 
            size="large"
          />
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;