'use client';
import { InputHTMLAttributes, forwardRef } from 'react';
import { FieldError } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}

const InputField = forwardRef<HTMLInputElement, InputProps>(({ label, error, ...props }, ref) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-white mb-1">{label}</label>
      <input
        ref={ref}
        {...props}
        className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
      />
      {error && <p className="text-red-300 text-sm mt-1">{error.message}</p>}
    </div>
  );
});
InputField.displayName = 'InputField';

export default InputField;
