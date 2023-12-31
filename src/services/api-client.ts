import axios from "axios";

export interface dataFetching<T> {
  count: number;
  results: T[];
}
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "974a249f77844a22a4f1e6ad77b2bdc7" },
});
