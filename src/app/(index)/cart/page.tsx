'use client';

import { useCartStore } from '../lib/cart-store';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCartStore();

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b pb-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain w-auto h-auto"
                priority
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500">${item.price}</p>
              </div>
              <Button variant="outline" onClick={() => removeFromCart(item.id)}>
                Remove
              </Button>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={clearCart}>
                Clear Cart
              </Button>
              <Button variant="default" asChild>
                <Link href="/checkout">Checkout</Link>
              </Button>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link href="/" className="underline text-sm">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}
