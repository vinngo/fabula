"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border border-border/50 flex h-9 w-full min-w-0 bg-transparent px-4 py-7 text-base outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        {...props}
      />
      <motion.div
        className="absolute inset-0 pointer-events-none border-foreground/60 rounded-[inherit]"
        initial={{ borderWidth: "0px" }}
        animate={{ borderWidth: focused ? "1.5px" : "0px" }}
        transition={{ duration: 0.1 }}
        style={{
          borderStyle: "solid",
        }}
      />
    </div>
  );
}

export { Input };
