import {
  type InsertProduct,
  type Product,
  type InsertContactRequest,
  type ContactRequest
} from "@shared/schema";

export interface IStorage {
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product> = new Map();
  private contactRequests: Map<number, ContactRequest> = new Map();
  private productIdCounter = 1;
  private contactIdCounter = 1;

  constructor() {
    // Seed initial products
    this.seedProducts();
  }

  private seedProducts() {
    const initialProducts: InsertProduct[] = [
      {
        name: "Radish Microgreens",
        description: "Crispy and spicy, perfect for salads and sandwiches. Rich in Vitamin E.",
        price: "₹150 / 80g",
        image: "/images/radish_microgreens.jpg",
        category: "microgreen"
      },
      {
        name: "Sunflower Microgreens",
        description: "Nutty flavor and crunchy texture. Great source of protein and healthy fats.",
        price: "₹200 / 100g",
        image: "/images/sunflower_microgreens.jpg",
        category: "microgreen"
      },
      {
        name: "Monthly Subscription Box",
        description: "Get 4 boxes of assorted microgreens delivered weekly. Kerala Only.",
        price: "₹800 / month",
        image: "/images/subscription_box.jpg",
        category: "subscription"
      },
      {
        name: "Microgreen Training Workshop",
        description: "Learn to grow your own microgreens with Ajay Gopinath. Online/Offline sessions.",
        price: "₹500 / session",
        image: "/images/training_workshop.jpg",
        category: "training"
      }
    ];

    initialProducts.forEach(product => {
      const id = this.productIdCounter++;
      this.products.set(id, { ...product, id });
    });
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = this.productIdCounter++;
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async createContactRequest(insertRequest: InsertContactRequest): Promise<ContactRequest> {
    const id = this.contactIdCounter++;
    const request: ContactRequest = { ...insertRequest, id };
    this.contactRequests.set(id, request);
    return request;
  }
}

export const storage = new MemStorage();
