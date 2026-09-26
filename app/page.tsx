const whatsapp = "https://wa.me/527551211432?text=Hola%20Alan%2C%20vi%20tu%20portafolio%20y%20quiero%20platicar%20sobre%20un%20proyecto.";

const projects = [
  {
    number: "01",
    type: "Sitio comercial · Freelance",
    title: "Una presencia web hecha para vender",
    description:
      "Diseñé y publiqué de principio a fin un sitio comercial responsivo: desde la planeación y el trato directo con el cliente hasta el dominio y el servidor.",
    tags: ["Diseño web", "Desarrollo full stack", "Despliegue"],
    status: "Publicado",
  },
  {
    number: "02",
    type: "Gestión de clientes · Whispper",
    title: "Servicios y pagos, en un solo lugar",
    description:
      "Módulo web responsivo para administrar servicios de internet, consultar historial de facturación, integrar pagos y monitorear estados en tiempo real.",
    tags: ["React", "Supabase", "PostgreSQL"],
    status: "Proyecto universitario · 2025",
  },
  {
    number: "03",
    type: "Sistema administrativo · Universidad",
    title: "Del sistema contable a una herramienta más útil",
    description:
      "Modernización de un sistema contable migrado desde MS-DOS para automatizar el control de cheques y generar reportes financieros exportables a hojas de cálculo.",
    tags: ["Java", "SQLite", "Automatización"],
    status: "2024",
  },
];

const services = [
  {
    number: "01",
    title: "Landing pages",
    text: "Páginas rápidas y a la medida para presentar tu negocio, validar una idea o convertir visitas en clientes.",
  },
  {
    number: "02",
    title: "Aplicaciones web",
    text: "Sistemas full stack con inicio de sesión, panel de administración y las funciones que tu proceso necesita.",
  },
  {
    number: "03",
    title: "Integración y soporte",
    text: "Conecto datos y servicios, resuelvo incidencias y mantengo aplicaciones para que sigan funcionando.",
  },
];

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true" className="text-lg">{diagonal ? "↗" : "→"}</span>;
}

