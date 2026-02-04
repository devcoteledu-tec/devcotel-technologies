import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { ViewType } from '../App';

interface HeaderProps {
  onNavigate: (view: ViewType, section?: string) => void;
  currentView: ViewType;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileCompanyOpen, setIsMobileCompanyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, view: ViewType, section?: string) => {
    e.preventDefault();
    onNavigate(view, section);
    setIsServicesOpen(false);
    setIsCompanyOpen(false);
    setIsMobileMenuOpen(false);
  };

  const serviceOptions = [
    { name: "Artificial Intelligence", id: "service-ai" },
    { name: "Web App Development", id: "service-web-dev" },
    { name: "Workflow Automation", id: "service-automation" },
    { name: "AI Chatbots (RAG)", id: "service-chatbots" },
    { name: "Custom Software", id: "service-custom-software" },
    { name: "Personalized Agents", id: "service-agents" }
  ];

  const companyOptions = [
    { name: "About Us", id: "about" },
    { name: "Community", id: "blog" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact Us", id: "contact" }
  ];

  const isServiceView = currentView.startsWith('service-');

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 md:px-20 flex items-center justify-between ${
          scrolled 
            ? 'h-16 bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-b border-gray-100' 
            : 'h-24 bg-transparent'
        }`}
      >
        <button 
          onClick={(e) => handleNav(e, 'home', 'home')}
          className="flex items-center space-x-3 group focus:outline-none"
        >
          <div className="relative">
            <div className="bg-slate-950 text-white px-3 py-1 rounded-lg font-black text-xs tracking-widest transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 shadow-lg shadow-slate-900/10">10X</div>
          </div>
          <span className="font-black text-xl tracking-tighter text-slate-900 uppercase">Devcotel</span>
        </button>

        <nav className="hidden md:flex items-center space-x-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-500">
          <button 
            onClick={(e) => handleNav(e, 'home', 'solutions')}
            className="hover:text-blue-600 transition-colors focus:outline-none py-2 relative group"
          >
            Solutions
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
          </button>
          
          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button 
              onClick={(e) => handleNav(e, 'services')}
              className={`flex items-center space-x-1 transition-colors focus:outline-none py-2 relative group ${isServiceView || currentView === 'services' ? 'text-blue-600' : 'hover:text-blue-600'}`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180 text-blue-600' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${isServiceView || currentView === 'services' || isServicesOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-64 transition-all duration-500 ${isServicesOpen ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 -translate-y-4 pointer-events-none scale-95'}`}>
              <div className="bg-white border border-gray-100 shadow-[0_20px_60px_rgb(0,0,0,0.1)] rounded-[2rem] overflow-hidden p-2 ring-1 ring-black/5">
                <div className="grid gap-1">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={(e) => handleNav(e, opt.id as ViewType)}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                    >
                      <div className="text-[10px] font-black text-slate-900 group-hover/item:text-blue-600 transition-colors uppercase tracking-widest">{opt.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
          >
            <button 
              className={`flex items-center space-x-1 transition-colors focus:outline-none py-2 relative group ${['about', 'blog', 'gallery', 'contact'].includes(currentView) ? 'text-blue-600' : 'hover:text-blue-600'}`}
            >
              <span>Company</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180 text-blue-600' : ''}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${['about', 'blog', 'gallery', 'contact'].includes(currentView) || isCompanyOpen ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 w-56 transition-all duration-500 ${isCompanyOpen ? 'opacity-100 translate-y-0 pointer-events-auto scale-100' : 'opacity-0 -translate-y-4 pointer-events-none scale-95'}`}>
              <div className="bg-white border border-gray-100 shadow-[0_20px_60px_rgb(0,0,0,0.1)] rounded-[2rem] overflow-hidden p-2 ring-1 ring-black/5">
                <div className="grid gap-1">
                  {companyOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={(e) => handleNav(e, opt.id as ViewType)}
                      className="w-full text-left px-5 py-3 rounded-xl hover:bg-slate-50 transition-all group/item"
                    >
                      <div className="text-[10px] font-black text-slate-900 group-hover/item:text-blue-600 transition-colors uppercase tracking-widest">{opt.name}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <button 
            onClick={(e) => handleNav(e, 'careers')}
            className={`hover:text-blue-600 transition-colors focus:outline-none py-2 relative group ${currentView === 'careers' ? 'text-blue-600' : ''}`}
          >
            Careers
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${currentView === 'careers' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <button 
            onClick={(e) => handleNav(e, 'methods')}
            className={`hover:text-blue-600 transition-colors focus:outline-none py-2 relative group ${currentView === 'methods' ? 'text-blue-600' : ''}`}
          >
            Methods
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${currentView === 'methods' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
          
          <button 
            onClick={(e) => handleNav(e, 'impact')}
            className={`hover:text-blue-600 transition-colors focus:outline-none py-2 relative group ${currentView === 'impact' ? 'text-blue-600' : ''}`}
          >
            Impact
            <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${currentView === 'impact' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
          </button>
        </nav>

        <div className="flex items-center space-x-6">
          <button className="hidden sm:flex items-center space-x-2 px-8 py-2.5 bg-slate-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-500/20 transition-all active:scale-95">
            <span>Login</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-900 hover:bg-slate-100 transition-colors focus:outline-none relative z-[110]"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[90] bg-white transition-all duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.05),transparent)] pointer-events-none"></div>
        
        <div className="flex flex-col h-full pt-32 px-10 relative z-10 overflow-y-auto">
          <div className="space-y-6 pb-20">
            <button 
              onClick={(e) => handleNav(e, 'home', 'solutions')}
              className={`text-4xl font-black text-slate-900 uppercase tracking-tighter text-left block w-full transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Solutions
            </button>

            <div className={`space-y-4 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <button 
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="text-4xl font-black text-slate-900 uppercase tracking-tighter text-left flex items-center justify-between w-full group"
              >
                Services
                <ChevronDown className={`w-8 h-8 text-blue-600 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid grid-cols-1 gap-4 pl-4 border-l-2 border-slate-100 transition-all duration-300 ${isMobileServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {serviceOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={(e) => handleNav(e, opt.id as ViewType)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-left hover:text-blue-600 transition-colors"
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            </div>

            <div className={`space-y-4 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
              <button 
                onClick={() => setIsMobileCompanyOpen(!isMobileCompanyOpen)}
                className="text-4xl font-black text-slate-900 uppercase tracking-tighter text-left flex items-center justify-between w-full group"
              >
                Company
                <ChevronDown className={`w-8 h-8 text-blue-600 transition-transform ${isMobileCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className={`grid grid-cols-1 gap-4 pl-4 border-l-2 border-slate-100 transition-all duration-300 ${isMobileCompanyOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                {companyOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={(e) => handleNav(e, opt.id as ViewType)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 text-left hover:text-blue-600 transition-colors"
                  >
                    {opt.name}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={(e) => handleNav(e, 'careers')}
              className={`text-4xl font-black text-slate-900 uppercase tracking-tighter text-left block w-full transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: '400ms' }}
            >
              Careers
            </button>

            <button 
              onClick={(e) => handleNav(e, 'methods')}
              className={`text-4xl font-black text-slate-900 uppercase tracking-tighter text-left block w-full transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: '500ms' }}
            >
              Methods
            </button>

            <button 
              onClick={(e) => handleNav(e, 'impact')}
              className={`text-4xl font-black text-slate-900 uppercase tracking-tighter text-left block w-full transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              style={{ transitionDelay: '600ms' }}
            >
              Impact
            </button>
          </div>

          <div className={`mt-auto pb-16 transition-all duration-700 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
            <button className="w-full py-6 bg-slate-950 text-white rounded-[2rem] text-sm font-black uppercase tracking-[0.4em] shadow-2xl shadow-slate-900/20 active:scale-95 transition-transform flex items-center justify-center space-x-4">
              <span>Login to Console</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};