import useSWR from 'swr';
import axios from '../services/api';

interface FetchDataResponse<T> {
  data: T | undefined;
  isLoading: boolean;
  error: unknown;
  mutate: () => void;
}

const fetchData = async (url: string) => (await axios.get(url)).data;

export default function useFetch<T>(
  endpoint: string,
  parameters: unknown | null = null,
): FetchDataResponse<T> {
  const {data, isLoading, error, mutate} = useSWR<T>(
    endpoint,
    parameters || parameters === null ? fetchData : null,
  );
  return {data, isLoading, error, mutate};
}
