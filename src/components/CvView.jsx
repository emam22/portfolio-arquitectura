import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { profile } from '../data/profile';
import { cv } from '../data/cv';
import { EASE } from '../lib/motion';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function CvView() {
  const contacts = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { label: 'Teléfono', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { label: 'LinkedIn', value: profile.linkedin, href: `https://${profile.linkedin}` },
    { label: 'Ubicación', value: profile.location },
  ];

  return (
    <main className="page cv-container">
      <div className="cv-toolbar">
        <Link to="/" className="back-button">
          ← Volver al Portfolio
        </Link>

        <div className="cv-actions">
          <a href={profile.cvFile} download className="cv-button">
            Descargar PDF
          </a>
          <button type="button" className="cv-button" onClick={() => window.print()}>
            Imprimir / Guardar
          </button>
        </div>
      </div>

      <motion.header
        className="cv-header"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        <p className="eyebrow">{profile.degree}</p>
        {/* Mismo layoutId que el cartucho de la portada: el nombre viaja del bloque
           .identifier al encabezado del CV en una transición continua. */}
        <motion.h1 layoutId="profile-name" className="cv-name">
          {profile.name}
        </motion.h1>
        <p className="cv-role">{profile.role}</p>

        <ul className="cv-contact">
          {contacts.map((c) => (
            <li key={c.label}>
              <span className="cv-contact-label">{c.label}</span>
              {c.href ? (
                <a href={c.href} target="_blank" rel="noreferrer">
                  {c.value}
                </a>
              ) : (
                <span>{c.value}</span>
              )}
            </li>
          ))}
        </ul>
      </motion.header>

      <div className="cv-grid">
        <div className="cv-main">
          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="cv-section-title">Perfil</h2>
            <p className="cv-summary">{cv.summary}</p>
          </motion.section>

          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="cv-section-title">Experiencia</h2>

            <ol className="cv-timeline">
              {cv.experience.map((item) => (
                <li key={`${item.period}-${item.company}`} className="cv-entry">
                  <span className="cv-period">{item.period}</span>
                  <div className="cv-entry-body">
                    <h3 className="cv-entry-title">{item.role}</h3>
                    <p className="cv-entry-org">
                      {item.company} <span className="cv-dot">·</span> {item.location}
                    </p>
                    <ul className="cv-bullets">
                      {item.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </motion.section>

          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="cv-section-title">Formación</h2>

            <ol className="cv-timeline">
              {cv.education.map((item) => (
                <li key={`${item.period}-${item.degree}`} className="cv-entry">
                  <span className="cv-period">{item.period}</span>
                  <div className="cv-entry-body">
                    <h3 className="cv-entry-title">{item.degree}</h3>
                    <p className="cv-entry-org">{item.school}</p>
                  </div>
                </li>
              ))}
            </ol>
          </motion.section>
        </div>

        <aside className="cv-side">
          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="cv-section-title">Competencias</h2>

            <div className="cv-skills">
              {cv.skills.map((group) => (
                <div key={group.group} className="cv-skill-group">
                  <h3 className="cv-skill-name">{group.group}</h3>
                  <ul className="cv-tags">
                    {group.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="cv-section-title">Matriculaciones</h2>

            <ul className="cv-list">
              {cv.certifications.map((c) => (
                <li key={c.title}>
                  <span className="cv-list-title">{c.title}</span>
                  <span className="cv-list-meta">
                    {c.issuer} · {c.year}
                  </span>
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="cv-section-title">Idiomas</h2>

            <ul className="cv-list">
              {cv.languages.map((l) => (
                <li key={l.language}>
                  <span className="cv-list-title">{l.language}</span>
                  <span className="cv-list-meta">{l.level}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </aside>
      </div>
    </main>
  );
}
