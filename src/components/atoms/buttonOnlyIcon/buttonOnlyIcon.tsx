'use client';
import {
  buttonOnlyIconBase,
  buttonOnlyIconSizeVariants,
  buttonOnlyIconVariants,
} from './buttonOnlyIcon.style';
import type {
  ButtonOnlyIconSize,
  ButtonOnlyIconVariant,
  ButtonOnlyIconState,
} from './buttonOnlyIcon.type';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowLeft01Icon } from '@hugeicons/core-free-icons';

type Props = {
  size?: ButtonOnlyIconSize;
  variant?: ButtonOnlyIconVariant;
  state?: ButtonOnlyIconState;
  onClick?: () => void;
  children?: React.ReactNode;
  hasIcon?: boolean;
  className?: string;
};

const ButtonOnlyIcon: React.FC<Props> = ({
  size = 'md',
  variant = 'primary',
  state = 'default',
  hasIcon = true,

  onClick,
  children,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={state === 'disabled'}
      className={`
        ${buttonOnlyIconBase}
        ${buttonOnlyIconSizeVariants[size]}
        ${buttonOnlyIconVariants[variant][state]}
      `}
    >
      {hasIcon && (
        <HugeiconsIcon icon={ArrowLeft01Icon} size={24} color="currentColor" strokeWidth={1.5} />
      )}{' '}
      {children}
    </button>
  );
};
export default ButtonOnlyIcon;
