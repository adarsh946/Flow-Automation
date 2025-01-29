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

export const zapCreateSchema = z.object({
  trigger: z.string(),
  triggerMetadata: z.any().optional(),
  action: z.array(
    z.object({
      availableActionId: z.string(),
      actionMetadata: z.any().optional(),
    })
  ),
});
