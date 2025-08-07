import { BaseQueryFn } from "@reduxjs/toolkit/query";
import axiosInstance from "@/helpers/axios/axiosInstance";

export const axiosBaseQuery = (): BaseQueryFn<{
  url: string;
  method?: string;
  data?: any;
  params?: any;
}> => async ({ url, method = "GET", data, params }) => {
  try {
    const result = await axiosInstance({
      url,
      method,
      data,
      params,
    });

    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as any;
    return {
      error: {
        status: err.statusCode || 500,
        data: {
          message: err.message || "Something went wrong",
        },
      },
    };
  }
};
