import { z } from "zod";

export const messageSchema = z.object({
    content: z
    .string()
    .min(10, {message: "Content must be at least 10 character long"})
    .max(300, {message: "Content must be no longer then 300 characters "}),
})