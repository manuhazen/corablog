import useSWR from 'swr';
import { API_URL, fetcher } from '../app/constants';
import { Post } from '@prisma/client';

export function useGetPost(postId: string): {
  data: Post;
  error: string;
  isLoading: boolean;
} {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/blog/${postId}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
