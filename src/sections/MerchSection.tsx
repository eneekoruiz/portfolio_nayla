import { useState } from "react";
import TiltCard from "../components/TiltCard";
import styles from "./MerchSection.module.css";

// Import merch assets
import tshirt1 from "../assets/3.png"; // Gato t-shirt mockup
import tshirt2 from "../assets/3.2.png"; // Oso t-shirt mockup

export default function MerchSection() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Set custom CSS variables on the hovered element
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
    
    // Percentage variables for background positioning
    const xp = (x / rect.width) * 100;
    const yp = (y / rect.height) * 100;
    e.currentTarget.style.setProperty("--mouse-xp", `${xp}%`);
    e.currentTarget.style.setProperty("--mouse-yp", `${yp}%`);
  };

  return (
    <section id="merch" className={styles.merchSection}>
      <div className={styles.container}>
        {/* Quote Block Page 12 */}
        <div className={styles.quoteWrapper}>
          <span className="text-caption-mono">ROPA & DECLARACIÓN</span>
          <h2 className={`${styles.gothicQuote} text-gothic-title`}>
            “Ojalá me odies tanto como yo a ti.”
          </h2>
          <p className={`${styles.quoteLabel} text-body-clean`}>
            Esa frase es el eje. No busca caer bien, ni disfrazarse. Es directa, incómoda y — según para quién — hasta graciosa.
          </p>
        </div>

        {/* Narrative & Showcase Grid */}
        <div className={styles.gridContainer}>
          <div className={styles.introCol}>
            <h3 className="text-heading-lg">Filo por dentro</h3>
            <p className="text-body-clean">
              El diseño se concentra en la espalda, como un grito visual: ilustración cargada, compuesta para que te miren al pasar.
            </p>
            <p className="text-body-clean" style={{ marginTop: "1rem" }}>
              En estas camisetas, ese mensaje se enfrenta a dos personajes que aparentan lo contrario: un oso y un gato con cuerpo de peluche. Tiernos, sí, pero con la mirada torcida. Blanditos por fuera, con filo por dentro.
            </p>
            <p className="text-body-clean" style={{ marginTop: "1rem", fontWeight: 500, color: "var(--text-primary)" }}>
              No hace falta que te guste, solo que no puedas ignorarlo.
            </p>
            <div className={styles.frontPause}>
              <span className="text-caption-mono">EL ANCLA FRONTAL</span>
              <p className="text-body-clean" style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                El frontal respira: el nombre de la marca y un detalle gráfico sirven de ancla, de pausa, de equilibrio.
              </p>
            </div>
          </div>

          {/* T-Shirt Mockups with interactive magnifying loupe */}
          <div className={styles.showcaseCol}>
            {/* Shirt 1: Gato */}
            <div className={styles.shirtCardWrapper}>
              <span className="text-caption-mono">GATO MOCKUP · FRONTAL & ESPALDA</span>
              <div 
                className={styles.magnifierContainer}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredCard("cat")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <TiltCard intensity={5} enableSheen={false} className={styles.shirtCard}>
                  <img src={tshirt1} alt="Gato plush shirt" className={styles.shirtImg} />
                  
                  {/* Magnifying Loupe lens */}
                  {hoveredCard === "cat" && (
                    <div 
                      className={styles.magnifierLens} 
                      style={{ backgroundImage: `url(${tshirt1})` }}
                    />
                  )}
                </TiltCard>
              </div>
            </div>

            {/* Shirt 2: Oso */}
            <div className={styles.shirtCardWrapper}>
              <span className="text-caption-mono">OSO MOCKUP · FRONTAL & ESPALDA</span>
              <div 
                className={styles.magnifierContainer}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setHoveredCard("bear")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <TiltCard intensity={5} enableSheen={false} className={styles.shirtCard}>
                  <img src={tshirt2} alt="Oso plush shirt" className={styles.shirtImg} />
                  
                  {/* Magnifying Loupe lens */}
                  {hoveredCard === "bear" && (
                    <div 
                      className={styles.magnifierLens} 
                      style={{ backgroundImage: `url(${tshirt2})` }}
                    />
                  )}
                </TiltCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
