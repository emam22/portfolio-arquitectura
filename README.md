# Estudio de Arquitectura — Portafolio

Portafolio de proyectos de arquitectura con transiciones compartidas entre vistas,
vista de currículum y una grilla de portadas que mantiene la simetría del plano.

![React](https://img.shields.io/badge/React-18-61dafb) ![Vite](https://img.shields.io/badge/Vite-5-646cff) ![Framer%20Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055)

## Stack

- **React 18** + **Vite 5**
- **Framer Motion 11** — transiciones de ruta y `layoutId` compartido (la imagen de la
  grilla se expande hacia la portada del detalle en una sola transición continua)
- **React Router 6** — `BrowserRouter` con `/`, `/project/:id` y `/cv`
- **CSS puro** con custom properties. Sin frameworks ni UI kits.

## Estructura

```
public/
  images/                    ← fotos y planos (los nombres coinciden con projects.js)
  cv-emanuel-mendez.pdf     ← PDF descargable desde la vista CV
  _redirects                 ← fallback SPA para Netlify
src/
  data/
    projects.js              ← contenido del portafolio: textos, portadas y galerías
    profile.js               ← nombre, título y datos de contacto del ingeniero
    cv.js                    ← experiencia, formación, competencias e idiomas
  components/
    Gallery.jsx              ← grilla de portadas + cartucho de identificación
    ProjectDetail.jsx        ← portada ampliada + galería mixta (planos/fotos)
    CvView.jsx               ← vista de currículum
    NotFound.jsx             ← 404
    Backdrop.jsx             ← retícula de cuaderno técnico + grano de papel
  lib/motion.js              ← curva y duraciones de animación, centralizadas
  styles/                    ← global / gallery / detail / cv
```

Todo el contenido vive en `src/data/`. Para agregar un proyecto o cambiar textos
no hace falta tocar ningún componente.

## Comandos

```bash
npm install
npm run dev       # servidor de desarrollo en http://localhost:5173
npm run build     # build de producción en dist/
npm run preview   # sirve el build
npm run lint      # ESLint
```

## Agregar un proyecto

1. Subí las imágenes a `public/images/`.
2. Agregá un bloque en `src/data/projects.js`:

```js
{
  id: 'casa-nueva',              // único, se usa en la URL
  title: 'Casa Nueva',
  year: '2025',
  location: 'Córdoba, Argentina',
  category: 'Residencial',
  coverImage: '/images/casa-nueva-cover.jpg',
  gallery: [
    { url: '/images/casa-nueva-plano.jpg', aspect: 'horizontal', title: 'Plano de Planta' },
    { url: '/images/casa-nueva-fachada.jpg', aspect: 'vertical', title: 'Fachada Oeste' },
  ],
  description: 'Descripción del proyecto...',
}
```

Los `aspect` disponibles son `horizontal`, `vertical` y `square`. La portada se
recorta a cuadrado en la grilla (`object-fit: cover`) y en el detalle se muestra
completa sobre fondo paspartú (`object-fit: contain`), para no cortar los planos.

## Editar el CV y los datos del ingeniero

- `src/data/profile.js` → nombre, título, ubicación, contacto.
- `src/data/cv.js` → experiencia, formación, competencias, matriculaciones, idiomas.
- Para el PDF descargable, reemplazá `public/cv-emanuel-mendez.pdf` y actualizá
  `profile.cvFile` si cambia el nombre del archivo.

El botón **Imprimir / Guardar** abre el diálogo del navegador, que exporta el CV a
PDF con un `@media print` limpio (sin fondos, sin bordes, sin salto de página a
mitad de una entrada).

## Notas de implementación

- **`mode="popLayout"`** en `AnimatePresence`: sin esto la vista saliente sigue
  ocupando alto, empuja a la entrante y rompe la transición compartida de `layoutId`.
- **`layoutId` en `transition`**: las transiciones de layout se configuran con
  `transition={{ layout: { ... } }}`, no como propiedad suelta.
- **`aspect-ratio` en la galería secundaria**: con `loading="lazy"` el alto colapsaba
  a 0 hasta que la imagen cargaba; el `aspect-ratio` reserva el espacio y evita el
  salto de layout.
- **`MotionConfig reducedMotion="user"`**: si el sistema pide menos movimiento,
  Framer desactiva las animaciones de transform y layout.
- **Vercel** lee `vercel.json` del repo: el rewrite `/(.*)` → `/index.html` es lo que
  hace que las URLs profundas (`/project/casa-bosque`) no devuelvan 404 al recargar.

## Deploy

Conectá el repo en [vercel.com/new](https://vercel.com/new). Vercel detecta Vite,
lee `vercel.json` y publica en cada push a `main`.
