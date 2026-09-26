import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alan Maximiliano Vejar Vejar | Desarrollador web freelance",
  description:
    "Desarrollo sitios web y aplicaciones a la medida. Soy Alan Maximiliano Vejar Vejar, ingeniero de software full stack con experiencia en la Universidad Latina de América y proyectos freelance.",
  openGraph: {
    title: "Alan Maximiliano Vejar Vejar | Desarrollo web freelance",
    description: "Sitios web rápidos, claros y hechos para tu negocio.",
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
