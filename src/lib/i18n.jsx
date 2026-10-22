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
    identDegree: 'Ingeniero Civil',
    identName: 'Emanuel Méndez',
    identRole: 'Ingeniero Civil — Arquitectura & Construcción',
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
    cvDegree: 'Ingeniero Civil',
    cvRole: 'Ingeniero Civil — Arquitectura & Construcción',
    cvContactEmail: 'Email',
    cvContactPhone: 'Teléfono',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Ubicación',
    cvSectionProfile: 'Perfil',
    cvSectionExperience: 'Experiencia',
    cvSectionEducation: 'Formación',
    cvSectionSkills: 'Competencias',
    cvSectionCertifications: 'Matriculaciones',
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
      'Ingeniero civil con experiencia en dirección de obra, proyectos de arquitectura residencial y comercial, y cálculo de estructuras. Trabajo con foco en la integración entre proyecto, materialidad y ejecución.',
    cvExp: [
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
    cvEdu: [
      { period: '2012 — 2018', degree: 'Ingeniería Civil', school: 'Universidad Nacional de Córdoba — FCEFyM' },
      { period: '2018', degree: 'Curso de documentación técnica', school: 'Instituto de Capacitación Técnica' },
    ],
    cvSkills: [
      { group: 'Proyecto', items: ['Anteproyecto', 'Planteo volumétrico', 'Documentación', 'Presupuestos'] },
      { group: 'Estructuras', items: ['Hormigón armado', 'Mampostería', 'Cálculo de cargas', 'Fundaciones'] },
      { group: 'Obra', items: ['Dirección de obra', 'Control de calidad', 'Mediciones', 'Seguridad'] },
      { group: 'Herramientas', items: ['AutoCAD', 'Revit', 'SketchUp', 'Excel avanzado', 'SAE'] },
    ],
    cvCerts: [
      { title: 'Registro Provincial de Ingenieros', issuer: 'Colegio de Ingenieros Civiles', year: '2019' },
      { title: 'Seguridad e Higiene en Obras', issuer: 'SRT', year: '2020' },
      { title: 'Práctica BIM', issuer: 'Instituto de Capacitación Técnica', year: '2023' },
    ],
    cvLangs: [
      { language: 'Español', level: 'Nativo' },
      { language: 'Inglés', level: 'Intermedio técnico' },
      { language: 'Italiano', level: 'Básico' },
    ],
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
    identDegree: 'Engenheiro Civil',
    identName: 'Emanuel Méndez',
    identRole: 'Engenheiro Civil — Arquitetura & Construção',
    identLocationLabel: 'Localização',
    identContactLabel: 'Contato',
    identCta: 'Ver CV',
    projectCategory: 'Categoria',
    projectLocationYear: 'Localização e ano',
    detailBack: 'Voltar ao Portfólio',
    cvBack: 'Voltar ao Portfólio',
    cvDownload: 'Baixar PDF',
    cvPrint: 'Imprimir / Salvar',
    cvDegree: 'Engenheiro Civil',
    cvRole: 'Engenheiro Civil — Arquitetura & Construção',
    cvContactEmail: 'Email',
    cvContactPhone: 'Telefone',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Localização',
    cvSectionProfile: 'Perfil',
    cvSectionExperience: 'Experiência',
    cvSectionEducation: 'Formação',
    cvSectionSkills: 'Competências',
    cvSectionCertifications: 'Certificações',
    cvSectionLanguages: 'Idiomas',
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
      'Engenheiro civil com experiência em direção de obra, projetos de arquitetura residencial e comercial, e cálculo de estruturas. Trabalho com foco na integração entre projeto, materialidade e execução.',
    cvExp: [
      {
        period: '2021 — Presente',
        role: 'Engenheiro Civil Sênior',
        company: 'Estúdio de Arquitetura',
        location: 'Córdoba, Argentina',
        bullets: [
          'Direção técnica de obra em projetos residenciais e comerciais de até 4.000 m².',
          'Elaboração de documentação de projeto: plantas, esquemas, cadernos de encargos e orçamentos.',
          'Coordenação com estúdios de arquitetura em anteprojeto e projeto.',
        ],
      },
      {
        period: '2018 — 2021',
        role: 'Engenheiro Civil',
        company: 'Construtora',
        location: 'Córdoba, Argentina',
        bullets: [
          'Cálculo e verificação de estruturas de concreto armado e alvenaria.',
          'Acompanhamento de avanço, controle de qualidade e recebimento de obra.',
        ],
      },
      {
        period: '2016 — 2018',
        role: 'Ajudante de obra',
        company: 'Estúdio de Arquitetura',
        location: 'Córdoba, Argentina',
        bullets: [
          'Levantamento de dados, coleta de dados topográficos e croquis.',
          'Elaboração de documentação gráfica e maquetes.',
        ],
      },
    ],
    cvEdu: [
      { period: '2012 — 2018', degree: 'Engenharia Civil', school: 'Universidade Nacional de Córdoba — FCEFyM' },
      { period: '2018', degree: 'Curso de documentação técnica', school: 'Instituto de Capacitação Técnica' },
    ],
    cvSkills: [
      { group: 'Projeto', items: ['Anteprojeto', 'Planteo volumétrico', 'Documentação', 'Orçamentos'] },
      { group: 'Estruturas', items: ['Concreto armado', 'Alvenaria', 'Cálculo de cargas', 'Fundações'] },
      { group: 'Obra', items: ['Direção de obra', 'Controle de qualidade', 'Medições', 'Segurança'] },
      { group: 'Ferramentas', items: ['AutoCAD', 'Revit', 'SketchUp', 'Excel avançado', 'SAE'] },
    ],
    cvCerts: [
      { title: 'Registro Provincial de Engenheiros', issuer: 'Colegiado de Engenheiros Civis', year: '2019' },
      { title: 'Segurança e Higiene em Obras', issuer: 'SRT', year: '2020' },
      { title: 'Prática BIM', issuer: 'Instituto de Capacitação Técnica', year: '2023' },
    ],
    cvLangs: [
      { language: 'Espanhol', level: 'Nativo' },
      { language: 'Inglês', level: 'Intermediário técnico' },
      { language: 'Italiano', level: 'Básico' },
    ],
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
    identDegree: 'Civil Engineer',
    identName: 'Emanuel Méndez',
    identRole: 'Civil Engineer — Architecture & Construction',
    identLocationLabel: 'Location',
    identContactLabel: 'Contact',
    identCta: 'View CV',
    projectCategory: 'Category',
    projectLocationYear: 'Location and year',
    detailBack: 'Back to Portfolio',
    cvBack: 'Back to Portfolio',
    cvDownload: 'Download PDF',
    cvPrint: 'Print / Save',
    cvDegree: 'Civil Engineer',
    cvRole: 'Civil Engineer — Architecture & Construction',
    cvContactEmail: 'Email',
    cvContactPhone: 'Phone',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Location',
    cvSectionProfile: 'Profile',
    cvSectionExperience: 'Experience',
    cvSectionEducation: 'Education',
    cvSectionSkills: 'Skills',
    cvSectionCertifications: 'Certifications',
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
      'Civil engineer with experience in construction management, residential and commercial architecture projects, and structural calculation. Focused on the integration between design, materiality, and execution.',
    cvExp: [
      {
        period: '2021 — Present',
        role: 'Senior Civil Engineer',
        company: 'Architecture Studio',
        location: 'Córdoba, Argentina',
        bullets: [
          'Technical construction management for residential and commercial projects up to 4,000 m².',
          'Project documentation preparation: plans, schematics, specifications, and budgets.',
          'Coordination with architecture firms in schematic design and design development.',
        ],
      },
      {
        period: '2018 — 2021',
        role: 'Civil Engineer',
        company: 'Construction Company',
        location: 'Córdoba, Argentina',
        bullets: [
          'Calculation and verification of reinforced concrete and masonry structures.',
          'Progress monitoring, quality control, and construction acceptance.',
        ],
      },
      {
        period: '2016 — 2018',
        role: 'Construction Assistant',
        company: 'Architecture Studio',
        location: 'Córdoba, Argentina',
        bullets: [
          'Data surveying, topographic data collection, and sketching.',
          'Graphic documentation and model making.',
        ],
      },
    ],
    cvEdu: [
      { period: '2012 — 2018', degree: 'Civil Engineering', school: 'National University of Córdoba — FCEFyM' },
      { period: '2018', degree: 'Technical Documentation Course', school: 'Technical Training Institute' },
    ],
    cvSkills: [
      { group: 'Design', items: ['Schematic Design', 'Volumetric Studies', 'Documentation', 'Budgeting'] },
      { group: 'Structures', items: ['Reinforced Concrete', 'Masonry', 'Load Calculation', 'Foundations'] },
      { group: 'Construction', items: ['Construction Management', 'Quality Control', 'Measurements', 'Safety'] },
      { group: 'Tools', items: ['AutoCAD', 'Revit', 'SketchUp', 'Advanced Excel', 'SAE'] },
    ],
    cvCerts: [
      { title: 'Provincial Engineers Registry', issuer: 'College of Civil Engineers', year: '2019' },
      { title: 'Construction Health & Safety', issuer: 'SRT', year: '2020' },
      { title: 'BIM Practice', issuer: 'Technical Training Institute', year: '2023' },
    ],
    cvLangs: [
      { language: 'Spanish', level: 'Native' },
      { language: 'English', level: 'Technical intermediate' },
      { language: 'Italian', level: 'Basic' },
    ],
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
    identDegree: 'Bauingenieur',
    identName: 'Emanuel Méndez',
    identRole: 'Bauingenieur — Architektur & Bauwesen',
    identLocationLabel: 'Standort',
    identContactLabel: 'Kontakt',
    identCta: 'CV anzeigen',
    projectCategory: 'Kategorie',
    projectLocationYear: 'Standort und Jahr',
    detailBack: 'Zurück zum Portfolio',
    cvBack: 'Zurück zum Portfolio',
    cvDownload: 'PDF herunterladen',
    cvPrint: 'Drucken / Speichern',
    cvDegree: 'Bauingenieur',
    cvRole: 'Bauingenieur — Architektur & Bauwesen',
    cvContactEmail: 'E-Mail',
    cvContactPhone: 'Telefon',
    cvContactLinkedIn: 'LinkedIn',
    cvContactLocation: 'Standort',
    cvSectionProfile: 'Profil',
    cvSectionExperience: 'Berufserfahrung',
    cvSectionEducation: 'Ausbildung',
    cvSectionSkills: 'Kompetenzen',
    cvSectionCertifications: 'Zertifizierungen',
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
      'Bauingenieur mit Erfahrung in Bauleitung, Wohn- und Gewerbearchitekturprojekten sowie Tragwerksplanung. Fokus auf die Integration von Entwurf, Materialität und Ausführung.',
    cvExp: [
      {
        period: '2021 — Gegenwart',
        role: 'Senior Bauingenieur',
        company: 'Architekturbüro',
        location: 'Córdoba, Argentinien',
        bullets: [
          'Technische Bauleitung für Wohn- und Gewerbeprojekte bis 4.000 m².',
          'Erstellung von Projektunterlagen: Pläne, Schemata, Leistungsverzeichnisse und Kostenberechnungen.',
          'Koordination mit Architekturbüros in Entwurf und Ausführungsplanung.',
        ],
      },
      {
        period: '2018 — 2021',
        role: 'Bauingenieur',
        company: 'Bauunternehmen',
        location: 'Córdoba, Argentinien',
        bullets: [
          'Berechnung und Prüfung von Stahlbeton- und Mauerwerkstragwerken.',
          'Baufortschrittskontrolle, Qualitätsmanagement und Bauabnahme.',
        ],
      },
      {
        period: '2016 — 2018',
        role: 'Bauleitungsassistent',
        company: 'Architekturbüro',
        location: 'Córdoba, Argentinien',
        bullets: [
          'Vermessung, topografische Datenerfassung und Skizzen.',
          'Grafische Dokumentation und Modellbau.',
        ],
      },
    ],
    cvEdu: [
      { period: '2012 — 2018', degree: 'Bauingenieurwesen', school: 'Universidad Nacional de Córdoba — FCEFyM' },
      { period: '2018', degree: 'Kurs Technische Dokumentation', school: 'Technisches Ausbildungsinstitut' },
    ],
    cvSkills: [
      { group: 'Entwurf', items: ['Entwurfsplanung', 'Volumetrische Studien', 'Dokumentation', 'Kostenplanung'] },
      { group: 'Tragwerk', items: ['Stahlbeton', 'Mauerwerk', 'Lastberechnung', 'Fundamente'] },
      { group: 'Bauleitung', items: ['Bauleitung', 'Qualitätskontrolle', 'Aufmaß', 'Sicherheit'] },
      { group: 'Werkzeuge', items: ['AutoCAD', 'Revit', 'SketchUp', 'Excel Fortgeschritten', 'SAE'] },
    ],
    cvCerts: [
      { title: 'Provinzielles Ingenieurregister', issuer: 'Ingenieurkammer', year: '2019' },
      { title: 'Baustellensicherheit & Hygiene', issuer: 'SRT', year: '2020' },
      { title: 'BIM-Praxis', issuer: 'Technisches Ausbildungsinstitut', year: '2023' },
    ],
    cvLangs: [
      { language: 'Spanisch', level: 'Muttersprache' },
      { language: 'Englisch', level: 'Technisches Mittelstufe' },
      { language: 'Italienisch', level: 'Grundkenntnisse' },
    ],
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