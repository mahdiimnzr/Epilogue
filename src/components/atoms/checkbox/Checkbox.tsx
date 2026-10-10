"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import { Tick01Icon } from "@hugeicons/core-free-icons";

import { Checkbox as ShadcnCheckbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

import type { CheckboxProps } from "./checkbox.types";
import { checkboxStyles } from "./checkbox.styles";

export default function Checkbox({
  className,
  ...props
}: CheckboxProps) {
  return (
    <ShadcnCheckbox
      {...props}
      className={cn(checkboxStyles.root, className)}
    >
      <HugeiconsIcon
        icon={Tick01Icon}
        className={cn(checkboxStyles.icon, "text-primary-600")}
        color="currentColor"
        strokeWidth={3}
      />
    </ShadcnCheckbox>
  );
}