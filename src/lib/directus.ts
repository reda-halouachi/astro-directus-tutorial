import { createDirectus, rest, authentication } from '@directus/sdk';
import type { components } from '../../api-collection';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string | null;
};

export type Creator = {
  id: number;
  user: User;
  specialization: string;
  bio: string | null;
};

export type Category = {
  id: number;
  name: string;
};

export type Work = {
  id: number;
  title: string;
  description: string;
  content: string | null;
  image: string | null;
  creator: Creator;
  category: Category;
};

export type Global = {
  id: string;
  title: string;
  description: string | null;
};

export type Schema = {
  works: Work;
  creators: Creator;
  categories: Category;
  global: Global;
  directus_users: User;
};

const directus = createDirectus<Schema>(import.meta.env.PUBLIC_DIRECTUS_URL)
  .with(rest())
  .with(authentication('json'));

export default directus;
