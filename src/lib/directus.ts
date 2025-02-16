import { createDirectus, rest, authentication, type DirectusClient } from '@directus/sdk';

type Global = {
  title: string;
  description: string;
}

type Author = {
  name: string
}

type Page = {
  title: string;
  content: string;
  slug: string;
}

type Post = {
  image: string;
  title: string;
  author: Author;
  content: string;
  published_date: string
  slug: string;
}

type SchemaOLD = {
  posts: Post[];
  global: Global;
  pages: Page[];
}

// src/lib/directus.ts

// Define a type for our Directus schema. This is the *most important* part for strong typing.
// You'll need to update this to reflect your *exact* Directus schema.
export type CreatorSchema = {
  global: {
    title: string;
    description: string;
  } & Record<string, any>; // Allow other built-in fields.
  directus_users: {
    id: string;
    first_name: string | null;
    last_name: string | null;
    email: string;
    approved: boolean;
    role: string; // Assuming this is a string ID referencing directus_roles
    bio: string;
  } & Record<string, any>; // Allow other built-in fields.
  creators: {
    id: number;
    user_id: string; // ID of the related directus_users record (string, not number, in Directus SDK)
    specialization: string;
  } & Record<string, any>;
  works: {
    id: number;
    creator: number; // ID of the related creators record
    title: string;
    description: string;
    content_type: 'image' | 'text';
    content: string | null;
    image: { id: string; width: number; height: number } | null; // File object
    categories: number[]; // Array of category IDs
    published_date: string; // ISO Date string
    status: 'draft' | 'published' | 'archived';
  } & Record<string, any>;
  categories: {
    id: number;
    name: string;
  } & Record<string, any>;
    directus_files: {
        id: string;
        storage: string;
        filename_disk: string;
        filename_download: string;
        title: string;
        type: string;
        folder: string | null;
        uploaded_by: string;
        uploaded_on: string;
        modified_by: string;
        modified_on: string;
        charset: string | null;
        filesize: number;
        width: number | null;
        height: number | null;
        duration: number | null;
        embed: string | null;
        description: string | null;
        location: string | null;
        tags: string[] | null;
        metadata: Record<string, any> | null;
    } & Record<string, any>;
};

const directus = createDirectus<CreatorSchema>(import.meta.env.PUBLIC_DIRECTUS_URL)
  .with(rest())
  .with(authentication('json', { autoRefresh: true, msRefreshBeforeExpires: 300000 }));

export default directus;
