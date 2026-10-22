// src/data/projects.js
// Configuración única de contenido del portafolio.
// Para agregar un proyecto: duplicá un bloque y cambiá id, textos y rutas de imagen.
// Las imágenes se guardan en /public/images y se referencian con ruta absoluta.
export const projects = [
  {
    id: 'casa-bosque',
    title: 'Casa del Bosque',
    year: '2024',
    location: 'Bariloche, Argentina',
    category: 'Residencial',
    // Imagen principal de la galería (puede ser cuadrada o recortada para orden visual)
    coverImage: '/images/casa-bosque-cover.jpg',
    // Galería interna con diferentes proporciones (horizontal, vertical, renders, planos)
    gallery: [
      { url: '/images/plano-planta.jpg', aspect: 'horizontal', title: 'Plano de Planta Escala 1:50' },
      { url: '/images/fachada-vertical.jpg', aspect: 'vertical', title: 'Fachada Principal - Vista Oeste' },
      { url: '/images/render-interior.jpg', aspect: 'square', title: 'Render Living Comedor' },
      { url: '/images/plano-elevacion.jpg', aspect: 'horizontal', title: 'Elevación Norte' },
    ],
    description:
      'Un proyecto integrado en la topografía local utilizando piedra y madera noble. La obra se apoya sobre la ladera para minimizar el movimiento de tierras y orientar el living hacia el bosque nativo.',
  },
  {
    id: 'torre-cooperativa',
    title: 'Torre Cooperativa',
    year: '2023',
    location: 'Córdoba, Argentina',
    category: 'Colectivo',
    coverImage: '/images/torre-cooperativa-cover.jpg',
    gallery: [
      { url: '/images/torre-planta.jpg', aspect: 'horizontal', title: 'Plano de Planta Baja' },
      { url: '/images/torre-fachada.jpg', aspect: 'vertical', title: 'Fachada de Hormigón Armado' },
      { url: '/images/torre-render.jpg', aspect: 'square', title: 'Render Terraza Comunitaria' },
    ],
    description:
      'Vivienda colectiva de seis niveles que recupera un terreno industrial en desuso. La estructura de hormigón visto y los vacíos centrales resuelven la iluminación natural y la ventilación cruzada de las viviendas.',
  },
  {
    id: 'pavilion-lago',
    title: 'Pabellón del Lago',
    year: '2022',
    location: 'San Martín de los Andes, Argentina',
    category: 'Cultural',
    coverImage: '/images/pavilion-lago-cover.jpg',
    gallery: [
      { url: '/images/pavilion-planta.jpg', aspect: 'horizontal', title: 'Plano General - Escala 1:100' },
      { url: '/images/pavilion-vertical.jpg', aspect: 'vertical', title: 'Interior - Sala de Exposición' },
      { url: '/images/pavilion-render.jpg', aspect: 'square', title: 'Render Nocturno' },
    ],
    description:
      'Un pabellón de estructura de acero y skin de madera laminada que funciona como mirador y sala de exposición. Su cubierta volada protege el recorrido exterior durante todo el año.',
  },
];

// Utilidades derivadas: no editar, se recalculan a partir de `projects`.
export const projectCategories = [...new Set(projects.map((p) => p.category))];

export function getProjectById(id) {
  return projects.find((p) => p.id === id) ?? null;
}
