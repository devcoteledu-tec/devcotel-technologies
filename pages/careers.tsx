import React, { useEffect, useState } from 'react';
import { 
  Briefcase, 
  Heart, 
  Coffee, 
  Globe, 
  ArrowUpRight, 
  Zap,
  Star,
  MessageSquare,
  Share2,
  Users,
  Info,
  Loader2,
  Search,
  X,
  Tag,
  ExternalLink,
  MessageCircle,
  Database,
  ArrowRight,
  TrendingUp,
  Clock,
  Award,
  Target,
  ShoppingBag,
  Shield,
  TrendingUp as TrendingUpIcon,
  CheckCircle,
  Cpu,
  Sparkles
} from 'lucide-react';
import { fetchCourses } from '../services/supabaseClient';
import { Course, User } from '../types';

const getTypeColorClasses = (type?: string): string => {
  switch (type?.toLowerCase()) {
    case 'course': return 'bg-blue-600 text-white';
    case 'bootcamp': return 'bg-indigo-600 text-white';
    case 'webinar': return 'bg-emerald-600 text-white';
    case 'youtube': 
    case 'youtube video': return 'bg-red-600 text-white';
    default: return 'bg-slate-600 text-white';
  }
};

const CourseCard: React.FC<{
    course: Course;
    onLike: (courseId: number) => void;
    currentUser: User | null;
    promptLogin: () => void;
}> = ({ course, onLike, currentUser, promptLogin }) => {
    
    const isLiked = (() => {
        if (!currentUser) return false;
        const userLikedCoursesKey = `likedCourses_${currentUser.id}`;
        const likedCourses = JSON.parse(localStorage.getItem(userLikedCoursesKey) || '[]');
        return likedCourses.includes(course.id);
    })();

    const handleLikeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        if (!currentUser) {
            promptLogin();
            return;
        }
        if (!isLiked) {
            onLike(course.id);
        }
    };
    
    const handleEnrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!currentUser) {
            e.preventDefault();
            promptLogin();
        }
    };

    const badgeClasses = getTypeColorClasses(course.type);

    return (
        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 group">
            <div className="relative h-56 overflow-hidden">
                <div className={`absolute top-6 left-6 ${badgeClasses} text-[10px] font-black px-3 py-1.5 rounded-lg shadow-xl uppercase tracking-[0.2em] z-20`}>
                   {course.type}
                </div>
                
                <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800';
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-center mb-6">
                  <div className="inline-flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-xl text-[10px] font-black text-slate-500 uppercase tracking-widest">
                      <Tag size={12} className="text-slate-400" />
                      {course.category}
                  </div>
                  <div className="text-sm font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {course.price}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight tracking-tight min-h-[3.5rem] uppercase">
                    {course.title}
                </h3>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-sm font-black text-white uppercase shadow-lg shadow-blue-200">
                    {course.instructor.charAt(0)}
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block leading-none mb-1">Instructor</span>
                    <span className="text-sm font-bold text-slate-700">{course.instructor}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 py-6 border-y border-slate-50 mb-6">
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Rating</span>
                        <div className="flex items-center gap-1 text-sm font-black text-amber-500">
                            <Star size={14} fill="currentColor" /> {course.rating}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Enrolled</span>
                        <div className="flex items-center gap-1 text-sm font-black text-slate-700">
                            <Users size={14} className="text-slate-400" /> {course.students}
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-6 mb-8 px-2">
                    <button 
                        className={`flex items-center gap-2 transition-all ${isLiked ? 'text-rose-500 scale-110' : 'text-slate-400 hover:text-rose-500 hover:scale-110'}`}
                        onClick={handleLikeClick}
                        disabled={isLiked}
                    >
                        <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
                        <span className="text-xs font-black">{course.likes}</span>
                    </button>
                    <button className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
                        <MessageSquare size={20} />
                    </button>
                    <button className="text-slate-400 hover:text-blue-600 transition-all hover:scale-110">
                        <Share2 size={20} />
                    </button>
                </div>

                <div className="grid grid-cols-1 gap-3 mt-auto">
                    <a 
                        href={course.enroll_link} 
                        className="flex items-center justify-center gap-2 py-5 px-6 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-200 active:scale-95"
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={handleEnrollClick}
                    >
                        Enroll Now <ExternalLink size={14} />
                    </a>
                    <a 
                        href={course.community_link} 
                        className="flex items-center justify-center gap-2 py-5 px-6 bg-white text-slate-900 rounded-2xl font-black text-[11px] uppercase tracking-[0.2em] border-2 border-slate-100 hover:border-slate-900 transition-all active:scale-95"
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Community Group <MessageCircle size={14} />
                    </a>
                </div>
            </div>
        </div>
    );
};

