import { getAllProducts } from '@/lib/api';
import ProductListing from './_components/product-listing';
import React from 'react';

export default async function Home() {
  const products = await getAllProducts();

  return (
    <main className="min-h-screen bg-white text-gray-800 p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Welcome to Ecommerce Store</h1>
        <p className="text-lg text-gray-600">
          Discover curated minimal fashion & lifestyle picks
        </p>
      </section>

      <ProductListing products={products} />
    </main>
  );
}