export default function Home() {
  return (
    <main>
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <a href="#inicio" className="text-lg font-bold tracking-tight">AV<span className="text-emerald-700">.</span></a>
        <nav aria-label="Navegación principal" className="hidden items-center gap-8 text-sm text-[var(--muted)] sm:flex">
          <a className="transition-colors hover:text-[var(--ink)]" href="#servicios">Servicios</a>
          <a className="transition-colors hover:text-[var(--ink)]" href="#trabajo">Proyectos</a>
          <a className="transition-colors hover:text-[var(--ink)]" href="#sobre-mi">Sobre mí</a>
        </nav>
        <a className="inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-5 py-2.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5" href={whatsapp} target="_blank" rel="noreferrer">Hablemos <Arrow diagonal /></a>
      </header>

      <section id="inicio" className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 pt-16 md:grid-cols-[1.35fr_.65fr] md:items-end md:px-10 md:pb-32 md:pt-24">
        <div>
          <p className="mb-7 flex items-center gap-3 text-xs font-semibold uppercase tracking-[.2em] text-[var(--muted)]"><span className="h-2 w-2 rounded-full bg-emerald-600" />Desarrollador web freelance · México</p>
          <h1 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-.055em] sm:text-6xl md:text-8xl">Ideas claras.<br /><span className="text-emerald-800">Web que funciona.</span></h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-[var(--muted)]">Soy Alan Maximiliano Vejar Vejar, ingeniero de software full stack. Diseño y desarrollo sitios y aplicaciones para negocios que quieren avanzar en internet.</p>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a className="inline-flex items-center gap-3 rounded-full bg-[var(--green)] px-6 py-3.5 font-semibold transition-transform hover:-translate-y-0.5" href={whatsapp} target="_blank" rel="noreferrer">Cuéntame tu idea <Arrow diagonal /></a>
            <a href="#trabajo" className="text-sm font-medium underline decoration-[var(--line)] underline-offset-4">Ver proyectos</a>
          </div>
        </div>
        <aside className="rounded-3xl bg-[#e9eee5] p-7 md:p-8">
          <p className="text-sm text-[var(--muted)]">En qué te puedo ayudar</p>
          <div className="mt-6 flex flex-wrap gap-2"><span className="rounded-full bg-white px-4 py-2 text-sm">Sitios web</span><span className="rounded-full bg-white px-4 py-2 text-sm">Aplicaciones</span><span className="rounded-full bg-white px-4 py-2 text-sm">MERN stack</span></div>
          <div className="mt-9 border-t border-[#d5ddd1] pt-5"><p className="text-sm leading-6 text-[var(--muted)]">Experiencia profesional manteniendo más de diez repositorios institucionales en producción, integrando sistemas con Odoo y desarrollando proyectos independientes de principio a fin.</p></div>
        </aside>
      </section>

      <div className="border-y border-[var(--line)] bg-white/50"><div className="mx-auto flex max-w-7xl flex-wrap gap-x-10 gap-y-3 px-6 py-5 text-xs font-medium uppercase tracking-[.15em] text-[var(--muted)] md:px-10"><span>React</span><span>Node.js</span><span>Express</span><span>MongoDB</span><span>PostgreSQL</span><span>SQL Server</span><span>Java</span><span>Odoo</span></div></div>

      <section id="servicios" className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 grid gap-5 md:grid-cols-2 md:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-emerald-800">Servicios</p><h2 className="text-4xl font-medium tracking-[-.04em] md:text-6xl">Lo que podemos<br className="hidden sm:block" /> construir juntos.</h2></div><p className="max-w-md leading-7 text-[var(--muted)] md:justify-self-end">Trabajo contigo desde la idea hasta tener algo real en línea. Soluciones claras, útiles y pensadas para crecer.</p></div>
        <div className="grid border-t border-[var(--line)] md:grid-cols-3">{services.map((service) => <article key={service.number} className="border-b border-[var(--line)] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0"><p className="mb-9 text-xs text-emerald-800">{service.number}</p><h3 className="text-xl font-semibold tracking-tight">{service.title}</h3><p className="mt-3 max-w-sm text-sm leading-6 text-[var(--muted)]">{service.text}</p></article>)}</div>
      </section>

      <section id="trabajo" className="bg-[var(--forest)] text-white"><div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-[var(--green)]">Trabajo seleccionado</p><h2 className="text-4xl font-medium tracking-[-.04em] md:text-6xl">Hecho para resolver.</h2></div><p className="max-w-sm text-sm leading-6 text-white/65">Experiencia en producción, herramientas internas y proyectos web independientes.</p></div>
        <div className="grid gap-4 md:grid-cols-3">{projects.map((project) => <article key={project.number} className="flex min-h-[330px] flex-col rounded-2xl border border-white/15 bg-white/[.04] p-6 transition-colors hover:bg-white/[.08] md:p-7"><div className="flex items-center justify-between"><span className="text-xs text-white/45">{project.number} / 03</span><span className="rounded-full border border-white/20 px-3 py-1 text-[10px] text-white/65">{project.status}</span></div><p className="mt-12 text-xs uppercase tracking-[.13em] text-[var(--green)]">{project.type}</p><h3 className="mt-3 text-2xl font-medium leading-snug tracking-tight">{project.title}</h3><p className="mt-3 text-sm leading-6 text-white/65">{project.description}</p><div className="mt-auto flex flex-wrap gap-2 pt-7">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-white/10 px-3 py-1.5 text-[10px] text-white/75">{tag}</span>)}</div></article>)}</div>
        <p className="mt-5 text-xs text-white/50">Dos sitios comerciales adicionales están en proceso de publicación. Agregaré aquí sus enlaces cuando estén disponibles.</p>
      </div></section>

      <section id="sobre-mi" className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[.8fr_1.2fr] md:px-10 md:py-32"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-emerald-800">Sobre mí</p><h2 className="text-4xl font-medium tracking-[-.04em] md:text-6xl">Código con<br />contexto.</h2></div><div><p className="max-w-2xl text-xl leading-9 text-[var(--ink)]">Soy ingeniero en Desarrollo y Gestión de Software, titulado por la Universidad Tecnológica de Morelia. En la Universidad Latina de América mantuve más de diez repositorios institucionales en producción, atendí sistemas y sitios web, y colaboré en la migración hacia Odoo mediante módulos e integraciones. También llevo proyectos freelance desde la planeación hasta su publicación.</p><p className="mt-6 max-w-2xl leading-7 text-[var(--muted)]">Desarrollo aplicaciones web con React, Node.js y bases de datos relacionales y NoSQL. También tengo experiencia con Java, Odoo, procedimientos almacenados y migración de datos. Mi formación incluye certificaciones en SQL Server y aplicaciones web con Flask y SQLite.</p><div className="mt-9 grid max-w-xl grid-cols-2 gap-5 border-t border-[var(--line)] pt-6"><div><p className="text-sm font-semibold">Universidad Latina de América</p><p className="mt-1 text-xs text-[var(--muted)]">Desarrollador de software · jul. 2024–may. 2026</p></div><div><p className="text-sm font-semibold">Desarrollo independiente</p><p className="mt-1 text-xs text-[var(--muted)]">Diseño, desarrollo y despliegue · 2026</p></div></div><a href="https://github.com/alanmaximilianovejarvejar" target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 text-sm font-medium underline decoration-[var(--line)] underline-offset-4">Ver GitHub <Arrow diagonal /></a></div></section>

      <section id="contacto" className="px-6 pb-8 md:px-10"><div className="mx-auto max-w-7xl rounded-3xl bg-[var(--green)] px-7 py-12 md:px-14 md:py-16"><div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="mb-4 text-xs font-semibold uppercase tracking-[.2em] text-emerald-900">Contacto</p><h2 className="max-w-2xl text-4xl font-medium leading-tight tracking-[-.04em] md:text-6xl">¿Tienes un proyecto<br className="hidden sm:block" /> en mente?</h2><p className="mt-4 text-[var(--forest)]">Cuéntame qué necesitas. Lo vemos juntos.</p></div><a className="inline-flex w-fit items-center gap-3 rounded-full bg-[var(--ink)] px-6 py-4 font-semibold text-white transition-transform hover:-translate-y-0.5" href={whatsapp} target="_blank" rel="noreferrer">Escríbeme por WhatsApp <Arrow diagonal /></a></div></div></section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between md:px-10"><a href="#inicio" className="font-semibold text-[var(--ink)]">Alan Maximiliano Vejar Vejar<span className="text-emerald-700">.</span> · Desarrollador freelance</a><div className="flex flex-wrap gap-x-5 gap-y-2"><a href="mailto:alanzihua@gmail.com" className="hover:text-[var(--ink)]">alanzihua@gmail.com</a><a href="tel:+527551211432" className="hover:text-[var(--ink)]">+52 755 121 1432</a><span>© {new Date().getFullYear()} Alan Maximiliano Vejar Vejar</span></div></footer>
    </main>
  );
}
