
import type { ComponentProps } from "react";
import type { Checkbox } from "@/components/ui/checkbox";


export type CheckboxProps = Omit<
  ComponentProps<typeof Checkbox>,
  "className" | "id"
> & {

  className?: string;
};