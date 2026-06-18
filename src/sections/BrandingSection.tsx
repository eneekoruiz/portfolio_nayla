import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ParallaxContainer from "../components/ParallaxContainer";
import TiltCard from "../components/TiltCard";
import styles from "./BrandingSection.module.css";

// Import branding assets
import tarjetas1 from "../assets/tarjetas 1.png";
import tarjetas2 from "../assets/tarjetas 2.png";
import cinta1 from "../assets/cinta1.png";
import cinta2 from "../assets/cinta2.png";
import lata1 from "../assets/lata1.png";
import lata2 from "../assets/lata2.png";

export default function BrandingSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Track scroll within this section to animate the sliding packing tapes
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to horizontal translation (X) for tapes with wider range (-400px to 400px)
  const xTape1Range = useTransform(scrollYProgress, [0, 1], [-350, 250]);
  const xTape2Range = useTransform(scrollYProgress, [0, 1], [250, -350]);

  // Spring smoothers for scroll-bound elements to give them premium lag physics
  const springConfig = { damping: 25, stiffness: 45, mass: 0.6 };
  const xTape1 = useSpring(xTape1Range, springConfig);
  const xTape2 = useSpring(xTape2Range, springConfig);

  return (
    <section ref={sectionRef} id="branding" className={styles.brandingSection}>
      <div className={styles.container}>
        {/* Quote Block */}
        <div className={styles.quoteBlock}>
          <span className="text-caption-mono">CREACIÓN DE MARCA</span>
          <h2 className="text-display" style={{ marginTop: "0.5rem" }}>
            “No es diseño, es declaración.”
          </h2>
          <p className={`${styles.quoteSubtitle} text-editorial-serif`}>
            Crear mi propia marca fue diseñar algo más que un logo: fue reducir mi visión a una forma.
          </p>
        </div>

        {/* Brand Description Grid */}
        <div className={styles.descriptionGrid}>
          <div className={styles.descColLeft}>
            <h3 className="text-heading-lg">Tercera estrella a la derecha</h3>
            <p className="text-body-clean">
              Es la frase que compone nuestro eslogan, la ilusión de un sueño forjado en la infancia, una luz lejana que aún brilla. Al encontrarnos en el camino, decidimos seguirlo juntas — una estrella para cada una, con la fuerza de crear otra independiente: una que una y multiplique. Guía nuestros pasos y da sentido a la magia de nuestra vida.
            </p>
          </div>
          <div className={styles.descColRight}>
            <p className="text-body-clean">
              Geometría con intención. El símbolo se repite, se adapta, se funde con lo que es la identidad de la marca y con lo que hacemos. Este branding no busca ser neutral. Tiene filo. Tiene peso. Está hecho para dejar huella sin pedir permiso.
            </p>
            <p className="text-body-clean" style={{ fontWeight: 500, marginTop: "1rem", color: "var(--text-primary)" }}>
              Trazarte a ti mismo es el reto más honesto.
            </p>
          </div>
        </div>
      </div>

      {/* Horizontal Sliding Tapes Showcase (Now with spring physics) */}
      <div className={styles.tapesContainer}>
        <motion.div style={{ x: xTape1 }} className={styles.tapeRow}>
          <img src={cinta1} alt="Tape white" className={styles.tapeImage} />
          <img src={cinta1} alt="Tape white" className={styles.tapeImage} />
        </motion.div>
        
        <motion.div style={{ x: xTape2 }} className={styles.tapeRow}>
          <img src={cinta2} alt="Tape black" className={styles.tapeImage} />
          <img src={cinta2} alt="Tape black" className={styles.tapeImage} />
        </motion.div>
      </div>

      {/* Mockup Display Showcase (Offset overlap spread layout) */}
      <div className={styles.container}>
        <div className={styles.mockupGrid}>
          {/* Card Mockup 1 (Shifted down slightly) */}
          <div className={`${styles.mockupCol} ${styles.offsetDown}`}>
            <span className="text-caption-mono">TARJETA DE PRESENTACIÓN · FRONTAL</span>
            <TiltCard intensity={10} enableSheen={true} className={styles.mockupCard}>
              <img src={tarjetas1} alt="Business Cards front" className={styles.mockupImage} />
            </TiltCard>
          </div>

          {/* Card Mockup 2 (Shifted up slightly) */}
          <div className={`${styles.mockupCol} ${styles.offsetUp}`}>
            <span className="text-caption-mono">TARJETA DE PRESENTACIÓN · RETRO</span>
            <TiltCard intensity={10} enableSheen={true} className={styles.mockupCard}>
              <img src={tarjetas2} alt="Business Cards back" className={styles.mockupImage} />
            </TiltCard>
          </div>
        </div>

        {/* Beverage Cans Floating Parallax */}
        <div className={styles.cansSection}>
          <div className={styles.cansHeader}>
            <span className="text-caption-mono">PACKAGING DE APLICACIÓN</span>
            <h3 className="text-heading-lg">MERCH BEER LATA</h3>
          </div>
          
          <div className={styles.cansGrid}>
            <ParallaxContainer speed={0.12} className={styles.canContainer}>
              <TiltCard intensity={14} enableSheen={true} className={styles.canCard}>
                <img src={lata1} alt="Branding beer can 1" className={styles.canImage} />
              </TiltCard>
            </ParallaxContainer>
            
            <ParallaxContainer speed={-0.08} className={styles.canContainer}>
              <TiltCard intensity={14} enableSheen={true} className={styles.canCard}>
                <img src={lata2} alt="Branding beer can 2" className={styles.canImage} />
              </TiltCard>
            </ParallaxContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
