// Curvas y duraciones compartidas por todas las transiciones del sitio.
// Se centralizan para que el ritmo de animación sea consistente entre vistas.
export const EASE = [0.25, 1, 0.5, 1];

export const TRANSITION = {
  duration: 0.6,
  ease: EASE,
};

export const LAYOUT_TRANSITION = {
  layout: { duration: 0.6, ease: EASE },
};
