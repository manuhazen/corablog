import { Post } from '@prisma/client';

export const API_URL = 'http://localhost:3000/api';

export async function getPostById(id: string): Promise<Post> {
  const request = await fetch(`${API_URL}/blog/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!request.ok) {
    throw new Error(`HTTP error! status: ${request.status}`);
  }

  return request.json();
}
