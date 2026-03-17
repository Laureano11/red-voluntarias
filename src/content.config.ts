import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const dogs = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/dogs" }),
  schema: z.object({
    name: z.string(),
    age: z.string(),
    size: z.enum(["Pequeño", "Mediano", "Grande"]),
    description: z.string(),
    image: z.string(),
    sex: z.enum(["Macho", "Hembra"]),
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

export const collections = { dogs, campaigns };
