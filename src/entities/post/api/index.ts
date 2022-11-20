import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { config } from "shared/config/config";

export const postsApi = createApi({
  reducerPath: "projects",
  baseQuery: fetchBaseQuery({ baseUrl: config.xSell.API_BASE_URL }),
  endpoints: () => ({}),
});
