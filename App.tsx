
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Mail, Linkedin, Calendar, MapPin, ArrowRight, ExternalLink, Download, ChevronDown, Plus } from 'lucide-react';
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

      // Scrollspy logic
      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Adjust threshold to feel natural (e.g., when the section is near the top)
          if (rect.top <= 150) {
            current = section;
          }
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

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="font-display font-bold text-xl tracking-tight text-accent" onClick={(e) => handleLinkClick(e, '#')}>
          AKUL <span className="text-text-primary">MALHOTRA</span>
        </a>

        {/* Desktop Nav */}
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
          <a href="#connect" onClick={(e) => handleLinkClick(e, '#connect')} className="bg-accent text-background-primary px-5 py-2 rounded-full text-sm font-bold hover:brightness-110 transition-all shadow-lg shadow-accent/20">
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-text-primary p-2 z-50" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden fixed inset-0 z-40 bg-background-primary transition-transform duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col p-12 space-y-8 h-full justify-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`text-4xl font-display font-bold transition-colors ${activeSection === link.href.substring(1) ? 'text-accent' : 'text-text-primary hover:text-accent'}`}
              onClick={(e) => handleLinkClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#connect" 
            className="text-accent text-2xl font-bold pt-8 border-t border-white/10"
            onClick={(e) => handleLinkClick(e, '#connect')}
          >
            Start a Conversation →
          </a>
        </div>
      </div>
    </nav>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-blue-500/5 blur-[100px] -z-10 rounded-full"></div>
      
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 text-accent px-4 py-1.5 rounded-full text-xs font-bold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Open to Opportunities • India → Open to Relocation</span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-extrabold text-text-primary leading-[1.1] mb-6 tracking-tight">
            I build AI-powered products that <span className="text-accent italic">people actually use.</span>
          </h1>
          
          <p className="text-xl text-text-secondary mb-10 max-w-xl leading-relaxed">
            Analytics professional turned product builder. I've shipped features at Apple, built AI recommendation engines, and driven measurable growth across fitness, media, and news products.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#work" className="bg-accent text-background-primary px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:shadow-[0_0_20px_rgba(78,205,196,0.4)] transition-all">
              <span>View My Work</span>
              <ArrowRight size={18} />
            </a>
            <a href="#connect" className="bg-background-secondary border border-white/10 px-8 py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-white/5 transition-all">
              <span>Let's Connect</span>
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-background-secondary rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop" 
                alt="Akul Malhotra Placeholder" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary/60 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ChevronDown className="text-text-secondary opacity-50" />
      </div>
    </section>
  );
};

