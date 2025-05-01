import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'outline' | 'filled' | 'underlined';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
  className,
  variant = 'default',
  fullWidth = false,
  leftIcon,
  rightIcon,
  error,
  disabled,
  ...props
}, ref) => {
  const baseStyles = "rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal";
  
  const variants = {
    default: "border border-gray-300 focus:border-brand-blue",
    outline: "border-2 border-gray-300 focus:border-brand-blue bg-transparent",
    filled: "bg-gray-100 border border-transparent focus:bg-white focus:border-brand-blue",
    underlined: "border-b-2 border-gray-300 focus:border-brand-blue rounded-none px-0"
  };
  
  const states = {
    normal: "",
    disabled: "opacity-50 cursor-not-allowed",
    error: "border-error focus:border-error focus:ring-error"
  };
  
  const widthClass = fullWidth ? "w-full" : "";
  const paddingWithIcon = leftIcon ? "pl-10" : (rightIcon ? "pr-10" : "");
  
  const state = disabled ? "disabled" : (error ? "error" : "normal");
  
  return (
    <div className={cn("relative", widthClass)}>
      {leftIcon && (
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {leftIcon}
        </div>
      )}
      
      <input
        className={cn(
          baseStyles,
          variants[variant as keyof typeof variants],
          states[state as keyof typeof states],
          paddingWithIcon,
          "h-10 px-4",
          widthClass,
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      />
      
      {rightIcon && (
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          {rightIcon}
        </div>
      )}
      
      {error && (
        <p className="mt-1 text-sm text-error">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export { Input };
export default Input;
