import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, CheckCircle2, Star, ShieldCheck, Globe, Package, Truck, Leaf, Mail, Phone, MapPin } from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
      isScrolled ? "bg-white/90 backdrop-blur-md border-b border-[#e5e5e0] py-3" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-xl font-bold tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-[#5A5A40] rounded-full flex items-center justify-center">
            <Leaf className="w-5 h-5 text-white" />
          </div>
          <span className="font-display">NAWSH <span className="text-[#5A5A40]">FIBER MILLS</span></span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1a1a1a]/70">
          <a href="#products" className="hover:text-[#5A5A40] transition-colors">Products</a>
          <a href="#about" className="hover:text-[#5A5A40] transition-colors">About</a>
          <a href="#export" className="hover:text-[#5A5A40] transition-colors">Export Info</a>
          <a href="#contact" className="bg-[#5A5A40] hover:bg-[#4a4a35] text-white px-6 py-2.5 rounded-full transition-all">
            Get Export Quote
          </a>
        </div>

        <button className="md:hidden text-[#1a1a1a]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-[#e5e5e0] p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#export" onClick={() => setMobileMenuOpen(false)}>Export Info</a>
            <a href="#contact" className="bg-[#5A5A40] text-white p-3 rounded-xl text-center" onClick={() => setMobileMenuOpen(false)}>
              Get Export Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-[#fdfcf8]">
      <div className="absolute top-0 right-0 w-1/2 h-full -z-10 opacity-10">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#5A5A40]/10 border border-[#5A5A40]/20 text-xs font-bold text-[#5A5A40] mb-6 uppercase tracking-wider">
            Premium Sri Lankan Exporter
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-[#1a1a1a]">
            Sustainable <span className="italic text-[#5A5A40]">Coconut Fiber</span> for Global Markets.
          </h1>
          <p className="text-lg text-[#1a1a1a]/60 mb-8 max-w-lg leading-relaxed">
            Direct from the heart of Sri Lanka. We supply high-quality twisted fiber rolls and coco peat processed to international standards.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="group bg-[#5A5A40] hover:bg-[#4a4a35] text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#5A5A40]/20">
              Request Export Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#products" className="px-8 py-4 rounded-full border border-[#1a1a1a]/20 hover:bg-[#1a1a1a]/5 font-semibold text-center transition-all">
              Our Product Range
            </a>
          </div>
          
          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-[#e5e5e0] pt-8">
            <div>
              <p className="text-2xl font-bold text-[#5A5A40]">100%</p>
              <p className="text-xs text-[#1a1a1a]/50 uppercase font-bold tracking-wider">Natural Fiber</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#5A5A40]">Global</p>
              <p className="text-xs text-[#1a1a1a]/50 uppercase font-bold tracking-wider">Shipping</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#5A5A40]">Direct</p>
              <p className="text-xs text-[#1a1a1a]/50 uppercase font-bold tracking-wider">From Source</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
            <img 
              src="https://picsum.photos/seed/coconut-fiber/800/1000" 
              className="w-full h-full object-cover" 
              alt="Coconut Fiber Processing"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-10 left-10 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.2em] mb-2">Quality Assurance</p>
              <h3 className="text-2xl font-display italic">Traditional Craft, Modern Standards.</h3>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#5A5A40] rounded-full flex items-center justify-center text-white p-4 text-center text-xs font-bold leading-tight shadow-xl">
            SRI LANKAN ORIGIN
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Products = () => {
  const products = [
    {
      title: "Twisted Fiber Rolls",
      desc: "High-strength male coconut fiber twisted into rolls for industrial and horticultural use.",
      features: ["Uniform Thickness", "High Tensile Strength", "Custom Lengths"],
      img: "https://picsum.photos/seed/fiber-roll/600/400"
    },
    {
      title: "Premium Coco Peat",
      desc: "Eco-friendly growing medium with excellent water retention for global agriculture.",
      features: ["Low EC Levels", "High Porosity", "Washed & Buffered"],
      img: "https://picsum.photos/seed/cocopeat/600/400"
    },
    {
      title: "Coir Fiber Pith",
      desc: "Processed coir pith ideal for soil conditioning and moisture control.",
      features: ["100% Organic", "Biodegradable", "Nutrient Rich"],
      img: "https://picsum.photos/seed/coir/600/400"
    }
  ];

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-[0.2em] text-[#5A5A40] font-bold mb-4">Our Products</h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Export-Grade Fiber Solutions</h3>
          <p className="text-[#1a1a1a]/50 max-w-2xl mx-auto">We specialize in processing raw coconut husks into high-value industrial materials for international buyers.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((p, i) => (
            <div key={i} className="organic-card overflow-hidden group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={p.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={p.title}
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-display font-bold mb-4">{p.title}</h4>
                <p className="text-[#1a1a1a]/60 mb-6 text-sm leading-relaxed">{p.desc}</p>
                <ul className="space-y-2 mb-8">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs font-bold text-[#5A5A40] uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold hover:text-[#5A5A40] transition-colors">
                  Inquire Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExportInfo = () => {
  const steps = [
    {
      title: "Quality Control",
      desc: "Every batch is tested for moisture content and fiber strength.",
      icon: <ShieldCheck className="w-6 h-6" />
    },
    {
      title: "Bulk Packaging",
      desc: "Standardized export packaging to ensure product safety during transit.",
      icon: <Package className="w-6 h-6" />
    },
    {
      title: "Global Logistics",
      desc: "Efficient shipping from Sri Lankan ports to your destination.",
      icon: <Truck className="w-6 h-6" />
    }
  ];

  return (
    <section id="export" className="py-24 bg-[#5A5A40]/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-[#5A5A40] font-bold mb-4">Export Process</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Reliable Supply Chain for Global Partners.</h3>
            <p className="text-[#1a1a1a]/60 mb-12 leading-relaxed">We understand the requirements of international buyers. Our facility in Sri Lanka is equipped to handle large-scale orders with consistent quality and timely delivery.</p>
            
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-[#5A5A40] shadow-sm flex-shrink-0">
                    {s.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{s.title}</h4>
                    <p className="text-sm text-[#1a1a1a]/50">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-12 rounded-[3rem] shadow-xl border border-[#e5e5e0]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#5A5A40]/10 flex items-center justify-center text-[#5A5A40]">
                <Globe className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">International Inquiries</h4>
            </div>
            <p className="text-[#1a1a1a]/60 mb-8 text-sm italic">"Our goal is to supply high-quality products and make a strong, lasting bond with our global buyers."</p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-[#5A5A40]" />
                <span>+94 778822241</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-[#5A5A40]" />
                <span>nawshad14064@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-[#5A5A40]" />
                <span>Kurunegala, Sri Lanka</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-sm uppercase tracking-[0.2em] text-[#5A5A40] font-bold mb-4">Inquiry Form</h2>
        <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">Request a Quotation</h3>
        <p className="text-[#1a1a1a]/50 mb-12">Fill out the form below with your requirements, and our export team will get back to you with a detailed quote within 24 hours.</p>

        <div className="bg-[#fdfcf8] p-8 md:p-12 rounded-[2rem] border border-[#e5e5e0] text-left">
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/40">Full Name</label>
                    <input required type="text" className="w-full bg-white border border-[#e5e5e0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#5A5A40] transition-colors" placeholder="Your Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/40">Email Address</label>
                    <input required type="email" className="w-full bg-white border border-[#e5e5e0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#5A5A40] transition-colors" placeholder="email@company.com" />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/40">Company Name</label>
                    <input required type="text" className="w-full bg-white border border-[#e5e5e0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#5A5A40] transition-colors" placeholder="Company Ltd" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/40">Country</label>
                    <input required type="text" className="w-full bg-white border border-[#e5e5e0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#5A5A40] transition-colors" placeholder="Destination Country" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/40">Product Requirements</label>
                  <textarea rows={4} className="w-full bg-white border border-[#e5e5e0] rounded-xl px-4 py-3 focus:outline-none focus:border-[#5A5A40] transition-colors resize-none" placeholder="Please specify product type, quantity, and delivery timeline..."></textarea>
                </div>
                <button type="submit" className="w-full bg-[#5A5A40] hover:bg-[#4a4a35] text-white py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#5A5A40]/10">
                  Submit Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-[#5A5A40]/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#5A5A40]/20">
                  <CheckCircle2 className="w-10 h-10 text-[#5A5A40]" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Inquiry Sent!</h4>
                <p className="text-[#1a1a1a]/50 mb-8">Thank you for contacting NAWSH FIBER MILLS. Our export team will review your requirements and contact you shortly.</p>
                <button onClick={() => setSubmitted(false)} className="text-[#5A5A40] font-bold hover:underline">Send another inquiry</button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 bg-[#fdfcf8] border-t border-[#e5e5e0]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div className="text-xl font-bold tracking-tight flex items-center gap-2">
            <div className="w-6 h-6 bg-[#5A5A40] rounded-full flex items-center justify-center">
              <Leaf className="w-4 h-4 text-white" />
            </div>
            <span className="font-display">NAWSH <span className="text-[#5A5A40]">FIBER MILLS</span></span>
          </div>
          
          <div className="flex gap-8 text-sm text-[#1a1a1a]/50">
            <a href="#products" className="hover:text-[#5A5A40] transition-colors">Products</a>
            <a href="#about" className="hover:text-[#5A5A40] transition-colors">About</a>
            <a href="#export" className="hover:text-[#5A5A40] transition-colors">Export</a>
            <a href="#contact" className="hover:text-[#5A5A40] transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#e5e5e0] text-xs text-[#1a1a1a]/30">
          <p>© 2026 NAWSH FIBER MILLS. Sri Lanka. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#5A5A40]">Privacy Policy</a>
            <a href="#" className="hover:text-[#5A5A40]">Terms of Export</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <ExportInfo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
