import { Post } from '@prisma/client';
import { PostInput } from '../types/Post';

export const API_URL = 'http://localhost:3000/api';

export async function getPostById(id: string): Promise<Post> {
  const request = await fetch(`${API_URL}/blog/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-cache',
  });

  if (!request.ok) {
    throw new Error(`HTTP error! status: ${request.status}`);
  }

  return request.json();
}

export async function createPost(post: PostInput) {
  const response = await fetch(`${API_URL}/blog`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  return response.json();
}

export async function updatePost(id: string, post: PostInput) {
  const response = await fetch(`${API_URL}/blog/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  return response.json();
}
