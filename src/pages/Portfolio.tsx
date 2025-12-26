import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { 
  TrendingUp, Phone, MapPin, Star, Eye, Users, 
  ArrowUpRight, Globe2, Award, CheckCircle, Search
} from "lucide-react";

const Portfolio = () => {
  const results = [
    {
      title: "Master Plumbers Texas",
      location: "Austin/Houston, USA",
      industry: "Home Services",
      metrics: [
        { label: "Phone Calls", value: "+285%", icon: Phone },
        { label: "GMB Views", value: "+420%", icon: Eye },
        { label: "Directions", value: "+310%", icon: MapPin },
      ],
      description: "From unranked to dominating the Local 3-Pack for 'Emergency Plumber' across two major Texas metros. We engineered a citation moat that competitors couldn't break.",
      color: "from-blue-600/10 to-cyan-500/10"
    },
    {
      title: "Lone Star Rooter & Drain",
      location: "Dallas, Texas",
      industry: "Sanitation",
      metrics: [
        { label: "Leads/Mo", value: "140+", icon: Users },
        { label: "Rankings", value: "Top 3", icon: TrendingUp },
        { label: "Trust Score", value: "4.9★", icon: Star },
      ],
      description: "Implemented a hyper-local geo-tagging strategy for their service fleet. Total visibility increased by 350% within the first 90 days of the protocol.",
      color: "from-red-600/10 to-orange-500/10"
    },
    {
      title: "Elite Dental Care",
      location: "London, UK",
      industry: "Healthcare",
      metrics: [
        { label: "New Patients", value: "+180%", icon: Users },
        { label: "Search Vol", value: "+350%", icon: Eye },
        { label: "5-Star Revs", value: "47+", icon: Star },
      ],
      description: "High-ticket dental services require high-trust profiles. We optimized their reputation engineering to secure premium patient leads.",
      color: "from-cyan-500/10 to-teal-500/10"
    },
    {
      title: "Advanced Auto Shop",
      location: "Sydney, AU",
      industry: "Automotive",
      metrics: [
        { label: "Monthly Calls", value: "3x", icon: Phone },
        { label: "Global Rank", value: "#1", icon: TrendingUp },
        { label: "Conversion", value: "+45%", icon: Search },
      ],
      description: "Aggressive keyword targeting for 'Luxury Car Repair'. Displaced long-standing incumbents through technical signal stacking.",
      color: "from-slate-500/10 to-slate-800/10"
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950 font-sans selection:bg-cyan-100">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-50/30 blur-[120px] -z-10" />
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-8">
              <Award size={14} className="text-cyan-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">Battle-Tested Results</span>
            </span>
            <h1 className="text-6xl md:text-8xl font-[950] tracking-tighter uppercase leading-[0.85] mb-10">
              PROOF OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-cyan-600 italic font-serif lowercase font-normal">market</span> DOMINANCE.
            </h1>
            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl font-medium leading-relaxed">
              We deliver heatmaps that turn green and phone lines that don't stop ringing. No fluff, just pure local authority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section className="py-20 border-y border-slate-100 bg-white">
        <div className="container mx-auto px-8 text-center md:text-left">
          <div className="flex flex-wrap justify-between items-center gap-12">
            {[
              { label: "Projects Completed", val: "150+" },
              { label: "Texas Dominance", val: "45 Sites" },
              { label: "Google Maps #1 Ranks", val: "400+" },
              { label: "Avg. ROI Increase", val: "310%" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-4xl font-black tracking-tighter text-slate-950">{s.val}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-600">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PORTFOLIO GRID (FOUR CARDS) ================= */}
      <section className="py-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative p-1 bg-gradient-to-br ${result.color} rounded-[3rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-700`}
              >
                <div className="bg-white p-10 md:p-14 rounded-[2.9rem] h-full transition-all group-hover:bg-white/90 duration-500">
                  <div className="flex justify-between items-start mb-10">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2 block">{result.industry}</span>
                      <h3 className="text-3xl font-[950] tracking-tighter uppercase text-slate-950 leading-none mb-3">{result.title}</h3>
                      <div className="flex items-center gap-2 text-slate-400">
                        <MapPin size={12} className="text-red-500" />
                        <span className="text-xs font-bold uppercase tracking-tight">{result.location}</span>
                      </div>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-950 flex items-center justify-center text-white group-hover:rotate-12 group-hover:bg-cyan-600 transition-all duration-500">
                      <ArrowUpRight size={24} />
                    </div>
                  </div>

                  {/* Metrics Box */}
                  <div className="grid grid-cols-3 gap-3 mb-10">
                    {result.metrics.map((m, i) => (
                      <div key={i} className="p-5 rounded-3xl bg-slate-50 border border-slate-100 group-hover:border-cyan-200 transition-colors">
                        <m.icon size={16} className="text-slate-400 group-hover:text-cyan-600 mb-2 transition-colors" />
                        <div className="text-xl font-black tracking-tighter text-slate-950 leading-tight">{m.value}</div>
                        <div className="text-[8px] font-bold uppercase tracking-widest text-slate-400">{m.label}</div>
                      </div>
                    ))}
                  </div>

                  <p className="text-slate-500 font-medium leading-relaxed mb-10 text-sm md:text-base">
                    {result.description}
                  </p>

                  <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-600">
                    <CheckCircle size={14} className="fill-cyan-600 text-white" /> 
                    Verified Dominance Protocol
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MAP DOMINANCE VISUAL ================= */}
      <section className="py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0l3.09 9.51h10l-8.09 5.88 3.09 9.51-8.09-5.88-8.09 5.88 3.09-9.51-8.09-5.88h10z' fill='%230891b2' fill-opacity='0.4'/%3E%3C/svg%3E")` }} />
        <div className="container mx-auto px-8 relative z-10 text-center">
          <div className="max-w-3xl mx-auto">
            <Globe2 className="w-20 h-20 text-cyan-500 mx-auto mb-10 animate-pulse" strokeWidth={1} />
            <h2 className="text-4xl md:text-7xl font-[950] tracking-tighter uppercase mb-8">Ready to turn your <br /><span className="text-cyan-500 italic font-serif lowercase font-normal">territory</span> green?</h2>
            <p className="text-slate-400 text-lg mb-12 font-medium">We only accept ONE client per industry in each Texas zip code. Lock your competitors out before they lock you out.</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800">
                <Star className="text-cyan-500 fill-cyan-500" size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Top Rated on G2</span>
              </div>
              <div className="flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 border border-slate-800">
                <CheckCircle className="text-cyan-500" size={16} />
                <span className="text-[10px] font-black uppercase tracking-widest">Certified GMB Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Portfolio;