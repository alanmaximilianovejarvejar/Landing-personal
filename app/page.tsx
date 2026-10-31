import type { CSSProperties } from "react";
import ScrollReveal from "./scroll-reveal";
import MobileNav from "./mobile-nav";
import ProjectArt from "./components/project-art";
import { Arrow, BrandMark, MailMark, ServiceGlyph, TechIcon, WhatsAppMark } from "./components/icons";

type RevealStyle = CSSProperties & { "--reveal-delay": string };

const whatsapp =
  "https://wa.me/527551211432?text=Hola%20Alan%2C%20vi%20tu%20portafolio%20y%20quiero%20platicar%20sobre%20un%20proyecto.";

const projects = [
  {
    kind: "Plataforma comercial",
    title: "Integer Desarrollos",
    description:
      "Sitio web comercial responsivo, desarrollado y desplegado desde la planeación hasta la configuración del alojamiento y dominio.",
    stack: ["Next.js", "TypeScript", "Cloudflare"],
    art: "store",
    preview: "/project-previews/integer-home.webp",
    href: "https://integer-desarrollos.com",
  },
  {
    kind: "Sitio comercial",
    title: "Pastelería Dulce Fiesta",
    description:
      "Sitio web responsivo para presentar el negocio y facilitar que sus clientes conozcan sus productos.",
    stack: ["Diseño responsivo", "Desarrollo web"],
    art: "bakery",
    preview: "/project-previews/pasteleria-home.webp",
    href: "http://alanmaximilianovejarvejar.github.io/pasteleria-dulce-fiesta/",
  },
] as const;

const technologies = [
  "C#", "Python", "JavaScript", "React", "Next.js", "Node.js", "PostgreSQL", "Odoo", "Git",
] as const;

