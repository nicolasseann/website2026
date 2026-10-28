import { getCollection, getEntry, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;
export type Site = CollectionEntry<'site'>['data'];

export async function getSite(): Promise<Site> {
  const entry = await getEntry('site', 'settings');
  if (!entry) throw new Error('Missing `settings` entry in src/content/site.yaml');
  return entry.data;
}

/** All projects in display order. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

export const projectHref = (project: Project) => (project.data.page ? `/work/${project.id}/` : undefined);

export const pad = (n: number) => String(n).padStart(2, '0');
