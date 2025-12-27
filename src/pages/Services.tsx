import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import {
  MapPin, TrendingUp, Globe, MessageSquare, Search,
  Shield, CheckCircle2, ArrowRight, Zap, Target, 
  BarChart, Layers, Crown, ChevronDown, Trophy, Activity
} from "lucide-react";

const Services = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const services = [
    {
      icon: MapPin,
      title: "Google Business Profile Optimization",
      category: "Foundational",
      description: "Complete overhaul of your Google Business Profile to maximize signal strength for Google's algorithms.",
      features: ["Profile Verification", "Category Optimization", "Media Geo-tagging", "A/B Tested Descriptions"],
    },
    {
      icon: TrendingUp,
      title: "International Local Keyword Research",
      category: "Growth",
      description: "Aggressive ranking strategies designed to push your business into the top 3 spots where 70% of clicks happen.",
      features: ["Proximity Mapping", "Hyper-local SEO", "Map Embed Strategy", "Signal Stacking"],
    },
    {
      icon: Globe,
      title: "Website Local SEO Optimizationy",
      category: "Authority",
      description: "Building a bulletproof ecosystem of business mentions across premium industry-specific directories.",
      features: ["Premium Submissions", "Audit & Cleanup", "Duplicate Elimination", "Global & Niche NAP"],
    },
    {
      icon: Shield,
      title: "Local Citations & Authority Building",
      category: "Defense",
      description: "Expert handling of GMB suspensions, algorithmic penalties, and malicious competitor spam removal.",
      features: ["Reinstatement Appeals", "Spam Fighting", "POIs Validation", "Security Hardening"],
    },
    {
      icon: MessageSquare,
      title: "Backilinks",
      category: "Growth",
      description: "Converting your customers into a marketing force with strategic review generation and management.",
      features: ["Review Funnel Setup", "Response Automation", "Sentiment Analysis", "Trust Building"],
    },
    {
      icon: Activity,
      title: "On Page SEO",
      category: "Foundational",
      description: "In-depth analysis of your competitors' backlinks, citations, and ranking secrets to outmaneuver them.",
      features: ["Gap Analysis", "Backlink Audits", "Ranking Benchmarks", "Strategy Theft Prevention"],
    },
  ];

  const processSteps = [
    { title: "Analysis", desc: "Audit of current local signals and competitor vulnerabilities.", icon: Search },
    { title: "Optimization", desc: "Hardening your GMB profile and NAP consistency.", icon: Layers },
    { title: "Expansion", desc: "Scaling citations and hyper-local content authority.", icon: Target },
    { title: "Dominance", desc: "Securing the 3-Pack and automating lead flow.", icon: Trophy },
  ];

  const faqs = [
    { q: "How long until I see results?", a: "Most clients see significant call volume increases within 45-60 days, though GMB optimization starts showing signals within the first 3 weeks." },
    { q: "Do you handle profile suspensions?", a: "Yes, we specialize in high-level reinstatement protocols for hard and soft suspensions." },
    { q: "Is this a one-time service?", a: "We offer both one-time tactical setups and ongoing monthly dominance management." }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950 font-sans antialiased selection:bg-cyan-100">
      <Header />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="relative pt-48 pb-24 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-cyan-50/50 to-transparent -z-10" />
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-black uppercase tracking-[0.3em] text-cyan-600 mb-8 shadow-sm">
              <Zap size={12} className="fill-cyan-600" />
              Strategic Arsenal v2.0
            </span>
            <h1 className="text-3xl md:text-[6rem] font-[950] tracking-tighter uppercase mb-8 leading-[0.85]">
            Local SEO Services for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-cyan-600 italic font-serif lowercase font-normal">Worldwide Businesses</span> 
            </h1>
            <p className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto font-medium leading-relaxed">
              We don't just "rank" businesses. We engineer local market dominance through tactical GMB optimization and technical SEO excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. THE SERVICES GRID ================= */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 rounded-[3rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-slate-950 flex items-center justify-center text-white group-hover:bg-cyan-600 transition-colors duration-500">
                    <service.icon size={32} strokeWidth={1.5} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-300 border border-slate-100 px-4 py-1.5 rounded-full">
                    {service.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tighter mb-4 text-slate-950">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">{service.description}</p>
                <ul className="space-y-3 mb-10">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight text-slate-400 group-hover:text-slate-600">
                      <CheckCircle2 size={14} className="text-cyan-500" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600 group-hover:gap-4 transition-all">
                  Inquire Protocol <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. THE DOMINATION PROCESS ================= */}
      
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto mb-20 text-center">
            <h2 className="text-4xl md:text-5xl font-[950] tracking-tighter uppercase mb-6">Why Choose Me as Your Global Local SEO Expert?</h2>
            <p className="text-slate-500 font-medium">I don’t sell rankings — I build *sustainable local visibility* that grows your business month after month.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-slate-950 hover:text-white transition-all duration-500">
                <div className="text-cyan-600 mb-6 group-hover:text-cyan-400"><step.icon size={40} strokeWidth={1} /></div>
                <span className="absolute top-8 right-8 text-4xl font-black text-slate-200 group-hover:text-white/10 italic">0{i+1}</span>
                <h4 className="text-xl font-black uppercase tracking-tighter mb-2">{step.title}</h4>
                <p className="text-sm opacity-60 font-medium leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. RESULTS & IMPACT ================= */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #0891b2 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-24">The Impact of <span className="text-cyan-500 italic font-serif lowercase font-normal">precision</span> SEO</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              { label: "Phone Calls", value: "3x", sub: "Avg. increase in 60 days" },
              { label: "Google Pack Clicks", value: "70%", sub: "Captured by top 3 spots" },
              { label: "Retention", value: "99%", sub: "Monthly success rate" },
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-8xl font-[950] text-cyan-500 tracking-[ -0.05em]">{stat.value}</div>
                <div className="text-xs font-black uppercase tracking-[0.4em]">{stat.label}</div>
                <div className="text-slate-500 text-sm italic">{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. COMPARISON SECTION ================= */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="max-w-5xl mx-auto bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50">
            <div className="grid md:grid-cols-2">
              <div className="p-12 md:p-16 border-r border-slate-50">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                  <Crown className="text-cyan-600" /> The RC Standard
                </h3>
                <ul className="space-y-6">
                  {["Deep Technical Geo-tagging", "Hand-Built Citation Moat", "Manual Spam Removal", "Weekly Performance Tuning"].map((t, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={18} className="text-cyan-600 shrink-0" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-12 md:p-16 bg-slate-50/50">
                <h3 className="text-3xl font-black uppercase tracking-tighter mb-8 text-slate-400">Cheap SEO</h3>
                <ul className="space-y-6">
                  {["Automated Bot Tools", "Spammy Indian Backlinks", "Ignoring NAP Errors", "Monthly Generic Reports"].map((t, i) => (
                    <li key={i} className="flex items-center gap-4 text-sm font-medium text-slate-400 italic">
                       <span className="w-4 h-px bg-slate-300" /> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 6. FAQ SECTION ================= */}
      <section className="py-32">
        <div className="container mx-auto px-8 max-w-4xl">
           <h2 className="text-4xl font-[950] tracking-tighter uppercase mb-16 text-center">Common Queries</h2>
           <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-slate-200 pb-4">
                   <button 
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left py-4 group"
                   >
                     <span className="text-lg font-black uppercase tracking-tight group-hover:text-cyan-600 transition-colors">{faq.q}</span>
                     <ChevronDown className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`} />
                   </button>
                   <AnimatePresence>
                     {activeFaq === i && (
                       <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                       >
                         <p className="pb-6 text-slate-500 font-medium leading-relaxed">{faq.a}</p>
                       </motion.div>
                     )}
                   </AnimatePresence>
                </div>
              ))}
           </div>
        </div>
      </section>

      <div className="pb-20">
        <CTASection />
      </div>

      <Footer />
    </div>
  );
};

export default Services;
