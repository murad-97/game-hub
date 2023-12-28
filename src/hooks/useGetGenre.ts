import useGetData from "./useGetData";
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGetGenre = () => useGetData<Genre>("/genres");
export default useGetGenre;
