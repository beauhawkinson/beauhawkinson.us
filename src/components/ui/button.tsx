import { cva } from "class-variance-authority";

const buttonVariants = cva(
  [
    "h-7 gap-1.5 px-2.5",
    "rounded-lg border inline-flex items-center justify-center whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none transition-none outline-none",
  ],
  {
    variants: {
      variant: {
        unstyled: "",
        primary:
          "border-0 bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        outline:
          "focus-visible:border-primary border-border bg-transparent text-secondary-foreground hover:bg-muted hover:text-foreground",
        ghost:
          "focus-visible:border-primary border-transparent text-secondary-foreground hover:bg-muted hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "unstyled",
    },
  },
);

// function Button({
//   className,
//   variant,
//   ...props
// }: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) {
//   return <button className={clsx(buttonVariants({ variant }), className)} {...props} />;
// }

export { buttonVariants };
