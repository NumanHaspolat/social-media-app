import * as z from "zod";

export const RegisterSchema = z.object({
  name: z.string().min(2, { message: "Too short for a name" }),
  username: z.string().min(2, { message: "Too short for username" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 chars." }),
});
