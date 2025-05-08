'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, LoginSchemaType } from '@/lib/validations/loginSchema';
import InputField from './form/InputField';
import { useState } from 'react';

export default function LoginForm() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginSchemaType) => {
    setLoading(true);
    try {
      console.log('Submitted:', data);
      // perform login logic
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputField
        label="Email"
        type="email"
        placeholder="you@example.com"
        {...register('email')}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        placeholder="••••••••"
        {...register('password')}
        error={errors.password}
      />
      <button
        type="submit"
        className="w-full bg-white text-indigo-600 font-bold py-2 rounded-lg transition hover:bg-gray-100 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Signing In...' : 'Sign In'}
      </button>
    </form>
  );
}
