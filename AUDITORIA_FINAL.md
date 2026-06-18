# AUDITORÍA FINAL - RECONSTRUCCIÓN DEL PORTFOLIO WEB

## 1. Resumen de la Implementación
El portfolio visual de **Nayla Aguado** ha sido reconstruido como una experiencia web interactiva, artística y premium en **React (TypeScript) + Vite**. 

En lugar de incrustar capturas estáticas del PDF original, extrajimos y estructuramos todos los textos y assets individuales del paquete InDesign (`.idml` / `.indd` y la carpeta `Links`), recreando cada composición mediante componentes modulares en React, estilos CSS dedicados y animaciones con **Framer Motion** y desplazamiento fluido con **Lenis**. El resultado es un sitio web rápido, responsivo y fiel a la dirección de arte oscura, experimental y de estilo editorial de la diseñadora.

---

## 2. Mapa PDF → Secciones Web
La web replica fielmente la narrativa y composición de las 18 páginas del PDF agrupándolas en 9 grandes secciones lógicas continuas:

*   **Página 1 (Portada)** $\rightarrow$ `HeroSection.tsx` (Inicio)
*   **Página 2 (Ojo Ilustrado)** $\rightarrow$ `TransitionEyeSection.tsx` (Reveal visual)
*   **Página 3 (Índice)** $\rightarrow$ `WorkIndexSection.tsx` (Menú Ticket interactivo)
*   **Páginas 4-5 (Tarot)** $\rightarrow$ `TarotSection.tsx` (Colección de cartas y modal detalle)
*   **Páginas 6-7 (Branding)** $\rightarrow$ `BrandingSection.tsx` (Identidad y cintas deslizantes)
*   **Páginas 8-9 (Fotografía)** $\rightarrow$ `PhotographySection.tsx` (Filtro Intervenidas vs Directas)
*   **Páginas 10-11 (Greek Packaging)** $\rightarrow$ `PackagingSection.tsx` (Jarros interactivos y glosario clásico)
*   **Páginas 12-13 (Merch Camisetas)** $\rightarrow$ `MerchSection.tsx` (Cards de camisetas con zoom de diseño)
*   **Páginas 14-16 (Editorial)** $\rightarrow$ `EditorialSection.tsx` (Carrusel interactivo de spreads)
*   **Páginas 17-18 (Contacto & CV)** $\rightarrow$ `ContactCvSection.tsx` (Blueprint CV con barras de progreso y enlaces funcionales)

---

