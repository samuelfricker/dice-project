import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const newsCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    isDraft: z.boolean().default(false),
  }),
});

const consortiumCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/consortium" }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    country: z.string(),
    website: z.string().url(),
    logo: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  news: newsCollection,
  consortium: consortiumCollection,
};
