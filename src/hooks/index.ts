'use client';

import { useEffect, useState } from 'react';
import { getUserById } from '@/lib/auth';
import { User } from '@/types';

export function useCurrentUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if (token && userId) {
      getUserById(Number(userId)).then(setUser);
    }
  }, []);

  return user;
}

export function useIsAuthenticated() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  return isAuthenticated;
}
