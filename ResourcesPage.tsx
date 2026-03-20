import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';

const ResourcesPage: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 shadow-sm">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <button onClick={onBack} className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors cursor-pointer">
            <ArrowRight className="rotate-180" size={18} />
            <span className="font-medium">Back to Portfolio</span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white min-h-[80vh] flex flex-col items-center justify-center">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-4">
              Resources
            </h1>
            <p className="text-2xl md:text-3xl text-text-secondary mb-6">Tools, writings, and things I find useful.</p>
            
            <div className="mt-12 bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-xl max-w-2xl mx-auto text-left transition-all hover:shadow-2xl hover:border-slate-200">
               <h2 className="text-3xl font-bold text-text-primary mb-4">LinkedIn Newsletter</h2>
               <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                 Join my networking and sharing space where I publish insights on product management, applied AI, and building software that people actually use.
               </p>
               <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#0077B5] text-white rounded-2xl font-bold text-lg hover:brightness-110 transition-all shadow-lg hover:shadow-[#0077B5]/30"
                >
                  <ExternalLink size={20} />
                  <span>Subscribe on LinkedIn</span>
                </a>
               <p className="mt-4 text-xs text-text-secondary italic">Link to be added soon.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResourcesPage;
