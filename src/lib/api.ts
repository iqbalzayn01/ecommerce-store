import { Product } from '@/types';

export const API_URL = 'https://fakestoreapi.com';

export async function getAllProducts(): Promise<Product[]> {
  try {
    const res = await fetch(`${API_URL}/products`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!res.ok) {
      throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

// export asyns function getProductById(id: number): Promise<Product | null> {
//     try {
//         const res = await fetch(`${API_URL}/products/${id}`, {

//         })
//     } catch (error) {

//     }
// }

export async function addToCart(
  userId: number,
  items: { productId: number; quantity: number }[]
) {
  try {
    const res = await fetch(`${API_URL}/carts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId,
        date: new Date().toISOString().split('T')[0],
        products: items,
      }),
    });

    if (!res.ok) throw new Error('Failed to add to cart');
    return await res.json();
  } catch (error) {
    console.error('Add to cart error:', error);
    return null;
  }
}

export async function getCartByUser(userId: number) {
  try {
    const res = await fetch(`${API_URL}/carts/user/${userId}`);
    if (!res.ok) throw new Error('Failed to get user cart');
    return await res.json();
  } catch (error) {
    console.error('Fetch cart error:', error);
    return [];
  }
}

export async function deleteCart(cartId: number) {
  try {
    const res = await fetch(`${API_URL}/carts/${cartId}`, {
      method: 'DELETE',
    });

    if (!res.ok) throw new Error('Failed to delete cart');
    return await res.json();
  } catch (error) {
    console.error('Delete cart error:', error);
    return null;
  }
}
