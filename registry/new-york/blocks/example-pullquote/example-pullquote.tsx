"use client";

import * as React from "react";
import PullQuote from "@/registry/new-york/ui/pullquote";

export default function ExamplePullquote() {
  return (
    <div className="flex min-h-[400px] items-center justify-center px-4">
      <div className="max-w-2xl">
        <p className="text-muted-foreground leading-relaxed mb-6">
          In the world of design, typography plays a crucial role in conveying
          meaning and emotion. The careful selection of fonts, spacing, and
          hierarchy can transform ordinary text into compelling visual
          communication.
        </p>

        <PullQuote author="Steve Jobs">
          &quot;Design is not just what it looks like and feels like. Design is
          how it works.&quot;
        </PullQuote>

        <p className="text-muted-foreground leading-relaxed mt-6">
          This philosophy extends beyond aesthetics into the realm of
          functionality, where every element serves a purpose and contributes to
          the overall user experience. Great design seamlessly blends form and
          function.
        </p>
      </div>
    </div>
  );
}
