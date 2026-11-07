import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Every piece of content on the site is defined here. The schema doubles as
 * the field list for the upcoming editor, so keep field names stable.
 */

const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Position in the work grid (1 = first). */
      order: z.number(),
      year: z.number().optional(),
      disciplines: z.array(z.string()).default([]),
      /** Where / why it was built, e.g. "Hacksmith Industries — R&D intern". */
      context: z.string().optional(),
      timeline: z.string().optional(),
      /** One or two sentences, shown on the project card. */
      summary: z.string(),
      cover: image(),
      coverAlt: z.string(),
      /** CSS object-position for the card crop, e.g. "50% 20%". */
      coverPosition: z.string().default('50% 50%'),
      hero: image().optional(),
      heroAlt: z.string().optional(),
      /** false = show the card only (no detail page yet). */
      page: z.boolean().default(true),
      /** For team projects: what you did yourself, listed as "My part". */
      contributions: z.array(z.string()).default([]),
      skills: z.array(z.string()).default([]),
      highlights: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      /** Heading above the sections, e.g. "How it works" for a team project. */
      sectionsTitle: z.string().default('The build'),
      sections: z
        .array(
          z.object({
            heading: z.string(),
            body: z.string(),
            image: image().optional(),
            imageAlt: z.string().optional(),
          }),
        )
        .default([]),
      gallery: z
        .array(z.object({ image: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      /** Extra photos, shown together in rows under "More photos". */
      photos: z
        .array(z.object({ image: image(), alt: z.string(), caption: z.string().optional() }))
        .default([]),
      videos: z
        .array(
          z.object({
            youtube: z.string(),
            title: z.string(),
            note: z.string().optional(),
            /** Seconds into the video to start playback. */
            start: z.number().optional(),
            /** Custom thumbnail; defaults to YouTube's own. */
            poster: image().optional(),
          }),
        )
        .default([]),
    }),
});

const site = defineCollection({
  loader: file('./src/content/site.yaml'),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string(),
      tagline: z.string(),
      lede: z.string(),
      description: z.string(),
      titleBlock: z.array(z.object({ label: z.string(), value: z.string() })),
      reel: z.object({
        poster: image(),
        src: z.string(),
        srcMobile: z.string().optional(),
        label: z.string(),
      }),
      /** Platforms the work has appeared on, shown quietly under the logos. `accent` tints the play mark blue. */
      onScreen: z
        .object({
          label: z.string(),
          platforms: z.array(z.object({ name: z.string(), accent: z.boolean().default(false) })),
        })
        .optional(),
      logos: z.array(z.object({ name: z.string(), image: image() })),
      about: z.object({
        lead: z.string(),
        portrait: image(),
        portraitAlt: z.string(),
        body: z.array(z.string()),
      }),
      experience: z.array(
        z.object({
          org: z.string(),
          role: z.string(),
          dates: z.coerce.string(),
          location: z.string().optional(),
          note: z.string().optional(),
        }),
      ),
      capabilities: z.array(z.object({ group: z.string(), items: z.array(z.string()) })),
      contact: z.object({
        heading: z.string(),
        email: z.string().optional(),
        resume: z.string().optional(),
        links: z.array(z.object({ label: z.string(), url: z.string() })),
      }),
    }),
});

export const collections = { projects, site };
