import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    isDraft: z.boolean(),
  }),
});

const project = defineCollection({
  loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    gitHubUrl: z.string(),
    liveUrl: z.string().optional(),
  }),
});

const philosophicalExperienceNugget = defineCollection({
  loader: glob({
    base: "./src/content/experience-nuggets/philosophical",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
  }),
});

const technicalExperienceNugget = defineCollection({
  loader: glob({
    base: "./src/content/experience-nuggets/technical",
    pattern: "**/*.{md,mdx}",
  }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  blog,
  project,
  philosophicalExperienceNugget,
  technicalExperienceNugget,
};
