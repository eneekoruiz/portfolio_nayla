import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number; // Adjust tilt severity (default: 15)
  enableSheen?: boolean; // Toggle holographic sheen overlay
}

export default function TiltCard({ children, className = "", intensity = 15, enableSheen = true }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tracking cursor relative to the card's center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for rotation
  const springConfig = { damping: 30, stiffness: 300, mass: 0.8 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), springConfig);

  // Transform for visual depth scaling on hover
  const scale = useSpring(1, springConfig);
  const shadow = useSpring(0.1, springConfig);
  const sheenOpacity = useSpring(0, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Mouse coordinates relative to card center, normalized between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseEnter = () => {
    scale.set(1.03);
    shadow.set(0.3);
    sheenOpacity.set(1);
  };

  const handleMouseLeave = () => {
    scale.set(1);
    shadow.set(0.1);
    sheenOpacity.set(0);
    x.set(0);
    y.set(0);
  };

  // Shadow transform
  const boxShadow = useTransform(
    shadow,
    [0.1, 0.3],
    [
      "0px 5px 15px rgba(0, 0, 0, 0.35)",
      "0px 25px 50px rgba(0, 0, 0, 0.7)"
    ]
  );

  // Compute dynamic sheen gradient position based on cursor MotionValues
  const sheenGradient = useTransform(
    [x, y],
    ([latestX, latestY]) => {
      const px = (latestX as number + 0.5) * 100;
      const py = (latestY as number + 0.5) * 100;
      return `radial-gradient(circle at ${px}% ${py}%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.05) 30%, transparent 60%)`;
    }
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        boxShadow,
        transformStyle: "preserve-3d"
      }}
      className={className}
    >
      {/* Holographic Sheen Layer */}
      {enableSheen && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: sheenGradient,
            opacity: sheenOpacity,
            mixBlendMode: "overlay",
            pointerEvents: "none",
            zIndex: 10,
            borderRadius: "inherit"
          }}
        />
      )}
      
      {children}
    </motion.div>
  );
}
