import { Product, NewProduct, UpdateProduct } from '@/types/product';

// In-memory storage for demo purposes
const products: Product[] = [
  {
    id: '1',
    name: 'Laptop',
    price: 999.99,
    description: 'High-performance laptop',
    stock: 10,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Mouse',
    price: 29.99,
    description: 'Wireless mouse',
    stock: 50,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Keyboard',
    price: 79.99,
    description: 'Mechanical keyboard',
    stock: 25,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export async function getProducts(): Promise<Product[]> {
  return [...products];
}

export async function getProductById(id: string): Promise<Product | null> {
  return products.find((p) => p.id === id) || null;
}

export async function createProduct(data: NewProduct): Promise<Product> {
  const newProduct: Product = {
    id: Date.now().toString(),
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  products.push(newProduct);
  return newProduct;
}

export async function updateProduct(id: string, data: UpdateProduct): Promise<Product | null> {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return null;
  
  products[index] = {
    ...products[index],
    ...data,
    updatedAt: new Date().toISOString(),
  };
  return products[index];
}

export async function deleteProduct(id: string): Promise<boolean> {
  const index = products.findIndex((p) => p.id === id);
  if (index === -1) return false;
  
  products.splice(index, 1);
  return true;
}

