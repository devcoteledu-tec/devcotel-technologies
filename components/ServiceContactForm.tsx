import React, { useState } from 'react';
import { Send, CheckCircle, ArrowRight, MessageSquare } from 'lucide-react';

interface ServiceContactFormProps {
  defaultService: string;
}

export const ServiceContactForm: React.FC<ServiceContactFormProps> = ({ defaultService }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const recipient = "devcoteledu@gmail.com";
    const subject = encodeURIComponent(`Inquiry: ${formState.service} - ${formState.name}`);
    const body = encodeURIComponent(
      `Service Inquiry: ${formState.service}\n` +
      `-------------------------------------------\n` +
      `Name: ${formState.name}\n` +
      `Email: ${formState.email}\n` +
      `Phone: ${formState.phone}\n` +
      `-------------------------------------------\n\n` +
      `Details:\n${formState.message}\n\n` +
      `Sent from Devcotel ${defaultService} Page`
    );

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-white p-12 md:p-24 rounded-[3.5rem] border border-slate-100 shadow-sm text-center">
        <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mb-8 mx-auto animate-bounce shadow-2xl shadow-blue-200">
          <CheckCircle size={40} />
        </div>
        <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tighter">Inquiry Prepared</h3>
        <p className="text-slate-500 font-medium mb-10 max-w-md mx-auto">
          We've mapped your requirements. Your email client should now be open to finalize the send to <strong>devcoteledu@gmail.com</strong>.
        </p>
        <button 
          onClick={() => setIsSubmitted(false)}
          className="text-blue-600 font-black uppercase tracking-widest text-[10px] flex items-center justify-center space-x-2 mx-auto"
        >
          <span>Start Over</span>
          <ArrowRight size={14} />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 p-8 md:p-16 rounded-[4rem] border border-slate-100 shadow-sm relative overflow-hidden">
      <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
        <MessageSquare size={160} />
      </div>
      
      <div className="relative z-10">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tighter uppercase">Initiate Your <br/><span className="text-blue-600">Project.</span></h2>
          <p className="text-slate-500 font-medium max-w-md">Our strategy lab will review your requirements and provide a feasibility roadmap within 24 hours.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              required
              type="text" 
              name="name"
              placeholder="Full Name"
              value={formState.name}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
            />
            <input 
              required
              type="email" 
              name="email"
              placeholder="Corporate Email"
              value={formState.email}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number"
              value={formState.phone}
              onChange={handleChange}
              className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all"
            />
            <select 
              name="service"
              value={formState.service}
              onChange={handleChange}
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
          <textarea 
            required
            name="message"
            placeholder="Describe your real-world problem or vision..."
            value={formState.message}
            onChange={handleChange}
            rows={4}
            className="w-full bg-white border border-slate-200 rounded-2xl p-5 text-sm focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition-all resize-none"
          ></textarea>
          
          <button 
            type="submit"
            className="w-full py-6 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-[0.4em] hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center space-x-4 active:scale-95"
          >
            <span>Submit to Lab</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};