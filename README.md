# Nayla Aguado - Portfolio Visual Web Premium

Este proyecto es una reconstrucción web interactiva, artística y de alta calidad editorial del portfolio visual de **Nayla Aguado** correspondiente al año 2025. 

El sitio ha sido desarrollado utilizando **React, TypeScript y Vite**, empleando **CSS Modules** para un diseño controlado e independiente, **Framer Motion** para micro-animaciones premium e inclinaciones 3D, y **Lenis** para una experiencia de scroll suave y fluida.

---

## 🚀 Cómo Empezar

### Requisitos Previos
Asegúrate de tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior) y npm en tu sistema.

### Instalación de Dependencias
Para descargar e instalar todas las dependencias necesarias del proyecto, abre una terminal en la raíz del proyecto y ejecuta:
```bash
npm install
```

### Ejecutar Servidor de Desarrollo
Para arrancar el servidor local en modo desarrollo con recarga rápida (HMR):
```bash
npm run dev
```
Una vez iniciado, abre la URL que se muestra en la consola (por defecto, `http://localhost:5173`) en tu navegador.

### Compilar para Producción
Para compilar y empaquetar el sitio web de forma optimizada y minificada para producción en la carpeta `dist`:
```bash
npm run build
```

---

## 📂 Estructura del Proyecto

*   `src/assets/`: Contiene todos los assets visuales extraídos del portfolio original y optimizados para la web (como cartas de tarot, fotos manipuladas, maquetas editoriales e insignias).
*   `src/components/`: Componentes globales interactivos y reutilizables:
    *   `Navigation.tsx`: Menú superior y drawer responsive.
    *   `TiltCard.tsx`: Efecto de inclinación 3D en hover usando el cursor.
    *   `ParallaxContainer.tsx`: Capas de animación parallax atadas al scroll.
*   `src/hooks/useSmoothScroll.ts`: Configuración e inicialización del motor de scroll Lenis.
*   `src/sections/`: Cada sección lógica que representa las páginas del portfolio:
    *   `HeroSection.tsx`: Portada animada.
    *   `TransitionEyeSection.tsx`: Reveal visual del ojo clásico.
    *   `WorkIndexSection.tsx`: Índice interactivo con previsualización magnética.
    *   `TarotSection.tsx`: Baraja y lightbox modal.
    *   `BrandingSection.tsx`: Cintas deslizantes y mockups.
    *   `PhotographySection.tsx`: Grid interactivo de foto intervenida vs captura directa.
    *   `PackagingSection.tsx`: Showcase griego y glosario visual de sellos.
    *   `MerchSection.tsx`: Diseño de camisetas.
    *   `EditorialSection.tsx`: Revista maquetada con slider de spreads.
    *   `ContactCvSection.tsx`: Blueprint CV y contacto.
*   `src/styles/`: Sistema de diseño basado en variables CSS:
    *   `tokens.css`: Paleta de color oscura, tipografías y easings de animación.
    *   `globals.css`: Reset CSS, barras de scroll personalizadas y filtro de grano/ruido SVG.
    *   `typography.css`: Escala y jerarquías tipográficas (Google Fonts: Cinzel, Space Grotesk, UnifrakturMaguntia).

---

## 📄 Documentación Adjunta
*   [ASSET_MAP.md](file:///c:/Users/User/Desktop/PROYECTOS/PORTFOLIO_UrenaNaila/ASSET_MAP.md): Mapa exacto del PDF de referencia $\rightarrow$ Archivos en `src/assets`.
*   [AUDITORIA_FINAL.md](file:///c:/Users/User/Desktop/PROYECTOS/PORTFOLIO_UrenaNaila/AUDITORIA_FINAL.md): Informe final del proceso de diseño, decisiones técnicas, motion y control de calidad.
