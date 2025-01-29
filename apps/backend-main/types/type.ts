import { z } from "zod";

export const signupSchema = z.object({
  name: z.string().trim(),
  email: z.string().trim().email(),
  password: z.string().min(8, "password must contain at least 8 characters"),
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "password must contain at least 8 characters"),
});
