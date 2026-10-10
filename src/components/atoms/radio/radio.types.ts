
import type { ComponentProps } from "react";
import type { RadioGroup } from "@/components/ui/radio-group";

export type RadioProps = Omit<
  ComponentProps<typeof RadioGroup>,
  "className" | "children"
> & {
  options: {
    value: string;
    disabled?: boolean;
  }[];
  className?: string;
};