// Capa de fondo fija: retícula de cuaderno técnico + grano de papel.
// Es puramente decorativa, por eso va aria-hidden y no captura eventos.
export default function Backdrop() {
  return <div className="backdrop" aria-hidden="true" />;
}
