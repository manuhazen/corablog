import useSWR from 'swr';
import { API_URL, fetcher } from '../app/constants';

export function useGetPageCount(itemsPerPage: number): {
  data: number;
  error: string;
  isLoading: boolean;
} {
  const { data, error, isLoading } = useSWR(
    `${API_URL}/blog/pages?itemsPerPage=${itemsPerPage}`,
    fetcher
  );

  return {
    data,
    error,
    isLoading,
  };
}
