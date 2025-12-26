import * as React from "react";

import { motion } from "framer-motion";

interface PullQuoteProps {
  children: React.ReactNode;
  author?: string;
}

function PullQuote({ children, author, ...props }: PullQuoteProps) {
  return (
    <motion.div
      className="p-5 font-serif"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      {...props}
    >
      <div className="text-2xl font-medium italic border-l-4 border-primary pl-6 my-8">
        {children}
      </div>
      {author && (
        <cite className="text-sm text-muted-foreground not-italic block pl-6">
          — {author}
        </cite>
      )}
    </motion.div>
  );
}

export default PullQuote;
