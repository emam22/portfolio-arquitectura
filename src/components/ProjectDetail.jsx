import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById } from '../data/projects';
import { EASE, LAYOUT_TRANSITION } from '../lib/motion';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);

  if (!project) {
    return (
      <main className="page detail-container">
        <p className="eyebrow">Error 404</p>
        <h1>Proyecto no encontrado</h1>
        <Link to="/" className="back-button">
          ← Volver al Portfolio
        </Link>
      </main>
    );
  }

  return (
    <main className="page detail-container">
      <motion.div variants={reveal} initial="hidden" animate="visible">
        <Link to="/" className="back-button">
          ← Volver al Portfolio
        </Link>
      </motion.div>

      <div className="detail-hero">
        {/* Mismo layoutId que la card: Framer interpola posición y tamaño de la
            imagen para que se expanda desde su lugar en la grilla. */}
        <motion.img
          layoutId={`img-${project.id}`}
          src={project.coverImage}
          alt={`Portada de ${project.title}`}
          className="detail-main-image"
          transition={LAYOUT_TRANSITION}
        />
      </div>

      <motion.div
        className="detail-metadata"
        variants={reveal}
        initial="hidden"
        animate="visible"
        transition={{ delayChildren: 0.25 }}
      >
        <p className="eyebrow">{project.category}</p>
        <h2>{project.title}</h2>
        <p className="location">
          {project.location} — {project.year}
        </p>
        <p className="description">{project.description}</p>
      </motion.div>

      {/* Galería secundaria: conviven planos (horizontales), fotos verticales y renders.
          Todo se muestra completo, con el fondo neutro acting como marco. */}
      <div className="secondary-gallery">
        {project.gallery.map((item, index) => (
          <motion.figure
            key={`${item.url}-${index}`}
            className={`gallery-item ${item.aspect}`}
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <img
              src={item.url}
              alt={item.title}
              className="secondary-image"
              loading="lazy"
            />
            <figcaption>{item.title}</figcaption>
          </motion.figure>
        ))}
      </div>
    </main>
  );
}
