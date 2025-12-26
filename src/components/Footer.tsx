import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg cta-gradient flex items-center justify-center">
                <MapPin className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg">Razacheena</span>
                <span className="block text-xs text-background/60 -mt-1">Local SEO Expert</span>
              </div>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              Helping local businesses dominate Google Maps and attract more customers through proven Local SEO strategies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "GMB Optimization", "Portfolio", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={item === "Home" ? "/" : item === "GMB Optimization" ? "/gmb" : `/${item.toLowerCase()}`}
                    className="text-background/70 hover:text-secondary transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "GMB Optimization",
                "Google Maps Ranking",
                "Local Citations",
                "Reviews Management",
                "Local SEO Audit",
              ].map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-background/70 hover:text-secondary transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="tel:03474825228" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors text-sm">
                  <Phone className="w-4 h-4" />
                  0347-4825228
                </a>
              </li>
              <li>
                <a href="mailto:freeelancerc@gmail.com" className="flex items-center gap-3 text-background/70 hover:text-secondary transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  freeelancerc@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4" />
                Worldwide Service
              </li>
            </ul>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Razacheena Local SEO Expert. All rights reserved.
          </p>
          <p className="text-background/50 text-sm">
            Rank Higher. Get Found. Grow Local.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
