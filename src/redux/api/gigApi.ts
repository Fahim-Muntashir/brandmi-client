import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { AxiosHeaders } from "axios";

// Define the Gig API endpoints
export const gigApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // GET a single gig by ID
    getGig: build.query({
      query: (gigId: string) => ({
        url: `/gigs/${gigId}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data?.gig || null,
      providesTags: [tagTypes.gigs],
    }),

    // GET all gigs for a seller
    getSellerGigs: build.query({
      query: (sellerId: string) => ({
        url: `/gigs?sellerId=${sellerId}`,
        method: "GET",
      }),
      transformResponse: (response: any) => response.data?.gigs || [],
      providesTags: [tagTypes.gigs],
    }),

    // CREATE a new gig
    createGig: build.mutation({
      query: ({ gigData }: { gigData: any }) => ({
        url: "/gigs",
        method: "POST",
        body: gigData,
      }),
      invalidatesTags: [tagTypes.gigs],
    }),

    // UPDATE a gig
    updateGig: build.mutation({
      query: ({ gigId, updateData }: { gigId: string; updateData: any }) => ({
        url: `/gigs/${gigId}`,
        method: "PATCH",
        data: updateData,
        headers: new AxiosHeaders({
          "Content-Type": "multipart/form-data", // if updating images
        }),
      }),
      invalidatesTags: [tagTypes.gigs],
    }),

    // DELETE a gig
    deleteGig: build.mutation({
      query: (gigId: string) => ({
        url: `/gigs/${gigId}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.gigs],
    }),
  }),
});

// Export hooks
export const {
  useGetGigQuery,
  useGetSellerGigsQuery,
  useCreateGigMutation,
  useUpdateGigMutation,
  useDeleteGigMutation,
} = gigApi;
