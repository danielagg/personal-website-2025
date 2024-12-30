import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    isDraft: z.boolean(),
  }),
});

const experienceNugget = defineCollection({
  loader: glob({
    base: "./src/content/experience-nuggets",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
    type: z.enum(["philosophical", "technical"]),
  }),
});

export const collections = { blog, experienceNugget };
