import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ParallaxContainerProps {
  children: React.ReactNode;
  className?: string;
  speed?: number; // Relative velocity multiplier (negative moves down, positive moves up)
}

export default function ParallaxContainer({ children, className = "", speed = 0.2 }: ParallaxContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track scroll position relative to this element's viewports
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Transform scroll position into coordinate offsets (e.g., -100px to 100px)
  const yRange = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  
  // Smooth the transform to avoid jitters
  const y = useSpring(yRange, { stiffness: 100, damping: 25, mass: 0.5 });

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
