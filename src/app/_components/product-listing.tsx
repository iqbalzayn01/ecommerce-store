import { getAllProducts } from '@/lib/api';
import React from 'react';

export default async function ProductListing() {
  const products = await getAllProducts();

  return (
    <section className="">
      <h2 className="text-2xl font-semibold mb-6">Explore Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
          >
            {/* <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-3"
              /> */}
            <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
            <p className="text-gray-600 mb-2">{product.description}</p>
            <p className="text-xl font-bold mb-2">${product.price}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
              Add to Cart
            </button>
            <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded ml-2 hover:bg-gray-300 transition">
              View Details
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
