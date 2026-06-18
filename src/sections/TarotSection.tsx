import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import TiltCard from "../components/TiltCard";
import styles from "./TarotSection.module.css";

// Import small card images
import locoImg from "../assets/el loco.png";
import templanzaImg from "../assets/la templanza_1.png";
import colgadoImgSmall from "../assets/el colgado_1.png";
import diabloImgSmall from "../assets/el diablo_1.png";

// Import large card images
import colgadoImgLarge from "../assets/El_Colgado.png";
import diabloImgLarge from "../assets/El_Diablo.png";
import recurso18Img from "../assets/Recurso 18.png"; // Frame/Layout element

const cards = [
  {
    id: "loco",
    name: "El Loco",
    desc: "El punto cero, el inicio del camino, la inocencia y el riesgo absoluto sin temor al abismo.",
    imgSmall: locoImg,
    imgLarge: locoImg
  },
  {
    id: "templanza",
    name: "La Templanza",
    desc: "El equilibrio y la alquimia de opuestos. Flujo controlado de energías, transmutación y paz interior.",
    imgSmall: templanzaImg,
    imgLarge: templanzaImg
  },
  {
    id: "colgado",
    name: "El Colgado",
    desc: "La pausa necesaria, ver el mundo al revés, sacrificio voluntario para obtener una perspectiva superior.",
    imgSmall: colgadoImgSmall,
    imgLarge: colgadoImgLarge
  },
  {
    id: "diablo",
    name: "El Diablo",
    desc: "Las ataduras, la sombra, los deseos primarios y la repetición. La fuerza material e instintiva del ego.",
    imgSmall: diabloImgSmall,
    imgLarge: diabloImgLarge
  }
];

// Staggered container for card entries
const deckVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};

export default function TarotSection() {
  const [selectedCard, setSelectedCard] = useState<typeof cards[0] | null>(null);

  return (
    <section id="tarot" className={styles.tarotSection}>
      <div className={styles.container}>
        {/* Quote Page 4 */}
        <div className={styles.quoteWrapper}>
          <motion.p 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-editorial-serif"
          >
            “Aunque no tenga carne, el alma deja línea.”
          </motion.p>
        </div>

        {/* Grid of Cards */}
        <div className={styles.gridWrapper}>
          <div className={styles.introCol}>
            <span className="text-caption-mono">SERIE ILUSTRADA</span>
            <h2 className={`${styles.sectionTitle} text-heading-lg`}>CARTAS DE TAROT</h2>
            <p className="text-body-clean">
              Esta serie nace del contraste y la repetición. Ilustro a mano, en digital, línea por línea, como si cada trazo fuera una pequeña herida controlada.
            </p>
            <p className="text-body-clean" style={{ marginTop: "1rem" }}>
              Los cuerpos que aparecen ya no tienen piel: son esqueletos humanos, figuras simbólicas que conectan lo espiritual y lo gráfico.
            </p>
            <p className={`${styles.helperText} text-caption-mono`}>
              Haz clic en cualquier carta para ver en detalle
            </p>
          </div>

          {/* Cards Deck with abanico fan-out scroll trigger */}
          <motion.div 
            variants={deckVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-120px" }}
            className={styles.deckCol}
          >
            {cards.map((card, index) => {
              // Calculate fan rotation offset (-9deg, -3deg, +3deg, +9deg)
              const fanAngle = index * 6 - 9;
              
              return (
                <motion.div
                  key={card.id}
                  variants={{
                    hidden: { opacity: 0, y: 80, rotate: 0 },
                    show: { 
                      opacity: 1, 
                      y: 0, 
                      rotate: fanAngle,
                      transition: { type: "spring", stiffness: 100, damping: 20 }
                    }
                  }}
                  whileHover={{ 
                    y: -15, 
                    rotate: fanAngle * 0.5, 
                    zIndex: 15,
                    transition: { duration: 0.3 }
                  }}
                  onClick={() => setSelectedCard(card)}
                  className={styles.cardContainer}
                >
                  <TiltCard intensity={18} enableSheen={true} className={styles.cardTilt}>
                    <img src={card.imgSmall} alt={card.name} className={styles.cardImage} />
                    <div className={styles.cardGlow} />
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Recurso 18 decorative banner/frame */}
        <div className={styles.recursoFrame}>
          <img src={recurso18Img} alt="" />
        </div>
      </div>

      {/* Modal Detail View */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modalOverlay}
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              initial={{ scale: 0.92, y: 60 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 60 }}
              transition={{ type: "spring", stiffness: 220, damping: 26 }}
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={() => setSelectedCard(null)}>
                <X size={24} />
              </button>

              <div className={styles.modalLayout}>
                <div className={styles.modalVisual}>
                  <img src={selectedCard.imgLarge} alt={selectedCard.name} className={styles.modalImage} />
                </div>
                <div className={styles.modalDetails}>
                  <span className="text-caption-mono">EL CONTEXTO</span>
                  <h3 className="text-heading-lg">{selectedCard.name}</h3>
                  <p className={`${styles.modalDesc} text-body-clean`}>
                    {selectedCard.desc}
                  </p>
                  <p className="text-body-clean" style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                    Trazado digital línea a línea. Paleta limitada en blanco, negro y un par de variaciones de azul y amarillo para centrar la fuerza en la forma, la sombra y el volumen sin distracciones.
                  </p>
                  <div className={styles.modalFooter}>
                    <p className="text-caption-mono">“Cada carta es un espejo. A veces roto. A veces muy claro.”</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