const Capabilities: React.FC = () => {
  return (
    <section className="py-24 bg-background-primary relative">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Capabilities</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary">Where I Add Value</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAPABILITIES.map((cap, idx) => (
            <div key={idx} className="bg-background-secondary p-8 rounded-2xl border border-white/5 hover:border-accent/20 transition-all hover-lift group">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-background-primary transition-all">
                {idx === 0 && <span className="text-2xl">🤖</span>}
                {idx === 1 && <span className="text-2xl">📈</span>}
                {idx === 2 && <span className="text-2xl">📊</span>}
                {idx === 3 && <span className="text-2xl">💡</span>}
              </div>
              <h4 className="text-xs font-bold text-accent uppercase tracking-wider mb-2">{cap.subtitle}</h4>
              <h5 className="text-xl font-bold text-text-primary mb-4 leading-tight">{cap.title}</h5>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 h-16 line-clamp-3">
                {cap.description}
              </p>
              <div className="pt-4 border-t border-white/5 flex items-center space-x-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_rgba(78,205,196,1)]"></div>
                <p className="text-xs font-medium text-text-primary opacity-80">{cap.proof}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SelectedWork: React.FC = () => {
  const [showSecondary, setShowSecondary] = useState(false);

  return (
    <section id="work" className="py-24 bg-background-secondary scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Case Studies</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary">Selected Work</h3>
          </div>
          <p className="text-text-secondary max-w-md">
            Outcome-focused projects demonstrating technical AI research and growth-oriented product strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {PROJECTS.map((project) => (
            <div key={project.id} className="bg-background-primary rounded-3xl overflow-hidden border border-white/5 flex flex-col hover-lift group">
              <div className="h-72 overflow-hidden relative">
                 <img 
                  src={`https://picsum.photos/seed/${project.id}/800/600`} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-background-primary/80 backdrop-blur-md text-text-primary border border-white/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                {project.isFeatured && (
                  <div className="absolute top-4 right-4 bg-accent text-background-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase shadow-lg">Featured</div>
                )}
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-accent font-bold text-xs uppercase mb-2 tracking-widest">{project.type}</span>
                <h4 className="text-2xl font-bold text-text-primary mb-3 leading-tight group-hover:text-accent transition-colors">{project.title}</h4>
                <p className="text-lg font-medium text-text-secondary/80 mb-4 line-clamp-1 italic">"{project.headline}"</p>
                <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center space-x-2 text-text-primary font-bold border-b-2 border-accent pb-1 hover:border-accent/40 transition-all">
                    <span>{project.ctaText}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Collapsible Secondary Projects */}
        <div className="text-center">
          <button 
            onClick={() => setShowSecondary(!showSecondary)}
            className="inline-flex items-center space-x-2 text-text-secondary hover:text-accent transition-colors font-medium text-sm"
          >
            <span>{showSecondary ? 'Show Less' : 'View More Projects'}</span>
            <Plus className={`transition-transform duration-300 ${showSecondary ? 'rotate-45' : ''}`} size={18} />
          </button>
        </div>

        {showSecondary && (
          <div className="grid md:grid-cols-3 gap-6 mt-12 animate-fade-in">
            {SECONDARY_PROJECTS.map((project) => (
              <div key={project.id} className="bg-background-primary p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-all">
                <span className="text-[10px] font-bold text-accent uppercase tracking-widest block mb-2">{project.type}</span>
                <h4 className="text-lg font-bold text-text-primary mb-2">{project.title}</h4>
                <p className="text-xs text-text-secondary mb-4 line-clamp-3">{project.description}</p>
                <a href="#" className="text-xs font-bold text-accent hover:underline">{project.ctaText}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Approach: React.FC = () => {
  return (
    <section id="approach" className="py-24 bg-background-primary relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Process</h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary">How I Build Products</h3>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2 -z-10"></div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {STEPS.map((step, idx) => (
              <div key={idx} className="bg-background-secondary p-10 rounded-3xl border border-white/5 flex flex-col items-center text-center group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform"></div>
                <div className="w-20 h-20 bg-background-primary rounded-2xl flex items-center justify-center text-4xl mb-8 border border-accent/20 group-hover:border-accent group-hover:rotate-6 transition-all">
                  {step.icon}
                </div>
                <h4 className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">Step {idx + 1}</h4>
                <h5 className="text-2xl font-bold text-text-primary mb-4 tracking-tight">{step.title}</h5>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
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
    <section id="philosophy" className="py-24 bg-background-secondary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Principles</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary">My Product Craft</h3>
          </div>
          <p className="text-text-secondary md:text-right max-w-sm">
            Mental models that guide how I make trade-offs and build sustainable user value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((p, idx) => (
            <div key={idx} className="p-8 border border-white/5 rounded-2xl hover:bg-white/5 hover:border-accent/10 transition-all group">
              <div className="text-accent font-mono text-xs mb-4 opacity-50 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
              <h4 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">{p.title}</h4>
              <p className="text-text-secondary text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-background-primary scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1519085185758-29178f07c00a?q=80&w=1000&auto=format&fit=crop" 
                alt="About Akul" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-accent p-6 rounded-2xl hidden lg:block shadow-xl transform group-hover:scale-105 transition-transform">
              <p className="text-background-primary font-extrabold text-5xl mb-1">5+</p>
              <p className="text-background-primary/80 font-bold text-xs uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-accent font-bold tracking-widest uppercase text-sm mb-4">About Me</h2>
            <h3 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-8 leading-tight">From data science to product building.</h3>
            
            <div className="space-y-6 text-text-secondary leading-relaxed text-lg">
              <p>
                I'm a business analytics professional turned product builder. I started my career in data science—building ML models that predicted equipment failures with 93% accuracy—before realizing I wanted to be closer to the user.
              </p>
              <p>
                At Apple, I learned how world-class products think about global scale. At Wareline, I got my hands dirty shipping features and watching metrics move in real-time.
              </p>
              <p>
                I'm passionate about AI products that actually help people, and I believe the best PMs are bilingual—fluent in both user empathy and technical tradeoffs.
              </p>
            </div>
            
            <div className="mt-10 grid grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-white/5 bg-background-secondary/50 hover:border-accent/30 transition-colors">
                <p className="text-accent font-bold text-xs uppercase mb-1">Education</p>
                <p className="text-text-primary text-sm font-semibold">MS Analytics (AU)</p>
              </div>
              <div className="p-5 rounded-xl border border-white/5 bg-background-secondary/50 hover:border-accent/30 transition-colors">
                <p className="text-accent font-bold text-xs uppercase mb-1">Certification</p>
                <p className="text-text-primary text-sm font-semibold">PMP Certified</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Connect: React.FC = () => {
  return (
    <section id="connect" className="py-24 bg-background-secondary relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] border border-white/10 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="text-center mb-12">
            <h2 className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-6">Contact</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold text-text-primary mb-6 tracking-tight">Let's Talk.</h3>
            <p className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed">
              I'm currently open to Product Manager roles at consumer tech, AI, and media companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-12">
            <a href="mailto:akulsuhailmalhotra@gmail.com" className="flex items-center space-x-5 p-6 rounded-2xl bg-background-primary/40 hover:bg-background-primary transition-all group border border-white/5 hover:border-accent/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase mb-1">Email Me</p>
                <p className="text-text-primary font-medium text-sm md:text-base break-all">akulsuhailmalhotra@gmail.com</p>
              </div>
            </a>
            <a href="https://linkedin.com/in/malhotraakulsuhail" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-5 p-6 rounded-2xl bg-background-primary/40 hover:bg-background-primary transition-all group border border-white/5 hover:border-accent/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Linkedin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase mb-1">LinkedIn</p>
                <p className="text-text-primary font-medium">in/malhotraakulsuhail</p>
              </div>
            </a>
            <a href="#" className="flex items-center space-x-5 p-6 rounded-2xl bg-background-primary/40 hover:bg-background-primary transition-all group border border-white/5 hover:border-accent/30">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                <Calendar size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase mb-1">Schedule a Call</p>
                <p className="text-text-primary font-medium">Open Calendar</p>
              </div>
            </a>
            <div className="flex items-center space-x-5 p-6 rounded-2xl bg-background-primary/40 border border-white/5">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-text-secondary uppercase mb-1">Location</p>
                <p className="text-text-primary font-medium">Chandigarh, India • Global Relocation</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <a href="#" className="inline-flex items-center space-x-3 bg-text-primary text-background-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-accent transition-all transform active:scale-95 shadow-xl shadow-black/20 group">
              <Download size={20} className="group-hover:translate-y-0.5 transition-transform" />
              <span>Download Full CV</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-background-primary border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-text-secondary text-sm">
            <span className="font-display font-bold text-text-primary mr-4">AKUL MALHOTRA</span>
            © {new Date().getFullYear()} • Built with curiosity and caffeine.
          </div>
          <div className="flex space-x-8">
            <a href="https://linkedin.com/in/malhotraakulsuhail" target="_blank" className="text-sm font-bold text-text-secondary hover:text-accent transition-colors">LinkedIn</a>
            <a href="mailto:akulsuhailmalhotra@gmail.com" className="text-sm font-bold text-text-secondary hover:text-accent transition-colors">Email</a>
            <a href="#" className="text-sm font-bold text-text-secondary hover:text-accent transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-text-primary selection:bg-accent selection:text-background-primary">
      <Header />
      <main>
        <Hero />
        <Capabilities />
        <SelectedWork />
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
