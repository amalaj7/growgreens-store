import { z } from "zod";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface ContactRequest {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
  type: string;
  state?: string;
}

export const insertProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  image: z.string(),
  category: z.string(),
});

export const insertContactRequestSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
  type: z.string(),
  state: z.string().optional(),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
