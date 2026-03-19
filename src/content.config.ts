import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dogs = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/dogs" }),
  schema: z.object({
    name: z.string(),
    sex: z.enum(["Macho", "Hembra"]),
    age: z.string(),
    salud: z
      .object({
        castrado: z.boolean().default(false),
        desparasitado: z.boolean().default(false),
        vacunado: z.boolean().default(false),
      })
      .default({ castrado: false, desparasitado: false, vacunado: false }),
    caracter: z.string(),
    size: z.enum(["Pequeño", "Mediano", "Grande", "Sorpresa"]),
    observaciones: z.string().optional().default(""),
    image: z.string(),
    adopted: z.boolean().default(false),
    featured: z.boolean().default(false),
  }),
});

const campaigns = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/campaigns" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    goal: z.number(),
    raised: z.number().default(0),
    active: z.boolean().default(true),
  }),
});

/** Perros que ya fueron adoptados — solo nombre y foto (CMS simplificado) */
const enFamilia = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/en-familia" }),
  schema: z.object({
    name: z.string(),
    image: z.string(),
  }),
});

/** Productos a la venta (solidarios) — editable vía CMS */
const ventas = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/ventas" }),
  schema: z.object({
    nombre: z.string(),
    descripcion: z.string(),
    precio: z.string(),
    image: z.string(),
  }),
});

/** Eventos pasados con la comunidad — editable vía CMS */
const eventos = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/eventos" }),
  schema: z.object({
    titulo: z.string(),
    subtitulo: z.string(),
    descripcion: z.string(),
    /** AAAA-MM-DD para ordenar (más reciente primero en la página) */
    fecha: z.string().optional(),
    fotos: z.array(z.object({ src: z.string() })).default([]),
  }),
});

/** Casos que necesitan ayuda urgente — editable vía CMS */
const urgencias = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/urgencias" }),
  schema: z.object({
    titulo: z.string(),
    descripcion: z.string(),
    image: z.string(),
    /** Si está resuelto, desactivá para ocultarlo del sitio sin borrar el archivo */
    activo: z.boolean().default(true),
    /** AAAA-MM-DD: orden en la página (más reciente primero) */
    fecha: z.string().optional(),
  }),
});

export const collections = { dogs, campaigns, enFamilia, ventas, eventos, urgencias };
