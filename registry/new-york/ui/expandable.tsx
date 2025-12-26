"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ExpandableProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const ExpandableContext = React.createContext<{
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
} | null>(null);

function useExpandable() {
  const context = React.useContext(ExpandableContext);
  if (!context) {
    throw new Error("Expandable components must be used within an Expandable");
  }
  return context;
}

function Expandable({ trigger, children, className }: ExpandableProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <ExpandableContext.Provider value={{ isOpen, setIsOpen }}>
      <div
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className={cn("", className)}
      >
        {trigger}
        {children}
      </div>
    </ExpandableContext.Provider>
  );
}

interface ExpandableContentProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
}

function ExpandableContent({
  className,
  children,
  ...props
}: ExpandableContentProps) {
  const { isOpen } = useExpandable();
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    if (contentRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const entry = entries[0];
        if (entry) {
          setHeight(entry.contentRect.height);
        }
      });

      resizeObserver.observe(contentRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <motion.div
      initial={false}
      animate={{
        height: isOpen ? height : 0,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="overflow-hidden"
    >
      <div
        ref={contentRef}
        className={cn("border-l pl-3 transition-shadow", className)}
        {...props}
      >
        {children}
      </div>
    </motion.div>
  );
}

export { Expandable, ExpandableContent };
