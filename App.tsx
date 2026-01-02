
import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Linkedin, Calendar, MapPin, ArrowRight, ExternalLink, Download, Plus, Zap, Target, Activity, Award } from 'lucide-react';
import { PROJECTS, SECONDARY_PROJECTS, CAPABILITIES, STEPS, PRINCIPLES } from './constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { name: 'Work', href: '#work' },
    { name: 'Approach', href: '#approach' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'About', href: '#about' },
    { name: 'Connect', href: '#connect' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      setIsOpen(false);
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center group" onClick={(e) => handleLinkClick(e, '#')}>
          <div className="flex flex-col justify-center leading-none">
            <div className="flex items-baseline space-x-1.5">
              <span className="text-[14px] font-serif italic text-text-secondary opacity-80">by</span>
              <span className="text-[14px] font-display font-bold text-accent uppercase tracking-[0.2em] group-hover:text-text-primary transition-colors duration-300">
                Akul S. Malhotra
              </span>
            </div>
          </div>
        </a>
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`text-sm font-medium transition-colors relative group ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-secondary hover:text-accent'}`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300 ${activeSection === link.href.substring(1) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </a>
          ))}
          <a href="#connect" onClick={(e) => handleLinkClick(e, '#connect')} className="bg-accent text-white px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
            Let's Talk
          </a>
        </div>
        <button className="md:hidden text-text-primary p-2 z-50" onClick={() => setIsOpen(!isOpen)}><Menu /></button>
      </div>
      <div className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-12 space-y-8 h-full justify-center">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-4xl font-display font-bold text-text-primary" onClick={(e) => handleLinkClick(e, link.href)}>{link.name}</a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative bg-white">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-100/30 blur-[120px] -z-10 rounded-full"></div>
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-extrabold text-text-primary leading-[1.1] mb-8 tracking-tight">
            Hi there! <br /> I'm Akul – An Applied AI PM turning complex ideas into <span className="text-accent italic">everyday habits.</span>
          </h1>
          <div className="space-y-8 text-text-secondary text-lg mb-12">
            <p className="leading-relaxed"><span className="font-bold text-text-primary bg-blue-50 px-2 py-0.5 rounded">Builder:</span> Shipping intelligent systems that move real user behavior.</p>
            <p className="leading-relaxed"><span className="font-bold text-text-primary bg-blue-50 px-2 py-0.5 rounded">Bridge:</span> Translating raw data science into scalable consumer features.</p>
            <p className="leading-relaxed"><span className="font-bold text-text-primary bg-blue-50 px-2 py-0.5 rounded">Craft:</span> Prioritizing metrics that reflect genuine human value.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <a href="#work" className="bg-accent text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center space-x-2 hover:shadow-2xl hover:shadow-accent/40 transition-all">
              <span>Selected Work</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[1/1.1] bg-slate-50 rounded-[40px] overflow-hidden border border-slate-100 shadow-2xl">
            <img src="https://PixHostPullZone.b-cdn.net/84c02f9f-af14-4135-93e9-15c98ca3833f/a4b8r0q5mjwhf78n/1767334659657-rg1gm8x2.png" alt="Akul Malhotra" className="w-full h-full object-cover filter grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
};

