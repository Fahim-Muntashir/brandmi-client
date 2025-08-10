import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const sellerProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSellerProfile: build.query({
      query: (params) => ({
        url: "/sellerProfile",
        method: "GET",
        params, // Use params for GET query parameters
      }),
      providesTags: [tagTypes.sellerProfile],
    }),
  }),
});

export const { useGetSellerProfileQuery } = sellerProfileApi;