export default function Home() {
  return (
    <ScrollReveal>
      <main className="site-main" id="inicio">
        <header className="site-header">
          <a href="#inicio" className="brand" aria-label="Alan Vejar, inicio">
            <BrandMark /><span>Alan Vejar</span>
          </a>
          <MobileNav />
          <a className="header-cta" href="#contacto">Hablemos <Arrow diagonal /></a>
        </header>

        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-glow" aria-hidden="true" />
          <div className="hero-copy" data-reveal>
            <span className="eyebrow"><i /> Desarrollo web · Soluciones a medida</span>
            <h1 id="hero-title">Ideas en código.<br /><span>Resultados reales.</span></h1>
            <p>Desarrollo soluciones web para negocios que necesitan presentar, administrar o conectar mejor sus servicios.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#servicios">Explorar servicios <Arrow /></a>
              <a className="button button-quiet" href="#proyectos">Ver proyectos</a>
            </div>
          </div>
          <div className="hero-art" data-reveal>
            <div className="hero-art-frame" aria-hidden="true" />
          </div>
          <span className="hero-caption">DISEÑO · DESARROLLO · IMPLEMENTACIÓN</span>
        </section>

        <section className="services section-pad" id="servicios" aria-labelledby="services-title">
          <div className="section-heading" data-reveal>
            <span className="section-kicker">Servicios</span>
            <h2 id="services-title">Una solución adecuada al reto.</h2>
            <p>Desde una página para dar a conocer tu negocio hasta sistemas conectados a tus procesos.</p>
          </div>
          <div className="service-grid">
            <a className="service-card" href="#contacto" data-reveal style={{ "--reveal-delay": "70ms" } as RevealStyle}>
              <div className="service-art service-art-landing" aria-hidden="true"><img className="service-photo" src="/services/landing-design.webp" width="1200" height="800" alt="" loading="lazy" decoding="async" /></div>
              <div className="service-copy"><div className="service-title"><div className="service-icon"><ServiceGlyph name="landing" /></div><div><span>Presencia digital</span><h3>Landing pages</h3></div></div><span className="circle-arrow"><Arrow diagonal /></span></div>
            </a>
            <a className="service-card" href="#contacto" data-reveal style={{ "--reveal-delay": "140ms" } as RevealStyle}>
              <div className="service-art service-art-admin" aria-hidden="true"><img className="service-photo" src="/services/admin-dashboard.webp" width="1200" height="800" alt="" loading="lazy" decoding="async" /></div>
              <div className="service-copy"><div className="service-title"><div className="service-icon"><ServiceGlyph name="admin" /></div><div><span>Sistemas a medida</span><h3>Sitios con panel de administración</h3></div></div><span className="circle-arrow"><Arrow diagonal /></span></div>
            </a>
            <a className="service-card" href="#contacto" data-reveal style={{ "--reveal-delay": "210ms" } as RevealStyle}>
              <div className="service-art service-art-odoo" aria-hidden="true"><img className="service-photo" src="/services/odoo-inventory.webp" width="1200" height="800" alt="" loading="lazy" decoding="async" /></div>
              <div className="service-copy"><div className="service-title"><div className="service-icon"><ServiceGlyph name="odoo" /></div><div><span>Solución corporativa</span><h3>Desarrollo e integración con Odoo</h3></div></div><span className="circle-arrow"><Arrow diagonal /></span></div>
            </a>
          </div>
        </section>

        <section className="about section-pad" id="sobre-mi" aria-labelledby="about-title">
          <div className="about-copy" data-reveal>
            <span className="section-kicker">Sobre mí</span>
            <h2 id="about-title">Ingeniería enfocada en resolver problemas reales.</h2>
            <p>Soy Ingeniero en Desarrollo y Gestión de Software. He colaborado en proyectos institucionales, administrativos y web.</p>
            <p>Como desarrollador freelance puedo acompañar el proceso desde entender la necesidad hasta desarrollar y poner en marcha la solución.</p>
            <a className="text-link" href="#experiencia">Conoce mi experiencia <Arrow /></a>
          </div>
          <div className="about-visual" data-reveal>
            <div className="about-visual-main">
              <img
                className="about-photo"
                src="/about-workspace.webp"
                width="1600"
                height="1065"
                alt="Espacio de trabajo con computadora y herramientas de desarrollo web"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="about-visual-outline" />
          </div>
        </section>

        <section className="projects section-pad" id="proyectos" aria-labelledby="projects-title">
          <div className="section-heading section-heading-centered" data-reveal>
            <span className="section-kicker">Proyectos</span>
            <h2 id="projects-title">Trabajo hecho para necesidades concretas.</h2>
            <p>Una selección de experiencias en desarrollo web y sistemas.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <article className={`project-card${project.href ? " project-card-linked" : ""}`} key={project.title} data-reveal
                style={{ "--reveal-delay": `${(index + 1) * 70}ms` } as RevealStyle}>
                <ProjectArt art={project.art} preview={project.preview} />
                <div className="project-info">
                  <span className="project-kind">{project.kind}</span>
                  <h3>{project.title}</h3>
                  <div className="tags">{project.stack.map((item) => <span key={item}><TechIcon name={item} />{item}</span>)}</div>
                  <p>{project.description}</p>
                  {project.href ? (
                    <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">Ver proyecto <Arrow diagonal /></a>
                  ) : <span className="project-link project-link-pending">Enlace próximamente</span>}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-pad" id="experiencia" aria-labelledby="experience-title">
          <div className="experience-copy" data-reveal>
            <span className="section-kicker">Experiencia</span>
            <h2 id="experience-title">Desarrollo de principio a fin.</h2>
            <p>Experiencia en desarrollo, mantenimiento e implementación de aplicaciones para necesidades reales.</p>
          </div>
          <div className="experience-details" data-reveal>
            <details className="experience-item">
              <summary className="experience-row"><div><span>Desarrollador de Software</span><small>Universidad Latina de América · jul. 2025–may. 2026</small></div><span className="experience-disclosure" aria-hidden="true" /></summary>
              <div className="experience-description"><ul>
                <li>Mantuve y di soporte a más de 10 sistemas web institucionales integrados con el ERP Calipso 2008.</li>
                <li>Desarrollé y corregí componentes en C#, ASP.NET MVC, Razor y React; atendí incidencias en producción y consumo de APIs.</li>
                <li>Participé en la migración a Odoo, integrando módulos con APIs externas y servicios en FastAPI para generar PDFs.</li>
                <li>Trabajé con consultas, procedimientos y triggers en SQL Server, además de apoyar pruebas y capacitación a usuarios.</li>
              </ul></div>
            </details>
            <details className="experience-item">
              <summary className="experience-row"><div><span>Desarrollo web independiente</span><small>Proyectos freelance · 2026</small></div><span className="experience-disclosure" aria-hidden="true" /></summary>
              <div className="experience-description"><ul>
                <li>Diseñé, desarrollé y desplegué un sitio comercial responsivo con Next.js y TypeScript, desde la planeación hasta el hosting y el dominio.</li>
                <li>Gestioné la relación con el cliente y la configuración del servidor y los registros del dominio.</li>
              </ul></div>
            </details>
            <details className="experience-item">
              <summary className="experience-row"><div><span>Desarrollador Web (estadías)</span><small>PROCEL TI · 2024</small></div><span className="experience-disclosure" aria-hidden="true" /></summary>
              <div className="experience-description"><ul>
                <li>Desarrollé Whispper, un módulo web responsivo para la gestión de clientes de servicios de internet.</li>
                <li>Implementé pasarela de pagos, historial de facturación y monitoreo de estado en tiempo real con React, Supabase, Tailwind CSS y PostgreSQL.</li>
              </ul></div>
            </details>
            <div className="tech-list" aria-label="Tecnologías y herramientas">
              {technologies.map((tech) => <span key={tech}><TechIcon name={tech} />{tech}</span>)}
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contacto" aria-labelledby="contact-title">
          <div className="contact-inner" data-reveal>
            <span className="section-kicker">Contacto</span>
            <h2 id="contact-title">¿Listo para darle forma a tu proyecto?</h2>
            <p>Cuéntame qué necesitas. Revisamos juntos el alcance y el tipo de solución que puede ayudarte.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppMark />Hablemos por WhatsApp <Arrow diagonal /></a>
            </div>
            <address className="contact-details">
              <a className="contact-email" href="mailto:alanzihua@gmail.com" aria-label="Enviar correo a alanzihua@gmail.com"><MailMark />Enviar correo</a>
            </address>
          </div>
        </section>

        <footer className="site-footer">
          <a href="#inicio" className="brand"><BrandMark /><span>Alan Vejar</span></a>
          <span>© {new Date().getFullYear()} Alan Vejar. Todos los derechos reservados.</span>
        </footer>
      </main>
    </ScrollReveal>
  );
}
