import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';
import { EASE, LAYOUT_TRANSITION } from '../lib/motion';

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function ProjectDetail() {
  const { id } = useParams();
  const { t, data } = useI18n();

  const projectMap = {
    'casa-bosque': {
      id: 'casa-bosque',
      title: data.proj1Title,
      category: data.proj1Category,
      location: data.proj1Location,
      year: '2024',
      coverImage: '/images/casa-bosque-cover.jpg',
      description: data.proj1Desc,
      gallery: data.proj1Gallery.map((title, idx) => ({
        url: [`/images/plano-planta.jpg`, `/images/fachada-vertical.jpg`, `/images/render-interior.jpg`, `/images/plano-elevacion.jpg`][idx],
        aspect: ['horizontal', 'vertical', 'square', 'horizontal'][idx],
        title,
      })),
    },
    'torre-cooperativa': {
      id: 'torre-cooperativa',
      title: data.proj2Title,
      category: data.proj2Category,
      location: data.proj2Location,
      year: '2023',
      coverImage: '/images/torre-cooperativa-cover.jpg',
      description: data.proj2Desc,
      gallery: data.proj2Gallery.map((title, idx) => ({
        url: [`/images/torre-planta.jpg`, `/images/torre-fachada.jpg`, `/images/torre-render.jpg`][idx],
        aspect: ['horizontal', 'vertical', 'square'][idx],
        title,
      })),
    },
    'pavilion-lago': {
      id: 'pavilion-lago',
      title: data.proj3Title,
      category: data.proj3Category,
      location: data.proj3Location,
      year: '2022',
      coverImage: '/images/pavilion-lago-cover.jpg',
      description: data.proj3Desc,
      gallery: data.proj3Gallery.map((title, idx) => ({
        url: [`/images/pavilion-planta.jpg`, `/images/pavilion-vertical.jpg`, `/images/pavilion-render.jpg`][idx],
        aspect: ['horizontal', 'vertical', 'square'][idx],
        title,
      })),
    },
  };

  const project = projectMap[id];

  if (!project) {
    return (
      <main className="page detail-container">
        <p className="eyebrow">{t('notFoundEyebrow')}</p>
        <h1>{t('notFoundTitle')}</h1>
        <Link to="/" className="back-button">
          ← {t('appBack')}
        </Link>
      </main>
    );
  }

  return (
    <main className="page detail-container">
      <motion.div variants={reveal} initial="hidden" animate="visible">
        <Link to="/" className="back-button">
          ← {t('detailBack')}
        </Link>
      </motion.div>

      <div className="detail-hero">
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
