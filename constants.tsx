
import { Project, Capability, Step, Principle } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'cerebro-ai',
    title: 'Cerebro AI',
    headline: 'Your second brain, searchable',
    type: 'AI Productivity Concept',
    description: 'Designed an AI-powered personal knowledge assistant that captures, organizes, and resurfaces information across notes, bookmarks, and conversations. Focuses on context-aware retrieval and zero-friction entry.',
    tags: ['AI/ML', '0→1', 'Consumer Productivity'],
    ctaText: 'View Concept →',
    isFeatured: true,
  },
  {
    id: 'leaklock',
    title: 'LeakLock',
    headline: 'Invisible money tracker that finds your financial leaks',
    type: 'Consumer Fintech Concept',
    description: 'Conceptualized an AI-driven expense analyzer that automatically identifies subscription waste, recurring overcharges, and spending anomalies using deep behavioral patterns.',
    tags: ['AI/ML', 'Fintech', '0→1'],
    ctaText: 'View Concept →',
    isFeatured: true,
  },
  {
    id: 'fitness-app',
    title: 'Fitness App - Sports Feed',
    headline: 'Engagement feature that drove major gains in user stickiness',
    type: 'Shipped Product (Wareline Technologies)',
    description: 'Led cross-functional development of social feed features, increasing user retention by optimizing social validation loops and content relevance algorithms.',
    tags: ['Growth', 'Engagement', 'Shipped'],
    ctaText: 'View Case Study →',
  },
  {
    id: 'hinge-roadmap',
    title: 'Hinge Product Roadmap',
    headline: 'Making dating more intentional',
    type: 'Product Strategy Exercise',
    description: 'Product improvement roadmap focused on reducing superficial swiping and encouraging meaningful connections through algorithmic nudges and intentional UX design.',
    tags: ['Consumer', 'Product Sense', 'Strategy'],
    ctaText: 'View Roadmap →',
  },
  {
    id: 'nike-app',
    title: 'Nike Mobile App',
    headline: 'Reimagining the Nike app experience',
    type: 'Product Sense Case Study',
    description: 'Deep-dive analysis of Nike\'s mobile app with prioritized recommendations for improving user engagement and purchase conversion through personalized retail storytelling.',
    tags: ['Consumer', 'Product Sense', 'UX'],
    ctaText: 'View Analysis →',
  },
];

export const SECONDARY_PROJECTS: Project[] = [
  {
    id: 'ai-news',
    title: 'AI News App',
    headline: 'Recommendation strategy that significantly increased session time',
    type: 'AI Product Incubation',
    description: 'Defined A/B testing framework for content recommendation, improving user relevance and session duration. Managed the full product lifecycle from hypothesis to scaled deployment.',
    tags: ['AI/ML', 'A/B Testing', 'Shipped'],
    ctaText: 'View Case Study →',
  },
  {
    id: 'apple-stock',
    title: 'Apple Stock Prediction',
    headline: 'Technical ML modeling',
    type: 'Technical Project',
    description: 'Predictive maintenance ML model with high failure classification accuracy using seasonal decomposition and LSTM networks to optimize hardware longevity.',
    tags: ['Technical', 'ML', 'Python'],
    ctaText: 'View Model →',
  },
  {
    id: 'elevn-teardown',
    title: 'Elevn Dating Teardown',
    headline: 'UX and Product Analysis',
    type: 'Product Analysis',
    description: 'Comprehensive teardown of the Elevn dating app focusing on onboarding friction, initial user success metrics, and long-term retention loops.',
    tags: ['Analysis', 'UX'],
    ctaText: 'View Teardown →',
  },
  {
    id: 'udemy-sense',
    title: 'Udemy Product Sense',
    headline: 'Improving EdTech engagement',
    type: 'EdTech Strategy',
    description: 'Product sense exercise identifying core user friction in course completion rates on Udemy and proposing structural gamification improvements.',
    tags: ['EdTech', 'Strategy'],
    ctaText: 'View Strategy →',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'AI Product Development',
    description: 'I define how AI features should work for real users—from recommendation engines to personalized content feeds. I specialize in bridging the gap between raw model outputs and meaningful user experiences, ensuring that technical complexity translates into intuitive interactions that drive user value.',
    proof: 'Hands-on experience with LLMs & RAG systems'
  }, 
  {
    title: 'Growth & Retention',
    description: 'I diagnose what\'s breaking in your user journey and run high-velocity experiments that move the numbers. I\'ve turned declining user engagement into measurable lifts by identifying high-leverage friction points and deploying targeted A/B tests that optimize the core product loop.',
    proof: 'Proven engagement & stickiness growth'
  },
  {
    title: 'Data-Informed Strategy',
    description: 'I turn complex behavioral data into actionable product strategy. Grounded in statistical analysis, I help teams cut through vanity metrics and prioritize the signals that matter for durable growth and real user value.',
    proof: 'PMP-certified · MS in Analytics'
  },
  {
    title: '0→1 Product Thinking',
    description: 'I lead 0→1 product development by converting ambiguous problems into focused roadmaps backed by clear metrics and technical feasibility. I’ve driven the journey from discovery to MVP across productivity, fintech, and social products, ensuring early validation before scale.',
    proof: '0→1 ownership across 3+ AI-first products'
  }
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
    description: 'I design measurement systems that align with actual business value—not vanity metrics that look good in dashboards but don\'t reflect user success.',
  },
  {
    title: 'AI that augments humans',
    description: 'I believe the best AI products enhance human capability rather than replace judgment. The goal is making people more effective and capable.',
  },
  {
    title: 'Experiments over opinions',
    description: 'I let data decide, not the loudest voice. Every major feature should have a testable hypothesis and clear success criteria before development begins.',
  },
  {
    title: 'Simple surfaces, smart systems',
    description: 'Complex AI should feel effortless to users. The sophistication belongs in the backend—the interface should be clean, fast, and remarkably intuitive.',
  },
  {
    title: 'User problems first, solutions second',
    description: 'I resist jumping to features before deeply understanding the job-to-be-done. The best products solve real, painful problems in the simplest way.',
  },
  {
    title: 'Ship to learn, not to launch',
    description: 'Launches are checkpoints, not finish lines. Real product development happens in the fast iteration cycles that follow a version one release.',
  },
];
