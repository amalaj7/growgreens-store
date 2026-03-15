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
  phone: string | null;
  message: string;
  type: string;
}

export const insertProductSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.string(),
  image: z.string(),
  category: z.string(),
});

export const insertContactRequestSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  message: z.string(),
  type: z.string(),
});

export type InsertProduct = z.infer<typeof insertProductSchema>;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
