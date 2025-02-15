"use client";
import axiosInstance, { ErrorResponse, ResponseOptions } from "@/axios/axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const OptVerification = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  const handleChange = (index: number, value: string) => {
    // value should be in number;
    if (isNaN(Number(value))) return;
    //set value in otp array by using index;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    // move the focus to the next input field
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLElement>
  ) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");

    const newOtp = [...otp];
    pastedData.forEach((value, index) => {
      if (index < 6 && !isNaN(Number(value))) {
        newOtp[index] = value;
      }
    });
    setOtp(newOtp);
    inputRefs.current[Math.min(pastedData.length, 5)]?.focus();
  };

  const verifyOtp = async () => {
    const otpCode = otp.join("");
    const otpCodeNumber = Number(otpCode);
    try {
      const res = await axiosInstance.post("/auth/otp-verification", {
        otpCode: otpCodeNumber,
      });
      const result = res.data as ResponseOptions<null>;

      if (result.success) {
        toast.success(result.message);
        router.push("/login");
      }
    } catch (error) {
      const errRes = error as ErrorResponse;
      toast.error(errRes.message);
    }
  };

  return (
    <main className="flex items-center justify-center h-screen">
      <div className="max-w-md mx-auto  p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">
          Enter Verification Code
        </h2>
        <p className="text-center text-gray-600 ">
          We&apos;ve sent a 6-digit code to your email!
        </p>
        <div className="flex justify-between space-x-2">
          {otp.map((digit, index) => (
            <Input
              key={index}
              type="text"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              ref={(el) => {
                inputRefs.current[index] = el;
              }}
              className="w-12 h-12 text-center text-2xl"
              aria-label={`Digit ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <Button
            onClick={verifyOtp}
            disabled={otp.some((digit) => digit === "")}
          >
            Verify
          </Button>
          <Button variant="outline">Resend otp</Button>
        </div>
      </div>
    </main>
  );
};
export default OptVerification;
