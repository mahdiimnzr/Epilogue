'use client';

import { HugeiconsIcon } from '@hugeicons/react';
import {
  ArrowLeft01Icon,
  ArrowRight01Icon,
} from '@hugeicons/core-free-icons';

import type { ButtonProps } from './button.type';
import {
  buttonSizeVariants,
  buttonVariants,
  buttonWidthVariants,
} from './button.style';
import { cn } from '@/lib/utils';

const Button = ({
  children,
  state = 'default',
  size = 'md',
  variant = 'primary',
  isIconRight = false,
  hasIcon = true,
  className = '',
  disabled = false,
  type = 'button',
  ...props
}: ButtonProps & { hasIcon?: boolean }) => {
  const isButtonDisabled = disabled || state === 'disabled';
  const currentState = isButtonDisabled ? 'disabled' : 'default';

  const dynamicPadding = !hasIcon
    ? 'px-6'
    : isIconRight
      ? 'pl-7 pr-4'
      : 'pl-4 pr-6';

  return (
    <button
      type={type}
      disabled={isButtonDisabled}
      className={cn(
        'inline-flex items-center justify-center content-center',
        'rounded-full transition-all duration-300',
        'shrink-0 font-medium whitespace-nowrap',
        dynamicPadding,
        buttonSizeVariants[size],
        buttonWidthVariants[currentState],
        buttonVariants[variant][currentState],
        className,
      )}
      {...props}
    >
      {hasIcon && isIconRight && (<HugeiconsIcon
        icon={ArrowRight01Icon}
        size={24}
        color="currentColor"
        strokeWidth={1.5}
        className="shrink-0"
      />
      )}

      <span className="inline-flex items-center justify-center leading-none">
        {children}
      </span>

      {hasIcon && !isIconRight && (
        <HugeiconsIcon
          icon={ArrowLeft01Icon}
          size={24}
          color="currentColor"
          strokeWidth={1.5}
          className="shrink-0"
        />
      )}
    </button>

  );
};

export default Button;
