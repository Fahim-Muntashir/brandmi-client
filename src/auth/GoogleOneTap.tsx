/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import { useAuth } from "@/providers/AuthProvider";
import oneTap from "google-one-tap";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const GoogleOneTapLogin = () => {
  const router = useRouter();

  const user = useAuth();
  console.log(user.isAuth);

  if (user.isAuth) return;
  const options = {
    client_id:
      "492292213341-5q9df94gqjorrbeo8dhf8rbmql0la9u2.apps.googleusercontent.com",
    auto_select: false,

    callback: async (response: { credential: string }) => {
      console.log("response", response);

      try {
        // Send the token to the backend
        const res = await axiosInstance.post("/auth/google/googleOneTap", {
          idToken: response.credential,
        });

        const result = res.data as ResponseOptions<any>;

        if (result.success) {
          toast.success(result.message);
          router.refresh();
          // Optionally store user details or tokens in your state management
        }
      } catch (error) {
        const errRes = error as ErrorResponse;
        if (errRes.message === "USER_NOT_FOUND") {
          router.push("/register");
        } else {
          toast.error(errRes.message);
        }
      }
    },
  };

  // Initialize Google One Tap

  (oneTap as any)(options);
  return null; // No UI component is needed for One Tap
};

export default GoogleOneTapLogin;
