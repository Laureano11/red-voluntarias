# Red Voluntarias

Web institucional de Red Voluntarias, una ONG dedicada al rescate, rehabilitación y adopción responsable de animales en situación de calle.

## Stack

- **Astro** — Framework para generar sitios estáticos ultrarrápidos
- **Tailwind CSS 4** — Estilos utilitarios con bajo peso final
- **Decap CMS** — Panel de administración visual para editar contenido sin tocar código

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación

```bash
npm install
```

## Comandos

| Comando         | Descripción                                   |
| --------------- | --------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `./dist/`          |
| `npm run preview` | Previsualiza el build localmente             |

## Estructura del proyecto

```
src/
├── components/        # Componentes reutilizables (Header, Footer, DogCard, etc.)
├── content/
│   ├── dogs/          # JSON por cada perro (editados vía CMS)
│   └── campaigns/     # JSON por cada campaña
├── layouts/           # Layout base del sitio
├── pages/             # Páginas del sitio
│   ├── index.astro        # Inicio
│   ├── adoptar.astro      # Catálogo de perros
│   ├── campanas.astro     # Campañas de donación
│   ├── quienes-somos.astro# Sobre nosotros
│   └── contacto.astro     # Formulario de contacto
├── styles/            # CSS global con Tailwind
└── content.config.ts  # Esquemas de validación de contenido
```

## Gestión de contenido (CMS)

El sitio usa [Decap CMS](https://decapcms.org/) para gestionar el contenido visualmente.

### Acceder al panel

1. Desplegá el sitio en Netlify
2. Habilitá **Netlify Identity** y **Git Gateway** en la configuración del sitio
3. Accedé al panel en `https://tu-sitio.netlify.app/admin`

### Desarrollo local con CMS

Para usar el CMS en modo local:

```bash
npx decap-server &
npm run dev
```

Luego visitá `http://localhost:4321/admin`.

### Colecciones editables

- **Perros en Adopción**: nombre, edad, tamaño, descripción, foto, sexo, estado de adopción
- **Campañas**: título, descripción, imagen, meta de donación, monto recaudado, estado activo

## Deploy

El sitio se puede desplegar en **Netlify** o **Vercel** de forma gratuita:

1. Conectá tu repositorio de GitHub
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Para usar el CMS en producción (Netlify): habilitá Identity y Git Gateway

## Licencia

MIT
