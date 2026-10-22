import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EASE } from '../lib/motion';

export default function NotFound() {
  return (
    <motion.main
      className="page detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5, ease: EASE } }}
      exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE } }}
    >
      <p className="eyebrow">Error 404</p>
      <h1>Página no encontrada</h1>
      <Link to="/" className="back-button">
        ← Volver al Portfolio
      </Link>
    </motion.main>
  );
}
