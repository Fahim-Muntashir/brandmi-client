import axios, { AxiosInstance, AxiosResponse } from "axios";

export interface ResponseOptions<T> {
  status: number;
  message: string;
  success: boolean;
  data?: T;
}

export interface ErrorResponse {
  success: boolean;
  statusCode: number;
  message: string;
  stack?: string;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<ResponseOptions<any>> => {
    const transformedResponse: ResponseOptions<any> = {
      status: response.status,
      message: response.data?.message || "Success",
      success: true,
      data: response.data?.data,
    };

    return {
      ...response,
      data: transformedResponse,
    };
  },
  (error: unknown) => {
    let message = "An unexpected error occurred";
    let statusCode = 500;

    if (typeof error === "object" && error !== null && "response" in error) {
      const err = error as any;
      message = err.response?.data?.message || err.message || message;
      statusCode = err.response?.status || statusCode;
    }

    const errorResponse: ErrorResponse = {
      success: false,
      statusCode,
      message,
      stack: (error as any)?.stack,
    };
    return Promise.reject(errorResponse);
  }
);

export default axiosInstance;
