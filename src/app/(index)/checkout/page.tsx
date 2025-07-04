'use client';

import { useCartStore } from '../lib/cart-store';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { cart, clearCart } = useCartStore();
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  const handleCheckout = () => {
    setIsProcessing(true);

    setTimeout(() => {
      clearCart();
      router.push('/success');
    }, 1500);
  };

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={60}
                  height={60}
                  className="object-contain w-auto h-auto"
                  priority
                />
                <div>
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-gray-500 text-sm">${item.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-lg font-semibold flex justify-between">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <Button
            onClick={handleCheckout}
            disabled={isProcessing}
            className="w-full"
          >
            {isProcessing ? 'Processing...' : 'Confirm & Pay'}
          </Button>
        </div>
      )}
    </section>
  );
}
