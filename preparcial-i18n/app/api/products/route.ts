import { NextResponse } from 'next/server';
import { getProducts, createProduct } from '@/lib/products';
import { NewProduct } from '@/types/product';

export async function GET() {
  const products = await getProducts();
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body: NewProduct = await request.json();
    
    if (!body.name || body.price === undefined || body.stock === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: name, price, stock' },
        { status: 400 }
      );
    }

    const newProduct = await createProduct(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}

