import axios from 'axios';
import useSWR, { SWRConfiguration } from 'swr';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_ENDPOINT
});

const fetcher = (url: string) => {
  return api.get(url).then((res) => res.data);
}


export const useHttp = () => {
  return {
    api,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get: <Data = any, Error = any>(
      url: string | null,
      config?: SWRConfiguration
    ) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      return useSWR<Data, Error>(url, fetcher, config);
    },
  }
}