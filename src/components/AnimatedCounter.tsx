import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", duration = 2 }: AnimatedCounterProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const [displayValue, setDisplayValue] = useState(0);
  
  const spring = useSpring(0, { 
    damping: 30, 
    stiffness: 100,
    duration: duration * 1000 
  });

  useEffect(() => {
    if (isVisible) {
      spring.set(value);
    }
  }, [isVisible, value, spring]);

  useEffect(() => {
    const unsubscribe = spring.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
    return unsubscribe;
  }, [spring]);

  return (
    <span ref={ref}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default AnimatedCounter;
