/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useTransition } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import UseInput from "@/components/customForm/UseInput";
import { UseForm } from "@/components/customForm/UseForm";
import Link from "next/link";
import { registerAction } from "@/actions/register.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import RegisterWithGoogle from "@/components/auth/googleAuth/RegisterWithGoogle";
import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import RoleSelector, {
  RoleSelectorProps,
  UserRole,
} from "@/components/auth/RoleSelector";

// Zod Schema for Validation
const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, { message: "First name must be at least 2 characters" }),

    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        {
          message:
            "Password must include uppercase, lowercase, number, and special character",
        }
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

const RegisterForm = () => {
  const [loading, setIsLoading] = useState(false);
  const [selectedRole, onRoleSelect] = useState<UserRole>("");
  const router = useRouter();
  const handleSubmit = async (data: z.infer<typeof registerSchema>) => {
    try {
      setIsLoading(true);
      const validation = registerSchema.safeParse(data);
      if (!validation.success) toast.error("properly submit the input value");

      const { confirmPassword, ...remainingData } = data;
      const res = await axiosInstance.post("/user/create-user", {
        ...remainingData,
        role: selectedRole,
      });
      const result = res.data as ResponseOptions<any>;
      if (result.success) {
        router.push("/otp-varyfication");
      }
    } catch (error) {
      const err = error as ErrorResponse;
      toast.error(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Create Your Account
      </h2>
      <RoleSelector selectedRole={selectedRole} onRoleSelect={onRoleSelect} />
      <UseForm
        onSubmit={handleSubmit}
        schema={registerSchema}
        defaultValues={{
          name: "Fahim",
          email: "afba009@gmail.com",
          password: "Pass12345!",
          confirmPassword: "Pass12345!",
        }}
      >
        <UseInput name="name" label="First Name" placeholder="John" />
        <UseInput
          name="email"
          label="Email Address"
          placeholder="john.doe@example.com"
        />
        <UseInput name="password" label="Password" placeholder="********" />
        <UseInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="********"
        />
        <Button
          type="submit"
          className="w-full"
          disabled={!selectedRole || loading}
        >
          Register
        </Button>
      </UseForm>
      <div className="flex justify-center pt-2">
        <RegisterWithGoogle selectedRole={selectedRole} />
      </div>
      <div className="text-center mt-4">
        <p className="text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
