import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
  // Parse numeric value and suffix
  const numericMatch = value.match(/^(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1]) : 0;
  const suffix = value.replace(/^\d+/, "");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.001 }}
      whileHover={{ scale: 1.05 }}
      className="text-center p-6 cursor-default"
    >
      <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
        {numericValue > 0 ? (
          <AnimatedCounter value={numericValue} suffix={suffix} />
        ) : (
          value
        )}
      </div>
      <p className="text-muted-foreground font-medium">{label}</p>
    </motion.div>
  );
};

export default StatCard;
