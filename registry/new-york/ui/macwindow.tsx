import * as React from "react";
import { cn } from "@/lib/utils";

interface MacWindowProps {
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeVariants = {
  sm: {
    container: "max-w-sm",
    padding: "p-2",
    button: "w-2 h-2",
    gap: "gap-1.5",
  },
  md: {
    container: "max-w-md",
    padding: "p-3",
    button: "w-3 h-3",
    gap: "gap-2",
  },
  lg: {
    container: "max-w-2xl",
    padding: "p-4",
    button: "w-4 h-4",
    gap: "gap-2.5",
  },
};

function MacWindow({ children, size = "md", className }: MacWindowProps) {
  const variant = sizeVariants[size];

  return (
    <div
      className={cn(
        "border border-gray-300 rounded-xl w-full",
        variant.container,
        className,
      )}
    >
      <div className="h-full rounded-t-xl bg-gray-100 dark:bg-gray-800">
        <div
          className={cn("flex items-center justify-between", variant.padding)}
        >
          <div className={cn("flex items-center", variant.gap)}>
            <button
              className={cn("rounded-full", variant.button)}
              style={{
                backgroundColor: "#fe5f57",
              }}
            ></button>
            <button
              className={cn("rounded-full", variant.button)}
              style={{ backgroundColor: "#f9c74f" }}
            ></button>
            <button
              className={cn("rounded-full", variant.button)}
              style={{ backgroundColor: "#27c83e" }}
            ></button>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

export { MacWindow };
