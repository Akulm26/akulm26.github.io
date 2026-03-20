import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-text-primary">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 shadow-sm pb-safe">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors cursor-pointer">
            <ArrowRight className="rotate-180" size={18} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-white overflow-hidden relative border-b border-slate-100">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/50 blur-[120px] -z-10 rounded-full"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-50/30 blur-[100px] -z-10 rounded-full"></div>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-6">
              Resources.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-12 leading-relaxed">
              Curated writings, tools, and mental models to help demystify the technology that is rapidly taking over our daily lives.
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-slate-100">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                   <div>
                      <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">LinkedIn Newsletter</h2>
                      <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary tracking-tight">Explain it like I'm 5!</h3>
                   </div>
                   <a
                      href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429004113939689473"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 h-[40px] bg-[#0A66C2] text-white rounded-full font-sans font-medium hover:brightness-110 transition-all shadow-md shrink-0 border-none outline-none"
                    >
                      Subscribe on LinkedIn
                   </a>
                </div>

                <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                  <p>Let’s be honest about the corporate tech world: A solid 50% of any given meeting is just people aggressively nodding when someone drops a new acronym, secretly hoping they aren't asked to explain it.</p>
                  <p>The tech industry loves its jargon. It builds walls around simple concepts to make them sound like magic. But if a concept sounds too complicated to grasp, it’s usually an explanation problem, not a comprehension problem.</p>
                  <p>The true measure of intelligence isn't how many buzzwords you can string together. It all boils down to one simple question: <span className="font-semibold text-text-primary italic">"Samajh aaya?" (Did you get it?)</span></p>
                  <p className="text-2xl font-bold text-text-primary mt-8 mb-4">That is the exact philosophy behind Explain It Like I'm 5 (ELI5).</p>
                  <p>No ego. No fluff. Just a serious attempt to strip the complexity out of the technology that is rapidly taking over our daily lives.</p>
                  
                  <div className="pt-8 pb-4">
                     <h4 className="text-2xl font-bold text-text-primary mb-8 border-b border-slate-100 pb-4">Here is what this newsletter is really about:</h4>
                     <div className="space-y-8">
                        <div>
                           <h5 className="text-xl font-bold text-accent mb-2">Why this exists</h5>
                           <p>Because tech shouldn't be a gated community. ELI5 is my pushback against the "Silicon Valley buzzword bingo" culture. It’s a safe space to ask the "silliest" questions about how things actually work—because those are usually the most important ones.</p>
                        </div>
                        <div>
                           <h5 className="text-xl font-bold text-accent mb-2">Who it is for</h5>
                           <p>Aspiring Product Managers, Project Managers, and non-technical professionals who are tired of pretending they know what the engineering team just said. If you want to actually understand the landscape instead of just surviving it, you're in the right place.</p>
                        </div>
                        <div>
                           <h5 className="text-xl font-bold text-accent mb-2">What you will gain</h5>
                           <p>Absolute clarity. We break down the mechanics of the tech and AI world: What really drives it? How does it function? Why does it work the way it works? You will leave with the confidence to stop simply nodding along and start actually leading the conversation.</p>
                        </div>
                     </div>
                  </div>

                  <div className="mt-10 mb-8 p-8 bg-slate-50 border-l-4 border-accent rounded-r-2xl italic text-xl">
                    "If you can’t explain it simply, you don't understand it well enough."
                    <span className="block mt-4 text-base font-bold text-text-primary not-italic tracking-wide uppercase">— Prof. Richard Feynman</span>
                  </div>

                  <p className="pt-2 font-medium text-text-primary">This isn't an exercise in personal branding; it’s a commitment to clear communication.</p>
                  
                  <div className="pt-12 mt-8 border-t border-slate-100 text-center flex flex-col items-center">
                    <p className="text-xl font-bold text-text-primary mb-8 max-w-lg">Subscribe to ELI5. Let's demystify the tech world, one simple explanation at a time.</p>
                    <a
                        href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429004113939689473"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 px-10 h-[52px] bg-[#0A66C2] text-white rounded-full font-sans font-bold hover:brightness-110 transition-all shadow-xl hover:shadow-[#0A66C2]/30 w-full md:w-auto text-lg border-none outline-none"
                      >
                        <ExternalLink size={20} />
                        Subscribe on LinkedIn
                    </a>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Footer / CTA Area */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-8">Ready to dive back in?</h2>
            <button onClick={onBack} className="bg-white text-text-primary px-8 py-4 rounded-xl font-bold border-2 border-slate-200 hover:border-accent transition-all flex items-center justify-center gap-2 mx-auto">
              <ArrowRight className="rotate-180" size={18} />
              Return to Portfolio
            </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
