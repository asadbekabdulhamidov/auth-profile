import type { ButtonProps } from '../types/Button.types';

function Button({
  children,
  variant,
  size,
  fullWidth,
  className,
  ...rest
}: ButtonProps) {
  // asosiy classlar
  const baseClasses =
    'inline-flex items-center justify-center rounded-[14px] font-medium transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer';
  // primaty yoki secondaryligiga qarab classlar
  let variantClasses = '';

  if (variant === 'primary') {
    variantClasses =
      'bg-gradient-to-b from-[#2B7FFF] to-[#4F39F6] text-white hover:bg-gradient-to-b from-[#4F39F6] to-[#2B7FFF]';
  } else if (variant === 'secondary') {
    variantClasses =
      'border border-blue-600 text-blue-600 hover:bg-blue-50 bg-white';
  } else if (variant === '') {
    variantClasses = '';
  }

  let sizeClasses = '';

  if (size === 'sm') {
    sizeClasses = 'px-3 py-1 text-sm';
  } else if (size === 'md') {
    sizeClasses = 'px-4 py-2 text-base';
  } else if (size === 'lg') {
    sizeClasses = 'px-[23px] py-3 text-lg';
  }

  const widthClass = fullWidth ? 'w-full' : '';

  const classes = `${baseClasses} ${variantClasses} ${sizeClasses} ${widthClass} ${className}`;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
