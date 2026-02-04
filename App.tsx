import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { OperatingModel } from './components/OperatingModel';
import { Impact } from './components/Impact';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Methodology } from './components/Methodology';
import { Footer } from './components/Footer';
import ImpactPage from './pages/impact';
import ServicesPage from './pages/services';
import MethodsPage from './pages/methods';
import AboutPage from './pages/about';
import BlogPage from './pages/blog';
import CareersPage from './pages/careers';
import GalleryPage from './pages/gallery';
import ContactPage from './pages/contact';

// New Service Pages
import ServiceAIPage from './pages/service-ai';
import ServiceWebDevPage from './pages/service-web-dev';
import ServiceAutomationPage from './pages/service-automation';
import ServiceChatbotsPage from './pages/service-chatbots';
import ServiceCustomSoftwarePage from './pages/service-custom-software';
import ServiceAgentsPage from './pages/service-agents';

export type ViewType = 
  | 'home' | 'impact' | 'services' | 'methods' | 'about' | 'blog' | 'careers' | 'gallery' | 'contact'
  | 'service-ai' | 'service-web-dev' | 'service-automation' | 'service-chatbots' | 'service-custom-software' | 'service-agents';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const navigateTo = (view: ViewType, sectionId?: string) => {
    if (view === 'home') {
      window.location.hash = sectionId || 'home';
      setCurrentView('home');
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      const hash = sectionId ? `/${view}/${sectionId}` : `/${view}`;
      window.location.hash = hash;
      setCurrentView(view);
      
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      const views: ViewType[] = [
        'impact', 'services', 'methods', 'about', 'blog', 'careers', 'gallery', 'contact',
        'service-ai', 'service-web-dev', 'service-automation', 'service-chatbots', 'service-custom-software', 'service-agents'
      ];

      const foundView = views.find(v => hash.startsWith(`#/${v}`));
      
      if (foundView) {
        setCurrentView(foundView);
        const parts = hash.split('/');
        const sectionId = parts.length > 2 ? parts[2] : null;
        if (sectionId) {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        } else {
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      } else {
        setCurrentView('home');
        const sectionId = hash.replace('#', '');
        if (sectionId && sectionId !== 'home' && !sectionId.startsWith('/')) {
          setTimeout(() => {
            const el = document.getElementById(sectionId);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 50);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const mainContent = useMemo(() => {
    switch (currentView) {
      case 'impact': return <ImpactPage />;
      case 'services': return <ServicesPage onNavigate={navigateTo} />;
      case 'methods': return <MethodsPage />;
      case 'about': return <AboutPage />;
      case 'blog': return <BlogPage onNavigate={navigateTo} />;
      case 'careers': return <CareersPage />;
      case 'gallery': return <GalleryPage />;
      case 'contact': return <ContactPage />;
      case 'service-ai': return <ServiceAIPage />;
      case 'service-web-dev': return <ServiceWebDevPage />;
      case 'service-automation': return <ServiceAutomationPage />;
      case 'service-chatbots': return <ServiceChatbotsPage />;
      case 'service-custom-software': return <ServiceCustomSoftwarePage />;
      case 'service-agents': return <ServiceAgentsPage />;
      default:
        return (
          <>
            <section id="home"><Hero onNavigate={navigateTo} /></section>
            <section id="solutions" className="scroll-mt-20"><OperatingModel /></section>
            <section id="impact" className="scroll-mt-20"><Impact onNavigate={navigateTo} /></section>
            <section id="stats" className="scroll-mt-20"><Stats /></section>
            <section id="services" className="scroll-mt-20"><Services /></section>
            <section id="methods-preview" className="scroll-mt-20"><Methodology /></section>
          </>
        );
    }
  }, [currentView, navigateTo]);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-100 selection:text-blue-900 transition-colors duration-500">
      <Header onNavigate={navigateTo} currentView={currentView} />
      <main className="flex-grow">
        {mainContent}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;