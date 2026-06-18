import TiltCard from "../components/TiltCard";
import ParallaxContainer from "../components/ParallaxContainer";
import { motion } from "framer-motion";
import styles from "./PackagingSection.module.css";

// Import packaging assets
import dulceMockup from "../assets/dulce con fondo jpg.jpg";
import cervezaMockup from "../assets/cerveza con fondojpg.jpg";
import estudioMockup from "../assets/prueba1-Cámara 2.jpg";
import elementosAazul from "../assets/elementos aazul.png"; // Grecian design framing

// Import Greek vector ornaments
import r15 from "../assets/Recurso 15.png";
import r16 from "../assets/Recurso 16.png";
import r2 from "../assets/Recurso 2.png";
import r4 from "../assets/Recurso 4.png";
import r5 from "../assets/Recurso 5.png";
import hygs from "../assets/hygs.png";

const greekStamps = [
  { id: "s1", src: r2, name: "Marca de Alfarero", size: "small" },
  { id: "s2", src: r4, name: "Guarda I", size: "medium" },
  { id: "s3", src: r5, name: "Guarda II", size: "medium" },
  { id: "s4", src: r15, name: "Vaso Canopo", size: "large" },
  { id: "s5", src: r16, name: "Crátera Antigua", size: "large" },
  { id: "s6", src: hygs, name: "Sello de Calidad", size: "small" }
];

export default function PackagingSection() {
  return (
    <section id="packaging" className={styles.packagingSection}>
      {/* Background Parallax Graphic Framer */}
      <ParallaxContainer speed={-0.15} className={styles.bgFramer}>
        <img src={elementosAazul} alt="" />
      </ParallaxContainer>

      <div className={styles.container}>
        {/* Quote Block Page 10 */}
        <div className={styles.quoteBlock}>
          <span className="text-caption-mono">DISEÑO DE EMPAQUE</span>
          <h2 className="text-display" style={{ marginTop: "0.5rem" }}>
            “Diseñar un envase es hacer que algo hable antes de abrirse.”
          </h2>
        </div>

        {/* Narrative & Showcase Grid */}
        <div className={styles.narrativeGrid}>
          <div className={styles.narrativeCol}>
            <p className="text-body-clean">
              Este proyecto parte de una marca ficticia de productos griegos. Inspirado en las formas, los trazos y las texturas del arte clásico, el packaging se convierte en una extensión visual del origen.
            </p>
            <p className="text-body-clean" style={{ marginTop: "1rem" }}>
              Líneas que recuerdan a la cerámica, composiciones que respetan el ritmo de lo antiguo, pero con una mirada actual. Lo griego no como cliché, sino como lenguaje gráfico. Un buen empaque no solo guarda: también cuenta una historia.
            </p>
          </div>

          <div className={styles.stampsCol}>
            <span className="text-caption-mono">GLOSARIO GRÁFICO (RECURSOS GRÁFICOS)</span>
            <div className={styles.stampsGrid}>
              {greekStamps.map((stamp, index) => (
                <motion.div 
                  key={stamp.id} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ 
                    scale: 1.04, 
                    borderColor: "var(--accent-blue)",
                    backgroundColor: "var(--bg-secondary)"
                  }}
                  className={styles.stampItem}
                >
                  <img src={stamp.src} alt={stamp.name} className={`${styles.stampImg} ${styles[stamp.size]}`} />
                  <span className={styles.stampName}>{stamp.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Large Mockup Showcase */}
        <div className={styles.mockupShowcase}>
          {/* Main Studio Mockup */}
          <div className={styles.mainMockupFrame}>
            <span className="text-caption-mono">FOTOGRAFÍA DE PRODUCTO</span>
            <TiltCard intensity={6} enableSheen={true} className={styles.mainMockupCard}>
              <img src={estudioMockup} alt="Studio packaging mock" className={styles.mainMockupImage} />
            </TiltCard>
          </div>

          {/* Secondary Mockups */}
          <div className={styles.secondaryMockupGrid}>
            <ParallaxContainer speed={0.12} className={styles.secondaryMockup}>
              <span className="text-caption-mono">PRODUCTO I · ENVASE DULCE</span>
              <TiltCard intensity={10} enableSheen={true} className={styles.secondaryMockupCard}>
                <img src={dulceMockup} alt="Sweet jar packaging mock" className={styles.secondaryMockupImage} />
              </TiltCard>
            </ParallaxContainer>

            <ParallaxContainer speed={-0.08} className={styles.secondaryMockup}>
              <span className="text-caption-mono">PRODUCTO II · CERVEZA ARTESANA</span>
              <TiltCard intensity={10} enableSheen={true} className={styles.secondaryMockupCard}>
                <img src={cervezaMockup} alt="Beer packaging mock" className={styles.secondaryMockupImage} />
              </TiltCard>
            </ParallaxContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
