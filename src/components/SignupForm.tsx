'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signupSchema, SignupSchemaType } from '@/lib/validations/signupSchema';
import InputField from './form/InputField';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios'; 

export default function SignupForm() {
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupSchemaType>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupSchemaType) => {
    setLoading(true);
    setErrorMsg('');
    try {
        const response = await api.post('/api/auth/signup', {
            name: data.name,
            email: data.email,
            password: data.password,
          });

          if (response.status === 201) {
            // User created, redirect to OTP verification page
            console.log("response received")
            router.push(`/verify-otp?email=${data.email}`);
          }
    } catch (err : any) {
        if (err.response?.status === 409) {
            setErrorMsg('User already exists. Please log in.');
          } else {
            setErrorMsg('Something went wrong. Please try again.');
          }
    } finally {
        // router.push(`/verify-otp?email=${data.email}`); // for testing purpose only
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <InputField
        label="Name"
        type="text"
        {...register('name')}
        error={errors.name}
      />
      <InputField
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email}
      />
      <InputField
        label="Password"
        type="password"
        {...register('password')}
        error={errors.password}
      />
      <InputField
        label="Confirm Password"
        type="password"
        {...register('confirmPassword')}
        error={errors.confirmPassword}
      />
      <button
        type="submit"
        className="w-full bg-white text-indigo-600 font-bold py-2 rounded-lg transition hover:bg-gray-100 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? 'Creating Account...' : 'Sign Up'}
      </button>
    </form>
  );
}
