
import React from 'react';
import { Cpu, Globe, Zap, MessageSquare, Code, Users, BarChart3, ShieldCheck, Rocket } from 'lucide-react';
import { ServiceItem, BenefitItem } from './types';

export const SOLUTIONS: ServiceItem[] = [
  {
    id: 'enterprise-ai',
    title: 'Enterprise AI Strategy',
    description: 'Developing high-level roadmaps for AI adoption that align with corporate KPIs and long-term digital transformation.',
    icon: <BarChart3 className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 'app-modernization',
    title: 'Application Modernization',
    description: 'Transforming legacy systems into cloud-native, AI-augmented architectures for the modern web.',
    icon: <Rocket className="w-8 h-8 text-indigo-500" />,
  },
  {
    id: 'cyber-ai',
    title: 'Secure AI Integration',
    description: 'Implementing robust security protocols and governance for large-scale AI deployment across global teams.',
    icon: <ShieldCheck className="w-8 h-8 text-emerald-500" />,
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-services',
    title: 'Custom AI Models',
    description: 'Tailored machine learning solutions ranging from computer vision to predictive analytics.',
    icon: <Cpu className="w-7 h-7 text-blue-400" />,
  },
  {
    id: 'web-dev',
    title: 'Full-Stack Platforms',
    description: 'Engineering resilient SaaS platforms and enterprise portals with zero-latency UX.',
    icon: <Globe className="w-7 h-7 text-indigo-400" />,
  },
  {
    id: 'workflow',
    title: 'Cognitive Automation',
    description: 'Smart RPA tools that interpret unstructured data to automate complex office workflows.',
    icon: <Zap className="w-7 h-7 text-purple-400" />,
  },
  {
    id: 'chatbots',
    title: 'Conversational AI',
    description: 'Deployment of sophisticated RAG-based systems for knowledge management and support.',
    icon: <MessageSquare className="w-7 h-7 text-blue-500" />,
  },
  {
    id: 'custom-software',
    title: 'Dedicated Engineering',
    description: 'Augmenting your team with elite software engineers specialized in AI and distributed systems.',
    icon: <Code className="w-7 h-7 text-indigo-500" />,
  },
  {
    id: 'agents',
    title: 'Autonomous Agents',
    description: 'Designing task-specific AI agents that operate independently within your secure cloud.',
    icon: <Users className="w-7 h-7 text-purple-500" />,
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    label: 'EXPERIENCE VELOCITY',
    value: '3x',
    subtext: 'Accelerated user engagement through intuitive AI interaction layers.'
  },
  {
    label: 'OPERATIONAL ROI',
    value: '5x',
    subtext: 'Direct return on investment via process optimization and predictive maintenance.'
  },
  {
    label: 'CAPEX EFFICIENCY',
    value: 'X/3',
    subtext: 'Significant reduction in development lifecycle costs and infra overhead.'
  }
];
