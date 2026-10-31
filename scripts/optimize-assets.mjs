import sharp from "sharp";
import { mkdir, stat } from "node:fs/promises";
import path from "node:path";

const jobs = [
  {
    source: "assets-source/hero-workspace.jpg",
    destination: "public/hero-workspace.webp",
    quality: 82,
    squareCrop: true,
    size: 900,
  },
  {
    source: "assets-source/about-workspace.jpg",
    destination: "public/about-workspace.webp",
    quality: 82,
  },
  {
    source: "assets-source/services/landing-design.jpg",
    destination: "public/services/landing-design.webp",
    quality: 80,
  },
  {
    source: "assets-source/services/admin-dashboard.jpg",
    destination: "public/services/admin-dashboard.webp",
    quality: 80,
  },
  {
    source: "assets-source/services/odoo-inventory.jpg",
    destination: "public/services/odoo-inventory.webp",
    quality: 80,
  },
  {
    source: "assets-source/project-previews/integer-home-desktop.png",
    destination: "public/project-previews/integer-home.webp",
    quality: 82,
  },
  {
    source: "assets-source/project-previews/pasteleria-home-desktop.png",
    destination: "public/project-previews/pasteleria-home.webp",
    quality: 82,
  },
];

for (const job of jobs) {
  const destination = path.resolve(job.destination);
  await mkdir(path.dirname(destination), { recursive: true });

  let image = sharp(path.resolve(job.source));
  if (job.squareCrop) {
    const { width, height } = await image.metadata();
    const side = Math.min(width, height);
    image = image.extract({
      left: Math.floor((width - side) / 2),
      top: Math.floor((height - side) / 2),
      width: side,
      height: side,
    });
  }
  if (job.size) image = image.resize(job.size, job.size, { fit: "inside", withoutEnlargement: true });

  await image.webp({ quality: job.quality, effort: 5 }).toFile(destination);
  const { size } = await stat(destination);
  console.log(`${job.destination}: ${(size / 1024).toFixed(1)} KB`);
}
