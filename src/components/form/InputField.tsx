'use client';

import { forwardRef, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: { message?: string };
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, type, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = type === 'password';

    const togglePassword = () => setShowPassword((prev) => !prev);

    return (
      <div>
        <label className="block text-sm font-medium text-white mb-1">{label}</label>
        <div className="relative">
          <input
            type={isPassword && showPassword ? 'text' : type}
            ref={ref}
            {...props}
            className="w-full px-4 py-2 rounded-lg bg-white/80 text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          {isPassword && (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>
        {error && <p className="mt-1 text-sm text-red-200">{error.message}</p>}
      </div>
    );
  }
);

InputField.displayName = 'InputField';

export default InputField;
