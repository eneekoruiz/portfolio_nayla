import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./EditorialSection.module.css";

// Import magazine mockup assets
import mock1 from "../assets/revista mockup 1-3.png";
import mock2 from "../assets/3_1.png";
import mock3 from "../assets/Magazine-Mockup-Presentation-vol9.png";
import mock4 from "../assets/2.png";

const slides = [
  { id: 1, src: mock1, label: "Revista Mockup I · Spreads Abiertos" },
  { id: 2, src: mock2, label: "Detalle Editorial II · Portada/Páginas" },
  { id: 3, src: mock3, label: "Presentación Revista III · Perspectiva" },
  { id: 4, src: mock4, label: "Páginas Interiores IV · Composición" }
];

export default function EditorialSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="editorial" className={styles.editorialSection}>
      <div className={styles.container}>
        {/* Quote Block Page 14 */}
        <div className={styles.quoteBlock}>
          <span className="text-caption-mono">DISEÑO EDITORIAL</span>
          <h2 className="text-display" style={{ marginTop: "0.5rem" }}>
            “Parecía simple, entro a jugar y pesaba más de lo que creías, diseñada para quedarse.”
          </h2>
        </div>

        {/* Narrative & Layout Grid */}
        <div className={styles.contentGrid}>
          <div className={styles.narrativeCol}>
            <p className="text-body-clean">
              Este proyecto editorial nace como base de revista joven, pero se transforma: cambia el tono, el contenido y el público. Aquí el lector ya no busca entretenerse: busca algo que le hable directo.
            </p>
            <p className="text-body-clean" style={{ marginTop: "1rem" }}>
              Y en el fondo, también funciona como un reflejo de mi manera de ver el diseño editorial: como un terreno donde todo puede mezclarse, sin pedir permiso. La manera de susurrar historias en lenguaje de imágenes y palabras.
            </p>
            
            <div className={styles.highlightBlock}>
              <span className="text-caption-mono">LA FILOSOFÍA</span>
              <p className="text-heading-md" style={{ color: "var(--accent-blue)", marginTop: "0.2rem" }}>
                “La revista no informa: conecta.”
              </p>
            </div>
          </div>

          <div className={styles.detailsCol}>
            <h3 className="text-heading-md">Estructura & Secciones</h3>
            <ul className={styles.sectionsList}>
              <li>
                <span className={styles.bullet}></span>
                <p className="text-body-clean">
                  <strong>Entrevista musical sin filtros:</strong> Conversaciones crudas de calle.
                </p>
              </li>
              <li>
                <span className={styles.bullet}></span>
                <p className="text-body-clean">
                  <strong>Moda urbana real:</strong> Fotografía de calle, alejada de pasarelas.
                </p>
              </li>
              <li>
                <span className={styles.bullet}></span>
                <p className="text-body-clean">
                  <strong>Espacios de intervención:</strong> Páginas para pintar, escribir o intervenir.
                </p>
              </li>
              <li>
                <span className={styles.bullet}></span>
                <p className="text-body-clean">
                  <strong>Poesía temporal:</strong> Poemas que dialogan con el espacio en blanco.
                </p>
              </li>
              <li>
                <span className={styles.bullet}></span>
                <p className="text-body-clean">
                  <strong>Playlist híbrida:</strong> Una mezcla de clásicos y sonidos recientes.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Interactive Slideshow Showcase with progress bar */}
        <div className={styles.sliderSection}>
          <div className={styles.sliderHeader}>
            <span className="text-caption-mono">REVISTA MAQUETAS (INTERACTIVO)</span>
            <div className={styles.controls}>
              <button className={styles.controlBtn} onClick={prevSlide} aria-label="Previous Spread">
                <ChevronLeft size={20} />
              </button>
              <span className={styles.counter}>{current + 1} / {slides.length}</span>
              <button className={styles.controlBtn} onClick={nextSlide} aria-label="Next Spread">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className={styles.viewport}>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 70 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -70 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className={styles.slideFrame}
              >
                <img src={slides[current].src} alt={slides[current].label} className={styles.slideImage} />
                <div className={styles.slideCaption}>
                  <span className="text-caption-mono">{slides[current].label}</span>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Editorial Horizontal Progress Bar */}
            <div className={styles.progressBar}>
              <div 
                className={styles.progressFill} 
                style={{ width: `${((current + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
