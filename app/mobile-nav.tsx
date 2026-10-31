"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Proyectos", "#proyectos"],
  ["Experiencia", "#experiencia"],
  ["Hablemos", "#contacto"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !menuRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
    };
  }, [open]);

  return (
    <div ref={menuRef} className={`navigation-menu${open ? " is-open" : ""}`}>
      <button
        ref={toggleRef}
        className="menu-toggle"
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="primary-navigation"
        onClick={() => setOpen((current) => !current)}
      >
        <span aria-hidden="true" className="menu-toggle-lines"><i /><i /><i /></span>
      </button>
      <nav id="primary-navigation" className="primary-navigation" aria-label="Navegación principal">
        {links.map(([label, href]) => (
          <a key={href} className={label === "Hablemos" ? "navigation-contact" : undefined} href={href} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </div>
  );
}
