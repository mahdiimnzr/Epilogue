import type { CSSProperties, MouseEvent, ReactNode } from 'react';

export type ButtonState = 'default' | 'disabled';

export type ButtonSize = 'sm' | 'md' | 'lg';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'link' | 'danger'| 'tertiary';

export interface ButtonProps {
  state?: ButtonState;
  size?: ButtonSize;
  variant?: ButtonVariant;
  isIconRight?: boolean;
  icon?: React.ReactNode;
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  id?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseEnter?: (event: MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (event: MouseEvent<HTMLButtonElement>) => void;
}
