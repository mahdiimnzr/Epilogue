
"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

import type { RadioProps } from "./radio.types";
import { radioStyles } from "./radio.styles";

export default function Radio({
  options,
  className,
  ...props
}: RadioProps) {
  return (
    <RadioGroup
      {...props}
      className={cn(radioStyles.group, className)}
    >
      {options.map((option) => (
       <RadioGroupItem
  key={option.value}
  value={option.value}
  disabled={option.disabled}
  className={cn(radioStyles.root, className)}
/>
      ))}
    </RadioGroup>
  );
}