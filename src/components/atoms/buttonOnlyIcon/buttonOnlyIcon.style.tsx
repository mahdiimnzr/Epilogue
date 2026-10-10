'use client';
import type {
  ButtonOnlyIconSize,
  ButtonOnlyIconVariant,
  ButtonOnlyIconState,
} from './buttonOnlyIcon.type';

export const buttonOnlyIconSizeVariants: Record<ButtonOnlyIconSize, string> = {
  sm: `
    w-[40px]
    h-[40px]
  `,

  md: `
    w-[48px]
    h-[48px]
  `,

  lg: `
    w-[56px]
    h-[56px]
  `,
};

export const buttonOnlyIconBase = `
 inline-flex
  items-center
  justify-center
  rounded-full
  transition-all
  duration-200
  focus:outline-none
`;

/**
 * Variant + State styles
 */
export const buttonOnlyIconVariants: Record<
  ButtonOnlyIconVariant,
  Record<ButtonOnlyIconState, string>
> = {
  primary: {
    default: `
      bg-[var(--color-primary-500)] text-white
      hover:bg-[var(--color-primary-700)]
      active:bg-[var(--color-primary-400)]
    `,
    disabled: `
      bg-[var(--color-primary-200)]
      text-white
      cursor-not-allowed
    `,
  },

  secondary: {
    default: `
     bg-secondary-500 
text-white     
      hover:bg-[var(--color-secondary-700)]

      active:bg-[var(--color-secondary-400)]`,

    disabled: `
      bg-[var(--color-Neutral-200)]
      text-white
      cursor-not-allowed
    `,
  },

  danger: {
    default: `
bg-danger-500 
text-white     
      hover:bg-danger-700
      active:bg-danger-400
    `,
    disabled: `
      bg-[var(--color-Neutral-200)]
      text-white
      cursor-not-allowed
    `,
  },

  outline: {
    default: `
      border border-[var(--border-width-md)] border-[var(--color-primary-500)] text-[var(--color-primary-500)] bg-transparent
      hover:border-[var(--color-primary-600)] hover:text-[var(--color-primary-600)]
      active:border-[var(--color-primary-700)] active:text-[var(--color-primary-700)]
    `,
    // hover: `
    //   border
    //    border-[var(--border-width-md)]
    //   border-[var(--color-Primary-600)]
    //   text-[var(--color-Primary-600)]
    //   bg-transparent
    // `,
    // onclick: `
    //   border
    //   border-[var(--border-width-md)]
    //   border-[var(--color-Primary-700)]
    //   text-[var(--color-Primary-700)]
    //   bg-transparent
    // `,
    disabled: `
      border
       border-[var(--border-width-md)]
      border-[var(--color-primary-300)]
      text-[var(--color-primary-300)]
      bg-transparent
      cursor-not-allowed
    `,
  },
};
