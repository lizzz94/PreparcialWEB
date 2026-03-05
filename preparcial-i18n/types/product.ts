export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  createdAt?: string;
  updatedAt?: string;
}

export type NewProduct = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateProduct = Partial<NewProduct>;

