import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  business: string;
  location: string;
  review: string;
  rating: number;
  delay?: number;
}

const TestimonialCard = ({ name, business, location, review, rating, delay = 0 }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: delay * 0.001 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="p-6 rounded-2xl bg-card border border-border shadow-card"
    >
      {/* Stars with stagger animation */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (delay * 0.001) + (i * 0.1), type: "spring", stiffness: 300 }}
          >
            <Star
              className={`w-5 h-5 ${i < rating ? "fill-secondary text-secondary" : "text-muted"}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Review */}
      <p className="text-foreground leading-relaxed mb-6 italic">"{review}"</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <motion.div 
          className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center text-primary-foreground font-bold"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {name.charAt(0)}
        </motion.div>
        <div>
          <p className="font-display font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground">{business} • {location}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
