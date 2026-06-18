import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import styles from "./TransitionEyeSection.module.css";

// Import converted JPG asset
import ilustracionOjo from "../assets/Ilustración_sin_título.jpg";

export default function TransitionEyeSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll inside this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform scroll progress to scale the eye image and apply a clip path
  const scale = useTransform(scrollYProgress, [0.1, 0.75], [0.85, 1.05]);
  const opacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0, 1, 1, 0]);
  
  // High-inertia spring configuration (damping: 24, stiffness: 45) for ultra-smooth focus transition
  const springScale = useSpring(scale, { stiffness: 45, damping: 24, mass: 1.2 });
  const springOpacity = useSpring(opacity, { stiffness: 60, damping: 22 });

  return (
    <div ref={containerRef} className={styles.transitionSection}>
      <div className={styles.stickyWrapper}>
        <motion.div 
          style={{ scale: springScale, opacity: springOpacity }}
          className={styles.imageFrame}
        >
          {/* Main Illustration */}
          <img src={ilustracionOjo} alt="Ilustración ojo azul" className={styles.eyeImage} />
          
          {/* Subtle Dark Vignette overlay */}
          <div className={styles.vignetteOverlay} />
        </motion.div>
      </div>
    </div>
  );
}
