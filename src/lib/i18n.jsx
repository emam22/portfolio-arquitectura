import { createContext, useContext, useState, useMemo } from 'react';

export const LOCALES = ['es', 'pt', 'en', 'de'];
export const LOCALE_LABELS = { es: 'ES', pt: 'PT', en: 'EN', de: 'DE' };

const dict = {
  es: {
    // App chrome
    appEyebrow: 'Portafolio',
    appTitle: 'Estudio de Arquitectura',
    appLead:
      'Proyectos residenciales, colectivos y culturales. Una selección de obra construida y en curso.',
    appSectionProjects: 'Proyectos',
    appViewCv: 'Ver CV',
    appBack: 'Volver al Portfolio',
    // 404
    notFoundEyebrow: 'Error 404',
    notFoundTitle: 'Página no encontrada',
    // Identifier (cartucho)
    identDegree: 'Estudiante de Arquitectura',
    identName: 'Abigail Mendez',
    identRole: 'Estudiante de Arquitectura',
    identLocationLabel: 'Ubicación',
    identContactLabel: 'Contacto',
    identCta: 'Ver CV',
    // Project card / detail
    projectCategory: 'Categoría',
    projectLocationYear: 'Ubicación y año',
    // Detail
    detailBack: 'Volver al Portfolio',
    // CV
    cvBack: 'Volver al Portfolio',
    cvDownload: 'Descargar PDF',
    cvPrint: 'Imprimir / Guardar',
    cvDegree: 'Estudiante de Arquitectura',
    cvRole: 'Estudiante de Arquitectura',
    cvContactEmail: 'Email',
    cvContactPhone: 'Teléfono',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Ubicación',
    cvSectionProfile: 'Perfil',
    cvSectionExperience: 'Experiencia Profesional',
    cvSectionEducation: 'Formación Académica',
    cvSectionSkills: 'Herramientas Digitales',
    cvSectionCertifications: 'Información Adicional',
    cvSectionLanguages: 'Idiomas',
    // Content — projects
    proj1Title: 'Casa del Bosque',
    proj1Category: 'Residencial',
    proj1Location: 'Bariloche, Argentina',
    proj1Desc:
      'Un proyecto integrado en la topografía local utilizando piedra y madera noble. La obra se apoya sobre la ladera para minimizar el movimiento de tierras y orientar el living hacia el bosque nativo.',
    proj1Gallery: [
      'Plano de Planta Escala 1:50',
      'Fachada Principal - Vista Oeste',
      'Render Living Comedor',
      'Elevación Norte',
    ],
    proj2Title: 'Torre Cooperativa',
    proj2Category: 'Colectivo',
    proj2Location: 'Córdoba, Argentina',
    proj2Desc:
      'Vivienda colectiva de seis niveles que recupera un terreno industrial en desuso. La estructura de hormigón visto y los vacíos centrales resuelven la iluminación natural y la ventilación cruzada de las viviendas.',
    proj2Gallery: [
      'Plano de Planta Baja',
      'Fachada de Hormigón Armado',
      'Render Terraza Comunitaria',
    ],
    proj3Title: 'Pabellón del Lago',
    proj3Category: 'Cultural',
    proj3Location: 'San Martín de los Andes, Argentina',
    proj3Desc:
      'Un pabellón de estructura de acero y skin de madera laminada que funciona como mirador y sala de exposición. Su cubierta volada protege el recorrido exterior durante todo el año.',
    proj3Gallery: [
      'Plano General - Escala 1:100',
      'Interior - Sala de Exposición',
      'Render Nocturno',
    ],
    // Content — CV
    cvSummary:
      'Estoy en busca de desafíos y oportunidades que me permitan desarrollar mis competencias como futura profesional en el extranjero, complementando mi experiencia académica. Me destaco por ser autodidacta, organizada y por estar en constante aprendizaje. Me gusta trabajar en equipo e intercambiar ideas para alcanzar los mejores resultados en los distintos proyectos.',
    cvExp: [
      {
        period: 'AGO 2025 - AGO 2026',
        role: 'Proyectista Junior',
        company: 'Drault Arquitetos',
        location: '',
        bullets: [
          'Dibujo 2D. Documentación técnica, actualización de piezas dibujadas y detalles constructivos según obra.',
          'Modelado 3D. Dibujo y actualización de proyectos.',
          'Renderizado de imágenes.',
          'Elaboración de fichas técnicas y tablas (carpintería, caixilería, cerrajería, marmolería, revestimiento, etc.).',
          'Contacto con proveedores.',
          'Análisis y programación de obra.',
          'Preparación de presentaciones para clientes.',
          'Elaboración de maquetas.',
        ],
      },
      {
        period: '2024',
        role: 'Renderista Freelance',
        company: '',
        location: '',
        bullets: [
          'Modelado 3D. Materialización a partir de planos.',
          'Renderizado de imágenes.',
        ],
      },
    ],
    cvEdu: [
      { period: '2020 - Actualidad', degree: 'Arquitectura — 5.º Año', school: 'FADU, UBA. Conclusión prevista: Julio 2027' },
      { period: '1.º semestre 2026/2027', degree: 'Programa de Movilidad Académica', school: 'FAUL' },
    ],
    cvSkills: [
      { group: 'AutoCAD', items: ['Avanzado'] },
      { group: 'SketchUp', items: ['Avanzado'] },
      { group: 'Illustrator', items: ['Intermedio'] },
      { group: 'Photoshop', items: ['Avanzado'] },
      { group: 'ArchiCAD', items: ['Intermedio'] },
      { group: 'Lumion', items: ['Intermedio'] },
      { group: 'Twinmotion', items: ['Avanzado'] },
      { group: 'Microsoft Office', items: ['Avanzado'] },
    ],
    cvCerts: [
      { title: 'Disciplinas en ULisboa', issuer: 'Reutilización y Sostenibilidad en Rehabilitación', year: '' },
      { title: 'Disciplinas en ULisboa', issuer: 'Leer la ciudad; Lisboa', year: '' },
    ],
    cvLangs: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'Intermedio B1' },
      { language: 'Portugués', level: 'Intermedio B1' },
    ],
    // Profile contacto (valores reales, no traducidos)
    profile: {
      name: 'Abigail Mendez',
      degree: 'Estudiante de Arquitectura',
      role: 'Estudiante de Arquitectura',
      email: 'abi.mendez.121@gmail.com',
      phone: '+351 928 329 834',
      linkedin: '',
      location: 'Odivelas, Lisboa',
      cvFile: '/cv-emanuel-mendez.pdf',
    },
  },

  pt: {
    appEyebrow: 'Portfólio',
    appTitle: 'Estúdio de Arquitetura',
    appLead:
      'Projetos residenciais, coletivos e culturais. Uma seleção de obra construída e em andamento.',
    appSectionProjects: 'Projetos',
    appViewCv: 'Ver CV',
    appBack: 'Voltar ao Portfólio',
    notFoundEyebrow: 'Erro 404',
    notFoundTitle: 'Página não encontrada',
    identDegree: 'Estudante de Arquitetura',
    identName: 'Abigail Mendez',
    identRole: 'Estudante de Arquitetura',
    identLocationLabel: 'Localização',
    identContactLabel: 'Contato',
    identCta: 'Ver CV',
    projectCategory: 'Categoria',
    projectLocationYear: 'Localização e ano',
    detailBack: 'Voltar ao Portfólio',
    cvBack: 'Voltar ao Portfólio',
    cvDownload: 'Baixar PDF',
    cvPrint: 'Imprimir / Salvar',
    cvDegree: 'Estudante de Arquitetura',
    cvRole: 'Estudante de Arquitetura',
    cvContactEmail: 'Email',
    cvContactPhone: 'Telemóvel',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Localização',
    cvSectionProfile: 'Perfil',
    cvSectionExperience: 'Experiência Profissional',
    cvSectionEducation: 'Formação Académica',
    cvSectionSkills: 'Ferramentas Digitais',
    cvSectionCertifications: 'Informação Adicional',
    cvSectionLanguages: 'Línguas',
    proj1Title: 'Casa da Floresta',
    proj1Category: 'Residencial',
    proj1Location: 'Bariloche, Argentina',
    proj1Desc:
      'Um projeto integrado na topografia local utilizando pedra e madeira nobre. A obra se apoia sobre a encosta para minimizar o movimento de terra e orientar a sala de estar para a floresta nativa.',
    proj1Gallery: [
      'Planta Baixa Escala 1:50',
      'Fachada Principal - Vista Oeste',
      'Render Sala de Estar Jantar',
      'Elevação Norte',
    ],
    proj2Title: 'Torre Cooperativa',
    proj2Category: 'Coletivo',
    proj2Location: 'Córdoba, Argentina',
    proj2Desc:
      'Habitação coletiva de seis níveis que recupera um terreno industrial em desuso. A estrutura de concreto aparente e os vazios centrais resolvem a iluminação natural e a ventilação cruzada das moradias.',
    proj2Gallery: [
      'Planta Baixa',
      'Fachada de Concreto Armado',
      'Render Terraço Comunitário',
    ],
    proj3Title: 'Pavilhão do Lago',
    proj3Category: 'Cultural',
    proj3Location: 'San Martín de los Andes, Argentina',
    proj3Desc:
      'Um pavilhão de estrutura de aço e pele de madeira laminada que funciona como mirante e sala de exposição. Sua cobertura avançada protege o percurso exterior durante todo o ano.',
    proj3Gallery: [
      'Planta Geral - Escala 1:100',
      'Interior - Sala de Exposição',
      'Render Noturno',
    ],
    cvSummary:
      'Estou à procura de desafios e oportunidades que me permitam desenvolver as minhas competências como futura profissional no estrangeiro, complementando a minha experiência académica. Distingo-me por ser autodidata, organizada e por estar em constante aprendizagem. Gosto de trabalhar em equipa e de trocar ideias para alcançar os melhores resultados nos diferentes projetos.',
    cvExp: [
      {
        period: 'AGO 2025 - AGO 2026',
        role: 'Projetista Junior',
        company: 'Drault Arquitetos',
        location: '',
        bullets: [
          'Desenho 2D. Documentação técnica, atualização de peças desenhadas e detalhes construtivos de acordo com obra.',
          'Modelação 3D. Desenho e atualização de projetos.',
          'Renderização de imagens.',
          'Elaboração de fichas técnicas e tabelas (carpintaria, caixilharia, serralharia, marmoraria, revestimento, etc).',
          'Contacto com fornecedores.',
          'Análise e programação da obra.',
          'Preparação de apresentações para clientes.',
          'Elaboração de maquetes.',
        ],
      },
      {
        period: '2024',
        role: 'Renderista Freelance',
        company: '',
        location: '',
        bullets: [
          'Modelação 3D. Materialização a partir de planos.',
          'Renderização de imagens.',
        ],
      },
    ],
    cvEdu: [
      { period: '2020 - Atualidade', degree: 'Arquitetura — 5.º Ano', school: 'FADU, UBA. Conclusão prevista: Julho 2027' },
      { period: '1.º semestre 2026/2027', degree: 'Programa de Mobilidade Académica', school: 'FAUL' },
    ],
    cvSkills: [
      { group: 'AutoCAD', items: ['Avançado'] },
      { group: 'SketchUp', items: ['Avançado'] },
      { group: 'Illustrator', items: ['Intermédio'] },
      { group: 'Photoshop', items: ['Avançado'] },
      { group: 'ArchiCAD', items: ['Intermédio'] },
      { group: 'Lumion', items: ['Intermédio'] },
      { group: 'Twinmotion', items: ['Avançado'] },
      { group: 'Microsoft Office', items: ['Avançado'] },
    ],
    cvCerts: [
      { title: 'Disciplinas na ULisboa', issuer: 'Reutilização e Sustentabilidade em Reabilitação', year: '' },
      { title: 'Disciplinas na ULisboa', issuer: 'Ler a cidade; Lisboa', year: '' },
    ],
    cvLangs: [
      { language: 'Espanhol', level: 'Língua materna' },
      { language: 'Inglês', level: 'Intermédio B1' },
      { language: 'Português', level: 'Intermédio B1' },
    ],
    profile: {
      name: 'Abigail Mendez',
      degree: 'Estudante de Arquitetura',
      role: 'Estudante de Arquitetura',
      email: 'abi.mendez.121@gmail.com',
      phone: '+351 928 329 834',
      linkedin: '',
      location: 'Odivelas, Lisboa',
      cvFile: '/cv-emanuel-mendez.pdf',
    },
  },

  en: {
    appEyebrow: 'Portfolio',
    appTitle: 'Architecture Studio',
    appLead:
      'Residential, collective, and cultural projects. A selection of built work and projects in progress.',
    appSectionProjects: 'Projects',
    appViewCv: 'View CV',
    appBack: 'Back to Portfolio',
    notFoundEyebrow: 'Error 404',
    notFoundTitle: 'Page not found',
    identDegree: 'Architecture Student',
    identName: 'Abigail Mendez',
    identRole: 'Architecture Student',
    identLocationLabel: 'Location',
    identContactLabel: 'Contact',
    identCta: 'View CV',
    projectCategory: 'Category',
    projectLocationYear: 'Location and year',
    detailBack: 'Back to Portfolio',
    cvBack: 'Back to Portfolio',
    cvDownload: 'Download PDF',
    cvPrint: 'Print / Save',
    cvDegree: 'Architecture Student',
    cvRole: 'Architecture Student',
    cvContactEmail: 'Email',
    cvContactPhone: 'Phone',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Location',
    cvSectionProfile: 'Profile',
    cvSectionExperience: 'Professional Experience',
    cvSectionEducation: 'Academic Education',
    cvSectionSkills: 'Digital Tools',
    cvSectionCertifications: 'Additional Information',
    cvSectionLanguages: 'Languages',
    proj1Title: 'Forest House',
    proj1Category: 'Residential',
    proj1Location: 'Bariloche, Argentina',
    proj1Desc:
      'A project integrated into the local topography using stone and noble timber. The structure rests on the slope to minimize earthworks and orient the living room toward the native forest.',
    proj1Gallery: [
      'Floor Plan Scale 1:50',
      'Main Facade - West View',
      'Living Dining Render',
      'North Elevation',
    ],
    proj2Title: 'Cooperative Tower',
    proj2Category: 'Collective Housing',
    proj2Location: 'Córdoba, Argentina',
    proj2Desc:
      'A six-story collective housing building reclaiming a disused industrial site. The exposed concrete structure and central voids provide natural lighting and cross-ventilation for the dwellings.',
    proj2Gallery: [
      'Ground Floor Plan',
      'Reinforced Concrete Facade',
      'Communal Terrace Render',
    ],
    proj3Title: 'Lake Pavilion',
    proj3Category: 'Cultural',
    proj3Location: 'San Martín de los Andes, Argentina',
    proj3Desc:
      'A steel-framed pavilion with a glulam timber skin functioning as a lookout and exhibition hall. Its flying roof shelters the exterior promenade year-round.',
    proj3Gallery: [
      'General Plan - Scale 1:100',
      'Interior - Exhibition Hall',
      'Night Render',
    ],
    cvSummary:
      'I am looking for challenges and opportunities that allow me to develop my skills as a future professional abroad, complementing my academic experience. I stand out for being self-taught, organized, and constantly learning. I enjoy working in teams and exchanging ideas to achieve the best results in different projects.',
    cvExp: [
      {
        period: 'AUG 2025 - AUG 2026',
        role: 'Junior Designer',
        company: 'Drault Arquitetos',
        location: '',
        bullets: [
          '2D Drafting. Technical documentation, updating drawn pieces and construction details according to construction progress.',
          '3D Modeling. Designing and updating projects.',
          'Image Rendering.',
          'Preparation of technical sheets and schedules (carpentry, joinery, metalwork, stonework, cladding, etc.).',
          'Supplier coordination.',
          'Construction analysis and scheduling.',
          'Client presentation preparation.',
          'Model making.',
        ],
      },
      {
        period: '2024',
        role: 'Freelance Render Artist',
        company: '',
        location: '',
        bullets: [
          '3D Modeling. Materialization from plans.',
          'Image Rendering.',
        ],
      },
    ],
    cvEdu: [
      { period: '2020 - Present', degree: 'Architecture — 5th Year', school: 'FADU, UBA. Expected graduation: July 2027' },
      { period: '1st semester 2026/2027', degree: 'Academic Mobility Program', school: 'FAUL' },
    ],
    cvSkills: [
      { group: 'AutoCAD', items: ['Advanced'] },
      { group: 'SketchUp', items: ['Advanced'] },
      { group: 'Illustrator', items: ['Intermediate'] },
      { group: 'Photoshop', items: ['Advanced'] },
      { group: 'ArchiCAD', items: ['Intermediate'] },
      { group: 'Lumion', items: ['Intermediate'] },
      { group: 'Twinmotion', items: ['Advanced'] },
      { group: 'Microsoft Office', items: ['Advanced'] },
    ],
    cvCerts: [
      { title: 'ULisboa Courses', issuer: 'Reuse and Sustainability in Rehabilitation', year: '' },
      { title: 'ULisboa Courses', issuer: 'Reading the City; Lisbon', year: '' },
    ],
    cvLangs: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Intermediate B1' },
      { language: 'Portuguese', level: 'Intermediate B1' },
    ],
    profile: {
      name: 'Abigail Mendez',
      degree: 'Architecture Student',
      role: 'Architecture Student',
      email: 'abi.mendez.121@gmail.com',
      phone: '+351 928 329 834',
      linkedin: '',
      location: 'Odivelas, Lisboa',
      cvFile: '/cv-emanuel-mendez.pdf',
    },
  },

  de: {
    appEyebrow: 'Portfolio',
    appTitle: 'Architekturbüro',
    appLead:
      'Wohnbau-, Gemeinschafts- und Kulturprojekte. Eine Auswahl realisierter und in Arbeit befindlicher Projekte.',
    appSectionProjects: 'Projekte',
    appViewCv: 'CV anzeigen',
    appBack: 'Zurück zum Portfolio',
    notFoundEyebrow: 'Fehler 404',
    notFoundTitle: 'Seite nicht gefunden',
    identDegree: 'Architekturstudentin',
    identName: 'Abigail Mendez',
    identRole: 'Architekturstudentin',
    identLocationLabel: 'Standort',
    identContactLabel: 'Kontakt',
    identCta: 'CV anzeigen',
    projectCategory: 'Kategorie',
    projectLocationYear: 'Standort und Jahr',
    detailBack: 'Zurück zum Portfolio',
    cvBack: 'Zurück zum Portfolio',
    cvDownload: 'PDF herunterladen',
    cvPrint: 'Drucken / Speichern',
    cvDegree: 'Architekturstudentin',
    cvRole: 'Architekturstudentin',
    cvContactEmail: 'E-Mail',
    cvContactPhone: 'Telefon',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Standort',
    cvSectionProfile: 'Profil',
    cvSectionExperience: 'Berufserfahrung',
    cvSectionEducation: 'Ausbildung',
    cvSectionSkills: 'Digitale Werkzeuge',
    cvSectionCertifications: 'Zusätzliche Informationen',
    cvSectionLanguages: 'Sprachen',
    proj1Title: 'Haus im Wald',
    proj1Category: 'Wohnbau',
    proj1Location: 'Bariloche, Argentinien',
    proj1Desc:
      'Ein in die lokale Topografie integriertes Projekt mit Naturstein und edlem Holz. Das Gebäude ruht am Hang, um Erdbewegungen zu minimieren und den Wohnbereich zum einheimischen Wald auszurichten.',
    proj1Gallery: [
      'Grundrissplan Maßstab 1:50',
      'Hauptfassade - Westansicht',
      'Rendering Wohn-Essbereich',
      'Nordansicht',
    ],
    proj2Title: 'Genossenschaftsturm',
    proj2Category: 'Gemeinschaftsbau',
    proj2Location: 'Córdoba, Argentinien',
    proj2Desc:
      'Ein sechsgeschossiges Gemeinschaftswohngebäude, das ein brachliegendes Industriegelände zurückgewinnt. Die sichtbare Betonstruktur und die zentralen Lichthöfe sorgen für natürliche Belichtung und Querlüftung der Wohnungen.',
    proj2Gallery: [
      'Grundriss Erdgeschoss',
      'Stahlbetonfassade',
      'Rendering Gemeinschaftsterrasse',
    ],
    proj3Title: 'See-Pavillon',
    proj3Category: 'Kultur',
    proj3Location: 'San Martín de los Andes, Argentinien',
    proj3Desc:
      'Ein Stahlkonstruktions-Pavillon mit Brettschichtholz-Haut, der als Aussichtspunkt und Ausstellungshalle dient. Sein auskragendes Dach schützt den Außenweg ganzjährig.',
    proj3Gallery: [
      'Gesamtplan - Maßstab 1:100',
      'Innenraum - Ausstellungsraum',
      'Nacht-Rendering',
    ],
    cvSummary:
      'Ich suche nach Herausforderungen und Möglichkeiten, meine Fähigkeiten als zukünftige Berufstätige im Ausland weiterzuentwickeln und meine akademische Erfahrung zu ergänzen. Ich zeichne mich durch Selbstständigkeit, Organisation und ständiges Lernen aus. Ich arbeite gerne im Team und tausche Ideen aus, um die besten Ergebnisse in verschiedenen Projekten zu erzielen.',
    cvExp: [
      {
        period: 'AUG 2025 - AUG 2026',
        role: 'Junior Planerin',
        company: 'Drault Arquitetos',
        location: '',
        bullets: [
          '2D-Zeichnung. Technische Dokumentation, Aktualisierung von Zeichnungen und Baudetails gemäß Baufortschritt.',
          '3D-Modellierung. Entwurf und Aktualisierung von Projekten.',
          'Bildrendering.',
          'Erstellung von technischen Blättern und Tabellen (Tischlerei, Fensterbau, Metallbau, Steinmetzarbeiten, Verkleidung, etc.).',
          'Lieferantenkontakt.',
          'Bauanalyse und -planung.',
          'Kundenpräsentationsvorbereitung.',
          'Modellbau.',
        ],
      },
      {
        period: '2024',
        role: 'Freelance Renderkünstlerin',
        company: '',
        location: '',
        bullets: [
          '3D-Modellierung. Materialisierung aus Plänen.',
          'Bildrendering.',
        ],
      },
    ],
    cvEdu: [
      { period: '2020 - Gegenwart', degree: 'Architektur — 5. Jahr', school: 'FADU, UBA. Erwarteter Abschluss: Juli 2027' },
      { period: '1. Semester 2026/2027', degree: 'Akademisches Austauschprogramm', school: 'FAUL' },
    ],
    cvSkills: [
      { group: 'AutoCAD', items: ['Fortgeschritten'] },
      { group: 'SketchUp', items: ['Fortgeschritten'] },
      { group: 'Illustrator', items: ['Mittelstufe'] },
      { group: 'Photoshop', items: ['Fortgeschritten'] },
      { group: 'ArchiCAD', items: ['Mittelstufe'] },
      { group: 'Lumion', items: ['Mittelstufe'] },
      { group: 'Twinmotion', items: ['Fortgeschritten'] },
      { group: 'Microsoft Office', items: ['Fortgeschritten'] },
    ],
    cvCerts: [
      { title: 'ULisboa Kurse', issuer: 'Wiederverwendung und Nachhaltigkeit in der Rehabilitation', year: '' },
      { title: 'ULisboa Kurse', issuer: 'Die Stadt lesen; Lissabon', year: '' },
    ],
    cvLangs: [
      { language: 'Spanisch', level: 'Muttersprache' },
      { language: 'Englisch', level: 'Mittelstufe B1' },
      { language: 'Portugiesisch', level: 'Mittelstufe B1' },
    ],
    profile: {
      name: 'Abigail Mendez',
      degree: 'Architekturstudentin',
      role: 'Architekturstudentin',
      email: 'abi.mendez.121@gmail.com',
      phone: '+351 928 329 834',
      linkedin: '',
      location: 'Odivelas, Lisboa',
      cvFile: '/cv-emanuel-mendez.pdf',
    },
  },
};

const LanguageContext = createContext({
  locale: 'es',
  setLocale: () => {},
  t: (k) => k,
  data: dict.es,
});

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState('es');

  const data = useMemo(() => dict[locale], [locale]);

  const t = (key) => data[key] ?? key;

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useI18n() {
  return useContext(LanguageContext);
}