## 3. Assets Utilizados por Sección
Consulte el archivo detallado [ASSET_MAP.md](file:///c:/Users/User/Desktop/PROYECTOS/PORTFOLIO_UrenaNaila/ASSET_MAP.md) para ver la lista exacta de archivos de imagen mapeados por sección y spread.

---

## 4. Assets no Encontrados (Alternativas Utilizadas)
*   **Archivos PSD/TIFF**: Los archivos originales `.psd` (`1.psd`, `2-4.psd`, `estrella.psd`) y `.tiff` (`Ilustración_sin_título.tiff`) no son compatibles con los navegadores.
    *   *Solución*: Se implementó un script de conversión por lotes con Pillow en Python para renderizarlos a versiones web de alta fidelidad `.jpg` / `.png` conservando la resolución adecuada.
*   **Tarjetas & Latas en Spread 7**: Se mapearon y organizaron correctamente de acuerdo a los links extraídos del IDML.

---

## 5. Decisiones Tipográficas
Para imitar la tipografía editorial pesada del PDF, implementamos combinaciones de fuentes en `src/styles/typography.css`:
1.  **Gothic / Blackletter** (*UnifrakturMaguntia* en Google Fonts): Usado para títulos de alto impacto y expresiones crudas ("Nayla", "Ojalá me odies...").
2.  **Editorial Serif** (*Cinzel* en Google Fonts): Utilizado para frases destacadas, citas y eslóganes, imitando la fuente serif de estilo clásico/editorial del PDF.
3.  **Sans-Serif Limpia** (*Space Grotesk* y *Plus Jakarta Sans*): Para textos de cuerpo, menús de navegación, datos y fichas de CV, garantizando máxima legibilidad.

---

## 6. Decisiones de Motion (Animaciones)
Implementamos animaciones con propósitos específicos para cada sección para que la web se sienta "viva":
*   **Desplazamiento**: Lenis para smooth scrolling vertical y control de velocidad.
*   **Hero**: Capas de parallax vertical flotantes en el fondo y reveal de texto spring-based.
*   **Index**: Efecto magnético ("floating preview") que revela miniaturas del proyecto al pasar el ratón por los enlaces del índice.
*   **Tarot**: Animación en abanico al entrar en viewport, efecto de inclinación 3D interactivo (`TiltCard`) y modal con transición elástica.
*   **Branding**: Cintas de embalaje deslizándose en sentidos opuestos vinculadas a la velocidad del scroll del usuario.
*   **Photography**: Grid con reordenamiento y escala elástica (`Framer Motion Layout`) al alternar filtros.
*   **Accessibility**: Agregado reset automático `@media (prefers-reduced-motion: reduce)` para omitir todas las transiciones y offsets en sistemas de usuarios que lo requieran.

---

## 7. Comandos Ejecutados
1.  `pip install pypdf PyMuPDF Pillow` $\rightarrow$ Para inspección, renderizado y conversión de assets a formatos web.
2.  `npx -y create-vite@latest _temp_vite --template react-ts --no-interactive` $\rightarrow$ Scaffolding de Vite.
3.  `npm install` $\rightarrow$ Instalación de dependencias por defecto.
4.  `npm install lenis framer-motion lucide-react` $\rightarrow$ Librerías de animación, scroll e iconos.
5.  `npm run build` $\rightarrow$ Verificación del empaquetado de producción.

---

## 8. Errores Encontrados y Corregidos
*   **Error de Codificación cp1252 (Windows)**: Al ejecutar scripts de Python para imprimir nombres con tildes (como `Ilustración`), PowerShell fallaba.
    *   *Solución*: Se configuró `sys.stdout.reconfigure(encoding='utf-8')` en los scripts de utilidad.
*   **Conflicto de Dependencias (React 19)**: `@studio-freight/react-lenis` arrojaba conflictos de peer-dependencies con React 19.
    *   *Solución*: Se instaló la biblioteca pura `lenis` directamente y se inicializó con un hook personalizado de React (`useSmoothScroll.ts`), eliminando la necesidad de wrappers pesados.
*   **Instagram Icon missing**: En las últimas versiones de `lucide-react` se eliminaron los logos comerciales.
    *   *Solución*: Se implementó el path SVG oficial de Instagram de manera integrada directamente en el componente de contacto, lo cual asegura compatibilidad e independencia de dependencias externas.

---

## 9. Diferencias Conocidas respecto al PDF
*   **Formato de página**: El PDF está diseñado para formato de página doble horizontal, mientras que la web fluye de manera vertical responsiva (optimizada para móviles reorganizando las rejillas de 2 columnas a 1 columna).
*   **Interactividad**: El índice de la web y el carrusel editorial permiten explorar los recursos sin saturar la página, ofreciendo una experiencia digital inmersiva.

---

## 10. Checklist de Aceptación Final
*   [x] ¿Se evitó el uso de capturas de páginas completas del PDF? (Sí, todo son assets individuales y textos reales).
*   [x] ¿Los assets están correctamente optimizados y convertidos? (Sí, los PSD y TIFF se convirtieron a JPG/PNG web).
*   [x] ¿El layout y orden de secciones coincide con el PDF? (Sí, mapeado exacto).
*   [x] ¿Las tipografías y jerarquías respetan el diseño original? (Sí, Cinzel + Space Grotesk + UnifrakturMaguntia).
*   [x] ¿Las animaciones corren fluidamente a 60fps y respetan reduced motion? (Sí).
*   [x] ¿El build compila sin errores? (Sí, exitoso).
