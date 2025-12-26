import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  ArrowRight, Phone, MapPin, Globe, MessageSquare, Zap, 
  MousePointerClick, Layers, Search, BarChart, Target, 
  Linkedin, Twitter, Instagram, CheckCircle, Star, XCircle, TrendingUp,
  Facebook, ExternalLink, ShieldCheck, Activity, Award, Rocket, Tool
} from "lucide-react";

const Index = () => {
  const CONTACT_INFO = {
    phone: "03474825228",
    fb: "https://www.facebook.com/share/16mpLBNuf7/",
    gmb: "https://share.google/VvDL3jdg8qucBwbGm"
  };

  return (
    <div className="bg-white text-black selection:bg-cyan-100 selection:text-cyan-900 font-sans antialiased overflow-x-hidden">
      <Header />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#f8fafc]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-100/40 via-transparent to-transparent blur-3xl pointer-events-none" />
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-[1px] w-8 bg-cyan-600" />
                  <p className="text-cyan-600 font-bold uppercase tracking-[0.3em] text-[10px]">
                    Elite Local SEO Architecture
                  </p>
                </div>
                <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-slate-950 uppercase">
                  RANKING <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-600 to-slate-900">DOMINANCE.</span>
                </h1>
                <p className="text-slate-600 text-lg md:text-xl max-w-xl leading-relaxed font-medium mb-10">
                  Don't settle for page 2. Call <span className="text-black font-bold">{CONTACT_INFO.phone}</span> to architect a digital fortress that forces Google to put you first.
                </p>
                <div className="flex flex-wrap gap-6">
                  <a href={CONTACT_INFO.gmb} target="_blank" rel="noreferrer">
                    <Button className="h-16 px-10 bg-slate-950 hover:bg-cyan-600 text-white font-black text-sm rounded-full transition-all group">
                      VIEW MAP PROFILE <MapPin className="ml-2 group-hover:animate-bounce" />
                    </Button>
                  </a>
                  <div className="flex items-center gap-4 text-slate-400 border-l border-slate-200 pl-6">
                    <p className="text-[10px] uppercase tracking-widest leading-tight">Expert in <br /><span className="text-slate-900 font-bold">GMB Radius Expansion</span></p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-5 relative">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
                <div className="aspect-[4/5] rounded-[3rem] border border-slate-200 p-4 bg-white shadow-2xl relative overflow-hidden group">
                  <img 
                    src="/profile.jpg" 
                    className="w-full h-full object-cover rounded-[2.2rem] filter contrast-125 transition-all duration-700"
                    alt="SEO Expert"
                  />
                  <motion.div 
                    animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-12 -left-6 bg-white border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-3"
                  >
                    <div className="bg-green-100 p-2 rounded-lg"><TrendingUp size={20} className="text-green-600" /></div>
                    <div>
                      <p className="text-[10px] text-slate-400 uppercase font-black">Visibility</p>
                      <p className="text-lg font-black text-slate-900">+310%</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. SLEEK STRIP MARQUEE ================= */}
      <div className="py-4 bg-black overflow-hidden whitespace-nowrap relative z-20 border-y border-white/10">
        <motion.div 
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }} 
          className="flex gap-16 text-white font-bold text-sm md:text-base uppercase tracking-[0.2em] items-center"
        >
          <span className="flex items-center gap-4">GMB Dominance <Zap size={14} className="text-cyan-500 fill-cyan-500" /></span>
          <span className="flex items-center gap-4">{CONTACT_INFO.phone} <Zap size={14} className="text-cyan-500 fill-cyan-500" /></span>
          <span className="flex items-center gap-4">No #1 Ranking Expert <Zap size={14} className="text-cyan-500 fill-cyan-500" /></span>
          <span className="flex items-center gap-4">Local SEO Pro <Zap size={14} className="text-cyan-500 fill-cyan-500" /></span>
          <span className="flex items-center gap-4">GMB Dominance <Zap size={14} className="text-cyan-500 fill-cyan-500" /></span>
          <span className="flex items-center gap-4">{CONTACT_INFO.phone} <Zap size={14} className="text-cyan-500 fill-cyan-500" /></span>
        </motion.div>
      </div>

      {/* ================= 3. NEW SECTION: 6-STEP BLUEPRINT ================= */}
      <section className="py-40 bg-slate-50">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <p className="text-cyan-600 font-black uppercase tracking-[0.3em] text-xs mb-4">The Strategy</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">Execution <span className="text-slate-400">Blueprint.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Grid Analysis", desc: "Mapping your current ranking across every square mile of the city.", icon: <Search /> },
              { title: "Signal Injection", desc: "Feeding Google high-authority residential data points.", icon: <Zap /> },
              { title: "CTR Mastery", desc: "Simulating organic user behavior to boost trust scores.", icon: <MousePointerClick /> },
              { title: "Geo-Tagging", desc: "Embedding physical location data into every digital asset.", icon: <MapPin /> },
              { title: "Review Velocity", desc: "Accelerating natural feedback loops to crush competitors.", icon: <Star /> },
              { title: "Radius Blast", desc: "Forcing your map pin to show up in neighboring suburbs.", icon: <Rocket /> },
            ].map((step, i) => (
              <div key={i} className="bg-white p-10 border border-slate-200 hover:border-cyan-500 transition-all group">
                <div className="text-cyan-600 mb-6 group-hover:scale-110 transition-transform">{step.icon}</div>
                <h3 className="text-2xl font-black uppercase mb-4 tracking-tighter">{step.title}</h3>
                <p className="text-slate-500 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* ================= 4. RADIUS INVASION (Fresh Design) ================= */}
<section className="relative py-40 bg-gradient-to-b from-cyan-50 to-white overflow-hidden">
  {/* Background abstract shapes */}
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-200/30 rounded-3xl filter blur-3xl animate-pulse-slow pointer-events-none" />
  <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-cyan-300/20 rounded-3xl filter blur-3xl animate-pulse-slow pointer-events-none" />

  <div className="container mx-auto px-8 relative z-10">
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-7xl font-black tracking-tight mb-4 text-slate-900 uppercase">
        GMB RADIUS <br />
        <span className="text-cyan-600 uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-slate-900">
          Expansion
        </span>
      </h2>
      <p className="text-slate-500 text-xl leading-relaxed max-w-3xl mx-auto font-medium">
        Most businesses get stuck in a 2-mile radius. We inject powerful local signals to dominate your entire city map.
      </p>
    </div>

    {/* Overlapping Feature Cards */}
    <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "Custom Geo-Coordinates", icon: <Zap size={24} /> },
        { title: "Local IP Signals", icon: <Target size={24} /> },
        { title: "Navigation Data", icon: <Globe size={24} /> },
        { title: "Radius Blast", icon: <Rocket size={24} /> },
      ].map((item, i) => (
        <motion.div
          key={i}
          whileHover={{ y: -10, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`relative bg-white/90 backdrop-blur-md border border-slate-200 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-cyan-200/50 transition-all`}
          style={{ zIndex: 10 - i }}
        >
          <div className="text-cyan-600 mb-4">{item.icon}</div>
          <h3 className="text-lg font-black uppercase tracking-tight">{item.title}</h3>
        </motion.div>
      ))}

      {/* Animated Arrows */}
      <motion.div
        animate={{ x: [0, 20, -20, 0], y: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute top-1/2 left-1/4 text-cyan-400 opacity-40"
      >
        <ArrowRight size={48} />
      </motion.div>
      <motion.div
        animate={{ x: [0, -20, 20, 0], y: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute bottom-1/3 right-1/4 text-cyan-400 opacity-40"
      >
        <ArrowRight size={48} />
      </motion.div>
    </div>
  </div>
</section>

   
      

      {/* ================= 5. COMPARISON ================= */}
      <section className="py-40 bg-slate-900 text-white">
        <div className="container mx-auto px-8">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-white">The Gap In <span className="text-cyan-500">Service.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-white/5 p-12 border border-white/10 relative group">
              <h3 className="text-slate-500 font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                <XCircle className="text-red-500" size={24} /> Typical Agency
              </h3>
              <ul className="space-y-6">
                {["Useless monthly PDFs", "Zero local signals", "Slow directory submissions", "Ghosting after setup"].map((t, i) => (
                  <li key={i} className="text-slate-400 text-lg font-bold flex items-center gap-4 line-through opacity-40">{t}</li>
                ))}
              </ul>
            </div>
            <div className="bg-cyan-600 p-12 border border-cyan-400 relative shadow-[20px_20px_0px_0px_rgba(0,0,0,0.3)]">
              <h3 className="text-black font-black uppercase tracking-widest mb-10 flex items-center gap-3">
                <CheckCircle className="text-black" size={24} /> The Architect Way
              </h3>
              <ul className="space-y-6">
                {["Live WhatsApp Updates", "Aggressive Geo-Signals", "Daily CTR Manipulation", "Radius Expansion Tech"].map((t, i) => (
                  <li key={i} className="text-white text-lg font-black flex items-center gap-4">
                    <CheckCircle className="text-black" size={20} /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. LIVE RESULTS ================= */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-6">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-none">Live <br/> <span className="text-cyan-600 underline decoration-8 underline-offset-8">Dominance.</span></h2>
            <p className="text-slate-400 max-w-xs font-bold uppercase tracking-widest text-[10px] border-l-2 border-cyan-500 pl-6">We don't sell hope. We sell rank positions that stay pinned at the top.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { niche: "Law Firm", growth: "+410%", desc: "Expanded radius from 2 to 18 miles." },
              { niche: "HVAC Pro", growth: "+290%", desc: "Ranked #1 for 'emergency' keywords." },
              { niche: "Real Estate", growth: "+530%", desc: "Dominated the entire city map pack." }
            ].map((res, i) => (
              <div key={i} className="group border-b-8 border-slate-100 hover:border-cyan-500 transition-all p-8 bg-slate-50">
                <p className="text-xs font-black text-cyan-600 uppercase tracking-widest mb-4">Result Case 0{i+1}</p>
                <h4 className="text-4xl font-black text-slate-900 mb-2">{res.growth}</h4>
                <p className="text-slate-400 font-bold uppercase text-[11px] mb-6 tracking-widest">{res.niche}</p>
                <p className="text-slate-600 font-bold border-t border-slate-200 pt-6">{res.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 7. FAQ ================= */}
      <section className="py-40 bg-white border-t border-slate-100">
        <div className="container mx-auto px-8 max-w-4xl">
          <h2 className="text-6xl font-black tracking-tighter mb-20 uppercase">The <span className="text-cyan-600">Intel.</span></h2>
          <div className="space-y-12">
            {[
              { q: "How long until I see results?", a: "Typical visibility spikes occur within 21 days. Total dominance usually takes 3 to 4 months." },
              { q: "Is this safe for my GMB profile?", a: "We use architect-level signals and residential proxy networks. Fully compliant and safe." },
              { q: "Do you offer a guarantee?", a: "We guarantee ranking growth. If we don't hit KPIs, we work for free until we do." }
            ].map((faq, i) => (
              <div key={i} className="group border-l-4 border-slate-100 hover:border-cyan-500 pl-8 transition-all">
                <h4 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{faq.q}</h4>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 8. FINAL CALL ================= */}
      <section className="py-60 bg-white relative">
        <div className="container mx-auto px-8 text-center relative z-10">
          <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }}>
            <h2 className="text-7xl md:text-[11rem] font-black tracking-tighter leading-[0.8] mb-20 text-black uppercase">
              READY TO <br /> <span className="text-cyan-600 underline decoration-4 decoration-black underline-offset-[10px]">ATTACK?</span>
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16">
              <a href={CONTACT_INFO.gmb} target="_blank" rel="noreferrer">
                <Button className="h-24 px-16 bg-black text-white font-black text-2xl rounded-none hover:bg-cyan-600 transition-all shadow-[15px_15px_0px_0px_rgba(8,145,178,1)]">
                  FREE AUDIT
                </Button>
              </a>
              <div className="text-left">
                <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Direct Line</p>
                <p className="text-4xl font-black text-black tracking-tighter">{CONTACT_INFO.phone}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 9. MINI LEAD CAPTURE ================= */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
             <h2 className="text-3xl font-black tracking-tighter uppercase">Get a Video Audit</h2>
             <p className="text-slate-400 text-xs mt-2 font-bold uppercase tracking-widest">Delivered to your WhatsApp in 5 mins</p>
          </div>
          <div className="flex flex-wrap gap-4 w-full md:w-auto">
             <input className="bg-white/10 border border-white/20 px-6 py-4 flex-1 md:w-80 outline-none focus:border-cyan-500 font-bold" placeholder="GMB Name / Link" />
             <Button className="bg-cyan-600 hover:bg-white hover:text-black transition-colors font-black px-10 h-14 rounded-none uppercase text-xs">Analyze Now</Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;