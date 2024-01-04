import { useQuery } from "@tanstack/react-query";

import apiClient,{ dataFetching } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGetGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<dataFetching<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hours
  });
export default useGetGenre;
