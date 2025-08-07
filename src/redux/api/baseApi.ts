import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "@/helpers/axios/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL }),
  endpoints: () => ({}),
  tagTypes: ["User", "Auth", "Doctor"],
});