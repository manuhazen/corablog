export const API_URL = 'http://localhost:3000/api';

export async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Failed to load');
  }
  return res.json();
}
