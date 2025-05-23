export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: string;
};

export type Creator = {
  id: number;
  specialization: string;
  bio: string | null;
  avatar: string | null;
  user: User;
};

export type Category = {
  id: number;
  name: string;
};

export type Work = {
  id: number;
  creator: Creator;
  title: string;
  description: string;
  content: string | null;
  image: string | null;
  category: Category;
  status: "published" | "draft";
  date_created: string;
};

export type Global = {
  title: string;
  description: string | null;
  writer_cover: string | null;
};
