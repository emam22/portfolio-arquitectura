// src/data/cv.js
// Contenido del currículum. Cada bloque es una sección que se dibuja sola
// en la vista CV, así que para sumar o quitar experiencia solo se edita esta lista.
export const cv = {
  summary:
    'Ingeniero civil con experiencia en dirección de obra, proyectos de arquitectura ' +
    'residencial y comercial, y cálculo de estructuras. Trabajo con foco en la ' +
    'integración entre proyecto, materialidad y ejecución.',

  experience: [
    {
      period: '2021 — Presente',
      role: 'Ingeniero Civil Senior',
      company: 'Estudio de Arquitectura',
      location: 'Córdoba, Argentina',
      bullets: [
        'Dirección técnica de obra en proyectos residenciales y comerciales de hasta 4.000 m².',
        'Elaboración de documentación de proyecto: planos, esquemas, pliegos y presupuestos.',
        'Coordinación con estudios de arquitectura en anteproyecto y proyecto.',
      ],
    },
    {
      period: '2018 — 2021',
      role: 'Ingeniero Civil',
      company: 'Constructora',
      location: 'Córdoba, Argentina',
      bullets: [
        'Cálculo y verificación de estructuras de hormigón armado y mampostería.',
        'Seguimiento de avance, control de calidad y recepción de obra.',
      ],
    },
    {
      period: '2016 — 2018',
      role: 'Ayudante de obra',
      company: 'Estudio de Arquitectura',
      location: 'Córdoba, Argentina',
      bullets: [
        'Levantamiento de datos, toma de datos topográficos y croquis.',
        'Elaboración de documentación gráfica y maquetas.',
      ],
    },
  ],

  education: [
    {
      period: '2012 — 2018',
      degree: 'Ingeniería Civil',
      school: 'Universidad Nacional de Córdoba — FCEFyM',
    },
    {
      period: '2018',
      degree: 'Curso de documentación técnica',
      school: 'Instituto de Capacitación Técnica',
    },
  ],

  skills: [
    {
      group: 'Proyecto',
      items: ['Anteproyecto', 'Planteo volumétrico', 'Documentación', 'Presupuestos'],
    },
    {
      group: 'Estructuras',
      items: ['Hormigón armado', 'Mampostería', 'Cálculo de cargas', 'Fundaciones'],
    },
    {
      group: 'Obra',
      items: ['Dirección de obra', 'Control de calidad', 'Mediciones', 'Seguridad'],
    },
    {
      group: 'Herramientas',
      items: ['AutoCAD', 'Revit', 'SketchUp', 'Excel avanzado', 'SAE'],
    },
  ],

  certifications: [
    {
      title: 'Registro Provincial de Ingenieros',
      issuer: 'Colegio de Ingenieros Civiles',
      year: '2019',
    },
    {
      title: 'Seguridad e Higiene en Obras',
      issuer: 'SRT',
      year: '2020',
    },
    {
      title: 'Práctica BIM',
      issuer: 'Instituto de Capacitación Técnica',
      year: '2023',
    },
  ],

  languages: [
    { language: 'Español', level: 'Nativo' },
    { language: 'Inglés', level: 'Intermedio técnico' },
    { language: 'Italiano', level: 'Básico' },
  ],
};
