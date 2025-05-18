'use client';

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import api from '@/lib/axios';

export default function OtpVerificationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const email = searchParams.get('email');
  const [otp, setOtp] = useState(Array(6).fill(''));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const inputRefs = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (email) {
      sendOtpRequest(email);
    }
  }, [email]);

  const sendOtpRequest = async (email: string) => {
    try {
      setLoading(true);
      await api.post('/api/auth/send-otp', { email });
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (index: number, value: string) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const finalOtp = otp.join('');
    if (finalOtp.length < 6) {
      setError('Please enter a 6-digit OTP');
      return;
    }
    try {
      setLoading(true);
      const res = await api.post('/api/auth/verify-otp', { email, otp: finalOtp });
      if (res.status === 200) {
        console.log('OTP verified');
        router.push('/home');
      }
    } catch (err) {
      setError('Invalid OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center px-4">
    <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl w-full max-w-md border border-white/30 mx-4">
        <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-2 sm:mb-4">OTP Verification</h2>
        <p className="text-white text-center text-sm sm:text-base mb-4 sm:mb-6">
          Enter the 6-digit code sent to <strong>{email}</strong>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
  <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
    {otp.map((digit, index) => (
      <input
        key={index}
        type="text"
        inputMode="numeric"
        maxLength={1}
        value={digit}
        onChange={(e) => handleChange(index, e.target.value)}
        onKeyDown={(e) => handleKeyDown(index, e)}
        ref={(el) => {
          inputRefs.current[index] = el!;
        }}
        className="w-10 h-10 sm:w-12 sm:h-12 text-center text-lg font-bold text-indigo-700 bg-white rounded-md shadow focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
    ))}
  </div>

  {error && <p className="text-red-700 text-sm text-center">{error}</p>}

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-white text-indigo-600 font-bold py-2 rounded-lg transition hover:bg-gray-100 disabled:opacity-50"
  >
    {loading ? 'Verifying OTP...' : 'Verify OTP'}
  </button>
</form>

      </div>
    </div>
  );
}
