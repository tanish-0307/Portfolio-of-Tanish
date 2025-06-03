
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const animatedButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] relative overflow-hidden before:absolute before:inset-0 before:z-0 before:opacity-0 before:transition-opacity hover:before:opacity-100 [&>span]:relative [&>span]:z-10",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_0_0_0_rgba(var(--primary),0.3)] hover:shadow-[0_0_15px_rgba(var(--primary),0.5)] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.3)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[0%_0%] hover:before:bg-[100%_100%] before:transition-[background-position_0.5s]",
        destructive:
          "bg-destructive text-destructive-foreground shadow-[0_0_0_0_rgba(var(--destructive),0.3)] hover:shadow-[0_0_15px_rgba(var(--destructive),0.5)] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[0%_0%] hover:before:bg-[100%_100%] before:transition-[background-position_0.5s]",
        outline:
          "border-2 border-input bg-transparent hover:border-primary hover:text-primary before:bg-[linear-gradient(45deg,transparent_25%,rgba(var(--primary),0.1)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[0%_0%] hover:before:bg-[100%_100%] before:transition-[background-position_0.5s]",
        secondary:
          "bg-secondary text-secondary-foreground before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[0%_0%] hover:before:bg-[100%_100%] before:transition-[background-position_0.5s]",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        glass: "backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 text-foreground before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] before:bg-[length:250%_250%] before:bg-[0%_0%] hover:before:bg-[100%_100%] before:transition-[background-position_0.5s]"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
      rounded: {
        default: "rounded-md",
        full: "rounded-full",
        none: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "default",
    },
  }
);

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof animatedButtonVariants> {
  asChild?: boolean;
}

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, rounded, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(animatedButtonVariants({ variant, size, rounded, className }))}
        ref={ref}
        {...props}
      >
        <span>{children}</span>
      </Comp>
    );
  }
);
AnimatedButton.displayName = "AnimatedButton";

export { AnimatedButton, animatedButtonVariants };
