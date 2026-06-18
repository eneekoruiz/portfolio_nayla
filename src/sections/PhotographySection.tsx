import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TiltCard from "../components/TiltCard";
import styles from "./PhotographySection.module.css";

// Import photo assets
import manipulated1 from "../assets/1.jpg";
import manipulated2 from "../assets/2-4.jpg";
import manipulated3 from "../assets/estrella.jpg"; // Small detail star overlay

import raw1 from "../assets/IMG_0103.jpg";
import raw2 from "../assets/IMG_1101.jpg";
import raw3 from "../assets/000ad2d9-c484-433d-b699-e5051ace51aa.jpg";

import elementosPortfolio1 from "../assets/elementos portfolio_1.png"; // Backdrop element

const photoCategories = {
  all: [
    { id: "m1", src: manipulated1, type: "manipulated", title: "Manipulada I", aspect: "portrait" },
    { id: "r1", src: raw1, type: "raw", title: "Directa I", aspect: "landscape" },
    { id: "m2", src: manipulated2, type: "manipulated", title: "Manipulada II", aspect: "portrait" },
    { id: "r2", src: raw2, type: "raw", title: "Directa II", aspect: "portrait" },
    { id: "r3", src: raw3, type: "raw", title: "Directa III", aspect: "portrait" }
  ],
  manipulated: [
    { id: "m1", src: manipulated1, type: "manipulated", title: "Manipulada I", aspect: "portrait" },
    { id: "m2", src: manipulated2, type: "manipulated", title: "Manipulada II", aspect: "portrait" }
  ],
  raw: [
    { id: "r1", src: raw1, type: "raw", title: "Directa I", aspect: "landscape" },
    { id: "r2", src: raw2, type: "raw", title: "Directa II", aspect: "portrait" },
    { id: "r3", src: raw3, type: "raw", title: "Directa III", aspect: "portrait" }
  ]
};

export default function PhotographySection() {
  const [filter, setFilter] = useState<"all" | "manipulated" | "raw">("all");

  return (
    <section id="photography" className={styles.photoSection}>
      {/* Background Graphic elements */}
      <div className={styles.bgGraphic}>
        <img src={elementosPortfolio1} alt="" />
      </div>

      <div className={styles.container}>
        {/* Quote Block Page 8 */}
        <div className={styles.titleWrapper}>
          <span className="text-caption-mono">FOTOGRAFÍA & RETOQUE</span>
          <h2 className="text-display" style={{ marginTop: "0.5rem" }}>
            “Hay imágenes que quieren incendiar, y otras que basta con respirar.”
          </h2>
        </div>

        {/* Narrative & Filter Grid */}
        <div className={styles.introGrid}>
          <div className={styles.introLeft}>
            <p className="text-body-clean">
              Lo gráfico y lo crudo. El ojo que quiere controlar y el que solo observa. No elijo un solo enfoque. Juego entre los dos. Trabajo desde la intuición, pero también desde el retoque digital como herramienta expresiva.
            </p>
            <p className="text-body-clean" style={{ marginTop: "1rem" }}>
              Me interesa explorar el límite entre la imagen intervenida y la captura directa. Así construyo una narrativa visual que se mueve entre lo real y lo construido.
            </p>
            <p className={`${styles.sign} text-editorial-serif`}>
              — Fotografiar también es decidir qué dejar fuera.
            </p>
          </div>

          <div className={styles.introRight}>
            <div className={styles.stickerContainer}>
              <img src={manipulated3} alt="Star sticker" className={styles.starSticker} />
              <span className="text-caption-mono" style={{ fontSize: "0.7rem", display: "block", marginTop: "0.5rem" }}>
                ESTRELLA STICKER
              </span>
            </div>
            
            {/* Filter Toggle Menu */}
            <div className={styles.filterMenu}>
              <button
                onClick={() => setFilter("all")}
                className={`${styles.filterBtn} ${filter === "all" ? styles.active : ""}`}
              >
                Todas
              </button>
              <button
                onClick={() => setFilter("manipulated")}
                className={`${styles.filterBtn} ${filter === "manipulated" ? styles.active : ""}`}
              >
                Manipuladas
              </button>
              <button
                onClick={() => setFilter("raw")}
                className={`${styles.filterBtn} ${filter === "raw" ? styles.active : ""}`}
              >
                Directas
              </button>
            </div>
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <motion.div layout className={styles.galleryGrid}>
          <AnimatePresence mode="popLayout">
            {photoCategories[filter].map((photo, index) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.94, filter: "blur(12px)", y: 30 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1, 
                  filter: "blur(0px)", 
                  y: 0,
                  transition: { type: "spring", stiffness: 120, damping: 20, delay: index * 0.05 }
                }}
                exit={{ 
                  opacity: 0, 
                  scale: 0.94, 
                  filter: "blur(12px)", 
                  y: 30,
                  transition: { duration: 0.4 }
                }}
                className={`${styles.galleryItem} ${styles[photo.aspect]}`}
              >
                <span className={`${styles.photoTypeTag} text-caption-mono`}>
                  {photo.type === "manipulated" ? "INTERVENIDA" : "CAPTURA DIRECTA"}
                </span>
                <TiltCard intensity={6} enableSheen={true} className={styles.photoCard}>
                  <img src={photo.src} alt={photo.title} className={styles.photoImg} />
                  <div className={styles.shutterOverlay} />
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
