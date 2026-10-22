import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';
import { EASE } from '../lib/motion';

export default function NotFound() {
  const { t } = useI18n();

  return (
    <motion.main
      className="page detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: EASE } }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE } }}
    >
      <p className="eyebrow">{t('notFoundEyebrow')}</p>
      <h1>{t('notFoundTitle')}</h1>
      <Link to="/" className="back-button">
        ← {t('appBack')}
      </Link>
    </motion.main>
  );
}
