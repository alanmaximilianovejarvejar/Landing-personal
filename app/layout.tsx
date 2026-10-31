import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Vejar | Desarrollo web y soluciones a medida",
  description:
    "Landing pages, sitios con panel de administración y soluciones corporativas con Odoo. Conoce la experiencia y los proyectos de Alan Vejar.",
  openGraph: {
    title: "Alan Vejar | Desarrollo web y soluciones a medida",
    description: "Landing pages, sitios con panel de administración y soluciones corporativas con Odoo.",
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
