import { Project, Capability, Step, Principle, WorkExperience } from './types';

export interface EnhancedProject extends Project {
  metricLabel?: string;
  metricValue?: string;
  role?: string;
}

export const PROJECTS: EnhancedProject[] = [
  {
    id: 'cerebro-ai',
    title: 'Cerebro AI',
    headline: 'Personal Knowledge Engine',
    type: 'AI Productivity',
    role: 'Product Lead & Founder',
    metricLabel: 'DAU/MAU',
    metricValue: '42%',
    description: 'A second brain that captures, organizes, and resurfaces information across your digital life. Built on a custom RAG architecture to provide context-aware retrieval with zero-friction entry.',
    ctaText: 'View Case Study',
    isFeatured: true,
    imageUrl: 'https://i.ibb.co/gMqMJjQz/Gemini-Generated-Image-76dc4o76dc4o76dc.png',
  },
  {
    id: 'leaklock',
    title: 'LeakLock',
    headline: 'Invisible money tracker that finds your financial leaks',
    type: 'Consumer Fintech',
    role: 'PM / Strategy',
    metricLabel: 'User Savings',
    metricValue: '$450/yr avg',
    description: 'Built a working AI-driven expense intelligence prototype that surfaces forgotten subscriptions, reduces cancellation friction, and detects recurring overcharges and spending anomalies across digital payments.',
    ctaText: 'View Case Study',
    isFeatured: true,
    imageUrl: 'https://i.ibb.co/5Xqx2M9F/Screenshot-2026-01-07-at-22-58-27-1.png',
  },
  {
    id: 'hinge-roadmap',
    title: 'Product Improvement & Discovery - Hinge',
    headline: 'Making dating more intentional',
    type: 'Product Improvement',
    role: 'Case Study',
    metricLabel: 'Potential LTV',
    metricValue: 'Significant Lift',
    description: 'Product improvement roadmap aimed at reducing superficial swiping by using behavioral nudges and intentional free-tier limits to encourage meaningful connections.',
    ctaText: 'View Roadmap',
    imageUrl: 'https://techcrunch.com/wp-content/uploads/2022/05/Hinge_Self-Care_Prompts_01.jpg?w=1024',
  },
  {
    id: 'nike-app',
    title: 'Nike Mobile App',
    headline: 'Reimagining the Nike app experience',
    type: 'Product Sense Case Study',
    role: 'Analysis',
    metricLabel: 'Conversion',
    metricValue: 'Optimized',
    description: 'Deep-dive analysis of Nike’s mobile app with prioritized recommendations to improve user engagement and purchase conversion through personalized membership experiences, curated content, and targeted rewards.',
    ctaText: 'View Analysis',
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop',
  },
];

export const SECONDARY_PROJECTS: Project[] = [
  {
    id: 'apple-stock',
    title: 'Apple Stock Prediction',
    headline: 'Technical ML modeling',
    type: 'Technical Project',
    description: 'Built an interactive analytics and forecasting dashboard to explore historical Apple stock performance and generate short-term price forecasts.',
    ctaText: 'View Model',
  },
  {
    id: 'elevn-teardown',
    title: 'Product Teardown - Elevn',
    headline: 'UX and Product Analysis',
    type: 'Product Analysis',
    description: 'Comprehensive teardown of the Elevn dating app focusing on onboarding friction, initial user success metrics, and long-term retention loops.',
    ctaText: 'View Teardown',
  },
  {
    id: 'udemy-sense',
    title: 'Product Teardown - Udemy',
    headline: 'Online Learning Marketplace Analysis',
    type: 'Product Analysis',
    description: 'Comprehensive analysis of Udemy\'s marketplace dynamics, identifying search and ranking bias issues, and proposing balanced visibility solutions to improve the content ecosystem.',
    ctaText: 'View Teardown',
  },
  {
    id: 'reddit-technical',
    title: 'Deconstructing the Black Box',
    headline: 'The Reddit Technical Case',
    type: 'Technical Case Study',
    description: 'A deep dive into demonstrating technical empathy as a PM - understanding architectural trade-offs, database decisions, and API design without writing production code.',
    ctaText: 'View Case Study',
  },
];

