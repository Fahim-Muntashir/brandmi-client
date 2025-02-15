import { z } from "zod";

export const registerSchema = z
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
    })