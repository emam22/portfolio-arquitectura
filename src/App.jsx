import { useEffect } from 'react';
import { BrowserRouter, useRoutes, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import Gallery from './components/Gallery';
import ProjectDetail from './components/ProjectDetail';
import CvView from './components/CvView';
import NotFound from './components/NotFound';
import Backdrop from './components/Backdrop';
import { EASE } from './lib/motion';

const routes = [
  { path: '/', element: <Gallery /> },
  { path: '/project/:id', element: <ProjectDetail /> },
  { path: '/cv', element: <CvView /> },
  { path: '*', element: <NotFound /> },
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const element = useRoutes(routes, location);

  if (!element) return null;

  return (
    // `mode="popLayout"` saca del flujo normal a la vista que se va. Sin esto, la
    // página saliente seguiría ocupando alto y empujaría hacia abajo a la entrante,
    // rompiendo la transición compartida de layoutId.
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={location.pathname}
        className="route-layer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.5, ease: EASE } }}
        exit={{ opacity: 0, transition: { duration: 0.3, ease: EASE } }}
      >
        {element}
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      {/* reducedMotion="user": si el sistema pide menos movimiento, Framer desactiva
          las animaciones de transform/layout y deja solo las de opacidad. */}
      <MotionConfig reducedMotion="user">
        <div className="app-root">
          <Backdrop />
          <AnimatedRoutes />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}
