import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import styles from "./HeroSection.module.css";

// Import assets
import elementosPortfolio from "../assets/elementos portfolio.png";
import fotoPortfolio from "../assets/foto de portfolio.png";
import imgProfile from "../assets/IMG_4559.jpg";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate tracker for background inertia parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 40, stiffness: 200, mass: 1 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Translate mouse offsets into pixel translations for parallax depth layers
  const xLayer1 = useTransform(smoothMouseX, [-0.5, 0.5], [-35, 35]);
  const yLayer1 = useTransform(smoothMouseY, [-0.5, 0.5], [-35, 35]);

  const xLayer2 = useTransform(smoothMouseX, [-0.5, 0.5], [45, -45]);
  const yLayer2 = useTransform(smoothMouseY, [-0.5, 0.5], [45, -45]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Normalized coordinates between -0.5 and 0.5
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      id="hero" 
      className={styles.heroSection}
    >
      {/* Parallax Mouse-Inertia Background Graphics */}
      <div className={styles.backgroundGraphics}>
        <motion.div style={{ x: xLayer1, y: yLayer1 }} className={styles.bgGraphic1}>
          <img src={elementosPortfolio} alt="" />
        </motion.div>
        
        <motion.div style={{ x: xLayer2, y: yLayer2 }} className={styles.bgGraphic2}>
          <img src={elementosPortfolio} alt="" />
        </motion.div>
      </div>

      <div className={styles.contentContainer}>
        {/* Left Side: Typography and Meta */}
        <div className={styles.leftCol}>
          <div className={styles.metaRow}>
            <span className="text-caption-mono">PORTFOLIO VISUAL</span>
            <span className={styles.divider}></span>
            <span className="text-caption-mono">ESPAÑA · 2025</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={styles.titleWrapper}
          >
            <h1 className="text-gothic-title">Nayla</h1>
            <h1 className={`${styles.surname} text-display`}>Aguado</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className={styles.descriptionWrapper}
          >
            <p className={`${styles.introText} text-body-clean`}>
              Creadora visual e ilustradora digital enfocada en identidades filosas, editorial con ritmo y empaques con historia. Bienvenidos a un espacio donde la línea y el alma se encuentran sin pedir permiso.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Collage Offset Layout (Directly matching InDesign coordinates ratio) */}
        <div className={styles.rightCol}>
          <div className={styles.collageCanvas}>
            {/* Collage Mockup (Width = 191pt, Height = 168pt, X = -102pt, Y = 62pt) */}
            <motion.div
              initial={{ opacity: 0, x: -30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.collageFrame}
            >
              <img src={fotoPortfolio} alt="Collage de portfolio" className={styles.collageImg} />
            </motion.div>

            {/* Profile Mockup (Width = 137pt, Height = 140pt, X = 109pt, Y = 48pt) */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.profileFrame}
            >
              <img src={imgProfile} alt="Perfil Nayla Aguado" className={styles.profileImg} />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className={styles.scrollIndicator}
      >
        <span className="text-caption-mono">Desliza para explorar</span>
        <div className={styles.scrollLine}></div>
      </motion.div>
    </section>
  );
}
