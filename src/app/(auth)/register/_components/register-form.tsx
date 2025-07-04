'use client';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { registerUser } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    name: { firstname: '', lastname: '' },
    phone: '123-456-7890',
    address: {
      city: 'Jakarta',
      street: 'Jl. Mawar',
      number: 1,
      zipcode: '12345',
      geolocation: { lat: '0', long: '0' },
    },
  });
  const [message, setMessage] = useState<string>('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id === 'firstname' || id === 'lastname') {
      setForm({ ...form, name: { ...form.name, [id]: value } });
    } else {
      setForm({ ...form, [id]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await registerUser(form as any);

    if (result) {
      setMessage('Registrasi berhasil!');
      router.push('/login');
    } else {
      setMessage('Registrasi gagal.');
    }
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Registration</CardTitle>
          <CardDescription>
            Enter your data below to register for an account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {message && <p className="text-sm text-center mt-2">{message}</p>}
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={form.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="firstname">First Name</Label>
                <Input
                  id="firstname"
                  value={form.name.firstname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastname">Last Name</Label>
                <Input
                  id="lastname"
                  value={form.name.lastname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Register
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{' '}
              <Link href={`/login`} className="underline underline-offset-4">
                Login
              </Link>
            </div>
            <div className="mt-4 text-center text-sm">
              <Link href={`/`} className="hover:underline underline-offset-4">
                Back to Home
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
