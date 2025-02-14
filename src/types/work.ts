import type { Category } from "./category";
import type { Creator } from "./creator";

export type Work = {
  id: number;
  title: string;
  description: string;
  image: string;
  content: string;
  creator: Creator;
  category: Category;
  createdAt: string;
  updatedAt: string;
};