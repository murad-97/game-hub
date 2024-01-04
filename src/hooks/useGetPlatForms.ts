import { useQuery } from "@tanstack/react-query";

import apiClient,{ dataFetching } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGetPlatForms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<dataFetching<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24hours
  });
export default useGetPlatForms;
