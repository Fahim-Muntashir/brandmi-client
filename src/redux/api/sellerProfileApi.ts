import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";

export const sellerProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getSellerProfile: build.query({
      query: (sellerId) => {
        console.log("Fetching seller profile for ID:", sellerId);
        return {
          url: `/sellerprofile/${sellerId}`,
          method: "GET",
        };
      },
      transformResponse: (response: any) => {
        console.log("Response from getSellerProfile:", response);
        return response.data?.sellerProfile || null;
      },
      providesTags: [tagTypes.sellerProfile],
    }),
  }),
});

export const { useGetSellerProfileQuery } = sellerProfileApi;
