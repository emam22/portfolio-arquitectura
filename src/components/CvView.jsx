import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';
import { EASE } from '../lib/motion';

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

export default function CvView() {
  const { t, data } = useI18n();
  const profile = data.profile ?? {};

  const contacts = [
    { label: t('cvContactEmail'), value: profile.email ?? 'emanuel.mendez@email.com', href: `mailto:${(profile.email ?? 'emanuel.mendez@email.com').replace(/\s/g, '')}` },
    { label: t('cvContactPhone'), value: profile.phone ?? '+54 9 351 000 0000', href: `tel:${(profile.phone ?? '+54 9 351 000 0000').replace(/\s/g, '')}` },
    { label: t('cvContactLinkedIn'), value: profile.linkedin ?? 'linkedin.com/in/emanuelmendez', href: `https://${profile.linkedin ?? 'linkedin.com/in/emanuelmendez'}` },
    { label: t('cvContactLocation'), value: profile.location ?? 'Córdoba, Argentina' },
  ];

  return (
    <main className="page cv-container">
      <div className="cv-toolbar">
        <Link to="/" className="back-button">
          ← {t('cvBack')}
        </Link>

        <div className="cv-actions">
          <a href={profile.cvFile ?? '/cv-emanuel-mendez.pdf'} download className="cv-button">
            {t('cvDownload')}
          </a>
          <button type="button" className="cv-button" onClick={() => window.print()}>
            {t('cvPrint')}
          </button>
        </div>
      </div>

      <motion.header
        className="cv-header"
        variants={reveal}
        initial="hidden"
        animate="visible"
      >
        <p className="eyebrow">{t('cvDegree')}</p>
        <motion.h1 layoutId="profile-name" className="cv-name">
          {t('identName')}
        </motion.h1>
        <p className="cv-role">{t('cvRole')}</p>

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
            <h2 className="cv-section-title">{t('cvSectionProfile')}</h2>
            <p className="cv-summary">{data.cvSummary ?? t('cvSummary')}</p>
          </motion.section>

          <motion.section
            className="cv-section"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="cv-section-title">{t('cvSectionExperience')}</h2>

            <ol className="cv-timeline">
              {(data.cvExp ?? []).map((item) => (
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
            <h2 className="cv-section-title">{t('cvSectionEducation')}</h2>

            <ol className="cv-timeline">
              {(data.cvEdu ?? []).map((item) => (
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
            <h2 className="cv-section-title">{t('cvSectionSkills')}</h2>

            <div className="cv-skills">
              {(data.cvSkills ?? []).map((group) => (
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
            <h2 className="cv-section-title">{t('cvSectionCertifications')}</h2>

            <ul className="cv-list">
              {(data.cvCerts ?? []).map((c) => (
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
            <h2 className="cv-section-title">{t('cvSectionLanguages')}</h2>

            <ul className="cv-list">
              {(data.cvLangs ?? []).map((l) => (
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
