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
import Image from "next/image";

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
    <main className="flex flex-1 justify-center items-center h-screen bg-">
      <div className="flex gap-10 border ">
        <div className="w-2/4 hidden md:block">
          <Image src="https://images.pexels.com/photos/29557509/pexels-photo-29557509/free-photo-of-person-using-pay-station-in-urban-area.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width={500} height={100} />
        </div>
        <div className="w-full max-w-md  p-6 bg-white rounded-lg  ">
          <h2 className="text-2xl mt-10 font-bold mb-10 text-center">
            Welcome Back ! Login
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

            <Button type="submit" className="w-full ">
              Login
            </Button><div className="flex justify-between items-center">
              <div className="border-t w-2/5">
              </div>
              <p>or</p>
              <div className="border-t w-2/5">
              </div>
            </div>
          </UseForm>
          <div className="text-center mt-4">
            <LoginWithGoogle />


            <p className="text-sm mt-4 text-gray-600">
              Don&apos;t have an account ?
              <Link href="/register" className="text-blue-500 hover:underline">  Register
              </Link>
            </p>
          </div>
        </div>
      </div>

    </main>
  );
};

export default LoginForm;
