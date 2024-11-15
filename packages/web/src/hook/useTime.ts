import { useHttp } from "./useHttp";

export const useTime = () => {
  const { get } = useHttp();
  const getTime = get<{message: string}>('/time', {
    refreshInterval: 3000,
  });

  return {
    data: getTime.data?.message,
    isError: getTime.error,
    isLoading: getTime.isValidating,
  };
};