const SelectedWork: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="work" className="py-40 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col mb-32 border-b border-slate-100 pb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[2px] w-20 bg-accent"></div>
            <span className="text-accent font-bold tracking-[0.3em] uppercase text-[10px]">Execution Archive</span>
          </div>
          <h2 className="text-5xl md:text-8xl font-display font-black text-text-primary tracking-tighter leading-none max-w-5xl">
            Raw data. <br />Real behavior. <span className="text-accent italic">Real impact.</span>
          </h2>
        </div>

        {/* Immersive Case Briefs */}
        <div className="space-y-64">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className="relative">
              {/* Massive index background number */}
              <span className="absolute -top-20 -left-10 text-[200px] md:text-[300px] font-display font-black text-slate-50 -z-10 select-none opacity-60">
                0{index + 1}
              </span>

              <div className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Anchor */}
                <div className="w-full lg:w-[60%] relative">
                  <div className="rounded-[40px] overflow-hidden bg-slate-100 shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                    <img 
                      src={`https://picsum.photos/seed/${project.id}/1600/1200`} 
                      alt={project.title} 
                      className="w-full aspect-[4/3] object-cover filter brightness-95"
                    />
                  </div>
                  {/* Result Callout - The "Metric" Anchor */}
                  <div className="absolute -bottom-10 right-10 md:-right-10 bg-text-primary text-white p-10 rounded-3xl shadow-3xl max-w-[280px]">
                    <p className="text-accent font-bold text-xs uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                      <Activity size={14} /> Metric Focus
                    </p>
                    <p className="text-2xl font-display font-bold leading-tight">
                      {project.headline.replace('"', '').replace('"', '')}
                    </p>
                  </div>
                </div>

                {/* Narrative Detail */}
                <div className="w-full lg:w-[40%] pt-8 space-y-8">
                  <div className="flex items-center gap-4">
                    <span className="text-accent font-bold uppercase tracking-widest text-[10px] bg-blue-50 px-3 py-1 rounded-full">{project.type}</span>
                    <span className="text-slate-300 font-light text-xs">/ {project.tags[0]}</span>
                  </div>

                  <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tight leading-none">
                    {project.title}
                  </h3>

                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="h-6 w-[2px] bg-accent mt-2"></div>
                      <p className="text-lg md:text-xl text-text-secondary leading-relaxed font-light">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-col sm:flex-row items-center gap-8">
                    <a href="#" className="group flex items-center gap-3 text-text-primary font-bold text-lg border-b-2 border-accent pb-1 hover:border-text-primary transition-all">
                      <span>View Full Case Study</span>
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Archive Index - Symmetry Redesign */}
        <div className="mt-80 pt-32 border-t border-slate-100">
          <div className="max-w-3xl mx-auto text-center mb-24">
            <h4 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">The Complete Archive</h4>
            <h5 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tighter mb-8">
              Technical Strategy & Research Thinking.
            </h5>
            <button 
              onClick={() => setShowSecondary(!showSecondary)}
              className="px-12 py-5 bg-text-primary text-white rounded-full font-bold text-sm hover:bg-accent transition-all inline-flex items-center gap-3 shadow-lg hover:shadow-accent/20"
            >
              <span>{showSecondary ? 'Collapse Thinking Index' : 'Explore All Archives'}</span>
              <Plus className={`transition-transform duration-500 ${showSecondary ? 'rotate-45' : ''}`} size={16} />
            </button>
          </div>

          {showSecondary && (
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {SECONDARY_PROJECTS.map((project) => (
                <div key={project.id} className="bg-slate-50 p-12 rounded-[40px] hover:bg-white border border-transparent hover:border-accent/10 hover:shadow-2xl transition-all duration-500 group flex flex-col justify-between">
                  <div>
                    <div className="mb-10 flex justify-between items-center">
                      <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                        <Target size={20} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{project.type}</span>
                    </div>
                    <h6 className="text-3xl font-bold text-text-primary mb-6 group-hover:text-accent transition-colors">{project.title}</h6>
                    <p className="text-text-secondary text-lg leading-relaxed mb-10 font-light">
                      {project.description}
                    </p>
                  </div>
                  <a href="#" className="inline-flex items-center gap-3 text-xs font-bold text-accent uppercase tracking-[0.2em] group/link">
                    <span>Read Brief</span>
                    <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

const Capabilities: React.FC = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">Core Competencies</h2>
          <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tight">How I drive product success.</h3>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="space-y-6 group">
              <div className="h-1 bg-slate-200 w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-accent translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
              </div>
              <h5 className="text-xl font-bold text-text-primary">{cap.title}</h5>
              <p className="text-text-secondary text-sm leading-relaxed">{cap.description}</p>
              <div className="pt-4 flex items-center gap-2">
                <Award size={14} className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-text-primary opacity-60">{cap.proof}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="w-full lg:w-1/3 sticky top-32">
            <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-4">Philosophy</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tighter leading-none mb-8">The Builder's <br /> Framework.</h3>
            <p className="text-text-secondary text-lg font-light leading-relaxed">
              I follow a systematic approach to shipping intelligence, moving from raw ambiguity to scalable, validated user impact.
            </p>
          </div>
          <div className="w-full lg:w-2/3 space-y-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className="flex gap-10 items-start group">
                <span className="text-5xl font-display font-black text-slate-100 group-hover:text-accent transition-colors duration-500">0{idx + 1}</span>
                <div className="pt-2">
                  <h4 className="text-2xl font-bold text-text-primary mb-4">{step.title}</h4>
                  <p className="text-text-secondary leading-relaxed max-w-xl">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 bg-slate-900 text-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-32">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-xs mb-8">Mental Models</h2>
            <h3 className="text-4xl md:text-7xl font-display font-bold tracking-tighter leading-none mb-12">Principled <br /> Product Craft.</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-12">
            {PRINCIPLES.map((p, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-accent font-mono text-xs font-bold">/ {p.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="aspect-[4/5] rounded-[60px] overflow-hidden shadow-3xl">
            <img src="https://PixHostPullZone.b-cdn.net/84c02f9f-af14-4135-93e9-15c98ca3833f/a4b8r0q5mjwhf78n/1767334659657-rg1gm8x2.png" alt="Akul" className="w-full h-full object-cover filter grayscale" />
          </div>
          <div className="space-y-8">
            <h2 className="text-accent font-bold tracking-widest uppercase text-xs">The Human Aspect</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary tracking-tighter leading-tight">Applied AI PM: Turning tech into products.</h3>
            <div className="space-y-6 text-text-secondary text-lg font-light leading-relaxed">
              <p>I started my career in business analytics before evolving into a product builder who is bilingual in both user empathy and deep technical tradeoffs.</p>
              <p>At Apple, I learned how world-class products operate at global scale. At Wareline, I got my hands dirty shipping features and watching AI models move metrics in real-time.</p>
            </div>
            <div className="pt-8 grid grid-cols-2 gap-8 border-t border-slate-100">
              <div><p className="text-xs font-bold uppercase text-accent mb-2">Education</p><p className="text-text-primary font-bold">MS Analytics (AU)</p></div>
              <div><p className="text-xs font-bold uppercase text-accent mb-2">Certification</p><p className="text-text-primary font-bold">PMP Certified</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-40 bg-white scroll-mt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-9xl font-display font-black text-text-primary tracking-tighter leading-none">Let's <span className="text-accent italic">Talk.</span></h2>
          <p className="text-xl md:text-2xl text-text-secondary font-light max-w-2xl mx-auto">Currently open to Applied AI Product Manager roles at consumer tech, AI, and media companies.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8 pt-12">
            <a href="mailto:akulsuhailmalhotra@gmail.com" className="px-12 py-6 bg-accent text-white rounded-3xl font-bold text-xl hover:shadow-2xl hover:shadow-accent/40 transition-all">Email Direct</a>
            <a href="https://linkedin.com/in/malhotraakulsuhail" target="_blank" className="px-12 py-6 bg-slate-900 text-white rounded-3xl font-bold text-xl hover:shadow-2xl hover:shadow-slate-400/20 transition-all">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-slate-100">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-sm text-text-secondary">
        <div className="flex items-center gap-4">
          <span className="font-display font-bold text-text-primary text-xl uppercase tracking-tighter">AKUL S. MALHOTRA</span>
          <span className="opacity-30">|</span>
          <p>© {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-10 font-bold uppercase tracking-widest text-[10px]">
          <a href="#" className="hover:text-accent transition-colors">Resume</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-text-primary selection:bg-accent selection:text-white">
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Capabilities />
        <Approach />
        <Philosophy />
        <About />
        <Connect />
      </main>
      <Footer />
    </div>
  );
};

export default App;
