import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Reviews", path: "/reviews" },
    { name: "About", path: "/about" },      // Added About page
    { name: "Contact", path: "/contact" },  // Added Contact page
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 bg-black ${
        isScrolled ? "py-3 border-b border-white/10 shadow-2xl" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Raza Cheena"
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500 group-hover:border-white transition-all duration-500"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-black rounded-full"></div>
            </div>
            <div className="leading-tight">
              <h1 className="font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">RAZACHEENA</h1>
              <p className="text-[10px] text-cyan-400 font-black uppercase tracking-widest">Local SEO Pro</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all ${
                  isActive(link.path) ? "text-cyan-400" : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 rounded-full -z-10"
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-cyan-500 hover:bg-white text-black font-black text-xs uppercase tracking-widest px-6 h-12 rounded-none transition-all flex items-center gap-2 group">
              Get Audit 
              <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-cyan-400 transition"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[70px] bg-black z-40 lg:hidden"
          >
            <div className="flex flex-col p-8 gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-5xl font-black uppercase tracking-tighter ${
                    isActive(link.path) ? "text-cyan-500 italic" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <div className="space-y-4">
                <p className="text-gray-500 uppercase font-bold tracking-widest text-xs">Direct Contact</p>
                <p className="text-3xl font-black text-white italic">03474825228</p>
              </div>
              <Button className="w-full bg-cyan-500 text-black font-black py-8 text-xl rounded-none">
                START A PROJECT
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
