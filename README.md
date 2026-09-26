# Portafolio de Alan Maximiliano Vejar Vejar

Landing personal en Next.js, React y Tailwind CSS. La página usa contenido renderizado en servidor, no depende de imágenes ni fuentes externas y mantiene la interacción de contacto en enlaces directos a WhatsApp.

## Desarrollo local

Requiere Node.js 20 o posterior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Vista previa y despliegue en Cloudflare Workers

La app usa el adaptador OpenNext para ejecutar Next.js en Cloudflare Workers.

```bash
npm install
npx wrangler login
npm run preview
npm run deploy
```

Para el despliegue desde el dashboard de Cloudflare, conecta este repositorio como una aplicación Workers y configura:

- Comando de compilación: `npx opennextjs-cloudflare build`
- Comando de despliegue: `npx opennextjs-cloudflare deploy`
- Versión de Node.js: 20 o posterior

El comando de despliegue necesita una sesión autenticada de Wrangler o credenciales de Cloudflare configuradas en el entorno de CI.

## Antes de publicar

- Añade los enlaces reales de los dos sitios de clientes cuando estén disponibles.
- Cambia el nombre del Worker en `wrangler.jsonc` si quieres otro nombre público.
- Si ya tienes dominio, actualiza los metadatos Open Graph con la URL definitiva.
- Revisa en producción que el enlace de WhatsApp abra la conversación correcta.
