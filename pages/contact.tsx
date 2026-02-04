
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle, ArrowRight } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Artificial Intelligence',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email components
    const recipient = "devcoteledu@gmail.com";
    const subject = encodeURIComponent(`Devcotel Inquiry: ${formState.service} from ${formState.name}`);
    const body = encodeURIComponent(
      `New Project Inquiry from Devcotel Web Portal\n\n` +
      `-------------------------------------------\n` +
      `Full Name: ${formState.name}\n` +
      `Email: ${formState.email}\n` +
      `Phone: ${formState.phone}\n` +
      `Service: ${formState.service}\n` +
      `-------------------------------------------\n\n` +
      `Problem Space / Message:\n` +
      `${formState.message}\n\n` +
      `-------------------------------------------\n` +
      `Sent via Devcotel Digital Solutions`
    );

    // Trigger the mailto link
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    // Show success state
    setIsSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-48 pb-24 px-6 md:px-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-1/2 h-full bg-blue-600/10 blur-[150px] rounded-full"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-3 text-blue-400 font-black tracking-[0.3em] uppercase text-[10px] mb-8 bg-blue-500/10 px-4 py-2 rounded-full border border-blue-500/20">
            <MessageSquare className="w-4 h-4" />
            <span>Consultation Desk</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 uppercase leading-[0.9]">
            Let's <br /> <span className="text-blue-500 italic">Connect.</span>
          </h1>
          <p className="text-xl md:text-3xl text-slate-400 max-w-2xl font-light leading-relaxed">
            Whether you have a specific project or just want to explore the possibilities of AI, our strategy lab is ready to map your vision to reality.
          </p>
        </div>
      </section>

      {/* Contact Content Area */}
      <section className="py-32 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-24">
          
          {/* Form Side */}
          <div className="lg:col-span-7">
            {!isSubmitted ? (
              <div className="bg-slate-50 p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                
                <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase tracking-tighter">Start a Conversation</h2>
                <form className="space-y-8 relative z-10" onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input 
                        required
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Corporate Email</label>
                      <input 
                        required
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formState.phone}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all" 
                        placeholder="+1 (555) 000-0000" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Service of Interest</label>
                      <select 
                        name="service"
                        value={formState.service}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                      >
                        <option>Artificial Intelligence</option>
                        <option>Web App Development</option>
                        <option>Workflow Automation</option>
                        <option>AI Chatbots (RAG)</option>
                        <option>Custom Software</option>
                        <option>Personalized Agents</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Your Problem Space</label>
                    <textarea 
                      required
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      rows={5} 
                      className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all resize-none" 
                      placeholder="Describe the real-world challenge you're looking to automate or solve..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-2xl shadow-slate-900/10 flex items-center justify-center space-x-4 active:scale-[0.98]"
                  >
                    <span>Send Proposal</span>
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-slate-50 p-16 md:p-32 rounded-[4rem] border border-slate-100 shadow-sm text-center flex flex-col items-center justify-center">
                <div className="w-24 h-24 bg-blue-600 text-white rounded-full flex items-center justify-center mb-10 animate-bounce shadow-2xl shadow-blue-200">
                  <CheckCircle size={48} />
                </div>
                <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Inquiry Initiated</h2>
                <p className="text-slate-500 font-medium text-lg leading-relaxed max-w-md mx-auto mb-10">
                  Your details have been mapped to our primary desk. Your email client should have opened to finalize the transmission to <strong>devcoteledu@gmail.com</strong>.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="flex items-center space-x-2 text-blue-600 font-black uppercase tracking-widest text-xs hover:text-blue-800 transition-all"
                >
                  <span>Send Another Message</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            )}
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-16 flex flex-col justify-center">
            <div>
              <div className="inline-flex items-center space-x-2 text-blue-600 font-black tracking-widest uppercase text-[10px] mb-8">
                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping"></div>
                <span>Reach Out Directly</span>
              </div>
              <div className="space-y-10">
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm"><Mail size={24} /></div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Inquiries</div>
                    <div className="text-xl font-black text-slate-900 group-hover:text-blue-600 transition-colors">devcoteledu@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 shadow-sm"><Phone size={24} /></div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Call HQ</div>
                    <div className="text-xl font-black text-slate-900 group-hover:text-indigo-600 transition-colors">+1 (888) DEV-COTEL</div>
                  </div>
                </div>
                <div className="flex items-start space-x-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 shadow-sm"><MapPin size={24} /></div>
                  <div>
                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Global Base</div>
                    <div className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">Silicon Valley, CA, USA</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-12 bg-blue-600 rounded-[3.5rem] text-white relative overflow-hidden shadow-2xl shadow-blue-200">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <MessageSquare size={120} />
              </div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter relative z-10">Virtual Strategist</h4>
              <p className="font-medium opacity-90 leading-relaxed mb-8 relative z-10">Our AI Concierge is active 24/7 on the home page lab to provide instant architectural roadmaps.</p>
              <button className="px-10 py-4 bg-white text-blue-600 font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-slate-50 transition-all relative z-10 active:scale-95 shadow-xl">
                Enter Strategy Lab
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
