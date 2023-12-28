import { gameQuery } from "../App";
import useGetData from "./useGetData";

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
  useGetData<game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        platforms: gameQuery?.platform?.id,
        ordering: gameQuery.sortOrder?.value,
        search: gameQuery.searchText,
      },
    },
    [gameQuery],
  );
export default useGetGames;
