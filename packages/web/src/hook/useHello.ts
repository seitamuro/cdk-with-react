import { useHttp } from "./useHttp";

export const useHello = () => {
  const { get } = useHttp();
  const getHello = get<{message: string}>('/hello', {
    revalidateOnFocus: true,
  });

  return {
    data: getHello.data?.message,
    isError: getHello.error,
    isLoading: getHello.isValidating,
  };
};