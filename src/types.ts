import type { components } from "../api-collection";

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string | null;
}

export interface Creator {
  id: string;
  user: User;
  specialization: string;
  bio: string | null;
}

export interface Category {
  id: string;
  name: string;
}

export interface Work {
  id: string;
  title: string;
  description: string;
  content: string | null;
  image: string | null;
  creator: Creator;
  category: Category;
  date_created: string;
  status: "published" | "draft";
}

export interface Global {
  title: string;
  description: string | null;
  writer_cover: string | null;
}

export type Schema = {
  directus_users: User;
  creators: Creator;
  categories: Category;
  works: Work;
  global: Global;
};

export type AuthResponse = {
  user: components["schemas"]["DirectusUsers"];
  access_token: string;
  refresh_token?: string;
};

export interface ApiError {
  message: string;
  code: string;
  status: number;
}
