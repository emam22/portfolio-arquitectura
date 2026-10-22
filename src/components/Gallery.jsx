import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { profile } from '../data/profile';
import { EASE, LAYOUT_TRANSITION } from '../lib/motion';

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: 0.05 * index },
  }),
};

export default function Gallery() {
  return (
    <main className="page gallery-container">
      <header className="portfolio-header">
        <p className="eyebrow">Portafolio</p>
        <h1>Estudio de Arquitectura</h1>
        <p className="lead">
          Proyectos residenciales, colectivos y culturales. Una selección de obra construida y
          en curso.
        </p>
      </header>

      {/* Cartucho: bloque de identificación a la manera de los planos, con el
          nombre del ingeniero. Al hacer click se abre la vista de CV. */}
      <motion.div
        className="identifier"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { delayChildren: 0.15 } } }}
      >
        <Link to="/cv" className="identifier-link">
          <div className="identifier-main">
            <p className="eyebrow">{profile.degree}</p>
            <motion.p layoutId="profile-name" className="identifier-name">
              {profile.name}
            </motion.p>
            <p className="identifier-role">{profile.role}</p>
          </div>

          <div className="identifier-side">
            <dl className="identifier-data">
              <div>
                <dt>Ubicación</dt>
                <dd>{profile.location}</dd>
              </div>
              <div>
                <dt>Contacto</dt>
                <dd>{profile.email}</dd>
              </div>
            </dl>
            <span className="identifier-cta">Ver CV</span>
          </div>
        </Link>
      </motion.div>

      <div className="section-rule">
        <span>Proyectos</span>
      </div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {projects.map((project, index) => (
          <motion.article
            key={project.id}
            className="project-card"
            variants={cardVariants}
            custom={index}
          >
            <Link to={`/project/${project.id}`} className="project-card-link">
              <div className="image-wrapper">
                {/* layoutId compartido con la portada del detalle: la imagen viaja de la
                    grilla a la vista detalle en una sola transición continua. */}
                <motion.img
                  layoutId={`img-${project.id}`}
                  src={project.coverImage}
                  alt={`Portada de ${project.title}`}
                  className="gallery-image"
                  loading="lazy"
                  transition={LAYOUT_TRANSITION}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.99 }}
                />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-category">{project.category}</p>
                <p className="project-meta">
                  {project.location} — {project.year}
                </p>
              </div>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </main>
  );
}
