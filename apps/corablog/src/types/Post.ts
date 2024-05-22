export interface Post {
  id: string;
  title: string;
  content: string;
  published: boolean;
  imageUrl?: string;
}

export interface PostInput {
  title: string;
  content: string;
  published: boolean;
  imageUrl?: string;
}
