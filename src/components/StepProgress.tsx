import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface Step {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface StepProgressProps {
  steps: Step[];
}

const StepProgress = ({ steps }: StepProgressProps) => {
  return (
    <div className="relative">
      {/* Progress Line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden lg:block" />
      
      <div className="space-y-8 lg:space-y-12">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="relative flex items-start gap-6"
            >
              {/* Step Number with Icon */}
              <motion.div 
                className="relative z-10 flex-shrink-0"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="w-16 h-16 rounded-2xl hero-gradient flex items-center justify-center shadow-lg">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground text-xs font-bold shadow-md">
                  {index + 1}
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgress;
