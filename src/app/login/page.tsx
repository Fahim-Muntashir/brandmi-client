/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import UseInput from "@/components/customForm/UseInput";
import { UseForm } from "@/components/customForm/UseForm";
import Link from "next/link";
import { toast } from "sonner";
import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import { useRouter } from "next/navigation";
import { loginSchema } from "@/schemas/login.schema";
import LoginWithGoogle from "@/components/auth/googleAuth/LoginWithGoogle";
import { loginDefaultValues } from "@/defaultValues/loginDefaultValues";

const LoginForm: React.FC = () => {
  const router = useRouter();
  const handleSubmit = async (data: z.infer<typeof loginSchema>) => {
    try {
      const validation = loginSchema.safeParse(data);
      if (!validation.success) toast.error("properly submit the input value");
      const res = await axiosInstance.post("/auth/login", data);
      const result = res.data as ResponseOptions<any>;
      toast.success(result.message);
      router.push("/");
      router.refresh();
    } catch (error) {
      const err = error as ErrorResponse;
      toast.error(err.message);
    }
  };

  return (
    <main className="flex flex-1 justify-center items-center  h-screen">
      <div className="w-full max-w-md  p-6 bg-white rounded-lg shadow-md ">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Account
        </h2>
        <UseForm
          onSubmit={handleSubmit}
          schema={loginSchema}
          defaultValues={loginDefaultValues}
        >
          <UseInput
            name="email"
            label="Email Address"
            placeholder="john.doe@example.com"
          />
          <UseInput name="password" label="Password" placeholder="********" />

          <Button type="submit" className="w-full">
            Login
          </Button>
        </UseForm>
        <div className="text-center mt-4">
          <LoginWithGoogle />
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?
            <Link href="/register" className="text-blue-500 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default LoginForm;
