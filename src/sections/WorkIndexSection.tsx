import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import TiltCard from "../components/TiltCard";
import styles from "./WorkIndexSection.module.css";

// Import index ticket asset
import tiketAsset from "../assets/tiket.png";

// Import project thumbnails for the interactive hover reveals
import tarotThumbnail from "../assets/El_Colgado.png";
import brandingThumbnail from "../assets/tarjetas 1.png";
import photoThumbnail from "../assets/1.jpg";
import packagingThumbnail from "../assets/cerveza con fondojpg.jpg";
import merchThumbnail from "../assets/3.png";
import editorialThumbnail from "../assets/revista mockup 1-3.png";

const indexItems = [
  { id: "tarot", num: "01", title: "CARTAS DE TAROT", tag: "ILUSTRACIÓN DIGITAL", img: tarotThumbnail },
  { id: "branding", num: "02", title: "ESTRELLA BRANDING", tag: "IDENTIDAD VISUAL", img: brandingThumbnail },
  { id: "photography", num: "03", title: "IMÁGENES Y CÁMARA", tag: "DIRECCIÓN DE FOTO", img: photoThumbnail },
  { id: "packaging", num: "04", title: "PACKAGING GRIEGO", tag: "DISEÑO DE ENVASE", img: packagingThumbnail },
  { id: "merch", num: "05", title: "MERCH / CAMISETAS", tag: "ROPA & GRÁFICA", img: merchThumbnail },
  { id: "editorial", num: "06", title: "REVISTA EDITORIAL", tag: "DISEÑO EDITORIAL", img: editorialThumbnail }
];

export default function WorkIndexSection() {
  const [hoveredItem, setHoveredItem] = useState<typeof indexItems[0] | null>(null);

  // Motion values for cursor position tracking (removes React state updates for 60fps)
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Offset preview card slightly to the bottom-right of the cursor
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="index" className={styles.indexSection} onMouseMove={handleMouseMove}>
      <div className={styles.contentContainer}>
        {/* Left Side: Ticket Outline Menu */}
        <div className={styles.leftCol}>
          <div className={styles.header}>
            <span className="text-caption-mono">SECCIONES</span>
            <h2 className={`${styles.sectionTitle} text-heading-lg`}>MY WORK</h2>
          </div>

          <div className={styles.listContainer}>
            {indexItems.map((item) => (
              <div
                key={item.id}
                className={styles.listItem}
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
                onClick={() => scrollToSection(item.id)}
              >
                <div className={styles.itemMain}>
                  <span className={styles.itemNum}>{item.num}</span>
                  <span className={`${styles.itemTitle} text-display`}>{item.title}</span>
                </div>
                <div className={styles.itemMeta}>
                  <span className="text-caption-mono">{item.tag}</span>
                  <span className={styles.arrow}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: The Ticket Mockup */}
        <div className={styles.rightCol}>
          <div className={styles.ticketWrapper}>
            <span className={`${styles.ticketLabel} text-caption-mono`}>COMPROBANTE / INDICE</span>
            <TiltCard intensity={8} className={styles.ticketCard}>
              <img src={tiketAsset} alt="Index ticket" className={styles.ticketImage} />
            </TiltCard>
          </div>
        </div>
      </div>

      {/* Floating Project Thumbnail Reveal */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -4 }}
            animate={{ opacity: 0.95, scale: 1, rotate: 4 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              x: smoothX,
              y: smoothY,
              pointerEvents: "none",
              zIndex: 50
            }}
            className={styles.floatingPreview}
          >
            <img src={hoveredItem.img} alt={hoveredItem.title} className={styles.previewImage} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
