import { Post } from '@prisma/client';

export const API_URL = 'http://localhost:3000/api';

export async function getPostById(id: string): Promise<Post> {
  const request = await fetch(`${API_URL}/blog/${id}`);

  return request.json();
}

export async function getAllPosts(): Promise<Post[]> {
  const request = await fetch(`${API_URL}/blog`);

  return request.json();
}
