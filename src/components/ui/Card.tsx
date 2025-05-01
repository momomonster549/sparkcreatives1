import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'outline' | 'glass' | 'gradient';
  hoverEffect?: boolean;
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({
  className,
  variant = 'default',
  hoverEffect = false,
  children,
  ...props
}, ref) => {
  const baseStyles = "rounded-xl overflow-hidden";
  
  const variants = {
    default: "bg-white shadow",
    elevated: "bg-white shadow-md",
    outline: "bg-white border border-gray-200",
    glass: "bg-white/80 backdrop-blur-sm",
    gradient: "bg-gradient-to-br from-gray-50 to-gray-100"
  };
  
  const hoverStyles = hoverEffect 
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg" 
    : "";
  
  return (
    <div
      className={cn(
        baseStyles,
        variants[variant as keyof typeof variants],
        hoverStyles,
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = 'Card';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn("p-6", className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));

CardHeader.displayName = 'CardHeader';

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(({
  className,
  children,
  ...props
}, ref) => (
  <h3
    className={cn("text-xl font-semibold", className)}
    ref={ref}
    {...props}
  >
    {children}
  </h3>
));

CardTitle.displayName = 'CardTitle';

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode;
}

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({
  className,
  children,
  ...props
}, ref) => (
  <p
    className={cn("text-gray-600 mt-2", className)}
    ref={ref}
    {...props}
  >
    {children}
  </p>
));

CardDescription.displayName = 'CardDescription';

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn("p-6 pt-0", className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));

CardContent.displayName = 'CardContent';

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({
  className,
  children,
  ...props
}, ref) => (
  <div
    className={cn("p-6 pt-0", className)}
    ref={ref}
    {...props}
  >
    {children}
  </div>
));

CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export default Card;
