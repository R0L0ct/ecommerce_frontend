import { z } from "zod";

export const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(50, { message: "Username must be less than 50 characters long" }),
  password: z.string().min(3),
});

export const registerSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(50, { message: "Username must be less than 50 characters long" }),
  password: z.string().min(1),
  email: z.string().email().min(1),
});

export const orderSchema = z.object({
  name: z.string().min(1),
  state_province: z.string().min(1),
  city: z.string().min(1),
  lastname: z.string().min(1),
  country: z.string().min(1),
  email: z.string().email().min(1),
  address: z.string().min(1),
  phone: z.string().min(1),
});

export const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{4}-?\d{4}-?\d{4}-?\d{4}$/),
  pin: z.string().min(1),
  expirationDate: z.string().refine((date) => /^\d{2}\/\d{4}$/.test(date), {
    message: "Date must have MM/YYYY format",
  }),
});
