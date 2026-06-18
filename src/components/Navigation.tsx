import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import styles from "./Navigation.module.css";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "index", label: "Índice" },
  { id: "tarot", label: "Tarot" },
  { id: "branding", label: "Branding" },
  { id: "photography", label: "Fotografía" },
  { id: "packaging", label: "Packaging" },
  { id: "merch", label: "Merch" },
  { id: "editorial", label: "Editorial" },
  { id: "contact-cv", label: "CV & Contacto" }
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          <div className={styles.logo} onClick={() => scrollToSection("hero")}>
            <span className={styles.logoText}>NAYLA AGUADO</span>
            <span className={styles.logoYear}>· 2025</span>
          </div>
          
          <div className={styles.desktopLinks}>
            {sections.map((sec) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(sec.id)}
                className={`${styles.navLink} ${activeSection === sec.id ? styles.active : ""}`}
              >
                {sec.label}
                {activeSection === sec.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className={styles.indicator}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          <button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className={styles.mobileOverlay}
          >
            <div className={styles.mobileContainer}>
              <div className={styles.mobileNavHeader}>
                <span className={styles.logoText}>NAYLA AGUADO</span>
                <button className={styles.closeButton} onClick={() => setIsOpen(false)}>
                  <X size={28} />
                </button>
              </div>
              
              <div className={styles.mobileLinks}>
                {sections.map((sec, index) => (
                  <motion.button
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`${styles.mobileLink} ${activeSection === sec.id ? styles.activeMobile : ""}`}
                  >
                    <span className={styles.mobileIndex}>0{index + 1}</span>
                    <span className={styles.mobileLabel}>{sec.label}</span>
                  </motion.button>
                ))}
              </div>
              
              <div className={styles.mobileFooter}>
                <p>Nayla Aguado · Portfolio Visual 2025</p>
                <p>aura_niux@gmail.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
