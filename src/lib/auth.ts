import { API_URL } from './api';
import { User } from '@/types';

export async function loginUser(
  username: string,
  password: string
): Promise<string | null> {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (!res.ok) {
      throw new Error('Login failed');
    }
    const data = await res.json();
    return data.token;
  } catch (error) {
    console.error('Login failed:', error);
    return null;
  }
}

export async function registerUser(payload: User): Promise<User | null> {
  try {
    const res = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error('Register failed');

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Register error:', error);
    return null;
  }
}

export async function getUserById(userId: number): Promise<User | null> {
  try {
    const res = await fetch(`${API_URL}/users/${userId}`);
    if (!res.ok) throw new Error('Failed to get user');

    const data: User = await res.json();
    return data;
  } catch (error) {
    console.error('Get user failed:', error);
    return null;
  }
}
