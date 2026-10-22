import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';
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
  const { t, data } = useI18n();

  const projects = data.proj1Title ? [
    {
      id: 'casa-bosque',
      title: data.proj1Title,
      category: data.proj1Category,
      location: data.proj1Location,
      year: '2024',
      coverImage: '/images/casa-bosque-cover.jpg',
    },
    {
      id: 'torre-cooperativa',
      title: data.proj2Title,
      category: data.proj2Category,
      location: data.proj2Location,
      year: '2023',
      coverImage: '/images/torre-cooperativa-cover.jpg',
    },
    {
      id: 'pavilion-lago',
      title: data.proj3Title,
      category: data.proj3Category,
      location: data.proj3Location,
      year: '2022',
      coverImage: '/images/pavilion-lago-cover.jpg',
    }
  ] : [];

  return (
    <main className="page gallery-container">
      <header className="portfolio-header">
        <p className="eyebrow">{t('appEyebrow')}</p>
        <h1>{t('appTitle')}</h1>
        <p className="lead">{t('appLead')}</p>
      </header>

      <motion.div
        className="identifier"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { delayChildren: 0.15 } } }}
      >
        <Link to="/cv" className="identifier-link">
          <div className="identifier-main">
            <p className="eyebrow">{t('identDegree')}</p>
            <motion.p layoutId="profile-name" className="identifier-name">
              {t('identName')}
            </motion.p>
            <p className="identifier-role">{t('identRole')}</p>
          </div>

          <div className="identifier-side">
            <dl className="identifier-data">
              <div>
                <dt>{t('identLocationLabel')}</dt>
                <dd>{data.profile?.location ?? 'Córdoba, Argentina'}</dd>
              </div>
              <div>
                <dt>{t('identContactLabel')}</dt>
                <dd>{data.profile?.email ?? 'emanuel.mendez@email.com'}</dd>
              </div>
            </dl>
            <span className="identifier-cta">{t('identCta')}</span>
          </div>
        </Link>
      </motion.div>

      <div className="section-rule">
        <span>{t('appSectionProjects')}</span>
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