const CareersPage: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const partners = [
    { name: 'PW Skills', logo: 'https://jobs.pwskills.com/images/PWSkills-main.png' },
    { name: 'Scaler', logo: 'https://scaler-blog-prod-wp-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2020/07/22113930/Scaler-HT-1-.png' },
    { name: 'Guvi', logo: 'https://www.kgkite.ac.in/demo/wp-content/uploads/2020/02/GUVI-Artboard-%E2%80%93-4.png' },
    { name: 'Entri', logo: 'https://yt3.googleusercontent.com/Z0ecUtYCdXdB54CDq28KlMnpG7e5UgYS36Dh6Jb-yiAiqk16vjDJsa-SIRVlH3jZW8-ne0BaUzc=s900-c-k-c0x00ffffff-no-rj' },
    { name: 'Unacademy', logo: 'https://www.generalatlantic.com/wp-content/uploads/2020/02/logo.png' },
    { name: 'Coursera', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Coursera_logo.svg' },
    { name: 'Udemy', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Udemy_logo.svg' },
    { name: 'Simplilearn', logo: 'https://mma.prnewswire.com/media/1100016/Simplilearn_Logo.jpg?p=twitter' },
  ];

  const tabs = ['All', 'Courses', 'Bootcamps', 'Webinars', 'YouTube Videos'];
  
  const [currentUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem('devcotel_user');
    return savedUser ? JSON.parse(savedUser) : { id: 1, name: "Demo User", email: "demo@devcotel.com" };
  });

  const mockCourses: Course[] = [
    {
      id: 1,
      title: 'Online Data Analytics Course - Become a Certified Data Analyst',
      instructor: 'Entri Elevate Team',
      image: 'https://cdn-images-1.medium.com/max/1200/1*6X3Hl0p9UeL4U3uC1-fCvw.png', 
      price: '₹8,999',
      category: 'Data analytics',
      type: 'course',
      rating: 4.8,
      students: 5,
      likes: 5,
      community_link: '#',
      enroll_link: '#'
    },
    {
      id: 2,
      title: 'Transform raw data into actionable insights and build predictive models',
      instructor: 'ASAP Kerala',
      image: 'https://images.unsplash.com/photo-1518186239717-2e9b69d7744a?auto=format&fit=crop&q=80&w=800',
      price: '₹12,500',
      category: 'MACHINE LEARNING',
      type: 'course',
      rating: 4.9,
      students: 3,
      likes: 3,
      community_link: '#',
      enroll_link: '#'
    },
    {
      id: 3,
      title: 'Defend against modern threats. Become an expert in securing networks...',
      instructor: 'Techolas Team',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800',
      price: '₹15,000',
      category: 'Cyber Security',
      type: 'course',
      rating: 4.4,
      students: 5,
      likes: 1,
      community_link: '#',
      enroll_link: '#'
    }
  ];

  useEffect(() => {
    const loadCourses = async () => {
      try {
        const data = await fetchCourses();
        if (data && data.length > 0) {
            const mapped = data.map((c: any) => ({
                id: Number(c.id),
                type: c.type || 'course',
                image: c.image || 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
                category: c.category || 'General',
                title: c.title || 'Untitled Learning Resource',
                instructor: c.instructor || 'Industry Expert',
                rating: Number(c.rating) || 0,
                price: c.price || 'Contact for Price',
                students: Number(c.students) || 0,
                likes: Number(c.likes) || 0,
                community_link: c.community_link || '#',
                enroll_link: c.enroll_link || '#',
                created_at: c.created_at
            }));
            setCourses(mapped);
        } else {
            setCourses(mockCourses);
        }
      } catch (err) {
        console.error('Failed to load courses:', err);
        setCourses(mockCourses);
      } finally {
        setLoading(false);
      }
    };
    loadCourses();
  }, []);

  const handleLike = (courseId: number) => {
    if (!currentUser) return;
    setCourses(prev => prev.map(c => 
        c.id === courseId ? { ...c, likes: (c.likes || 0) + 1 } : c
    ));
    const key = `likedCourses_${currentUser.id}`;
    const liked = JSON.parse(localStorage.getItem(key) || '[]');
    if (!liked.includes(courseId)) {
        liked.push(courseId);
        localStorage.setItem(key, JSON.stringify(liked));
    }
  };

  const promptLogin = () => {
    alert("Join the Devcotel community for just ₹299 to unlock exclusive group buying offers!");
  };

  const filteredCourses = courses.filter(c => {
      let passTab = true;
      if (activeTab !== 'All') {
          const type = c.type?.toLowerCase();
          if (activeTab === 'Courses') passTab = type === 'course';
          else if (activeTab === 'Bootcamps') passTab = type === 'bootcamp';
          else if (activeTab === 'Webinars') passTab = type === 'webinar';
          else if (activeTab === 'YouTube Videos') passTab = type === 'youtube' || type === 'youtube video';
      }

      let passSearch = true;
      if (searchTerm.trim() !== '') {
          const query = searchTerm.toLowerCase();
          passSearch = 
            c.title.toLowerCase().includes(query) || 
            c.category.toLowerCase().includes(query) || 
            c.instructor.toLowerCase().includes(query);
      }

      return passTab && passSearch;
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="pt-48 pb-32 px-6 md:px-20 bg-blue-600 text-white relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)] opacity-50"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-tight uppercase">Join the <br />10x Force.</h1>
          <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl mx-auto">
            We are looking for engineers, designers, and visionaries who aren't afraid to let AI augment their brilliance.
          </p>
        </div>
      </section>

      {/* Learn-to-Earn Model Sections */}
      <section className="py-32 px-6 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-black tracking-widest uppercase text-xs mb-6">
              <TrendingUp className="w-4 h-4" />
              <span>The Next-Gen Workforce Engine</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase leading-none">Learn. <span className="text-blue-600">Earn.</span> Dominate.</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:bg-blue-50 transition-colors duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <ShoppingBag className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-black text-slate-900 mb-4 uppercase tracking-tighter">Group Buying Power</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Secure up to 40% off premium industry courses from our partners through community-led group buying collective.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:bg-blue-50 transition-colors duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-indigo-600" />
              </div>
              <h4 className="font-black text-slate-900 mb-4 uppercase tracking-tighter">Skill Alignment</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">We curate specific learning paths because we need these exact skills to build our upcoming mission-critical projects.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:bg-blue-50 transition-colors duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h4 className="font-black text-slate-900 mb-4 uppercase tracking-tighter">Hourly Paid Lab</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Certified learners are grouped into real-time project squads and paid hourly for their development contributions.</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[3rem] text-center hover:bg-blue-50 transition-colors duration-500 group">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-sm group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-amber-600" />
              </div>
              <h4 className="font-black text-slate-900 mb-4 uppercase tracking-tighter">Direct Placement</h4>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">Top performers in our squads transition to full-time engineering roles within Devcotel's global project ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Upskill Section (Replicating Reference Image) */}
      <section className="py-32 px-4 md:px-20 bg-[#0a0f1d] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-2 border border-white/20 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-10 text-white/70">
            <Globe className="w-3.5 h-3.5" />
            <span>Global Education Ecosystem</span>
          </div>
          
          <h2 className="text-5xl md:text-[5.5rem] font-black mb-8 tracking-tighter leading-none">
            Upskill with <span className="text-indigo-500">Industry Giants.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-medium mb-20">
            We've forged direct institutional bridges with India's most recognized learning platforms to deliver <span className="text-white font-black">exclusive group-buy rates</span> to every student.
          </p>

          <div className="marquee-container overflow-hidden relative h-64 -mx-4 md:-mx-20">
            <div className="animate-marquee-ltr flex items-center gap-6 px-10">
              {[...partners, ...partners].map((partner, i) => (
                <div key={i} className="flex-shrink-0 w-64 md:w-80 h-40 md:h-48 bg-white rounded-[2rem] md:rounded-[2.5rem] flex items-center justify-center p-8 md:p-12 shadow-2xl transition-transform hover:scale-105 duration-500">
                  <img 
                    src={partner.logo} 
                    alt={partner.name} 
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-16 text-center">
             <p className="text-xs text-slate-500 font-medium italic">"We offer these because we need people with these specific skills to build our mission-critical 500 projects."</p>
          </div>
        </div>
      </section>

      {/* Precision Discovery Section (Yellow Background with Large Rotating Asset) */}
      <section className="py-32 px-6 md:px-20 bg-[#FFD700] relative overflow-hidden">
        {/* Faded Geometrical Design Background Elements */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
            <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] border-[40px] border-slate-900/10 rounded-full"></div>
            <div className="absolute bottom-[20%] left-[-5%] w-[300px] h-[300px] bg-slate-900/10 rotate-45"></div>
            <div className="absolute top-[30%] left-[40%] w-[100px] h-[400px] bg-slate-900/5 -skew-x-12"></div>
            <div className="absolute top-[10%] left-[10%] w-[10%] h-[10%] border-8 border-slate-900/10 rounded-3xl"></div>
            <div className="absolute bottom-0 right-[20%] w-[2px] h-full bg-slate-900/5"></div>
            <div className="absolute bottom-[10%] right-[30%] w-[2px] h-1/2 bg-slate-900/5"></div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Content */}
          <div className="relative z-10">
            <div className="inline-flex items-center space-x-2 bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-lg shadow-black/10">
              <Users className="w-4 h-4" />
              <span>Verified Social Activity</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]">
              Precision Discovery. <br />
              <span className="italic opacity-80">Grab & Scroll</span> <br />
              Growth.
            </h2>
            
            <p className="text-xl text-slate-900/70 font-medium leading-relaxed mb-12 max-w-xl">
              Witness real growth in real-time. Our community feed is tangible—<span className="text-slate-900 font-bold">grab the feed to the right</span> to explore what your peers are building and saving today.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center space-y-8 sm:space-y-0 sm:space-x-12">
              <a 
                href="https://devcotel-chatbot.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center space-x-4 hover:bg-black transition-all shadow-xl active:scale-95"
              >
                <span>Start Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              
              <div className="flex items-center space-x-6">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg animate-pulse-scale border border-black/5">
                   <Sparkles className="w-7 h-7 text-slate-900" />
                </div>
                <div>
                  <div className="text-lg font-black text-slate-900 tracking-tight">5k+ Students</div>
                  <div className="text-[10px] font-black text-slate-900/60 uppercase tracking-widest">Active Members</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Mockup (Large 2X Rotating Asset) */}
          <div className="relative w-full flex items-center justify-center min-h-[500px] z-10">
             <div className="relative w-96 h-96 md:w-[512px] md:h-[512px] animate-spin-slow">
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/060/058/543/non_2x/impressive-rare-3d-printed-object-prototype-plastic-material-no-background-with-transparent-background-free-png.png" 
                  alt="Large Rotating Abstract Asset" 
                  className="w-full h-full object-contain filter drop-shadow-[0_40px_80px_rgba(0,0,0,0.25)] scale-110"
                />
             </div>
          </div>

        </div>
      </section>

      {/* Database Driven Catalog Section */}
      <section className="py-32 px-6 md:px-20 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 text-blue-600 font-black tracking-widest uppercase text-xs mb-6">
              <Database className="w-4 h-4" />
              <span>Cognitive Talent Development</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-none">
              Curated <span className="text-blue-600">Growth</span> Catalog
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
              Every entry synced directly from our secure Supabase database for 100% data integrity. High-demand tech learning groups.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16 relative group">
            <div className="absolute inset-y-0 left-0 pl-8 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-slate-400 group-focus-within:text-blue-600 transition-colors" />
            </div>
            <input
              type="text"
              placeholder="Search our database for skills, instructors, or categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-2 border-slate-100 py-6 pl-16 pr-12 rounded-[2rem] shadow-sm focus:outline-none focus:border-blue-600 focus:ring-8 focus:ring-blue-100 transition-all font-bold text-slate-700 placeholder:text-slate-400"
            />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-6 flex items-center text-slate-400 hover:text-slate-600"
              >
                <X className="h-6 h-6" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-20">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 rounded-2xl text-[10px] uppercase tracking-widest font-black transition-all border-2 ${
                  activeTab === tab 
                  ? 'bg-slate-900 text-white border-slate-900 shadow-2xl scale-105' 
                  : 'bg-white text-slate-400 border-slate-100 hover:border-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {loading ? (
            <div className="flex flex-col justify-center items-center py-40 gap-6">
              <Loader2 className="animate-spin text-blue-600" size={56} />
              <p className="text-slate-400 font-black uppercase tracking-[0.4em] text-xs">Syncing with Supabase Cloud...</p>
            </div>
          ) : (
            <>
              {filteredCourses.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                  {filteredCourses.map((course) => (
                    <CourseCard 
                      key={course.id} 
                      course={course} 
                      onLike={handleLike} 
                      currentUser={currentUser}
                      promptLogin={promptLogin}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-40 bg-white rounded-[4rem] border-2 border-dashed border-slate-200">
                    <Info className="mx-auto text-slate-200 mb-6" size={80} />
                    <h3 className="text-3xl font-black text-slate-900 uppercase tracking-tighter">No database records</h3>
                    <p className="text-slate-500 mt-4 font-medium max-w-md mx-auto">We couldn't find any listings matching your current filter selection or search query.</p>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default CareersPage;