import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  Globe, ShieldCheck, Zap, Users, Rocket, MousePointer2, 
  Sparkles, Check, ArrowUpRight, Fingerprint, MapPin, Navigation
} from "lucide-react";

const About = () => {
  const [activePlan, setActivePlan] = useState(1);

  const stats = [
    { label: "Active Markets", value: "12+", icon: <Globe size={18} /> },
    { label: "Success Rate", value: "99%", icon: <ShieldCheck size={18} /> },
    { label: "Lead Growth", value: "+300%", icon: <Zap size={18} /> },
    { label: "Retain Rate", value: "98%", icon: <Users size={18} /> },
  ];

  return (
    <div className="bg-[#FAF9F6] text-slate-950 selection:bg-cyan-100 font-sans antialiased overflow-x-hidden">
      <Header />

      {/* ================= 1. ELEGANT HERO SECTION ================= */}
      <section className="relative pt-56 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-cyan-50/50 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <span className="inline-flex items-center gap-2 text-cyan-700 font-bold uppercase tracking-[0.5em] text-[10px] mb-10 py-2 px-4 border border-cyan-100 rounded-full bg-white/50 backdrop-blur-sm font-sans">
              <Fingerprint size={12} className="animate-pulse" />
              The Architect Behind The Rank
            </span>
            <h1 className="text-8xl md:text-[11rem] font-[900] tracking-[-0.05em] leading-[0.75] mb-12 text-slate-950 uppercase">
              RAZA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-slate-900 via-cyan-600 to-cyan-500">CHEENA</span>
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light italic font-serif">
              "Whether your business is in the *USA, UK, Canada, Australia, Europe, or the Middle East, I build Local SEO systems that help you appear **exactly when customers search for your services"
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. MINIMAL STATS ================= */}
      <section className="pb-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="group p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500"
              >
                <div className="text-cyan-600 mb-4 bg-cyan-50 w-fit p-3 rounded-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <h4 className="text-4xl font-black tracking-tighter mb-1">{stat.value}</h4>
                <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. THE BENTO EXPERIENCE ================= */}
      <section className="py-40 bg-white relative">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl mb-24">
            <h2 className="text-6xl font-black tracking-tighter uppercase leading-none mb-6">
              Tactical <span className="text-cyan-600 italic font-serif lowercase font-light">Dominance</span> Modules.
            </h2>
            <div className="h-1 w-20 bg-cyan-600" />
          </div>

          <div className="grid md:grid-cols-12 gap-6 auto-rows-[350px]">
            <motion.div whileHover={{ y: -10 }} className="md:col-span-7 bg-[#fcfcfc] border border-slate-100 rounded-[3rem] p-12 relative overflow-hidden group">
              <div className="relative z-10">
                <Rocket className="text-cyan-600 mb-8" size={40} />
                <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">GMB Injection</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm font-medium">
                  We don't just optimize; we hardcode authority into your local entity signals.
                </p>
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-cyan-100/30 rounded-full blur-3xl group-hover:bg-cyan-200/50 transition-colors" />
            </motion.div>

            <motion.div whileHover={{ scale: 0.98 }} className="md:col-span-5 bg-slate-950 rounded-[3rem] p-12 text-white flex flex-col justify-between group">
              <Sparkles className="text-cyan-400 group-hover:rotate-45 transition-transform duration-700" size={40} />
              <div>
                <h3 className="text-3xl font-bold uppercase tracking-tighter mb-4 italic">Radius Blast</h3>
                <p className="text-slate-400 font-light leading-relaxed">Forcefully expanding your map pin visibility across the city borderlines.</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="md:col-span-4 bg-white border border-slate-100 rounded-[3rem] p-10 flex flex-col justify-center text-center group">
               <MousePointer2 className="mx-auto text-cyan-600 mb-6 group-hover:animate-bounce" size={32} />
               <h3 className="text-2xl font-black uppercase mb-2">CTR Mastery</h3>
               <p className="text-slate-400 text-sm font-medium tracking-tight">Modeling elite user behavior signals.</p>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} className="md:col-span-8 bg-cyan-600 rounded-[3rem] p-12 text-white relative overflow-hidden">
               <div className="flex justify-between items-start">
                  <div className="max-w-md relative z-10">
                    <h3 className="text-4xl font-black uppercase mb-4 tracking-tighter">Review Architecture</h3>
                    <p className="text-cyan-100 leading-relaxed font-medium">Systematically building trust loops that convert skeptical strangers into loyal high-ticket clients.</p>
                  </div>
                  <ArrowUpRight size={40} className="opacity-50" />
               </div>
               <div className="absolute bottom-0 right-0 p-8 opacity-10">
                  <Check size={200} strokeWidth={4} />
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 4. LUXURY PRICING ================= */}
      <section className="py-40 bg-[#0a0a0a] text-white overflow-hidden relative">
        <div className="container mx-auto px-8 relative z-10">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-7xl font-black tracking-tighter uppercase mb-10">Investment Protocol</h2>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-1.5 rounded-full inline-flex">
              {["Starter", "Pro", "Elite"].map((p, i) => (
                <button 
                  key={p} 
                  onClick={() => setActivePlan(i)}
                  className={`px-10 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activePlan === i ? 'bg-cyan-600 shadow-xl shadow-cyan-600/20' : 'text-slate-400 hover:text-white'}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePlan}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-[4rem] p-12 md:p-24 text-black flex flex-col md:flex-row items-center gap-16 relative shadow-2xl"
              >
                <div className="flex-1">
                  <span className="text-cyan-600 font-bold uppercase tracking-widest text-[10px] mb-4 block">Monthly Retainer</span>
                  <h3 className="text-6xl font-black uppercase tracking-tighter mb-8 leading-none">
                    {activePlan === 0 ? "Foundation" : activePlan === 1 ? "Expansion" : "Total Dominance"}
                  </h3>
                  <div className="space-y-4">
                    {["Entity Injection", "Geo-Signal Farming", "Map Radius Control", "Priority Support"].map((item, i) => (
                      <div key={i} className="flex items-center gap-4 text-slate-500 font-bold text-xs uppercase tracking-tight">
                        <Check size={16} className="text-cyan-500" strokeWidth={3} /> {item}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-px h-40 bg-slate-100 hidden md:block" />
                <div className="text-center md:text-right">
                  <p className="text-8xl font-[950] tracking-tighter mb-10">
                    <span className="text-2xl align-top mr-2 font-light text-slate-300">$</span>
                    {activePlan === 0 ? "199" : activePlan === 1 ? "399" : "699"}
                  </p>
                  <Button className="bg-slate-950 text-white hover:bg-cyan-600 h-20 px-12 rounded-full font-black text-lg uppercase transition-all group border-none">
                    Start Now <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ================= 5. THE MANIFESTO ================= */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <p className="text-4xl md:text-6xl font-medium tracking-tight leading-[1.1] text-slate-900 lowercase italic font-serif">
                "I don't believe in competition. I believe in becoming the <span className="text-cyan-600 font-black uppercase not-italic font-sans tracking-tighter">Only Option</span> in your local market."
              </p>
              <div className="mt-20">
                <div className="h-px w-20 bg-slate-200 mx-auto mb-10" />
                <h4 className="text-2xl font-black uppercase tracking-widest">Raza Cheena</h4>
                <p className="text-cyan-600 text-[10px] font-black uppercase tracking-[0.4em] mt-2">The Architect of Search</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= 6. THE NEW "AHA!" CTA SECTION ================= */}
      <section className="relative py-40 overflow-hidden bg-slate-950 text-white border-t border-white/5">
        {/* Animated Map Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #0891b2 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        
        <div className="container mx-auto px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 mb-8 bg-cyan-600/10 border border-cyan-500/20 px-6 py-3 rounded-full">
              <Navigation className="text-cyan-400 animate-pulse" size={16} />
              <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-[10px]">Territory Lockdown Active</span>
            </div>

            <h2 className="text-6xl md:text-8xl font-[950] tracking-tighter uppercase mb-8 leading-[0.85]">
              READY TO CLAIM <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-cyan-400 italic font-serif lowercase font-normal">your</span> TERRITORY?
            </h2>
            
            <p className="text-slate-400 text-xl max-w-2xl mx-auto mb-16 font-medium leading-relaxed uppercase tracking-tight">
              Exclusive Access: Only 1 Partner Per Niche, Per City. <br />
              <span className="text-cyan-500">Check if your city is still available.</span>
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="group relative h-24 px-16 bg-white text-black font-[950] text-xl uppercase italic overflow-hidden rounded-2xl transition-all hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-3">
                  Lock My City <ArrowUpRight strokeWidth={3} />
                </span>
                <div className="absolute inset-0 bg-cyan-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
              
              <div className="flex items-center gap-4 text-left border-l border-white/10 pl-6 h-20">
                <MapPin className="text-cyan-500" />
                <div>
                  <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">Global Operations</p>
                  <p className="text-sm font-bold">USA • UK • AUS • PK</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <motion.div 
          animate={{ y: [0, -20, 0] }} 
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-[15%] text-cyan-500/20 hidden lg:block"
        >
          <ShieldCheck size={120} />
        </motion.div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
