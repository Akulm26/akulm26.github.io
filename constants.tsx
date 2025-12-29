
import { Project, Capability, Step, Principle } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cerebro-ai',
    title: 'Cerebro AI',
    headline: 'Your second brain, searchable',
    type: 'AI Productivity Concept',
    description: 'Designed an AI-powered personal knowledge assistant that captures, organizes, and resurfaces information across notes, bookmarks, and conversations.',
    tags: ['AI/ML', '0→1', 'Consumer Productivity'],
    ctaText: 'View Concept →',
    isFeatured: true,
  },
  {
    id: 'leaklock',
    title: 'LeakLock',
    headline: 'Invisible money tracker that finds your financial leaks',
    type: 'Consumer Fintech Concept',
    description: 'Conceptualized an AI-driven expense analyzer that automatically identifies subscription waste, recurring overcharges, and spending anomalies.',
    tags: ['AI/ML', 'Fintech', '0→1'],
    ctaText: 'View Concept →',
    isFeatured: true,
  },
  {
    id: 'ai-news',
    title: 'AI News App',
    headline: 'Recommendation strategy that increased session time 15%',
    type: 'Shipped Product (Wareline Technologies)',
    description: 'Defined A/B testing framework for content recommendation, improving relevance by 20% and session duration by 15%.',
    tags: ['AI/ML', 'A/B Testing', 'Shipped'],
    ctaText: 'View Case Study →',
  },
  {
    id: 'fitness-app',
    title: 'Fitness App - Sports Feed',
    headline: 'Community feature that drove 33% stickiness lift',
    type: 'Shipped Product (Wareline Technologies)',
    description: 'Led cross-functional development of social feed feature, increasing DAU/MAU ratio by 33.3% MoM.',
    tags: ['Growth', 'Engagement', 'Shipped'],
    ctaText: 'View Case Study →',
  },
  {
    id: 'hinge-roadmap',
    title: 'Hinge Product Roadmap',
    headline: 'Making dating more intentional',
    type: 'Product Strategy Exercise',
    description: 'Product improvement roadmap focused on reducing superficial swiping and encouraging meaningful connections.',
    tags: ['Consumer', 'Product Sense', 'Strategy'],
    ctaText: 'View Roadmap →',
  },
  {
    id: 'nike-app',
    title: 'Nike Mobile App',
    headline: 'Reimagining the Nike app experience',
    type: 'Product Sense Case Study',
    description: 'Deep-dive analysis of Nike\'s mobile app with prioritized recommendations for improving user engagement and purchase conversion.',
    tags: ['Consumer', 'Product Sense', 'UX'],
    ctaText: 'View Analysis →',
  },
];

export const SECONDARY_PROJECTS: Project[] = [
  {
    id: 'apple-stock',
    title: 'Apple Stock Prediction',
    headline: 'Technical ML modeling',
    type: 'Technical Project',
    description: 'Predictive maintenance ML model with 93% failure classification accuracy using seasonal decomposition and LSTM networks.',
    tags: ['Technical', 'ML', 'Python'],
    ctaText: 'View Model →',
  },
  {
    id: 'elevn-teardown',
    title: 'Elevn Dating Teardown',
    headline: 'UX and Product Analysis',
    type: 'Product Analysis',
    description: 'Comprehensive teardown of the Elevn dating app focusing on onboarding friction and retention loops.',
    tags: ['Analysis', 'UX'],
    ctaText: 'View Teardown →',
  },
  {
    id: 'udemy-sense',
    title: 'Udemy Product Sense',
    headline: 'Improving EdTech engagement',
    type: 'EdTech Strategy',
    description: 'Product sense exercise identifying core user friction in course completion rates on Udemy.',
    tags: ['EdTech', 'Strategy'],
    ctaText: 'View Strategy →',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'AI Product Development',
    subtitle: 'When you\'re integrating AI into consumer products',
    description: 'I define how AI features should work for real users—from recommendation engines to personalized content feeds.',
    proof: 'Shipped news personalization that improved relevance by 20%.',
  },
  {
    title: 'Growth & Retention',
    subtitle: 'When engagement metrics are stalling',
    description: 'I diagnose what\'s breaking and run experiments that move numbers. I\'ve turned declining user engagement into measurable lifts.',
    proof: '33% DAU/MAU improvement through feature-led growth.',
  },
  {
    title: 'Data-Informed Strategy',
    subtitle: 'When you have data but no clarity',
    description: 'I translate messy analytics into actionable product decisions. At Apple, I redesigned KPI forecasting across 15+ regions.',
    proof: 'Reduced forecasting error by 20% at Apple Media Products.',
  },
  {
    title: '0→1 Product Thinking',
    subtitle: 'When you\'re exploring new product concepts',
    description: 'I shape fuzzy ideas into validated roadmaps with clear metrics. Experienced in exploring productivity, fintech, and social tools.',
    proof: 'Defined validated roadmaps for Cerebro AI and LeakLock.',
  },
];

export const STEPS: Step[] = [
  {
    title: 'Discover',
    icon: '🔍',
    description: 'I start by understanding the real problem—not just the stated one. I talk to users, dig into data, and map the current experience to find where value is leaking.',
  },
  {
    title: 'Define',
    icon: '🎯',
    description: 'I translate insights into clear hypotheses, success metrics, and prioritized roadmaps. No solution gets built without a testable bet and a way to measure it.',
  },
  {
    title: 'Deliver',
    icon: '🚀',
    description: 'I work shoulder-to-shoulder with engineering to ship, instrument, and iterate. The goal isn\'t launching—it\'s learning and improving based on real user behavior.',
  },
];

export const PRINCIPLES: Principle[] = [
  {
    title: 'Metrics that tell the truth',
    description: 'I design measurement systems that align with actual business value—not vanity metrics that look good in dashboards.',
  },
  {
    title: 'AI that augments humans',
    description: 'I believe the best AI products enhance human capability rather than replace judgment. The goal is making people more effective.',
  },
  {
    title: 'Experiments over opinions',
    description: 'I let data decide, not the loudest voice. Every major feature should have a testable hypothesis and clear success criteria.',
  },
  {
    title: 'Simple surfaces, smart systems',
    description: 'Complex AI should feel effortless to users. The sophistication belongs in the backend—the experience should be intuitive.',
  },
  {
    title: 'User problems first, solutions second',
    description: 'I resist jumping to features before deeply understanding the job-to-be-done. The best products solve real problems.',
  },
  {
    title: 'Ship to learn, not to launch',
    description: 'Launches are checkpoints, not finish lines. Real product development happens in the iteration after v1.',
  },
];
