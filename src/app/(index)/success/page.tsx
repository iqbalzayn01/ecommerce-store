'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ThankYouPage() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">
        🎉 Thank You for Your Purchase!
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Your order has been successfully placed. You will receive a confirmation
        email shortly.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/cart">View Cart</Link>
        </Button>
      </div>
    </section>
  );
}
