import { cva } from "class-variance-authority";
import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import * as React from "react";

import { cn } from "@/lib/utils";

import type { VariantProps } from "class-variance-authority";

const linkVariants = cva(
  [
    "h-7 gap-1.5 px-2.5",
    "rounded-lg border inline-flex items-center justify-center whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 shrink-0",
    "disabled:pointer-events-none disabled:opacity-50",
    "select-none transition-colors outline-none cursor-pointer",
  ],
  {
    variants: {
      variant: {
        // primary:
        //   "border-0 bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        // outline:
        //   "focus-visible:border-primary border-border bg-transparent text-secondary-foreground hover:bg-muted/60 hover:text-foreground",
        ghost:
          "focus-visible:border-primary border-transparent text-muted-foreground rounded-full! bg-muted/60 hover:bg-muted hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "ghost",
    },
  },
);

type LinkProps = NextLinkProps &
  VariantProps<typeof linkVariants> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof NextLinkProps> & {
    className?: string;
    children?: React.ReactNode;
  };

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, variant, href, children, ...props }, ref) => {
    return (
      <NextLink
        ref={ref}
        href={href}
        className={cn(linkVariants({ variant }), className)}
        {...props}
      >
        {children}
      </NextLink>
    );
  },
);

Link.displayName = "Link";

export type { LinkProps };
export { Link, linkVariants };
