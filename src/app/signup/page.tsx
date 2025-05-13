import SignupForm from '@/components/SignupForm';
import Link from 'next/link';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500">
      <div className="bg-white/10 backdrop-blur-md p-10 rounded-3xl shadow-xl w-full max-w-md border border-white/30">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Create Account 🎉</h2>
        <SignupForm />
        <p className="mt-6 text-sm text-white text-center">
          Already have an account?{' '}
          <Link href="/login" className="underline hover:text-gray-200">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
