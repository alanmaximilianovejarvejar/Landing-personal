export type TechName =
  | "C#"
  | "Python"
  | "JavaScript"
  | "React"
  | "Next.js"
  | "Node.js"
  | "PostgreSQL"
  | "Odoo"
  | "Git"
  | "TypeScript"
  | "Supabase"
  | "Cloudflare"
  | "Diseño responsivo"
  | "Desarrollo web";

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg aria-hidden="true" className={`arrow-icon${diagonal ? " arrow-icon-diagonal" : ""}`} viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {diagonal ? <path d="M5 15 15 5M6 5h9v9" /> : <path d="M3.5 10h12m-5-5 5 5-5 5" />}
    </svg>
  );
}

export function ServiceGlyph({ name }: { name: "landing" | "admin" | "odoo" }) {
  if (name === "landing") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><rect x="3.5" y="4.5" width="17" height="15" rx="1.5" /><path d="M4 8h16M7 6.25h.01M9.5 6.25h.01M7 11h4m-4 3h10m-10 2.5h7" /></svg>;
  }
  if (name === "admin") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M5 6h14M5 12h14M5 18h14" /><circle cx="9" cy="6" r="2" /><circle cx="15" cy="12" r="2" /><circle cx="11" cy="18" r="2" /></svg>;
  }
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M12 3.5 20 8v8l-8 4.5L4 16V8l8-4.5Z" /><path d="m4.5 8.3 7.5 4.3 7.5-4.3M12 12.8v7.3M8 5.8l8 4.6" /></svg>;
}

export function TechIcon({ name }: { name: TechName }) {
  const key = name === "C#" ? "csharp" : name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  if (name === "JavaScript" || name === "TypeScript") {
    const letters = name === "JavaScript" ? "JS" : "TS";
    return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><rect x="2.5" y="2.5" width="19" height="19" rx="3" /><text x="5" y="17">{letters}</text></svg>;
  }
  if (name === "React") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><circle cx="12" cy="12" r="1.6" /><ellipse cx="12" cy="12" rx="9.2" ry="3.7" /><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9.2" ry="3.7" transform="rotate(120 12 12)" /></svg>;
  if (name === "Next.js") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 17V7l8 10V7" /></svg>;
  if (name === "Node.js") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" /><path d="M8.5 15V9l3.5 6V9m2 6V9h2.5" /></svg>;
  if (name === "Git") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="m12 2.8 9.2 9.2-9.2 9.2L2.8 12 12 2.8Z" /><path d="M9 8.5v7m0-3.5 5-4m-5 4 5 4" /><circle cx="9" cy="8" r="1" /><circle cx="14" cy="7" r="1" /><circle cx="14" cy="17" r="1" /></svg>;
  if (name === "Python") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="M12 3H8.1A3.1 3.1 0 0 0 5 6.1v3.3h7V12H6.2A3.2 3.2 0 0 0 3 15.2v1.7A3.1 3.1 0 0 0 6.1 20H10v-3.1h4a3.1 3.1 0 0 0 3.1-3.1V7A4 4 0 0 0 13 3h-1Z" /><path d="M12 21h3.9a3.1 3.1 0 0 0 3.1-3.1v-3.3h-7V12h5.8a3.2 3.2 0 0 0 3.2-3.2V7.1A3.1 3.1 0 0 0 17.9 4H14v3.1h-4A3.1 3.1 0 0 0 6.9 10v6A4 4 0 0 0 11 20h1Z" /></svg>;
  if (name === "C#") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="m12 2.8 8 4.6v9.2l-8 4.6-8-4.6V7.4l8-4.6Z" /><path d="M14.4 9a3.4 3.4 0 1 0 0 6m-8-3h5m-4-2.1-.8 4.2m3.2-4.2-.8 4.2" /></svg>;
  if (name === "Odoo") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><circle cx="7" cy="7" r="3.5" /><circle cx="17" cy="7" r="3.5" /><circle cx="7" cy="17" r="3.5" /><circle cx="17" cy="17" r="3.5" /></svg>;
  if (name === "Cloudflare") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="M4 16.5h14.2a2.8 2.8 0 0 0 .2-5.6 5.2 5.2 0 0 0-9.9-1.2A3.5 3.5 0 0 0 4 16.5Z" /><path d="M7 19h10m-7 2h6" /></svg>;
  if (name === "PostgreSQL") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><ellipse cx="12" cy="5.5" rx="8" ry="3" /><path d="M4 5.5v12c0 1.7 3.6 3 8 3s8-1.3 8-3v-12M4 11.5c0 1.7 3.6 3 8 3s8-1.3 8-3" /></svg>;
  if (name === "Supabase") return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="M13.2 2.5 4.4 13.2c-.5.6-.1 1.5.7 1.5h5.1l-.6 6.8c-.1.9 1.1 1.3 1.6.5l8.4-11c.5-.6 0-1.5-.8-1.5h-4.9l.8-5.9c.1-1-1-1.7-1.5-1.1Z" /></svg>;
  return <svg aria-hidden="true" className={`tech-icon ${key}`} viewBox="0 0 24 24"><path d="m8.5 7-5 5 5 5m7-10 5 5-5 5m-2.2-13-2.6 16" /></svg>;
}

export function WhatsAppMark() {
  return <svg aria-hidden="true" className="contact-mark" viewBox="0 0 24 24"><path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3.5 20l1.1-4.4a8.2 8.2 0 1 1 15.6-3.9Z" /><path d="M8.2 7.8c.3-.5.6-.5 1-.5h.4c.2 0 .4.1.5.4l.8 1.9c.1.3.1.5-.1.7l-.6.7c-.2.2-.2.4 0 .7.5.8 1.2 1.5 2 2 .3.2.5.2.7 0l.8-.9c.2-.2.4-.3.7-.2l1.8.9c.3.1.4.3.4.6-.1.8-.5 1.4-1.2 1.7-.7.4-1.6.4-2.5.1-1-.3-2.1-.9-3.2-1.9-1.3-1.1-2.2-2.4-2.6-3.6-.4-1.1-.2-2.1.3-2.6Z" /></svg>;
}

export function MailMark() {
  return <svg aria-hidden="true" className="contact-mark" viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></svg>;
}

export function BrandMark() {
  return <svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="7" /><path d="M8 29 16.5 11h3L28 29m-16.5-6h13" /><path d="m20 17 5.5 12L32 12" /></svg>;
}
