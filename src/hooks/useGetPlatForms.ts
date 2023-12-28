import useGetData from "./useGetData";
export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const useGetPlatForms = () => useGetData<Platform>("/platforms/lists/parents");


export default useGetPlatForms;
