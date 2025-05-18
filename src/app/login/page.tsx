import LoginForm from '@/components/LoginForm';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white/10 backdrop-blur-md p-6 sm:p-10 rounded-3xl shadow-xl w-full max-w-md border border-white/30 mx-4">
        <h2 className="text-white text-3xl font-bold text-center mb-6">Welcome Back 👋</h2>
        <LoginForm />
        <p className="mt-6 text-sm text-white text-center">
          Don't have an account? {' '}
          <Link href="/signup" className="underline hover:text-gray-200">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
