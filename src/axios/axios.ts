/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse } from 'axios';

// API Response Interface
export interface ResponseOptions<T> {
    status: number;
    message: string;
    success: boolean;
    data?: T;
}

// Error Response Interface
export interface ErrorResponse {
    success: boolean;
    statusCode: number;
    message: string;
    stack?: string;
}

// Create Axios Instance
const axiosInstance: AxiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse): AxiosResponse<ResponseOptions<any>> => {
        console.log("original response", response);

        // Transform response to match ResponseOptions interface
        const transformedResponse: ResponseOptions<any> = {
            status: response.status,
            message: response.data?.message || 'Success',
            success: true,
            data: response.data?.data,
        };

        return {
            ...response,
            data: transformedResponse,
        };
    },
    (error) => {
        console.log("axios", error);

        const errorResponse: ErrorResponse = {
            success: false,
            statusCode: error.response?.status || 500,
            message: error.response?.data?.message || error.message || 'An unexpected error occurred',
            stack: error.stack,
        };
        return Promise.reject(errorResponse);
    }
);

export default axiosInstance;
