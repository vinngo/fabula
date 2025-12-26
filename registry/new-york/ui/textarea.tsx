"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  const [focused, setFocused] = React.useState(false);

  return (
    <div className="relative w-full">
      <textarea
        data-slot="textarea"
        className={cn(
          "placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border border-border/30 flex field-sizing-content min-h-16 w-full bg-transparent px-4 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
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

export { Textarea };
