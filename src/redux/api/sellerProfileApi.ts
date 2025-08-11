import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import axios, { AxiosHeaders } from "axios";

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
    updateSellerProfile: build.mutation({
      query: ({ sellerId, updateData }) => {
        console.log("Updating seller profile for ID:", sellerId);
        console.log("Update data:", updateData);

        return {
          url: `/sellerprofile/${sellerId}`,
          method: "PATCH",
          data: updateData,
          headers: new AxiosHeaders({
            "Content-Type": "application/json",
          }),
        };
      },
      invalidatesTags: [tagTypes.sellerProfile],
    }),
  }),
});

export const { useGetSellerProfileQuery, useUpdateSellerProfileMutation } =
  sellerProfileApi;