export const CAPABILITIES: Capability[] = [
  {
    title: 'AI Product Development',
    description: 'I define how AI features should work for real users—from recommendation engines to personalized content feeds. I specialize in bridging the gap between raw model outputs and meaningful user experiences.',
    proof: 'Hands-on experience with LLMs & RAG systems'
  },
  {
    title: 'Growth & Retention',
    description: 'I diagnose what\'s breaking in your user journey and run high-velocity experiments that move the numbers. I\'ve turned declining user engagement into measurable lifts by identifying high-leverage friction points.',
    proof: 'Proven engagement & stickiness growth'
  },
  {
    title: 'Data-Informed Strategy',
    description: 'I turn complex behavioral data into actionable product strategy. Grounded in statistical analysis, I help teams cut through vanity metrics and prioritize the signals that matter.',
    proof: 'PMP-certified · MS in Analytics'
  },
  {
    title: '0→1 Product Thinking',
    description: 'I lead 0→1 product development by converting ambiguous problems into focused roadmaps backed by clear metrics and technical feasibility.',
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

export interface CaseStudyContent {
  id: string;
  overview: string;
  problem: string;
  approach: string[];
  solution: string;
  results: { metric: string; value: string; description: string }[];
  learnings: string[];
  tools?: string[];
}

export const CASE_STUDIES: Record<string, CaseStudyContent> = {
  'cerebro-ai': {
    id: 'cerebro-ai',
    overview: 'Cerebro AI is a personal knowledge engine designed to capture, organize, and resurface information across your digital life. Built on a custom RAG (Retrieval-Augmented Generation) architecture, it provides context-aware retrieval with zero-friction entry.',
    problem: 'Knowledge workers spend an average of 2.5 hours daily searching for information they\'ve already encountered. Existing note-taking and bookmarking tools fail because they require manual organization and don\'t surface relevant information at the right moment.',
    approach: [
      'Conducted 30+ user interviews with knowledge workers to understand information capture and retrieval pain points',
      'Mapped the complete user journey from information discovery to retrieval across multiple platforms',
      'Designed a frictionless capture system that works across browser, mobile, and desktop',
      'Built a custom RAG architecture optimized for personal knowledge retrieval',
      'Implemented semantic search with contextual re-ranking based on user patterns'
    ],
    solution: 'A unified knowledge layer that passively captures information from your digital activities and proactively surfaces relevant context when you need it. The system learns from your behavior to improve relevance over time.',
    results: [
      { metric: 'DAU/MAU', value: '42%', description: 'Industry-leading engagement ratio indicating strong product-market fit' },
      { metric: 'Time Saved', value: '45 min/day', description: 'Average reduction in information retrieval time per user' },
      { metric: 'Retention', value: '68%', description: '30-day retention rate among active users' }
    ],
    learnings: [
      'Passive capture dramatically outperforms active note-taking for busy professionals',
      'Contextual relevance matters more than comprehensive search results',
      'Users need to trust the system before they\'ll rely on it—transparency in AI decisions builds confidence'
    ],
    tools: ['Python', 'LangChain', 'Pinecone', 'React', 'TypeScript', 'OpenAI API']
  },
  'leaklock': {
    id: 'leaklock',
    overview: 'LeakLock is an invisible money tracker that automatically detects forgotten subscriptions and recurring charges through on-device SMS parsing. Built with privacy-first architecture, all processing happens locally on your Android device—no cloud uploads, no data collection.',
    problem: 'I kept paying for things I wasn\'t using. A free trial I forgot to cancel. A duplicate charge I didn\'t notice. An app I subscribed to once and never opened again. Every month, small amounts quietly left my account - ₹99 here, ₹199 there. Individually tiny. Collectively, a leak. The worst part? I only discovered these when I actually sat down and scrolled through months of bank statements. By then, I\'d already lost money I could have saved. In India, this problem is everywhere. UPI mandates made payments frictionless - but also invisible. You tap once, and suddenly you\'re auto-charged every month without a reminder. Research shows 71% of users report hidden charges, and companies see up to 200% revenue uplift simply because people forget to cancel. That\'s when I realized: the problem isn\'t spending money. It\'s not seeing where it quietly leaks.',
    approach: [
      'Asked "Why do people keep paying for things they don\'t use?" - Three reasons: Forgetting (free trials convert silently), Friction (cancelling is intentionally hard with dark patterns), and Invisibility (recurring charges hide in transaction history)',
      'Realized existing apps require manual entry—which means users must remember what they\'re forgetting. That\'s broken by design',
      'Built LeakLock with automation at the core: scan SMS messages locally, detect subscriptions automatically, and surface them before the next charge hits',
      'Designed privacy-first architecture: all SMS parsing happens on-device, nothing uploaded to cloud'
    ],
    solution: 'A privacy-first, automation-led tracking system. Auto-detection finds subscriptions via local SMS parsing (no manual entry). Smart reminders alert before renewal, not after. One-tap pause/cancel flow with reason capture. Duplicate prevention validates by name + date. All SMS parsed on-device with no cloud storage.',
    results: [
      { metric: 'First Sync Success', value: '≥1 sub', description: 'Users see value immediately on first login - no setup needed' },
      { metric: 'Avg Savings', value: '₹100-₹500/mo', description: 'Real money recovered from paused or cancelled subscriptions' },
      { metric: 'Day-30 Retention', value: '≥25%', description: 'Users stick around because they\'re saving money' },
      { metric: 'NPS Target', value: '≥45', description: 'Users feel in control and trust the app' }
    ],
    learnings: [
      'Automation removes the core friction. The entire problem is that people forget. Asking them to manually enter subscriptions defeats the purpose. SMS parsing - done locally and privately - solved this elegantly.',
      'Privacy is a feature, not a tradeoff. Indian users are increasingly wary of apps accessing their data. By processing everything on-device and never uploading messages, LeakLock turned a potential trust barrier into a selling point.',
      'Timing matters more than information. Showing users a list of subscriptions is useful. Alerting them three days before a renewal - when they can still act - is what actually saves money.',
      'Dark patterns are the real enemy. Companies make cancellation intentionally hard. LeakLock\'s value isn\'t just visibility - it\'s giving users a fighting chance against systems designed to make them forget.'
    ],
    tools: ['Android', 'SMS Parsing', 'On-Device Processing', 'UPI Mandate Detection', 'Local Storage']
  },
  'hinge-roadmap': {
    id: 'hinge-roadmap',
    overview: 'A comprehensive product improvement roadmap for Hinge aimed at reducing superficial swiping behavior and encouraging more meaningful connections through behavioral nudges and intentional design.',
    problem: 'Dating apps suffer from a paradox: the more successful they are at creating matches, the less users need them. Hinge\'s "designed to be deleted" positioning creates tension with engagement metrics. Users also report swipe fatigue and shallow interactions.',
    approach: [
      'Analyzed public data on dating app engagement patterns and user complaints',
      'Studied behavioral economics principles applicable to relationship formation',
      'Mapped the user journey from signup to successful date to identify friction points',
      'Designed experiments to test hypotheses about intentional dating behavior'
    ],
    solution: 'A series of product changes including: limited daily likes to increase intentionality, prompted conversation starters tied to profile content, and a "slow dating" mode that reveals matches gradually.',
    results: [
      { metric: 'LTV Impact', value: 'Significant Lift', description: 'Projected increase in lifetime value through improved retention' },
      { metric: 'Match Quality', value: '+40%', description: 'Estimated improvement in conversation-to-date conversion' },
      { metric: 'User Satisfaction', value: '+25%', description: 'Projected NPS improvement based on similar implementations' }
    ],
    learnings: [
      'Scarcity increases perceived value—limited actions lead to more thoughtful choices',
      'Prompts that reference specific profile content dramatically improve response rates',
      'Users want permission to slow down but won\'t do it without product-level constraints'
    ]
  },
  'nike-app': {
    id: 'nike-app',
    overview: 'Nike\'s app isn\'t just a store - it\'s a lifestyle ecosystem. Members get exclusive drops, personalized recommendations, community events, and access to Nike\'s most innovative products. But longtime members with low purchase frequency are quietly disengaging, creating a hidden retention problem.',
    problem: 'Longtime members with low purchase frequency aren\'t receiving relevant updates or compelling reasons to return. The rewards feel stale, and casual users aren\'t being converted into active customers. The app feels less engaging over time - leading to churn and stagnant monthly active users. For Nike, this is a retention problem hiding in plain sight.',
    approach: [
      'Segmented Nike\'s user base into Casual Users (platform explorers, event-driven shoppers, price-sensitive buyers), Active Users (performance athletes, content creators, frequent campaign responders), and Brand Endorsers (sports personalities driving brand recall)',
      'Analyzed Nike\'s key features: Nike Member Pass (QR-based access to exclusive events), Nike By You (AI-powered customization with virtual rotation), and Chat with Nike Experts (real human support)',
      'Conducted competitive analysis: Nike (robust member ecosystem but region-restricted drops), Puma (strong lifestyle collaborations but minimal community), Adidas (sustainability focus but poor chat support)',
      'Identified the core problem: Members sign up but don\'t stay engaged without frequent, personalized rewards'
    ],
    solution: 'Tiered engagement system with frequent, personalized rewards. Elements include: Tiered Member Rewards (rewards based on engagement, not just purchases), Personalized Offers (tailored to browsing history and favorite sports), Surprise Benefits (unexpected perks like early access), Limited-Time Promotions (app-exclusive deals creating urgency), and Re-engagement Content (curated stories and events for dormant users). This creates anticipation and value, generating richer behavioral data for better recommendations.',
    results: [
      { metric: 'Monthly Active Users', value: 'Increase', description: 'Dormant members return to the app more frequently' },
      { metric: 'Retention Rate', value: 'Improve', description: 'Users stay engaged longer due to ongoing rewards' },
      { metric: 'Purchase Frequency', value: 'Increase', description: 'Personalized offers convert browsers into buyers' },
      { metric: 'Customer Lifetime Value', value: 'Grow', description: 'Engaged members spend more over time' },
      { metric: 'Churn Rate', value: 'Decrease', description: 'Fewer users quietly abandon the app' }
    ],
    learnings: [
      'Membership isn\'t engagement. Signing up is easy. Staying active is hard. Nike\'s member ecosystem is powerful, but it needs to continuously reward users - even the quiet ones - to prevent silent churn.',
      'Community is a competitive moat. Puma has collaborations. Adidas has sustainability. But Nike\'s Run Club, Training Club, and exclusive events create emotional connection that competitors struggle to replicate.',
      'Personalization drives loyalty. Nike By You lets users design their own shoes. AI-powered recommendations surface relevant products. These features make users feel seen - and that feeling converts to purchases.',
      'Human support still matters. In an age of chatbots, Nike\'s real human experts stand out. Trust is built through authentic interaction, not automated replies.'
    ]
  },
  'apple-stock': {
    id: 'apple-stock',
    overview: 'An interactive analytics and forecasting dashboard to explore historical Apple stock performance and generate short-term price forecasts using machine learning models.',
    problem: 'Retail investors lack access to sophisticated analytical tools that institutional investors use. Existing platforms either overwhelm with complexity or oversimplify to the point of being unhelpful.',
    approach: [
      'Collected and cleaned 10+ years of Apple stock data and relevant market indicators',
      'Implemented multiple forecasting models including LSTM, ARIMA, and ensemble methods',
      'Designed an intuitive dashboard that surfaces insights without requiring technical expertise',
      'Built backtesting capabilities to validate model performance'
    ],
    solution: 'A web-based dashboard that combines historical analysis with ML-powered forecasting, presented in an accessible format for non-technical users.',
    results: [
      { metric: 'Model Accuracy', value: '73%', description: 'Directional accuracy on 5-day forecasts' },
      { metric: 'Backtesting', value: '+12%', description: 'Hypothetical returns vs buy-and-hold over test period' },
      { metric: 'User Comprehension', value: '89%', description: 'Users who correctly interpreted forecast confidence intervals' }
    ],
    learnings: [
      'Communicating uncertainty is as important as the prediction itself',
      'Users prefer relative comparisons to absolute numbers',
      'Interactive exploration builds understanding better than static reports'
    ],
    tools: ['Python', 'TensorFlow', 'Pandas', 'Plotly', 'Streamlit']
  },
  'elevn-teardown': {
    id: 'elevn-teardown',
    overview: 'A comprehensive product teardown of the Elevn dating app focusing on onboarding friction, initial user success metrics, and long-term retention loops.',
    problem: 'Elevn, a newer entrant in the dating app space, struggles with user retention despite positive initial reviews. The product teardown aims to identify specific friction points and opportunities for improvement.',
    approach: [
      'Created new accounts and documented the complete onboarding experience',
      'Analyzed the app\'s feature set against established competitors',
      'Identified gaps in the user journey from signup to first meaningful interaction',
      'Evaluated the monetization strategy and its impact on user experience'
    ],
    solution: 'A detailed analysis with specific recommendations for improving onboarding completion rates, increasing early engagement, and building sustainable retention loops.',
    results: [
      { metric: 'Friction Points', value: '12', description: 'Identified opportunities for UX improvement' },
      { metric: 'Quick Wins', value: '5', description: 'Low-effort, high-impact recommendations' },
      { metric: 'Strategic Pivots', value: '3', description: 'Larger directional changes suggested' }
    ],
    learnings: [
      'First-session experience disproportionately impacts long-term retention',
      'Profile completion incentives must balance quality with friction',
      'Differentiation in dating apps requires more than feature parity'
    ]
  },
  'udemy-sense': {
    id: 'udemy-sense',
    overview: 'A comprehensive product teardown of Udemy\'s marketplace dynamics, examining user segmentation, competitive positioning, and platform-level challenges in balancing quality with discoverability.',
    problem: 'Udemy operates a two-sided marketplace connecting knowledge hunters (learners) with knowledge providers (instructors). While the platform excels at scale and affordability, it faces critical challenges: new quality courses struggle with visibility, learners see repetitive top courses, and the ecosystem risks overdependence on a few mega-courses. This search and ranking bias threatens both content diversity and instructor retention.',
    approach: [
      'Segmented users into three groups: Knowledge Hunters (students, professionals, job seekers), Knowledge Providers (independent instructors), and Businesses (organizations)',
      'Analyzed pain points and value drivers for each segment through user journey mapping',
      'Conducted competitive analysis comparing Udemy with LinkedIn Learning and Skillshare',
      'Identified root causes of marketplace imbalance, focusing on discoverability bias and ranking monopolies'
    ],
    solution: 'Proposed a balanced visibility system using quality-weighted rotation and A/B testing. The solution allocates percentage slots in search results to new or low-visibility high-quality courses, implements periodic rotation for fair exposure, and measures impact on learner satisfaction and conversion. This breaks the monopoly cycle while maintaining content quality standards.',
    results: [
      { metric: 'Instructor Retention', value: 'Improved', description: 'Fair exposure opportunity for new instructors, sustained engagement' },
      { metric: 'Content Diversity', value: 'Expanded', description: 'Learners discover fresh, niche, and innovative courses' },
      { metric: 'Revenue Distribution', value: 'Balanced', description: 'Healthier ecosystem reduces overdependence on mega-courses' },
      { metric: 'Platform Health', value: 'Strengthened', description: 'Stronger instructor pipeline with more unique offerings' }
    ],
    learnings: [
      'Marketplace success depends on both sides thriving - optimizing only for today\'s top performers creates fragility',
      '"Speed to market" is Udemy\'s real competitive advantage - experts can teach trending topics within days',
      'Deep discounts expand the market, not just share - bringing in learners who wouldn\'t pay otherwise',
      'Credentials matter differently by segment - hobbyists value completion, professionals need career-aligned credentials',
      'Enterprise (Udemy Business) is a different game - diversifies revenue and positions platform as workforce development partner'
    ]
  },
  'reddit-technical': {
    id: 'reddit-technical',
    overview: 'A deep dive into demonstrating technical empathy as a PM during a technical interview with a CTO - proving the ability to understand architectural trade-offs, database decisions, and API design without writing production code.',
    problem: 'The "Non-Technical" PM Stigma. Walking into a final round at Reddit confident in product sense and metrics, but facing the "Technical Round" with the CTO. The challenge wasn\'t just "knowing the tech" - it was demonstrating Technical Empathy and proving the ability to sit in a room with engineers, understand the architectural costs of product decisions, and design systems that scale.',
    approach: [
      'Adopted the "City Planner" Mindset - acting as the city planner (who decides where zones go and how traffic flows) rather than the architect (who decides how every brick is laid)',
      'Used First Principles Thinking to reverse-engineer Reddit - asking "If I have 50 million daily users trying to upvote a cat video at the same time, what kind of system breaks? And what kind of system survives?"'
    ],
    solution: 'Demonstrated technical literacy through three key areas: (1) Tech Stack explanation using Three-Tier Logic - Frontend (React.js for component reusability), Backend (Python for business logic, Go for high-concurrency services), Database (PostgreSQL for accuracy, Cassandra for speed); (2) Trade-off analysis using CAP Theorem - choosing PostgreSQL for User Identity system prioritizing Data Integrity over raw write speed; (3) API Economy design - creating a lightweight JSON endpoint for search partners with metadata for intelligent ranking.',
    results: [
      { metric: 'Gap Bridged', value: 'Yes', description: 'Proved that while not pushing code, understanding the implications of code is key' },
      { metric: 'Engineering Trust', value: 'Built', description: 'Correctly identifying SQL vs NoSQL trade-offs showed capability to not promise impossible features' },
      { metric: 'Business Alignment', value: 'Demonstrated', description: 'API design showed technology as a vehicle for business growth (revenue share/traffic)' }
    ],
    learnings: [
      'Technical literacy is the ultimate empathy - you don\'t need to be a developer to ace a technical round; you need to be a Translator',
      'The most valuable PMs are the ones who can look at a Business Goal (Revenue) and understand the Technical Lever (API Latency) required to pull it',
      'Architecture is Product - the way we structure our data ultimately defines the limits of what features we can build',
      'Understanding the schema isn\'t just "tech stuff" - it\'s the foundation of the roadmap'
    ]
  }
};

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    company: 'Wareline Technologies',
    role: 'Product Manager',
    location: 'Chandigarh (Remote)',
    dates: 'March 2024 – September 2025',
    context: 'Led development of an AI-powered news application with personalized recommendations, LLM summarization, and engagement optimization.',
    metrics: [
      { value: '20%', label: 'Content Relevance', trend: 'up' },
      { value: '2.5x', label: 'Daily App Opens', trend: 'up' },
      { value: '50+', label: 'News Sources' },
      { value: '7', label: 'Person Team Led' }
    ],
    stories: [
      {
        title: 'AI News Platform Architecture',
        subtitle: 'Designed end-to-end architecture for content ingestion, AI summarization, and personalization',
        resumeBullet: 'Designed end-to-end architecture for AI-powered mobile news app, defining RSS feed parsing for 50+ sources, integrating GPT-3.5 LLM summarization reducing reading time 40%, and implementing hybrid recommendation system achieving 38% DAU/MAU and scaling to 50K users, becoming Wareline\'s flagship product.',
        star: {
          situation: `Wareline Technologies identified a gap in the news aggregator market — existing apps like Google News and Flipboard were losing user engagement due to generic, overwhelming feeds. Wareline saw an opportunity to build its own AI-powered news platform.

**The Challenge:** Build an AI-native mobile app from scratch with no existing infrastructure. We needed to define the entire technical architecture — from content ingestion to personalized delivery — within a **6-month timeline** and **$5K/month infrastructure budget**.

**The Opportunity:** If we could demonstrate strong engagement metrics, this would become Wareline's flagship AI product and attract media companies as clients.`,
          task: `As Product Manager, I needed to:

• **Define product architecture** from content aggregation to mobile delivery (iOS + Android)
• **Make critical AI/ML decisions** on summarization approach and personalization algorithms
• **Solve the cold-start problem:** Deliver personalized feeds from Day 1 with zero user data
• **Drive measurable impact:** Achieve strong engagement metrics (target: 35%+ DAU/MAU) to prove product-market fit

**Success Target:** Industry-leading DAU/MAU (35%+) with statistically significant retention, staying within budget constraints.`,
          action: `**1. User Research Defined Product Strategy**
Conducted a survey (500 respondents) and 20 in-depth user interviews with news app power users.

**Key Insight:** Users didn't want MORE content — they wanted LESS, but better matched. **67% of sessions** ended with "couldn't find anything interesting."

**Product Hypothesis:** Reduce decision fatigue (AI summaries) + increase relevance (ML personalization) = 3x engagement.

**2. Architecture: RSS Feed Parsing Over Web Scraping**
**Decision:** RSS feed parsing for content ingestion

**Why:** Speed to market (2 weeks vs. 6+ weeks/source for scraping), reliability (feeds rarely break vs. scraping breaking with site redesigns), cost ($200/month vs. $2K+), and legal clarity (publisher-sanctioned).

**Trade-off Accepted:** Limited to 50 curated sources initially, but prioritized reliability and speed over unlimited scale.

**Implementation:** Built ETL pipeline supporting 52 sources across 8 categories with automated health monitoring and backup source switching.

**3. AI Strategy: Hybrid LLM Summarization**
**The Choice:** Hybrid approach using GPT-3.5-turbo to balance cost, quality, and mobile performance

**Why Hybrid:**
• Full LLM coverage ($8K/month) would exceed entire infrastructure budget
• User research showed 80% of articles were "scroll past" content — didn't need premium summaries
• **Approach:** 80% extractive summarization (cheap, fast) + 20% LLM for top stories (quality where it matters)

**Model Selection:** GPT-3.5 over GPT-4 because blind A/B testing showed users couldn't distinguish 78% of the time, but 3.5's **1.2s latency** beat 4's 3.8s lag — critical for mobile UX.

**Quality Control:** Engineered prompts to reduce hallucinations from 15% → 4%, implemented human review (100 summaries/day initially), and built in-app feedback ("Was this helpful?").

**Impact:** 40% reduction in time to find relevant content, 2.7x higher click-through from LLM summaries vs. extractive.

**4. Personalization: Phased Hybrid Recommendation System**
**The Cold-Start Problem:** Day 1 = 0 users, 0 data, but users expect immediate personalization.

**Solution:** Hybrid approach with phased rollout

**Phase 1 (Months 1-3):** Content-based filtering using article embeddings delivered immediate personalization from Day 1 while collecting interaction data in background.

**Phase 2 (Month 4+):** Activated collaborative filtering at 10K users + 250K interaction events, gradually blending to **60% collaborative / 30% content-based / 10% serendipity**.

**Validation:** A/B test showed hybrid improved CTR 34% and session length 28% vs. content-based alone (p<0.01).

**Mobile Optimizations:**
• **Offline-first caching:** Prefetch top 50 articles, refresh every 2 hours → 89% of opens loaded <800ms
• On-device content matching for instant responsiveness
• **Cold-start acceleration** via onboarding ("Pick 5 topics") + device signals → first session engagement 1.8 → 4.3 articles, D1 retention 52% → 71%

**5. AI Transparency Built User Trust**
Beta feedback revealed users didn't trust black-box recommendations.

**Solution:** "Why this article?" explanations under every recommendation ("You read 3 renewable energy articles this week" / "Trending in San Francisco").

**Impact:** "Not interested" clicks dropped 40%, trust score improved 3.2/5 → 4.4/5, and engagement increased 2.1x — transparency became competitive advantage.

**6. Launch & Critical Iterations**
**Beta Launch:** 500 early adopters via TestFlight + Android closed beta

**Week 1 Crisis:** LLM hallucinated quotes in financial news. Same-day rollback to extractive summaries for finance category, redesigned prompts to emphasize "no speculation," reduced hallucinations 11% → 2%.

**Week 3 Insight:** Filter bubbles — tech-heavy users stopped seeing diverse content. Added diversity constraints (top 20 must span 3+ categories) and serendipity slots. Counterintuitively, engagement increased — D7 retention improved 8%.`,
          result: `**Engagement Impact (6 Months Post-Launch)**

**Primary Metrics (Exceeded Target):**
• **DAU/MAU:** 38% (beat 35% target, top-tier for news apps)
• **Session Length:** 6.7 min average
• **D7 Retention:** 45%

**AI Performance:**
• 40% reduction in time to find relevant content
• 89% summarization accuracy (human evaluation)
• 84% recommendation relevance ("helpful" rating)
• 2% hallucination rate (down from 15% in early beta)

**Scale & Efficiency:**
• Scaled to **50K users** in 6 months
• Infrastructure costs: **$4.2K/month** (under $5K budget)
• Mobile performance: 89% of opens loaded <800ms

**Product Outcomes:**
✅ **Became Wareline's flagship AI product:** Signed 3 media companies as clients using this platform as proof of capability
✅ **Extensible architecture:** Enabled 12+ months of features (category customization, smart notifications, personalized newsletters) without rebuilds
✅ **User satisfaction:** NPS +42, beta feedback: "Finally a news app that feels like it knows me"

**Key Learnings:**
• **Cold-start solved through product thinking:** Hybrid recommendations delivered value Day 1 while improving over time — no "wait 6 months" dead zone
• **Transparency > accuracy for trust:** "Why this article?" feature built more trust than improving algorithm accuracy alone
• **Strategic AI spending:** Hybrid LLM approach (premium AI where it matters) delivered quality experience within budget`
        }
      },
      {
        title: 'Personalized Breaking News Alerts',
        subtitle: 'Implemented smart notification system balancing relevance with frequency',
        resumeBullet: 'Increased daily app opens 2.5x (2→5 per day) and Week 4 retention from 25%→32% by implementing personalized breaking news alerts triggered by user topic preferences and AI-powered event detection',
        star: {
          situation: `Over 18 months leading the AI news platform with a 7-person cross-functional team, I identified a critical engagement gap through product analytics. While our recommendation algorithm had improved in-session metrics (time spent up 40%, articles per session up 3→5), **users were only opening the app twice daily on average**.

Deep-diving into the data, I discovered users were checking manually at morning/evening routine times, but we were completely missing re-engagement opportunities when breaking news matched their interests throughout the day. This limited our **DAU/MAU ratio to 35%** versus our north star target of 50%, and user interviews revealed we were losing active users to competitors like SmartNews who had cracked real-time engagement (averaging 8 opens/day).

Our existing push notification system sent generic top-headline alerts to all users, resulting in **15% opt-out rates** and minimal engagement lift.`,
          task: `My objective was to increase daily app touchpoints while maintaining notification quality and trust. The core challenge was designing a system that felt genuinely helpful rather than spammy — critical because notification fatigue could accelerate churn rather than prevent it.

**Success metrics I defined with leadership:**
• **Primary:** Increase daily app opens from 2→5 (150% improvement)
• **Secondary:** Week 4 retention improvement of 5+ percentage points
• **Constraint:** Keep notification opt-out rate below 10%

I needed to balance competing pressures: engineering wanted a simple RSS-based system (faster to ship), marketing wanted higher notification volume (more touchpoints), and product leadership was concerned about brand perception if we got too aggressive.`,
          action: `**Problem Validation & Research (Weeks 1-2)**
I started by conducting 15 user interviews with both power users and churned users. Key insight: users wanted breaking news alerts, but felt "bombarded by irrelevant notifications" from news apps. I quantified this by analyzing 2 weeks of behavioral data showing **40% of our most engaged readers checked specific topics (tech, politics, sports) 4-6 times daily** — clear evidence of unmet demand for timely updates.

**Solution Design & Tradeoff Analysis (Weeks 3-4)**
I evaluated three approaches:
1. **Basic RSS triggers:** Fastest (2-week build), but would replicate the generic notification problem
2. **Manual editorial curation:** Highest quality, but not scalable and required headcount we didn't have
3. **AI-powered event detection:** Scalable and personalized, but 3-week longer timeline

I advocated for option 3 despite the timeline, presenting to leadership that it was the only sustainable solution that could scale with our user base. I showed competitor analysis demonstrating similar approaches had driven 40%+ engagement lifts at The Guardian and Washington Post.

**System Architecture (Weeks 5-8)**
Working closely with our ML engineer and backend lead, I defined the notification logic:
• **Personalization layer:** Built topic preference tracking based on reading behavior (articles read, dwell time, recirculation) plus explicit selections during onboarding. Users were mapped to 1-5 core interest topics.
• **Event detection signals:** Defined "breaking news" as articles meeting: publication spike across sources (3+ outlets within 30 min) + social velocity metrics + topic relevance score >0.8 for user's interests. This filtered out routine updates while catching genuine breaking stories.
• **Frequency & timing controls:** Implemented hard cap of 5 notifications per day with smart suppression during 11pm-7am local time. Built exponential backoff — if users didn't open after 2 consecutive notifications, delay next alert by 2 hours.
• **Notification copy:** Designed templates with clear value prop: "Breaking: [Headline] — this matches your interest in [Topic]" rather than generic "Top story now"

**Stakeholder Alignment**
I faced pushback from marketing who wanted 8-10 daily notifications to maximize touchpoints. I pushed back using data from competitor app teardowns showing notification fatigue kicked in above 6/day (opt-out rates jumped from 8%→23%). Got alignment on 5/day as the ceiling by framing it as "premium, high-quality alerts" positioning.

Aligned engineering on real-time delivery despite batching being easier — explained that timeliness was core to the value proposition. The delay between event and notification needed to be <15 minutes or users wouldn't perceive it as "breaking."

**Testing Strategy (Weeks 9-12)**
Launched A/B test with three groups:
• **Control (33%):** No breaking news notifications (baseline)
• **Generic alerts (33%):** Top headlines, no personalization
• **Personalized alerts (33%):** Full system with topic matching

Monitored daily for two weeks before declaring results to ensure we captured sustained behavior change, not just novelty effect.`,
          result: `**Primary Metrics:**
• Daily app opens increased **2.5x from 2→5 per day** among personalized alert users (statistically significant, p<0.01, n=47K users)
• Generic alert group only improved to 2.8 opens/day — proving personalization was the key driver
• **Week 4 retention improved from 25%→32%**, a 7-point lift that exceeded our 5-point target

**Quality Indicators:**
• Notification opt-out rate stayed at **7.8%**, well below our 10% constraint
• Users who received personalized alerts showed **45% higher in-session engagement** (articles read per session: 5.2 vs 3.6)
• Feature rated **4.6/5 in user surveys**, becoming our second-highest rated feature after the recommendation feed

**Business Impact:**
• The retention improvement translated to an estimated **12% reduction in monthly churn**
• This feature became a core differentiator in App Store positioning and user acquisition messaging

**Key Learning:**
The frequency cap was essential to success. In a follow-up experiment testing 8 notifications/day, opt-out rates jumped to 23% and engagement gains disappeared — users felt overwhelmed. The discipline of "fewer, better" notifications proved more valuable than maximizing volume.

**What I'd Do Differently:**
If I were doing this again, I'd invest earlier in notification preference controls. We later added granular topic toggles (after users requested them), but building this into V1 would have increased adoption. I'd also test notification copy variations earlier — we found "You might be interested in..." outperformed "Breaking:" for certain user segments.

This project taught me that in retention work, **respecting user attention is as important as capturing it** — the constraint of 5 notifications/day forced us to build truly intelligent filtering, which became the feature's competitive advantage.`
        }
      },
      {
        title: 'Recommendation Algorithm A/B Testing',
        subtitle: 'Led experimentation across 300 users to find the optimal personalization approach',
        resumeBullet: 'Improved content relevance 20% by leading A/B tests of 3 recommendation algorithms (collaborative, content-based, hybrid) across 300 internal users, increasing session duration 15% (4.1→4.7 min) and articles read per session 12%, directly supporting our ad monetization model which required 7+ min sessions for profitability',
        star: {
          situation: `At Wareline Technologies, we were building an AI-powered news application designed to deliver highly personalized news feeds. During internal beta testing with **300 users**, we faced a critical monetization risk:

• Our ad-supported business model required **7+ minute average session durations** to hit revenue targets
• We were tracking at just **4.1 minutes**—40% below benchmark
• **62% of churned users** cited "content not relevant to my interests" as the primary reason

Despite having a clean interface and strong RSS parsing infrastructure, our feed felt generic. Drop-off analysis showed users were leaving not because of technical issues, but because our one-size-fits-all content ranking wasn't surfacing articles they cared about.`,
          task: `As the Product Manager leading personalization, my objective was to identify and validate which recommendation algorithm would meaningfully improve content relevance—measured by engagement, not just algorithm accuracy scores.

Leadership needed confidence that investing in personalization infrastructure would close our **40% session duration gap**.

**Success Target:** +15% increase in average session duration (**4.1→4.7min**) during internal beta, with statistical significance (**p<0.05**), putting us on trajectory toward our 7min profitability threshold.`,
          action: `**1. Hypothesis Formation & Algorithm Selection**
I collaborated with data science to analyze reading patterns and identified three personalization approaches:
• **Collaborative filtering** — Low data requirements, fast to implement, but needed critical mass of users
• **Content-based filtering** — Could work with sparse user data, but risked creating filter bubbles
• **Hybrid model** — Combining both, but required 2x compute resources and more complex ranking logic

I prioritized testing all three because our user base was still growing, and I didn't know whether we'd have enough behavioral data for collaborative filtering to work.

**2. Experiment Design**
I designed a rigorous A/B test structure:
• **3 cohorts of 100 users each** (sample size validated via power analysis—needed 95 users per cohort for p<0.05)
• **4-week test duration** (based on internal users' weekly engagement patterns—needed 2+ full weeks to reach significance)
• **Primary metric:** Session duration (business-critical)
• **Secondary metrics:** Articles read per session, feed refresh rate, scroll depth
• **Composite "Relevance Score":** 0.3(CTR) + 0.3(completion rate) + 0.4(time on article)—weighted toward consumption depth since our goal was meaningful engagement, not just clicks

**3. Instrumentation & Tracking**
• Implemented **Mixpanel + Firebase** event tracking (article_opened, session_time, feed_refresh, scroll_depth)
• Set up automated dashboards showing weekly performance by cohort
• Added lightweight in-app survey: "How relevant did today's articles feel?" (1-5 scale) to validate quantitative findings with qualitative sentiment

**4. Stakeholder Alignment on Trade-offs**
When preliminary results showed the hybrid model leading after week 2, I proactively brought engineering leadership into the decision process. The hybrid approach required **2x compute resources** vs. collaborative filtering alone.

I presented a cost-benefit analysis:
• Projected engagement gains (+15% session duration) → **$120K additional annual ad revenue** (based on CPM rates)
• Incremental infrastructure cost: **$35K/year**
• Engineering approved the investment`,
          result: `**The hybrid recommendation model won decisively** with statistically significant results (**p<0.01**):

• **Content relevance:** +20% (based on composite relevance score)
• **Session duration:** +15% (4.1→4.7 minutes)—on track toward 7min profitability goal
• **Articles read per session:** +12%
• **User satisfaction:** 4.2/5 avg rating for "content relevance" (vs. 3.1/5 for collaborative, 3.5/5 for content-based)

**Post-launch Sustainability:**
I established a monitoring dashboard tracking relevance metrics weekly and set up automated alerts for >5% degradation. Over the subsequent 8 weeks in production, gains sustained and improved slightly (**+17% session duration by week 12**) as the model accumulated more training data.

**Broader Impact:**
The hybrid model became the foundation for our personalization infrastructure. The experimentation framework was reused for subsequent tests (notification timing, article summarization quality), and the "relevance score" metric became our team's North Star for content quality decisions.`
        }
      }
    ]
  },
  {
    company: 'Seacan Overseas',
    role: 'Founder\'s Office (Strategy & Operations)',
    location: 'Chandigarh',
    dates: 'June 2023 – November 2023',
    context: 'Early-stage immigration and study abroad startup. Drove go-to-market strategy, built analytics infrastructure, and optimized visa processing workflows.',
    metrics: [
      { value: '20%', label: 'Revenue (QoQ)', trend: 'up' },
      { value: '15%', label: 'Processing Time', trend: 'down' },
      { value: '10+', label: 'University Partnerships' },
      { value: '3.9 → 4.8', label: 'CSAT' }
    ],
    stories: [
      {
        title: 'Market Positioning & Data-Driven Growth Dashboard',
        subtitle: 'Established differentiated positioning and built analytics infrastructure from scratch',
        resumeBullet: 'Drove 20% revenue growth by establishing differentiated go-to-market positioning for target customer segments through competitive and user research.',
        star: {
          situation: `Seacan Overseas, an early-stage immigration startup, operated without clear market positioning or data infrastructure. The business relied entirely on word-of-mouth leads with inconsistent conversion rates and ad-hoc pricing. The founders lacked visibility into core metrics—revenue, lead sources, conversion funnels, or service performance. In a commoditized market where competitors competed primarily on price, Seacan had no defensible differentiator or systematic way to measure what was working.`,
          task: `As part of the Founder's Office, I owned two critical objectives:

• **Define market positioning:** Identify Seacan's unique value proposition through competitive analysis and user research
• **Build measurement infrastructure:** Establish analytics systems to track growth, optimize the client funnel, and enable data-driven decisions

**Success metric:** 20% revenue growth within one quarter while improving unit economics and customer satisfaction.`,
          action: `**1. Discovery & Positioning**

• **Competitive Intelligence:** Analyzed 15+ competitors across pricing models, service offerings, messaging, and customer reviews to map the competitive landscape
• **User Research:** Conducted 25 in-depth interviews with prospective clients (primarily from Tier-2 cities) to understand decision criteria, pain points, and unmet needs
• **Key Insight:** Tier-2 users didn't optimize for lowest price—they valued transparency and process clarity. They wanted to understand timelines, requirements, and next steps, not just the cheapest quote
• **Strategic Repositioning:** Pivoted from price-based competition to positioning Seacan as "your immigration partner offering transparent, step-by-step guidance"—addressing the emotional anxiety and information asymmetry in immigration decisions

**2. Experimentation & Validation**

• **Funnel Design:** Structured a CRM-based pipeline (Inquiry → Consultation → Converted) to standardize tracking and identify drop-off points
• **Message Testing:** A/B tested acquisition messaging—"Apply Now" (transactional) vs. "Transparent Timelines" (trust-based)
• **Result:** Trust-based messaging increased conversion rates by 24%, validating the positioning hypothesis

**3. Analytics Infrastructure**
Built a comprehensive growth dashboard tracking:

• **Acquisition:** Lead source, lead volume, CAC, cost-per-lead by channel
• **Conversion:** Funnel stage progression, conversion rate, consultant performance
• **Monetization:** Revenue, Average Ticket Size (Total Revenue ÷ Converted Clients), package mix, payment status
• **Product Quality:** Processing time, client satisfaction scores, country/visa type distribution
• **Operational Excellence:** Consultant efficiency, time-to-close, bottleneck identification

**4. Adoption:** Established weekly reviews with founders to drive accountability and trained counselors on addressing top customer objections identified through research.`,
          result: `**Business Impact**

• **20.6% QoQ revenue growth**—exceeding target while improving unit economics
• **Conversion rate:** 18% → 26% (+44% relative improvement)
• **Average Ticket Size:** +12%—driven by better pricing discipline and upselling based on customer value segmentation
• **Lead volume:** 2x growth driven by optimized channel allocation and messaging

**Product & Experience**

• **Customer satisfaction:** +25% improvement
• **Processing time:** -15% reduction, enabling faster time-to-value
• **Market position:** Established Seacan as the transparent, customer-centric choice in Tier-2 markets

**Strategic Foundation**

• Created repeatable frameworks for positioning decisions and growth measurement that scaled beyond my tenure
• Enabled data-driven resource allocation, replacing intuition-based decisions with metric-driven prioritization`
        }
      },
      {
        title: 'Visa Process Optimization & Service Delivery',
        subtitle: 'Built direct university partnerships and redesigned visa operations to drive growth',
        resumeBullet: 'Impact: Reduced visa processing time 15% while lifting CSAT from 3.9→4.8/5. Established 10+ university partnerships that improved lead quality 40% and became Seacan\'s scalable expansion blueprint, earning "Best Europe Visa Consultants" recognition.',
        star: {
          situation: `Seacan's visa consulting business faced two compounding growth constraints:
• **No direct university relationships:** We relied entirely on walk-ins and third-party agents, creating slow offer-letter timelines (20+ days), zero authenticity in student verification, and limited brand credibility with premium institutions.
• **Operationally fragmented workflows:** Eight counselors each used ad-hoc processes with no standardization, central tracking, or accountability. Files stalled without clear ownership. Clients called repeatedly asking "where's my visa?" Average processing time: 27 days. CSAT: 3.9/5.

The business was ready to expand into Singapore, Canada, Cyprus, Poland, and Finland—but our current model couldn't scale without breaking.`,
          task: `Design and execute a growth strategy to establish Seacan as a premium consultancy in 5 new destinations by:

• **Building direct university partnerships** to improve lead quality and offer-letter speed
• **Standardizing visa operations** to achieve 15%+ efficiency gains without sacrificing service quality

**Success criteria:** Measurable improvements in processing time, client satisfaction, and partnership-driven lead conversion within 90 days.`,
          action: `**1. Partnership Strategy: Built University Relationships from Zero**

• **Market mapping & targeting:** Analyzed 30+ universities across target destinations, scoring them on partnership openness, annual international intake volume, and brand strength. Prioritized 12 institutions with established agent partnership programs and strong placement rates.
• **Positioned differentiation:** Created partner acquisition collateral—pitch deck highlighting Seacan's 200+ successful placements, student retention data, and proposed co-marketing approach. Critically, I reframed our pitch: rather than "we send you students," we positioned as "we're a quality-controlled pipeline with shared accountability." Proposed transparent SLA dashboards and performance metrics tied to student satisfaction post-enrollment.
• **Negotiated MoUs:** Personally led conversations with 5 universities in month one. Key unlock was offering mutual value: they got verified, counseled applicants; we got priority offer-letter processing (cutting timelines by 20%) and co-branded marketing rights that boosted credibility. Secured 5 partnerships in 30 days, expanded to 10+ within the quarter.

**2. Operational Redesign: Standardized Visa Workflows**

• **Root cause analysis:** Shadowed counselors for a week, mapping every handoff and delay point. Identified three failure modes:
  - Duplicate work: Clients asked for same documents multiple times due to lack of central tracking
  - Unclear ownership: Files stalled between stages with no accountability
  - Zero visibility: Clients had no status transparency, driving 40+ inquiry calls/day

• **Designed five-stage workflow:** Created standardized process: Document Collection → Verification → Embassy Submission → Response Tracking → Client Delivery. Each stage had defined SLAs, ownership rules, and quality gates.
• **Built lightweight tracking system:** Chose color-coded Google Sheet over CRM—team already fluent in Sheets, zero implementation lag, and sufficient for 50-file weekly volume. Added auto-status formulas and conditional formatting so anyone could spot bottlenecks instantly.
• **Enabled client transparency:** Integrated automated SMS updates at each stage transition. Clients now received proactive status updates rather than calling for information. Inquiry volume dropped 30%, freeing counselor capacity for high-value consultation.
• **Change management:** The hardest part was counselor adoption—they initially saw standardization as bureaucracy that would slow them down. I reframed it as autonomy through clarity: the tracker gave them data to push back on unrealistic client timelines and made their performance objectively visible (previously hidden). Ran daily 15-minute standups focused purely on blockers, not status theater. Within two weeks, 100% adoption.`,
          result: `**Partnership Outcomes**

• **10+ direct university partnerships** established within 90 days (vs. zero previously)
• **Offer-letter turnaround** reduced 20% through priority processing lanes
• **Lead quality** improved 40% measured by application-to-enrollment conversion rate
• **Premium positioning unlocked:** partnerships enabled marketing collateral showcasing university endorsements, differentiating Seacan from agent-dependent competitors

**Operational Outcomes**

• **Visa processing time:** 27 days → 23 days (15% reduction)
• **Client satisfaction:** 3.9/5 → 4.8/5 (+23% improvement)
• **On-time submission rate:** 69% → 87% (+18pp)
• **Client inquiry volume** dropped 30%, reallocating counselor time to consultations that drove upsells

**Strategic Impact**

• **Combined partnership + workflow model** became Seacan's expansion blueprint, replicated for UK/Australia market entry in subsequent quarters
• **Company earned** "Best Europe Visa Consultants in Chandigarh" industry recognition within 6 months
• **Demonstrated that operational excellence** and strategic partnerships aren't separate workstreams—they're compounding growth levers when executed in parallel`
        }
      }
    ]
  },
  {
    company: 'Apple',
    role: 'Business Analyst (Contract)',
    location: 'Washington, DC & Cupertino, CA',
    dates: 'November 2021 – May 2023',
    context: 'Supported Apple TV+, Apple Music, and Apple Arcade with KPI forecasting, content analytics, and growth insights across 100M+ users globally.',
    metrics: [
      { value: '20%', label: 'Forecast Error', trend: 'down' },
      { value: '30M+', label: 'Sessions Analyzed' },
      { value: '5', label: 'Content Launches Influenced' },
      { value: '15+', label: 'Regions Covered' }
    ],
    stories: [
      {
        title: 'KPI Forecasting Redesign Using DeepAR',
        subtitle: 'Built Apple\'s first country-level forecasting system using neural time-series modeling',
        resumeBullet: 'Impact: Built Apple\'s first country-level forecasting system for TV+, Music, and Arcade, improving prediction accuracy by 20% across 15 countries—replacing broad regional estimates with precise, country-specific forecasts that enabled localized marketing planning.',
        star: {
          situation: `Apple Media Products planned marketing budgets and campaigns using regional forecasts (like "Asia-Pacific" or "Europe") for three key metrics: how many users qualify for offers, how many redeem them, and how many sign up organically.
**The problem was simple: Averages hide reality.** A regional forecast might predict 100K signups for Asia-Pacific, but that number masked huge differences—student plan signups surged in September in the US but not in Japan; Diwali drove redemptions in India that didn't happen in Singapore; local partnership campaigns created spikes the model couldn't see.
Marketing teams often missed their targets by 25-30% because forecasts were too broad. They'd over-invest in some countries, under-invest in others, and had no visibility into what was actually driving performance locally.
**Why didn't country-level forecasts exist before? Data quality problems.** Each country reported metrics differently, smaller markets had limited history, and data lived in fragmented systems across three product lines. Previous attempts to build granular forecasts failed because the foundation wasn't solid.`,
          task: `Build Apple's first country-specific forecasting system to:

• **Improve forecast accuracy** by at least 20% (from ~25% average error)
• **Give marketing teams country-level predictions** instead of regional averages
• **Handle countries with limited historical data** while capturing local patterns like holidays and student seasons

**Success meant** proving the forecasts were more accurate through testing, getting marketing and finance teams to trust them, and having regional teams actually use them for planning.`,
          action: `**1. Fixed the Data Foundation First**
• Spent three weeks cleaning two years of historical data across 15 countries and three products. Worked with regional data teams to standardize how each country reported metrics—this wasn't glamorous work, but without it, any model would be garbage-in, garbage-out.
• Calculated how wrong existing regional forecasts were (about 25% error on average) to create a clear "before" benchmark.

**2. Chose the Right Forecasting Approach**
Tested three options:
• **Traditional statistical models:** Couldn't handle complex patterns like September student spikes or Diwali effects
• **Standard forecasting tools:** Struggled when countries had different trends and limited ability to learn from each other
• **DeepAR (neural forecasting):** Could learn patterns across all countries simultaneously

**Why DeepAR won:** Imagine teaching someone about seasons. If you only showed them summer in Singapore (hot year-round), they'd never learn what winter means. But if you showed them data from 15 countries, they'd learn "winter = December-February in northern markets, June-August in southern ones."
DeepAR works the same way—it learns from all 135 time-series at once (3 metrics × 15 countries × 3 products). So even if Singapore only had 8 months of clean data, the model could apply seasonality patterns it learned from the US or UK.
**The other critical feature:** Instead of saying "50,000 signups will happen," DeepAR said "50,000 signups, give or take 8,000." Marketing teams loved this because they could plan for the range, not bet everything on a single number.

**3. Built and Validated the System**
Created an automated system in Python that:
• Retrained the model weekly with latest campaign data (marketing calendars changed frequently)
• Generated forecasts for all countries and products
• Produced confidence ranges, not just single predictions

Tested it by running the model on 6 quarters of historical data—basically asking "if we'd used this model in the past, how accurate would it have been?" Compared results to actual performance and old regional forecasts.

**4. Got Stakeholders on Board**
Marketing VPs were skeptical. They'd seen fancy models fail before and trusted their intuition about their markets. I addressed this by:
• **Showing the model's predictions** for periods they remembered well (like the iPhone bundle promotion in Q3 2021) and proving it would've been more accurate
• **Explaining that the confidence ranges showed uncertainty**—they appreciated knowing how confident we were, not just getting a number
• **Being honest about limitations** (new product launches, sudden market changes) so they knew when to question the forecasts

Created documentation explaining how the model worked in plain language and trained 4 regional analytics teams to use it.`,
          result: `**Forecast Performance**

• **Improved accuracy by 20%:** Average prediction error dropped from 25% to 20% across all metrics and countries
• **Covered 135 time-series:** 3 metrics × 15 countries × 3 products, all updated weekly
• **Delivered predictions with confidence ranges** so teams could plan for best/worst case scenarios

**Business Impact**

• **Enabled country-specific marketing planning:** Teams replaced "spend X on Asia-Pacific" with "spend X in India for Diwali, Y in Japan for student season"—targeting budget where it would actually perform
• **Improved planning confidence:** Finance used the confidence ranges to set realistic buffers instead of blanket 30% cushions
• **Became the standard forecasting system** across Apple Media Products after validation by leadership

**What Made It Work**
The accuracy improvement mattered, but the **real unlock was trust**. Marketing teams actually changed how they planned campaigns because they believed the forecasts. That only happened because I prioritized explaining the model clearly, being transparent about uncertainty, and proving it worked on their real past decisions.`
        }
      },
      {
        title: 'Apple TV+ Content Strategy & Audience Insights',
        subtitle: 'Analyzed 30M+ viewing sessions to guide content prioritization and regional launches',
        resumeBullet: 'Impact: Built standardized engagement analysis framework across 20+ countries, identifying 10+ high-performing titles and regional breakout hits that informed 5 major Apple TV+ content launch decisions and improved content team\'s market-level planning precision.',
        star: {
          situation: `In 2022, Apple TV+ was scaling rapidly across 20+ international markets with an expanding content slate. The content and marketing teams faced a critical visibility problem: existing analytics were global aggregates that masked country-specific performance patterns.
**Leadership couldn't easily answer questions like:**
• "Which shows are resonating in Japan vs. the US?"
• "Should we invest in marketing Show X globally or focus on specific countries?"
• "Are we prioritizing shows with high viewership but weak retention?"

**What was missing:** A consistent, repeatable framework to benchmark content performance across countries using engagement quality (not just volume) and surface regional breakout hits that warranted localized investment.`,
          task: `Design and execute an audience insights framework to:

• **Establish standardized engagement KPIs** that captured content quality across countries (beyond vanity metrics like total views)
• **Identify high-performing titles** and emerging regional hits from 30M+ viewing sessions across 20+ countries
• **Deliver quarterly insights** that informed content launch prioritization and regional marketing planning

**Success meant** providing analysis sharp enough that content and marketing teams could confidently answer "where should we invest?" with data backing their decisions.`,
          action: `**1. Designed Engagement-Quality Framework**
Partnered with the analytics team to move beyond total views and define three KPIs that measured content stickiness and audience loyalty:
• **Completion Rate** = Episodes fully watched ÷ Episodes started × 100
  - Captured whether viewers found content compelling enough to finish
  - **High completion = strong content-market fit**

• **Repeat Viewership** = Users who returned to rewatch ÷ Total viewers × 100
  - Measured loyalty and word-of-mouth potential
  - **High repeat = cultural resonance and fandom potential**

• **Audience Growth Rate** = (New viewers this period ÷ Prior period viewers × 100) - 100
  - Tracked organic momentum and whether shows were gaining traction
  - Separated "launch spike" from "sustained growth"

**Why these metrics mattered:** Total views alone were misleading. A show could have high views from heavy marketing but poor completion (viewers bouncing after episode 1). Our framework surfaced whether shows were working in each country, not just being watched.

**2. Analyzed 30M+ Sessions to Surface Country-Level Patterns**
Analyzed viewing data across 20+ countries, segmenting by title, country, and time period to identify performance patterns and regional breakouts.
**Key insights surfaced:**
• **Pachinko:** 87% completion rate in Japan vs. 65% globally—clear signal of cultural resonance warranting Japan-specific marketing investment
• **Severance:** 42% repeat viewership in US indicating strong fandom and potential for franchise expansion
• **Ted Lasso:** Consistent 75%+ completion across all countries—validated global appeal and justified universal marketing approach

Identified 10+ titles with either strong cross-country performance or regional breakout potential.

**3. Translated Analysis into Actionable Insights**
Created quarterly "TV+ Content Review" reports and newsletters consolidating findings for content strategy and marketing teams. Each report included:
• **Performance rankings by country** with clear KPI benchmarks
• **Regional breakout highlights** (e.g., "Pachinko over-indexing in Japan—consider localized campaigns")
• **Content patterns and opportunities** (e.g., "Korean-language content shows cross-cultural appeal")

Presented findings to content planning and regional marketing teams to inform launch prioritization, localization decisions, and budget allocation discussions.

**4. Established Repeatable Process**
Documented the analysis methodology and KPI definitions so regional teams could run consistent benchmarking quarter-over-quarter. This created shared language across teams—everyone understood what "high engagement" meant using the same metrics.`,
          result: `**Analytical Impact**

• **Informed 5 major Apple TV+ content launches** with data-backed engagement insights across 20+ countries
• **Identified 10+ top-performing titles** using standardized engagement KPIs, surfacing regional breakout hits like Pachinko (Japan) and Severance (US)
• **Analyzed 30M+ viewing sessions** to benchmark performance and provide country-level granularity leadership previously lacked

**Framework Adoption**

• **Established engagement-quality metrics** (completion, repeat viewership, growth rate) that became standard benchmarks for quarterly content reviews
• **Improved market-level planning precision** by replacing global aggregates with country-specific performance data, enabling targeted launch and marketing decisions
• **Created repeatable quarterly insight process** adopted by content strategy teams for ongoing performance tracking

**Strategic Contribution**
Shifted content evaluation from "how many people watched?" to "how well is this working in each country?"—giving teams the visibility to make smarter regional investment and localization decisions. The framework proved that data-driven content insights could operate at Apple's scale while remaining actionable for regional teams.`
        }
      },
      {
        title: 'Apple Music Search Behavior Analysis',
        subtitle: 'Identified 10% growth potential by analyzing search-to-play conversion gaps',
        resumeBullet: 'Impact: Analyzed 5M+ search queries to uncover 10% content consumption growth potential, identifying high-intent search patterns with low conversion that informed Apple Music\'s discovery feature roadmap and content strategy for emerging genres.',
        star: {
          situation: `Apple Music had a strong music catalog, but user feedback suggested people were struggling to find what they actually wanted—especially for emerging genres and lesser-known artists. Users were searching, but not discovering.
The product team suspected there was a disconnect between what users searched for and what they actually ended up playing, but no one had measured how big the problem was or identified where specifically the discovery experience was breaking down.`,
          task: `Analyze search behavior to:

• **Identify where users hit friction** in music discovery (searching but not finding)
• **Quantify how much listening growth** we were leaving on the table
• **Provide specific, actionable insights** to help prioritize discovery improvements and content investments

**Success meant** finding patterns clear enough that product and content teams could confidently decide what to build and where to invest.`,
          action: `**1. Found Where Search Was Failing Users**
Analyzed 5.2 million search queries over one quarter, tracking what happened after each search: Did users click results? Did they actually play something? This wasn't just about counting searches—it was about understanding search intent vs. outcome.
• **Discovered that approximately 620,000 searches (~12% of total volume) showed clear intent but didn't result in any plays.** These weren't casual browsing—users knew what they wanted but couldn't find it.

**2. Identified Which Music Categories Had the Biggest Gaps**
Dug deeper to understand what users were searching for but not finding:
**Emerging genres with demand but poor discovery:**
• **"Punjabi indie":** 140,000 searches in the quarter but only 11% of searchers clicked on results—despite Apple Music having this content
• **"Lofi beats" and "chill instrumental":** Categories with millions of plays overall, but when users specifically searched for them, only 9-13% found and played something

The platform had the music. Search just wasn't connecting people to it effectively.
**Calculated what we were missing:** By comparing search patterns with listening behavior, I found these gaps represented about 830,000 missed plays per quarter. Since these categories had roughly 8 million total plays, fixing the discovery problem could unlock approximately 10% more listening in these areas.

**3. Spotted a High-Value User Pattern**
Found something particularly interesting: around 120,000 users searched for the same artist multiple times within 48 hours—a clear sign they wanted something specific but hadn't found it yet.
Looking at what eventually worked for these users, I noticed that when they finally discovered relevant curated playlists (through other means like browsing or recommendations), they engaged at a 32% rate compared to just 13% for casual searchers. **This 2.4x difference showed that getting these motivated users to the right playlists faster could dramatically improve their experience.**

**4. Turned Findings into Clear Recommendations**
Packaged the analysis into specific opportunities for the product and content teams:
**For product/discovery team:**
• Improve how search understands emerging genre terms like "Punjabi indie" and "lofi beats"
• Test showing curated playlists to users who search repeatedly for the same artist
• Adjust how lesser-known artists appear in search results for niche genres

**For content strategy team:**
• Prioritize playlist creation in high-search, low-conversion categories
• Focus curation efforts on emerging genres where demand exists but discovery is weak

Presented findings with specific numbers—how many users were affected, how much listening we could unlock, and which categories to prioritize first.`,
          result: `**Growth Opportunity Identified**

• **Quantified 10% growth potential** in content consumption by finding where search intent wasn't converting to plays
• **Located 620K high-intent searches** (~12% of volume) that weren't leading to music discovery, with clear patterns by genre
• **Identified 120K highly motivated users** who showed 2.4x higher engagement potential when shown the right playlists

**Strategic Impact**

• **Shaped discovery roadmap priorities:** Analysis gave the product team data-backed direction on which discovery improvements would have the biggest impact—better search understanding for emerging genres, personalized playlist placement for repeat searchers, and improved surfacing of mid-tier artists
• **Informed content investment decisions:** Content team used findings to prioritize playlist curation for emerging categories (Punjabi indie, lofi, chill instrumental) where user demand was proven but underserved
• **Established ongoing measurement approach:** Created a framework for tracking search-to-play conversion as a key health metric for discovery effectiveness

**Why It Mattered**
The analysis moved the conversation from "we should improve search" to "here's exactly where search is failing, for how many users, and how much listening we're missing out on." This specificity helped teams prioritize confidently—they knew which problems to solve first and could estimate the potential impact of fixing them.`
        }
      }
    ]
  },
  {
    company: 'Dfuse Tech',
    role: 'Associate Analytics Consultant (Data Science - Research)',
    location: 'Sterling, VA',
    dates: 'August 2020 – November 2021',
    context: 'Junior Data Scientist building ML solutions for security analytics, predictive maintenance, and marketing optimization.',
    metrics: [
      { value: '30%', label: 'False Positives', trend: 'down' },
      { value: '93%', label: 'Classification Accuracy' },
      { value: '35.7%', label: 'RUL Prediction', trend: 'up' },
      { value: '25K+', label: 'Profiles Analyzed' }
    ],
    stories: [
      {
        title: 'Insider Threat Detection System',
        subtitle: 'Built anomaly detection capability using machine learning on behavioral patterns',
        resumeBullet: 'Impact: Designed and validated ML-based insider threat detection approach using behavioral and technical feature analysis on 20GB of system logs, demonstrating improved anomaly detection over rule-based systems—leading to company adoption and integration into Dfuse\'s security product offering.',
        star: {
          situation: `Dfuse Tech's security product relied on rule-based alerts for insider threat monitoring. Client security teams reported that rigid, signature-based rules generated excessive false positives, creating alert fatigue and delaying response to actual threats. The system couldn't adapt to nuanced behavioral patterns that might indicate insider risk.

**The fundamental problem:** Traditional cybersecurity tools struggle to detect insider threats because malicious indicators are often spread across multiple datasets, hidden among thousands of normal activities, or separated by weeks of inactivity. Rule-based systems either flag too many normal behaviors or miss subtle anomalies entirely.

**A critical product constraint:** Different organizations have different risk tolerances—financial institutions might flag any unusual access immediately, while creative agencies might tolerate more behavioral variation. A one-size-fits-all threshold approach wouldn't work across diverse client needs.
The data science team was tasked with exploring whether machine learning could provide adaptive, behavior-aware threat detection that clients could calibrate to their security posture.`,
          task: `As a Junior Data Scientist, my responsibility was to:

• **Research unsupervised anomaly detection methods** that could learn from behavioral and technical patterns without requiring labeled attack data
• **Build a working capability** demonstrating improved detection versus rule-based approaches
• **Design a flexible scoring system** that let organizations tune sensitivity to their risk tolerance
• **Validate the approach rigorously** enough to inform a production decision

**Success meant** proving that ML-based detection could identify insider threats across different activity types while giving clients control over what constituted an "alert-worthy" anomaly.`,
          action: `**1. Analyzed System Logs to Understand Insider Behavior**
Worked with the CERT r3.2 dataset—a 20GB synthetic dataset simulating 1,000 enterprise users across 500 days with embedded insider threat scenarios. This industry-standard dataset includes realistic system logs (logons, device usage, file transfers) plus synthetic malicious activities for validation.
Conducted exploratory analysis across five log types to understand what patterns correlate with insider risk:
• **Logon/Logoff activity:** After-hours logins, unusual login timing patterns
• **Device usage:** Removable drive connections/disconnections, frequency patterns
• **File transfers:** Volume and timing of files copied to removable media
• **User-PC relationships:** Which users accessed which machines (legitimate vs. unusual)
• **Psychometric scores:** Big 5 personality traits (OCEAN model) as risk indicators

The goal was identifying features that would flag genuine insider threats (data exfiltration, unauthorized access) while ignoring harmless variations in normal work patterns.

**2. Engineered Behavioral and Technical Features**
Extracted meaningful features from raw log data, creating separate feature sets for different activity types:
**Logon/Logoff features (behavioral):**
• Minimum, maximum, mode, and average login/logout times
• Captured after-hours access patterns and timing anomalies

**Device/File Transfer features (technical + behavioral):**
• Mode and maximum file transfers per user
• Device connection/disconnection timing patterns
• Combined to identify unusual data exfiltration behavior

**User-PC relationship features (technical):**
• Number of unique PCs accessed per user
• Frequency of access to non-assigned machines
• Users logging into multiple machines (threshold: >40 interactions flagged for review)

**Psychometric features (behavioral):**
• OCEAN personality scores as baseline risk indicators
• Higher risk profiles: low Conscientiousness, high Neuroticism

**Why this multi-signal approach mattered:** Insider threats rarely show up in just one activity type. Someone exfiltrating data might have normal login times but unusual file transfer volumes. Combining signals across activity types catches sophisticated threats that single-metric systems miss.

**3. Built ML Approach with Configurable Anomaly Scoring**
Chose **Isolation Forest** as the core algorithm because:
• **Unsupervised learning:** Doesn't require labeled examples of malicious behavior (insider attacks are rare and expensive to label)
• **Learns "normal" patterns:** Identifies deviations without needing to know what attacks look like
• **Produces anomaly scores:** Ranks users by suspiciousness rather than binary "threat/not threat"

Implemented flexible, multi-model architecture:
• Trained separate Isolation Forest models for each activity type (logon, device, psychometric, user-PC relationships)
• Each model generated anomaly scores for users based on that activity dimension
• Combined models to create comprehensive threat rankings

**Critical design decision—configurable thresholds:**
Rather than hardcoding what counts as "anomalous," I made thresholds adjustable so different organizations could calibrate sensitivity:
• The model assigns each user an anomaly score (negative scores indicate outliers)
• Organizations set their own thresholds for investigation (e.g., "flag all users with score < -0.05")
• Activity-specific thresholds allow nuanced policies (e.g., strict file transfer monitoring, lenient login timing)

**Why configurability mattered for the product:** A financial services client might investigate any user with unusual PC access patterns. A research lab might only care about massive file transfers. Static thresholds force one approach; configurable scoring lets clients match detection to their actual risk tolerance and operational culture.

**4. Validated Across Multiple Activity Dimensions**
Tested the approach using CERT's embedded threat scenarios—synthetic cases where researchers simulated data theft, unauthorized access, and policy violations.
**Validation approach:**
• Ran separate models for logon/logoff, device/file transfers, psychometric indicators, and user-PC relationships
• Generated ranked lists of suspicious users for each activity type
• Created combined threat rankings synthesizing all signals
• Visualized anomaly score distributions across different threshold configurations

**Key findings:**
• Successfully identified users with anomalous patterns across activity types
• Different activity models flagged different threat profiles (some users had suspicious login patterns, others had file transfer anomalies)
• Combined scoring caught users with multi-dimensional suspicious behavior
• Configurable thresholds allowed testing different sensitivity levels without retraining

Documented the complete methodology: feature engineering process, model architecture, threshold configuration options, and interpretation guidelines for security analysts.`,
          result: `**Validation Success**

• **Proved ML viability** for adaptive insider threat detection using unsupervised learning on behavioral patterns
• **Demonstrated multi-dimensional detection** across logon activity, device usage, file transfers, and user-PC relationships
• **Validated configurable threshold approach** allowing organizations to tune sensitivity without model retraining
• **Created ranking system** that prioritized investigation of highest-risk users rather than binary alerts

**Business Impact**

• **Adopted by senior management** for production development after reviewing validation results
• **Integrated into Dfuse's security product offering** as a capability sold to clients, with configurable anomaly scoring becoming a key product differentiator
• **Enabled client customization** where different organizations could set thresholds matching their risk tolerance (high-security environments vs. lower-risk contexts)
• **Became foundation for Dfuse's ML-based threat detection approach,** addressing the core problem of rule-based systems that either overwhelm analysts with false positives or miss subtle threats

**Technical Contribution**
Demonstrated that unsupervised learning (Isolation Forest) with multi-dimensional feature analysis and configurable scoring could effectively detect insider threats without requiring labeled attack data—a critical advantage since real insider attacks are rare and expensive to label.
The multi-model approach showed that **different insider threat types have different behavioral signatures:** data exfiltration shows up in file transfers, reconnaissance appears in unusual PC access patterns, and after-hours activity signals in login timing. Combining signals across dimensions caught sophisticated threats that single-metric systems would miss.
The configurable threshold design solved a **fundamental product challenge:** security needs vary dramatically across industries and organizational cultures. Rather than forcing all clients to accept the same sensitivity level, the system empowered security teams to calibrate detection to their specific context.`
        }
      },
      {
        title: 'Aircraft Engine Predictive Maintenance',
        subtitle: 'Achieved 93% failure classification accuracy using sensor data from turbofan engines',
        resumeBullet: 'Impact: Built predictive maintenance capability using NASA turbofan engine dataset, achieving 93% failure classification accuracy and 35.7% improvement in remaining useful life prediction—validating ML approach that Dfuse later adopted for aerospace predictive maintenance offerings.',
        star: {
          situation: `Aerospace maintenance teams face a costly dilemma: run engines until failure (risking unplanned downtime and safety issues) or replace parts prematurely (wasting remaining useful life and increasing costs). Traditional maintenance relies on fixed schedules or reactive warning indicators, neither of which optimizes for actual engine health.
**The opportunity:** Turbofan engines generate continuous sensor data (temperature, pressure, vibration) throughout their lifecycle. This data contains degradation signals that could predict failures before they happen—if analyzed correctly.
Dfuse Tech's data science team was exploring predictive maintenance as a capability to offer aerospace clients. The challenge was proving that machine learning could reliably predict both when engines would fail (classification) and how much useful life remained (regression) using sensor patterns alone.`,
          task: `As a Junior Data Scientist, my responsibility was to:

• **Build a dual-model predictive maintenance capability:** failure risk classification and remaining useful life (RUL) prediction
• **Use NASA's CMAPSS FD001 dataset** (100 turbofan engines with multivariate sensor readings across operational cycles)
• **Validate that ML could achieve sufficient accuracy** to support maintenance decision-making
• **Document the approach** for potential productionization

**Success meant** proving the technical feasibility: could sensor data predict failures accurately enough to justify shifting from scheduled to condition-based maintenance?`,
          action: `**1. Understood the Data and Business Problem**
Analyzed the NASA CMAPSS dataset containing 100 engines running until failure, each with 21 sensor measurements (temperatures, pressures, fan speeds) recorded at every operational cycle. The dataset simulates realistic engine degradation under different operating conditions.
**The dual prediction challenge:**
• **Classification:** Flag engines entering high-risk zone (within 50 cycles of failure) so maintenance can be scheduled
• **Regression:** Predict exact remaining useful life (RUL) in cycles so teams know when to intervene, not just *if*

**2. Engineered the RUL Target Through Experimentation**
Calculated RUL for each observation as (max_cycle - current_cycle) to create the regression target. But initial model performance was poor (RMSE 31.95).
**Discovered the problem:** Early in an engine's life, all sensor readings are flat—no degradation signal exists yet. But these early observations had RUL values like 300+ cycles, which the model tried to learn from. This added pure noise since there was nothing to learn from non-degrading engines.
**The solution—RUL clipping:** Capped RUL at 125 cycles, focusing training only on the meaningful degradation zone where sensor patterns actually predict failure. Observations earlier than 125 cycles from failure were labeled as "healthy" (RUL = 125).
**Why this mattered:** Maintenance teams don't need precise RUL predictions 300 cycles out—they need accurate warnings as failure approaches. Clipping focused the model on the actionable prediction window.
**Impact:** This single insight improved RMSE from 31.95 to 21.9—approximately 31% error reduction—by aligning the model with the actual business use case.

**3. Built Classification Model for Failure Risk**
Created binary labels: engines within 50 cycles of failure = "high risk," beyond 50 cycles = "healthy." This threshold represents the realistic planning window for scheduling maintenance interventions.
Trained and compared two ensemble methods:
• **Random Forest:** Good baseline, handles non-linear sensor relationships
• **XGBoost:** Gradient boosting for better performance on complex patterns

Used 16 key sensor features showing the strongest degradation signals. Tuned hyperparameters through cross-validation to optimize precision-recall balance—false negatives (missing actual failures) are more costly than false positives (unnecessary inspections).

**4. Built Regression Model for RUL Prediction**
Designed SVR (Support Vector Regression) model on the clipped RUL target:
**Feature engineering:**
• Applied MinMax scaling to normalize sensor ranges
• Created 2nd-order polynomial interactions to capture non-linear degradation patterns (temperature × pressure relationships, etc.)
• Selected top 37 features through iterative testing to balance predictive power against overfitting

**Why SVR:** Support Vector Regression handles high-dimensional sensor data well and is robust to noise—critical since real-world sensor readings contain measurement errors and environmental variations.
Validated using RMSE (prediction accuracy in cycles) and R² (how much variance the model explains).

**5. Validated Approach Rigorously**
Tested both models on held-out engines never seen during training—simulating real-world deployment where the model must predict on new engines, not just training examples.
Compared performance against baseline approaches (mean RUL prediction, simple linear regression) to quantify improvement.`,
          result: `**Model Performance**
**Classification (Failure Risk Detection):**
• **XGBoost achieved 93% accuracy** (95.5% on validation set) in identifying engines within 50 cycles of failure
• **Successfully flagged high-risk engines** with sufficient lead time for maintenance scheduling

**Regression (RUL Prediction):**
• **RMSE:** 20.54 cycles (average prediction error)
• **R²:** 0.756 (model explains 75.6% of RUL variance)
• **35.7% error reduction** compared to baseline prediction methods

**Technical Contribution**
The RUL clipping insight demonstrated that aligning ML targets with business use cases matters as much as algorithm selection. By focusing the model on the actionable prediction window (final 125 cycles), accuracy improved dramatically—teaching me that effective ML for product applications requires understanding when predictions need to be accurate, not just *that* they're accurate.
The dual-model approach showed that predictive maintenance needs both classification (is this engine high-risk?) and regression (exactly when will it fail?)—different stakeholders use different predictions. Operations teams want yes/no risk flags; maintenance planners need precise timing for parts procurement.

**Business Validation**
**Validated ML feasibility for predictive maintenance:** Demonstrated that sensor data alone could predict turbofan failures with sufficient accuracy to support condition-based maintenance—replacing fixed schedules or reactive approaches.
**Adopted by Dfuse:** The capability was later integrated into Dfuse's predictive maintenance offerings for aerospace clients, proving that the research approach translated to commercial value.
**Key insight for stakeholders:** The work showed that shifting from "replace every X cycles" to "replace when sensors indicate degradation" could optimize maintenance costs while maintaining safety—engines aren't replaced too early (wasting useful life) or too late (risking failure).`
        }
      },
      {
        title: 'Customer Segmentation & Marketing Optimization',
        subtitle: 'Analyzed customer conversion patterns to identify high-value segments',
        resumeBullet: 'Impact: Built comprehensive customer segmentation analysis using PySpark and Tableau across 11K+ customer profiles, identifying high-conversion customer segments and behavioral patterns that could inform targeted marketing strategies—demonstrating data-driven approach to optimizing marketing spend by 12-15%.',
        star: {
          situation: `Banks running term deposit marketing campaigns face a common challenge: broadcasting the same message to all customers regardless of their likelihood to convert. This spray-and-pray approach wastes marketing resources on low-probability prospects while potentially under-investing in high-value segments.
**The fundamental question:** Can we identify which customer types are most likely to open term deposits, so marketing can focus resources where they'll actually work?
Traditional approaches relied on simple demographic rules (age, education, job type), but these often missed behavioral signals that better predict conversion.`,
          task: `**Analyze customer behavior patterns to:**

• **Identify which customer segments** show highest term deposit conversion rates
• **Understand what distinguishes** high-conversion from low-conversion customers
• **Quantify the potential efficiency gains** from targeted vs. broadcast marketing
• **Build a framework** for segment-based marketing prioritization

**Success meant** finding actionable patterns that could shift marketing from "contact everyone" to "contact the right people."`,
          action: `**1. Analyzed Large-Scale Customer Data Using PySpark**
Worked with banking customer data containing 11,162 records across 17 features, combining:
• **Financial data:** Account balance, existing loans, credit status
• **Demographic info:** Age, education, job type, marital status
• **Campaign history:** Previous contacts, outcomes, call duration

Used PySpark for scalable data processing—essential for handling banking datasets where production systems might analyze millions of customers. Built SQL queries to explore patterns across customer segments and performed comprehensive exploratory analysis to understand the data structure.

**2. Discovered Behavioral Signals Trump Demographics**
Through systematic analysis, uncovered a critical insight: traditional demographic factors (education, marital status) had weak predictive power for conversion. What actually mattered for predicting customer response:
**Strong conversion indicators:**
• **Call duration:** Customers who stayed engaged longer during calls showed genuine interest and converted at significantly higher rates
• **Prior campaign response:** Customers who responded positively to previous campaigns demonstrated 3-5x higher conversion likelihood
• **Financial health:** Customers with positive account balances and no outstanding loans were substantially more receptive to term deposit offers

**Weak conversion indicators:**
• **Education level:** tertiary vs. secondary education made minimal difference in conversion rates
• **Marital status:** married vs. single showed no meaningful pattern
• **Age:** broad age ranges displayed similar conversion behavior

**Why this matters strategically:** Marketing teams typically target based on demographics because it's easy to segment. But if behavioral signals (engagement quality, financial health, past response patterns) predict conversion better, the entire targeting strategy needs to shift from "who they are" to "how they behave."

**3. Identified Three Distinct Customer Segments**
Created segmentation based on the behavioral and financial signals that actually predicted conversion success:
**Segment 1 - High-Value Converters:**
• **Account balances exceeding $1,000**
• **No outstanding personal or housing loans**
• **History of positive campaign interactions** or extended call engagement
• **Conversion rate:** 18% higher than baseline
• **Key characteristic:** Financially stable with demonstrated interest signals

**Segment 2 - Moderate Opportunity:**
• **Mixed financial indicators** (some debt, moderate balances)
• **Limited prior campaign exposure** or neutral responses
• **Conversion rate:** Near overall average
• **Key characteristic:** Requires more targeted messaging to convert

**Segment 3 - Low Propensity:**
• **Zero or negative account balances**
• **Multiple outstanding loans** across categories
• **Consistently ignored or declined** previous campaign attempts
• **Conversion rate:** Under 10%
• **Key characteristic:** Clear disinterest signals combined with financial constraints

**4. Quantified the Business Opportunity**
Calculated potential efficiency gains from behavioral segmentation:
**Pattern discovered:** High-propensity segments (Segment 1 and upper-tier Segment 2) represented approximately 40% of all successful term deposits while requiring significantly fewer contact attempts per conversion. Meanwhile, low-propensity segments consumed substantial marketing resources with conversion rates below 10%.
**The efficiency opportunity:**
• **Reallocating marketing spend** away from persistent non-converters (Segment 3)
• **Focusing intensive outreach** on proven high-engagement customers (Segment 1)
• **Maintaining moderate contact** with middle tier (Segment 2)

**Result:** Analysis showed this targeted approach could reduce overall marketing contact volume—and associated costs—by 12-15% while maintaining equivalent or better conversion numbers.
**The strategic shift:** Stop spending resources on customers showing clear disinterest signals; reallocate to those demonstrating engagement and financial capacity.

**5. Built Visual Analytics in Tableau**
Created interactive dashboards to make patterns immediately actionable for marketing teams:
• **Customer distribution by employment type** with deposit contribution overlays
• **Financial health correlation** with conversion likelihood
• **Account balance patterns** across demographic categories
• **Loan status interaction effects** (housing + personal loan combinations)
• **Campaign outcome patterns** by customer segment

These visualizations revealed which segments contributed disproportionately to successful deposits relative to their population size—making the targeting opportunity visually obvious to business stakeholders.`,
          result: `**Key Insights Delivered**
• **Identified behavioral-based segmentation** that outperformed demographic targeting, with high-propensity segments showing 18% higher conversion rates
• **Mapped contribution patterns:** High-engagement, financially healthy customers drove approximately 40% of total deposit volume despite representing a smaller customer population
• **Quantified targeting efficiency:** Analysis demonstrated that focusing marketing resources on high and moderate-propensity segments could reduce spend 12-15% while maintaining conversion volumes

**Strategic Framework Created**
Delivered actionable segmentation model showing that effective bank marketing should:
• **Prioritize behavioral signals over demographics:** Call engagement duration and quality indicate genuine interest; prior positive campaign response predicts future conversion; financial health correlates with receptiveness.
• **Implement tiered contact strategies:** High-propensity segments receive aggressive multi-channel follow-up; moderate segments get targeted messaging; low-propensity segments get minimal contact to reduce wasted spend.
• **Use financial constraints as early filters:** Excluding customers with negative balances and multiple active loans early preserves budget for higher-probability prospects.

**Technical Approach Demonstrated**
Showed that combining PySpark for scalable data processing with Tableau for business-facing visualization enables sophisticated customer analytics that remain accessible to marketing stakeholders. The segmentation framework is replicable across other campaign optimization challenges—demonstrating product thinking around how analytical insights translate into operational decisions.

**Core Learning**
The most valuable customer segments aren't determined by population size or traditional demographics—they're defined by behavioral engagement signals and financial capacity. Marketing efficiency comes from recognizing which customers your offer genuinely serves, then concentrating resources accordingly rather than spreading them uniformly.
This analysis demonstrated that data-driven segmentation can transform marketing from expense center to precision tool—but only when you measure what actually predicts behavior, not just what's easy to segment.`
        }
      }
    ]
  }
];
