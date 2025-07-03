import { Product } from '@/types';

const API_URL = 'https://fakestoreapi.com';

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
