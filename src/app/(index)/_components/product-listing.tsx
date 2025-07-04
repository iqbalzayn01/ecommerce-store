'use client';

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCartStore } from '../lib/cart-store';
import { Product } from '@/types';
import { addToCart as addToCartAPI } from '@/lib/api';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function AddToCartButton({ product }: { product: Product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = async () => {
    addToCart(product);

    await addToCartAPI(1, [{ productId: product.id, quantity: 1 }]);
  };

  return <Button onClick={handleAdd}>Add to Cart</Button>;
}

export default function ProductListing({ products }: { products: Product[] }) {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <Image
                src={product.image}
                alt={product.title}
                width={300}
                height={300}
                className="w-full h-48 object-contain mb-3"
                priority
              />
              <CardTitle>{product.title}</CardTitle>
              <CardDescription
                className="overflow-hidden text-ellipsis"
                style={{
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  display: '-webkit-box',
                }}
              >
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xl font-bold mb-2">${product.price}</p>
            </CardContent>
            <CardFooter>
              <CardAction className="flex justify-between w-full">
                <AddToCartButton product={product} />
                <Button variant={'outline'} asChild>
                  <Link href={`#`}>View Details</Link>
                </Button>
              </CardAction>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
