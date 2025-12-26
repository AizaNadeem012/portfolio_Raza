import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import { Star, Quote, ShieldCheck, Zap, Globe, Users } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      name: "Michael Johnson",
      business: "Johnson Plumbing Services",
      location: "Houston, Texas",
      review: "Working with Razacheena was a game-changer. Within 2 months, our calls increased by 300%. We went from barely getting noticed to dominating local searches.",
      rating: 5,
    },
    {
      name: "Dr. Sarah Williams",
      business: "Elite Dental Care",
      location: "Manchester, UK",
      review: "Our new patient inquiries have more than doubled. Razacheena is professional, knowledgeable, and truly understands the technical side of local SEO.",
      rating: 5,
    },
    {
      name: "David Chen",
      business: "Chen Auto Repair",
      location: "Sydney, Australia",
      review: "From page 3 to position #1 in just 8 weeks! Our workshop is now busier than ever. The ROI on this investment has been incredible.",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      business: "Hassan Law Firm",
      location: "Dubai, UAE",
      review: "Outstanding service. Our firm now appears at the top for all major legal search terms. The increase in quality leads has been remarkable.",
      rating: 5,
    },
    {
      name: "Jennifer Martinez",
      business: "Martinez Family Restaurant",
      location: "Los Angeles, USA",
      review: "We went from struggling to having a waitlist most evenings. The GMB optimization and review strategy transformed our business completely.",
      rating: 5,
    },
    {
      name: "Robert Thompson",
      business: "Thompson HVAC Solutions",
      location: "Toronto, Canada",
      review: "Delivered exactly what was promised - more visibility, more calls, and more customers. A true professional in the SEO world.",
      rating: 5,
    },
  ];

  const trustMetrics = [
    { label: "Client Success", value: "100+", icon: <Users size={20} /> },
    { label: "Global Reach", value: "15+", icon: <Globe size={20} /> },
    { label: "Avg Rating", value: "5.0", icon: <Star size={20} /> },
    { label: "Success Rate", value: "99%", icon: <ShieldCheck size={20} /> },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950 selection:bg-cyan-100 font-sans antialiased overflow-x-hidden">
      <Header />

      {/* ================= 1. LUXURY HERO SECTION ================= */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-50/50 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm mb-10">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-cyan-600 fill-cyan-600" />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                Unrivaled 5.0 Reputation
              </span>
            </div>

            <h1 className="text-6xl md:text-[7rem] font-[950] tracking-tighter uppercase leading-[0.85] mb-12">
              THE PROOF OF <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-cyan-600">DOMINANCE</span>
            </h1>

            <p className="text-slate-500 text-xl md:text-2xl max-w-2xl mx-auto font-light italic font-serif leading-relaxed">
              "Real success stories from business owners who transformed their local territory into a digital fortress."
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= 2. TRUST METRICS BAR ================= */}
      <section className="pb-24">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white border border-slate-100 rounded-[2rem] text-center hover:shadow-xl transition-all group"
              >
                <div className="text-cyan-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                  {metric.icon}
                </div>
                <h4 className="text-4xl font-black tracking-tighter mb-1">{metric.value}</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED QUOTE (THE "AHA" BLOCK) ================= */}
      <section className="py-32 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, #0891b2 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        <div className="container mx-auto px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-cyan-600/30 mx-auto mb-10" strokeWidth={1} />
            <h2 className="text-3xl md:text-5xl text-white font-medium italic font-serif leading-tight mb-10">
              "Working with Raza was the best investment I've made for my business. Period. My calls went from zero to 300% in weeks."
            </h2>
            <div className="h-px w-20 bg-cyan-600 mx-auto mb-6" />
            <p className="text-cyan-500 font-black uppercase tracking-[0.4em] text-xs">Verified Client Feedback</p>
          </div>
        </div>
      </section>

      {/* ================= 4. TESTIMONIALS GRID ================= */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 bg-[#FAF9F6] border border-slate-100 rounded-[3rem] hover:bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} className="text-cyan-600 fill-cyan-600" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-lg leading-relaxed mb-10 font-medium">
                  "{testimonial.review}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-slate-200/50">
                  <div className="h-12 w-12 rounded-2xl bg-slate-950 flex items-center justify-center text-white font-black text-xl italic group-hover:bg-cyan-600 transition-colors">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black uppercase tracking-tighter text-slate-950">{testimonial.name}</h4>
                    <p className="text-[10px] font-bold text-cyan-600 uppercase tracking-widest">{testimonial.business}</p>
                    <p className="text-[9px] text-slate-400 font-medium">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. FINAL CALL TO ACTION ================= */}
      <section className="py-32">
        <CTASection
          title="Ready to Add Your Success Story?"
          subtitle="One niche. One city. One partner. Check availability to secure your territory."
        />
      </section>

      <Footer />
    </div>
  );
};

export default Reviews;