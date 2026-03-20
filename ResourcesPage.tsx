import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Play, BookOpen } from 'lucide-react';

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

      {/* Newsletter Section */}
      <section className="pt-32 pb-20 bg-slate-50 overflow-hidden relative">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/50 blur-[120px] -z-10 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-50/30 blur-[100px] -z-10 rounded-full pointer-events-none"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
             
             {/* Header Section */}
             <div className="text-center mb-16">
                <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-3">LinkedIn Newsletter</h2>
                <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tight mb-6">Explain it like I'm 5!</h3>
                <p className="text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
                  Breaking down the tech and AI world so clearly that buzzwords become optional. No ego, no fluff — just clarity.
                </p>
             </div>

             {/* Featured Article Card */}
             <div className="bg-white rounded-[32px] shadow-xl border border-slate-100 overflow-hidden mb-12 transition-all hover:shadow-2xl hover:border-slate-200">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-8 md:p-10 border-b border-blue-100/50">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest w-fit">Edition #1</span>
                    <span className="text-sm font-bold text-text-secondary uppercase tracking-widest">March 2026</span>
                  </div>
                  <h4 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight">ClawdCode: How AI Coding Agents Actually Work</h4>
                </div>
                <div className="p-8 md:p-10">
                  <p className="text-lg text-text-secondary leading-relaxed mb-8">
                    Ever wondered how tools like Claude Code or Cursor actually write software? We break down the completely invisible "agentic loop"—from how an AI plans a task, to how it runs commands in your terminal, and how it fixes its own errors. No PhD required.
                  </p>
                  <div className="flex flex-wrap gap-3 mb-10">
                    {["AI Agents", "Agentic Loops", "Code Generation"].map(tag => (
                       <span key={tag} className="px-4 py-2 bg-slate-100 text-text-secondary rounded-full text-xs font-bold">
                         {tag}
                       </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://www.linkedin.com/pulse/how-openclaw-works-ai-actually-does-things-malhotra-pmp-udmtc/?trackingId=sJjAZ2wkQdenCNdeA2OAUA%3D%3D" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-text-primary text-white py-4 px-6 rounded-2xl font-bold hover:bg-accent transition-all shadow-lg hover:shadow-accent/20 cursor-pointer">
                      <BookOpen size={18} />
                      Read Article
                    </a>
                    <a href="https://awdbot-simulation.netlify.app" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 bg-white text-text-primary border-2 border-slate-200 py-4 px-6 rounded-2xl font-bold hover:border-accent hover:text-accent transition-all cursor-pointer">
                      <Play size={18} />
                      Try Simulation
                    </a>
                  </div>
                </div>
             </div>

             {/* Coming Soon Placeholders */}
             <div className="grid md:grid-cols-2 gap-6 mb-16">
                <div className="border-2 border-dashed border-slate-300 rounded-[32px] p-8 md:p-12 text-center bg-white/50 opacity-70 flex flex-col items-center justify-center min-h-[240px]">
                  <h5 className="text-xl font-bold text-text-primary mb-2">Edition #2</h5>
                  <p className="text-text-secondary font-medium uppercase tracking-widest text-xs">Coming Soon</p>
                </div>
                <div className="border-2 border-dashed border-slate-300 rounded-[32px] p-8 md:p-12 text-center bg-white/50 opacity-70 flex flex-col items-center justify-center min-h-[240px]">
                  <h5 className="text-xl font-bold text-text-primary mb-2">Edition #3</h5>
                  <p className="text-text-secondary font-medium uppercase tracking-widest text-xs">Coming Soon</p>
                </div>
             </div>

             {/* Footer Subscribe */}
             <div className="pt-12 border-t border-slate-200 text-center flex flex-col items-center">
                <p className="text-lg font-bold text-text-primary mb-6 max-w-lg">Let's demystify the tech world, one simple explanation at a time.</p>
                <a
                    href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7429004113939689473"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-10 h-[52px] bg-[#0A66C2] text-white rounded-full font-sans font-bold hover:brightness-110 transition-all shadow-xl hover:shadow-[#0A66C2]/30 w-full md:w-auto text-lg border-none outline-none cursor-pointer"
                  >
                    <ExternalLink size={20} />
                    Subscribe on LinkedIn
                </a>
             </div>

          </div>
        </div>
      </section>

      {/* Footer / CTA Area */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-8">Ready to dive back in?</h2>
            <button onClick={onBack} className="bg-white text-text-primary px-8 py-4 rounded-xl font-bold border-2 border-slate-200 hover:border-accent transition-all flex items-center justify-center gap-2 mx-auto cursor-pointer">
              <ArrowRight className="rotate-180" size={18} />
              Return to Portfolio
            </button>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
