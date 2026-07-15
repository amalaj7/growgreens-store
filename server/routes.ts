import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.products.list.path, async (req, res) => {
    const products = await storage.getProducts();
    res.json(products);
  });

  app.get(api.products.get.path, async (req, res) => {
    const product = await storage.getProduct(Number(req.params.id));
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  });

  app.post(api.contact.submit.path, async (req, res) => {
    try {
      const input = api.contact.submit.input.parse(req.body);
      const request = await storage.createContactRequest(input);

      // Submit to Google Forms in the background
      const GOOGLE_FORM_URL = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdL4_vySt9irPcW0gNrJJX2-Wfq0X-UykXGirYQ4IC_LX-X-g/formResponse";
      
      const formData = new URLSearchParams();
      formData.append("entry.25911088", input.name);
      formData.append("entry.1052839930", input.email);
      formData.append("entry.242468177", input.phone || "");
      
      const typeMap: Record<string, string> = {
        "subscription": "Subscription",
        "training": "Training",
        "products": "Products",
        "general": "General Inquiry"
      };
      formData.append("entry.1135467792", typeMap[input.type] || "General Inquiry");
      formData.append("entry.1898327496", input.country);
      formData.append("entry.315415258", input.state || "N/A");
      formData.append("entry.1018339571", input.message);

      fetch(GOOGLE_FORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
        },
        body: formData.toString()
      }).then(async (response) => {
        if (!response.ok) {
          const bodyText = await response.text();
          console.error(`Google Form submission failed with status: ${response.status}`);
          console.error(`Google Form response body snippet: ${bodyText.substring(0, 1000)}`);
        } else {
          console.log(`Google Form submission successful for: ${input.email}`);
        }
      }).catch((err) => {
        console.error("Error submitting lead to Google Forms:", err);
      });

      res.status(201).json(request);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      throw err;
    }
  });

  return httpServer;
}
