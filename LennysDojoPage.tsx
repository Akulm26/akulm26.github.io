import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Mail } from 'lucide-react';

interface LennysDojoPageProps {
    onBack: () => void;
}

const LennysDojoPage: React.FC<LennysDojoPageProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 shadow-sm">
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <button onClick={onBack} className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors">
                        <ArrowRight className="rotate-180" size={18} />
                        <span className="font-medium">Back to Portfolio</span>
                    </button>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akulsuhailmalhotra@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-6 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all">
                        Get in Touch
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-4">
                            Lenny's Dojo
                        </h1>
                        <p className="text-2xl md:text-3xl text-text-secondary mb-6">PM Interview Coach powered by Podcast Intelligence</p>
                        <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
                            {['React', 'TypeScript', 'Supabase', 'Google Gemini', 'Edge Functions', 'PostgreSQL'].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-bold">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-8">
                            <a
                                href="https://lennysdojo.lovable.app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-xl hover:shadow-accent/30"
                            >
                                <ExternalLink size={20} />
                                <span>Try Live Demo</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain Point */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Pain Point</h2>
                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                            <p className="font-semibold text-text-primary">The best interview prep doesn't exist in any course — it's buried in 500+ hours of podcasts.</p>
                            <p>PM interviews test fuzzy skills — strategic thinking, frameworks, communication, judgment — with no clear right or wrong answers. Candidates prep using generic questions that have zero connection to how real companies make product decisions. There's no feedback unless you pay $150–300/hr for a coach. Resources are scattered across YouTube, blogs, and $500 courses that go stale fast. And there's no way to measure whether you're actually getting better.</p>
                            <p>The worst part? The most relevant prep material already exists. Leaders from Airbnb, Stripe, Figma, and Notion have shared exactly the kind of decisions PM interviews ask about — on Lenny's Podcast, the #1 product management podcast with 303+ episodes. But nobody has time to listen to all of it and connect the dots.</p>
                            <p className="font-semibold text-text-primary">The problem isn't a lack of content. It's that the best content is locked in an unstructured format.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Approach */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Approach</h2>
                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                            <p>I started by asking: <span className="font-semibold text-text-primary">What if every podcast episode could become a practice interview?</span></p>
                            <p>Each episode already contains the raw ingredients — real company decisions, expert frameworks, outcomes, and quotes. The challenge was extracting that intelligence at scale and turning it into something a candidate could actually practice with.</p>
                            <p>That led me to an automated intelligence pipeline: process every transcript with AI, extract structured data (companies, decisions, frameworks, quotes), generate practice questions tied to real contexts, and layer an AI coach on top that gives specific, dimensional feedback.</p>
                            <p>I scoped v1 tightly: extract intelligence from 303+ episodes, cover 9 interview types, evaluate answers across 5 dimensions, and auto-sync with new episodes daily so content never goes stale.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Solution</h2>

                        <h3 className="text-2xl font-bold text-text-primary mb-6">Intelligence Pipeline</h3>

                        {/* Table */}
                        <div className="overflow-x-auto mb-8">
                            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="px-6 py-4 text-left font-bold text-text-primary">Stage</th>
                                        <th className="px-6 py-4 text-left font-bold text-text-primary">What it does</th>
                                        <th className="px-6 py-4 text-left font-bold text-text-primary">Tech</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-6 py-4 font-semibold text-text-primary">Ingestion</td>
                                        <td className="px-6 py-4 text-text-secondary">Pulls transcripts from GitHub repo; parses metadata</td>
                                        <td className="px-6 py-4 text-text-secondary">Supabase Edge Functions (Deno)</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-slate-50/50">
                                        <td className="px-6 py-4 font-semibold text-text-primary">Extraction</td>
                                        <td className="px-6 py-4 text-text-secondary">Processes full transcripts (10,000+ words) into structured intelligence — companies, decisions, frameworks, quotes</td>
                                        <td className="px-6 py-4 text-text-secondary">Google Gemini 2.5 Pro</td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-6 py-4 font-semibold text-text-primary">Storage</td>
                                        <td className="px-6 py-4 text-text-secondary">Caches extracted intelligence as structured JSON with dual-layer caching (localStorage + database)</td>
                                        <td className="px-6 py-4 text-text-secondary">PostgreSQL + localStorage</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-slate-50/50">
                                        <td className="px-6 py-4 font-semibold text-text-primary">Question Generation</td>
                                        <td className="px-6 py-4 text-text-secondary">Creates interview questions tied to real company contexts with model answers</td>
                                        <td className="px-6 py-4 text-text-secondary">Google Gemini 3 Flash Preview</td>
                                    </tr>
                                    <tr className="border-t border-slate-100">
                                        <td className="px-6 py-4 font-semibold text-text-primary">Evaluation</td>
                                        <td className="px-6 py-4 text-text-secondary">Scores user answers across 5 dimensions with specific feedback</td>
                                        <td className="px-6 py-4 text-text-secondary">Google Gemini 3 Flash Preview</td>
                                    </tr>
                                    <tr className="border-t border-slate-100 bg-slate-50/50">
                                        <td className="px-6 py-4 font-semibold text-text-primary">Sync</td>
                                        <td className="px-6 py-4 text-text-secondary">Checks GitHub repo nightly for new episodes; processes automatically within 24 hours</td>
                                        <td className="px-6 py-4 text-text-secondary">pg_cron (2 AM UTC daily)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h3 className="text-2xl font-bold text-text-primary mb-6">Stack:</h3>
                        <ul className="space-y-3 text-lg text-text-secondary leading-relaxed list-none">
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">Frontend:</strong> React 18, TypeScript, Tailwind, shadcn/ui</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">State:</strong> Zustand (client) + React Query (server data & caching)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">Backend:</strong> Supabase (Auth, PostgreSQL, Edge Functions, Row Level Security)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">AI — Extraction:</strong> Google Gemini 2.5 Pro (heavy processing of full transcripts)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">AI — User-facing:</strong> Google Gemini 3 Flash Preview (fast question generation & evaluation)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">AI Gateway:</strong> Lovable AI Gateway (model routing & abstraction)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">Hosting:</strong> Lovable Cloud (auto-deploy on every commit)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span><strong className="text-text-primary">Encryption:</strong> AES-256-GCM (user API keys encrypted at rest)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Impact */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">Impact</h2>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-sm font-bold text-accent mb-2">Metric</div>
                                <div className="text-2xl font-bold text-text-primary mb-2">Episodes processed</div>
                                <div className="text-sm font-bold text-text-primary mb-2">303+</div>
                                <p className="text-sm text-text-secondary">Every episode from Lenny's Podcast extracted into structured, searchable intelligence</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-sm font-bold text-accent mb-2">Metric</div>
                                <div className="text-2xl font-bold text-text-primary mb-2">Company profiles</div>
                                <div className="text-sm font-bold text-text-primary mb-2">180+</div>
                                <p className="text-sm text-text-secondary">"Success Autopsy" dossiers with real decisions, outcomes, and expert opinions</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-sm font-bold text-accent mb-2">Metric</div>
                                <div className="text-2xl font-bold text-text-primary mb-2">PM frameworks catalogued</div>
                                <div className="text-sm font-bold text-text-primary mb-2">80+</div>
                                <p className="text-sm text-text-secondary">Each linked to source episodes, real examples, and when to use them</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-sm font-bold text-accent mb-2">Metric</div>
                                <div className="text-2xl font-bold text-text-primary mb-2">Interview types covered</div>
                                <div className="text-sm font-bold text-text-primary mb-2">9</div>
                                <p className="text-sm text-text-secondary">Behavioral, Product Sense, Strategy, Metrics, AI/ML, Design, RCA, Guesstimate, Technical</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-sm font-bold text-accent mb-2">Metric</div>
                                <div className="text-2xl font-bold text-text-primary mb-2">Evaluation dimensions</div>
                                <div className="text-sm font-bold text-text-primary mb-2">5</div>
                                <p className="text-sm text-text-secondary">Structure, Insight, Framework Usage, Communication, Outcome Orientation</p>
                            </div>

                            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                <div className="text-sm font-bold text-accent mb-2">Metric</div>
                                <div className="text-2xl font-bold text-text-primary mb-2">Auto-sync</div>
                                <div className="text-sm font-bold text-text-primary mb-2">Active (daily)</div>
                                <p className="text-sm text-text-secondary">New episodes picked up from GitHub repo within 24 hours — zero manual updates</p>
                            </div>
                        </div>

                        <h3 className="text-2xl font-bold text-text-primary mb-6">Key design decisions:</h3>
                        <ul className="space-y-3 text-lg text-text-secondary leading-relaxed">
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>Pre-generated question bank for instant session loads (vs. 5–10 sec real-time AI generation)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>Dual-layer caching (localStorage + database) — returning users see content in under 1 second</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>BYOK (Bring Your Own Key) support for OpenAI, Google, Anthropic, DeepSeek — keeps free tier viable</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>Two-tier AI model strategy: expensive model for batch extraction, cheap model for real-time user operations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>Five evaluation dimensions instead of a single score — gives candidates a specific improvement target</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-accent mt-1">•</span>
                                <span>Supabase over custom backend — auth, database, serverless, and security out of the box for MVP speed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What I Learned */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">What I Learned</h2>
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold mb-3">AI is a means, not the product.</h3>
                                <p className="text-slate-300 leading-relaxed">The most important thing I built was the intelligence extraction pipeline, not the AI integration. The structured data layer — companies, decisions, frameworks, quotes — makes everything downstream possible. AI products are data products with an AI layer on top.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Caching is a product decision, not a technical one.</h3>
                                <p className="text-slate-300 leading-relaxed">The dual-layer cache emerged from watching users open the app, see a spinner, and leave. The fix wasn't faster servers — it was showing stale-but-instant data while fresh data loaded behind the scenes. Interview prep is a "grab 15 minutes between meetings" activity — every second of load time costs engagement.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Feedback granularity drives retention.</h3>
                                <p className="text-slate-300 leading-relaxed">With only a single score, users practiced 3–4 questions and stopped. Five-dimension scoring with specific suggestions increased session lengths. People stop practicing because they don't know what to work on next — actionable feedback solves that.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">BYOK changes your business model math.</h3>
                                <p className="text-slate-300 leading-relaxed">It turned a cost problem into a feature: power users want their own API keys (more control, no rate limits), and it keeps unit economics healthy. A pattern more AI products will adopt.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Build the sync pipeline early.</h3>
                                <p className="text-slate-300 leading-relaxed">The daily auto-sync was one of the first things I built and the single best decision. I never manually update content and can focus on experience instead of maintenance. For any product built on external content, automation is the foundation — not a nice-to-have.</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-3">Scope kills momentum.</h3>
                                <p className="text-slate-300 leading-relaxed">The original vision included voice recording, peer matching, and community features. Cutting all of that for v1 and shipping a focused core — extract → practice → evaluate → track — was the hardest and best call.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-text-primary mb-4">Interested in working together?</h2>
                        <p className="text-text-secondary mb-8">Let's discuss how I can help with your product challenges.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="https://lennysdojo.lovable.app" target="_blank" rel="noopener noreferrer" className="bg-accent text-white px-8 py-4 rounded-xl font-bold hover:brightness-110 transition-all flex items-center gap-2">
                                <ExternalLink size={20} />
                                <span>Try Live Demo</span>
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=akulsuhailmalhotra@gmail.com" target="_blank" rel="noopener noreferrer" className="bg-white text-text-primary px-8 py-4 rounded-xl font-bold border-2 border-slate-200 hover:border-accent transition-all flex items-center gap-2">
                                <Mail size={20} />
                                <span>Get in Touch</span>
                            </a>
                            <button onClick={onBack} className="bg-white text-text-primary px-8 py-4 rounded-xl font-bold border-2 border-slate-200 hover:border-accent transition-all">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LennysDojoPage;
