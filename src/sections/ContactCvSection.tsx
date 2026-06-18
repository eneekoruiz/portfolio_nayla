import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Copy, Check } from "lucide-react";
import styles from "./ContactCvSection.module.css";

// Import asset
import elementosPortfolio from "../assets/elementos portfolio.png";

const softwareSkills = [
  { name: "Adobe Photoshop", level: 90 },
  { name: "Adobe Illustrator", level: 85 },
  { name: "Adobe InDesign", level: 80 },
  { name: "Dibujo / Ilustración Digital", level: 95 }
];

export default function ContactCvSection() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("aura_niux@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact-cv" className={styles.contactCvSection}>
      <div className={styles.container}>
        
        {/* CV Grid Layout */}
        <div className={styles.cvGrid}>
          {/* Box 1: About Me */}
          <div className={`${styles.gridBox} ${styles.aboutBox}`}>
            <span className="text-caption-mono">SOBRE MÍ</span>
            <h3 className="text-heading-lg" style={{ marginTop: "0.5rem" }}>Nayla Aguado</h3>
            <p className="text-body-clean" style={{ marginTop: "1rem" }}>
              Soy una diseñadora apasionada por crear piezas que cuenten historias y transmitan emociones e intenciones. Me inspiran los detalles, el color y las ideas que cobran vida a través del diseño.
            </p>
            
            <div className={styles.skillsSection}>
              <span className="text-caption-mono">PERFIL DE HABILIDADES</span>
              <p className="text-body-clean" style={{ fontSize: "0.95rem", marginTop: "0.5rem" }}>
                Tengo experiencia en creación de identidades visuales e ilustración digital. Me desenvuelvo en edición y composición de imágenes, adaptando cada proyecto al estilo y necesidades. Además, desarrollo logotipos y materiales gráficos que capturen la esencia.
              </p>
            </div>
          </div>

          {/* Box 2: Experience & Education */}
          <div className={`${styles.gridBox} ${styles.historyBox}`}>
            <div className={styles.block}>
              <span className="text-caption-mono">EXPERIENCIA</span>
              <div className={styles.historyItem}>
                <span className={styles.date}>ACTUAL</span>
                <h4 className="text-heading-md">Estudiante de Diseño Gráfico</h4>
                <p className="text-body-clean" style={{ fontSize: "0.9rem" }}>
                  Prácticas en diseño digital, producción de materiales gráficos e identidades visuales, reforzando mis conocimientos teóricos y prácticos.
                </p>
              </div>
            </div>

            <div className={styles.block} style={{ marginTop: "2rem" }}>
              <span className="text-caption-mono">EDUCACIÓN</span>
              <div className={styles.historyItem}>
                <h4 className="text-heading-md">Grado Superior de Diseño Gráfico</h4>
                <p className="text-body-clean" style={{ fontSize: "0.9rem" }}>
                  Escuela Superior de Arte y Diseño.
                </p>
              </div>
              <div className={styles.historyItem} style={{ marginTop: "0.5rem" }}>
                <h4 className="text-heading-md">Bachillerato Artístico</h4>
                <p className="text-body-clean" style={{ fontSize: "0.9rem" }}>
                  Modalidad de Artes Plásticas, Imagen y Diseño.
                </p>
              </div>
            </div>
          </div>

          {/* Box 3: Software & Brand graphic */}
          <div className={`${styles.gridBox} ${styles.softwareBox}`}>
            <span className="text-caption-mono">SOFTWARE & SUITE</span>
            <div className={styles.softwareList}>
              {softwareSkills.map((soft) => (
                <div key={soft.name} className={styles.softItem}>
                  <div className={styles.softInfo}>
                    <span className={styles.softName}>{soft.name}</span>
                    <span className={styles.softLevel}>{soft.level}%</span>
                  </div>
                  <div className={styles.progressTrack}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${soft.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className={styles.progressBar}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cvDecoration}>
              <img src={elementosPortfolio} alt="" className={styles.decoImage} />
            </div>
          </div>
        </div>

        {/* Contact Block Page 17 */}
        <div className={styles.contactBlock}>
          <div className={styles.contactHeader}>
            <span className="text-caption-mono">HABLEMOS</span>
            <h2 className="text-gothic-title">Contacto</h2>
          </div>

          <div className={styles.linksRow}>
            {/* Email Contact Link */}
            <div className={styles.contactCard} onClick={copyEmail}>
              <div className={styles.contactIcon}>
                <Mail size={24} />
              </div>
              <div className={styles.contactInfo}>
                <span className="text-caption-mono">CORREO ELECTRÓNICO</span>
                <span className={styles.contactValue}>aura_niux@gmail.com</span>
              </div>
              <button className={styles.copyBtn} aria-label="Copy email">
                {copied ? <Check size={16} color="var(--accent-blue)" /> : <Copy size={16} />}
              </button>
            </div>

            {/* Instagram Contact Link */}
            <a 
              href="https://instagram.com/aura_niux" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.contactCard}
            >
              <div className={styles.contactIcon}>
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </div>
              <div className={styles.contactInfo}>
                <span className="text-caption-mono">INSTAGRAM</span>
                <span className={styles.contactValue}>@aura_niux</span>
              </div>
              <div className={styles.arrowIcon}>→</div>
            </a>
          </div>

          <div className={styles.footerRow}>
            <p className="text-caption-mono">© 2025 NAYLA AGUADO. TODOS LOS DERECHOS RESERVADOS.</p>
            <p className="text-caption-mono">DISEÑO EDITORIAL & RECONSTRUCCIÓN WEB PREMIUM</p>
          </div>
        </div>

      </div>
    </section>
  );
}
