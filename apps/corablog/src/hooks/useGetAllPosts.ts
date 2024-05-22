import useSWR from 'swr';
import { Post } from '@prisma/client';
import { API_URL, fetcher } from '../app/constants';

export function useGetAllPosts(
  page: number,
  limit = 2
): { data: Post[]; error: string; isLoading: boolean } {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/blog?skip=${Number(page - 1) * Number(limit)}&take=${Number(
      limit
    )}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
