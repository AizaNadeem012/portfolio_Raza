import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { 
  Phone, Mail, MapPin, Clock, Send, 
  MessageSquare, CheckCircle, Fingerprint, Sparkles, Navigation 
} from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Transmission Received",
      description: "Tactical analysis of your request has begun. Expect a reply within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", business: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Phone, title: "Direct Line", value: "0347-4825228", href: "tel:03474825228" },
    { icon: Mail, title: "Secure Email", value: "freeelancerc@gmail.com", href: "mailto:freeelancerc@gmail.com" },
    { icon: MapPin, title: "Operation Zone", value: "Worldwide / Remote" },
    { icon: Clock, title: "Lead Time", value: "< 24 Hours Response" },
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-950 selection:bg-cyan-100 font-sans antialiased">
      <Header />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-48 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-100/40 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-flex items-center gap-2 text-cyan-700 font-bold uppercase tracking-[0.4em] text-[10px] mb-8 py-2 px-4 border border-cyan-100 rounded-full bg-white/50 backdrop-blur-sm">
              <Navigation size={12} className="animate-pulse" />
              Establish Connection
            </span>
            <h1 className="text-6xl md:text-8xl font-[950] tracking-tighter uppercase mb-6 leading-[0.85]">
              LET'S SCALE YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-cyan-600 italic font-serif lowercase font-normal">digital</span> EMPIRE.
            </h1>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Ready to claim your territory on Google Maps? Send a secure message to initiate a GMB Audit and strategic consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTACT GRID ================= */}
      <section className="pb-32">
        <div className="container mx-auto px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left Column: Info & Trust */}
            <div className="lg:col-span-5 space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-cyan-500/5 transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 text-cyan-600">
                      <info.icon size={20} />
                    </div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} className="text-sm font-bold hover:text-cyan-600 transition-colors">{info.value}</a>
                    ) : (
                      <p className="text-sm font-bold">{info.value}</p>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Luxury Audit Box */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="p-10 rounded-[3rem] bg-slate-950 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                   <Fingerprint size={120} strokeWidth={1} />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                    <span className="text-cyan-400 font-bold uppercase tracking-widest text-[10px]">Complimentary Protocol</span>
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tighter mb-4">Free GMB Audit</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8 font-medium">
                    Every first connection includes a deep-dive analysis of your current Google Business signals and competitor gaps.
                  </p>
                  <Button className="w-full h-14 bg-white text-black hover:bg-cyan-500 hover:text-white rounded-2xl font-black uppercase text-xs tracking-widest transition-all">
                    Request Analysis
                  </Button>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Tactical Form */}
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[3rem] p-8 md:p-12 border border-slate-100 shadow-2xl shadow-slate-200/50"
              >
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="e.g. John Wick"
                        className="h-16 rounded-2xl border-slate-100 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-slate-50/50"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@empire.com"
                        className="h-16 rounded-2xl border-slate-100 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-slate-50/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Business Name</label>
                      <Input
                        name="business"
                        value={formData.business}
                        onChange={(e) => setFormData({...formData, business: e.target.value})}
                        placeholder="Company Ltd."
                        className="h-16 rounded-2xl border-slate-100 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-slate-50/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Phone (Optional)</label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+1 (555) 000-0000"
                        className="h-16 rounded-2xl border-slate-100 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Project Brief</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell me about your market dominance goals..."
                      className="min-h-[180px] rounded-[2rem] border-slate-100 focus:ring-cyan-500/20 focus:border-cyan-500 transition-all bg-slate-50/50 p-6 resize-none"
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-20 rounded-[2rem] bg-slate-950 hover:bg-cyan-600 text-white font-black uppercase tracking-widest text-sm transition-all group overflow-hidden relative"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div 
                          key="loading"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex items-center gap-3"
                        >
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Encrypting Message...
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="idle"
                          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                          className="flex items-center gap-3"
                        >
                          Initialize Growth <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>

                  <div className="flex items-center justify-center gap-6 pt-4">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <CheckCircle size={14} className="text-cyan-500" /> Secure SSL
                    </div>
                    <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      <Sparkles size={14} className="text-cyan-500" /> 100% Confidential
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;