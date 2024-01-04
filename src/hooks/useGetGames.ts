import { useQuery } from "@tanstack/react-query";
import { gameQuery } from "../App";
import apiClient, { dataFetching } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGetGames = (gameQuery: gameQuery) =>
  useQuery<dataFetching<game>, Error>({
    queryKey: gameQuery ? ["games", gameQuery] : ["games"],
    queryFn: () =>
      apiClient
        .get<dataFetching<game>>("games", {
          params: {
            genres: gameQuery?.genre?.id,
            platforms: gameQuery?.platform?.id,
            ordering: gameQuery.sortOrder?.value,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
  });

export default useGetGames;
