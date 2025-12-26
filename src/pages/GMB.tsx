import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";
import StepProgress from "@/components/StepProgress";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Star,
  Image,
  FileText,
  Tag,
  Clock,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
} from "lucide-react";

const GMB = () => {
  const gmbBenefits = [
    {
      icon: Phone,
      title: "Increase Direct Calls",
      description: "Customers can call you directly from your GMB listing with one tap.",
    },
    {
      icon: MapPin,
      title: "Get Found on Maps",
      description: "Show up when customers search for businesses like yours nearby.",
    },
    {
      icon: Star,
      title: "Build Trust with Reviews",
      description: "Showcase your positive reviews to build instant credibility.",
    },
    {
      icon: TrendingUp,
      title: "Boost Local Visibility",
      description: "Appear in the local 3-pack for maximum exposure.",
    },
  ];

  const optimizationSteps = [
    {
      icon: FileText,
      title: "GMB Setup & Verification",
      description: "Complete profile creation and verification process to establish your legitimate business presence on Google.",
    },
    {
      icon: Tag,
      title: "Category Optimization",
      description: "Strategic selection of primary and secondary categories to maximize relevance for your target searches.",
    },
    {
      icon: FileText,
      title: "Business Description Optimization",
      description: "Compelling, keyword-rich business description that tells Google and customers exactly what you offer.",
    },
    {
      icon: Image,
      title: "Images & Geo-tagging",
      description: "High-quality images with proper geo-tags to boost your local relevance signals.",
    },
    {
      icon: Star,
      title: "Reviews Optimization",
      description: "Strategies to generate authentic positive reviews and professional review management.",
    },
    {
      icon: MapPin,
      title: "Google Maps Ranking Strategy",
      description: "Comprehensive approach to ranking in the local 3-pack and maps results.",
    },
  ];

  const stats = [
    { value: "46%", label: "of all Google searches have local intent" },
    { value: "88%", label: "of consumers visit or call within 24 hours" },
    { value: "7x", label: "more clicks with complete GMB profiles" },
    { value: "5x", label: "more views than organic website results" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        
        {/* Floating elements */}
        <motion.div
          className="absolute top-20 right-20 w-20 h-20 rounded-full bg-white/10"
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        
        <div className="container mx-auto px-4 relative">
          <AnimatedSection className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-semibold mb-4">
              Google Business Profile
            </span>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Google Business Profile Optimization
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Your Google Business Profile is the #1 factor for local search visibility. 
              Get found by customers who are actively looking for your services.
            </p>
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="heroOutline" size="lg" className="gap-2 bg-white text-primary hover:bg-white/90 border-0">
                  Get Your Free GMB Audit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-4"
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What is GMB */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              What is Google Business Profile?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Google Business Profile (formerly Google My Business) is a free tool that lets you manage how your 
              business appears on Google Search and Maps. It's the most important factor for local search visibility, 
              allowing customers to find your business, see your hours, read reviews, and contact you directly.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gmbBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="p-6 rounded-2xl bg-card border border-border shadow-card text-center group"
                >
                  <motion.div 
                    className="w-14 h-14 rounded-xl hero-gradient flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why GMB Matters */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="right">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why GMB Optimization is Critical for Local Businesses
              </h2>
              <div className="space-y-4">
                {[
                  "46% of all Google searches have local intent",
                  "88% of consumers who search locally visit or call within 24 hours",
                  "76% of people who search for something nearby visit a business within a day",
                  "GMB listings get 5x more views than organic website results",
                  "Businesses with complete GMB profiles get 7x more clicks",
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 shrink-0" />
                    <span className="text-foreground">{stat}</span>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="left" delay={0.2}>
              <motion.div 
                className="bg-card rounded-2xl p-8 border border-border shadow-card"
                whileHover={{ y: -5 }}
              >
                <Clock className="w-12 h-12 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  Don't Let Competitors Steal Your Customers
                </h3>
                <p className="text-muted-foreground">
                  If your Google Business Profile isn't optimized, your competitors are capturing the customers 
                  who should be finding you. Every day without optimization is lost revenue and missed opportunities.
                </p>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* My GMB Optimization Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              My GMB Optimization Process
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive step-by-step approach to maximize your Google Business Profile performance
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <StepProgress steps={optimizationSteps} />
          </div>

          <AnimatedSection delay={0.5} className="text-center mt-12">
            <Link to="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="hero" size="lg" className="gap-2">
                  Start Your GMB Optimization
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </motion.div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <CTASection
        title="Ready to Optimize Your Google Business Profile?"
        subtitle="Get a free audit and see exactly how to improve your local visibility"
      />

      <Footer />
    </div>
  );
};

export default GMB;
