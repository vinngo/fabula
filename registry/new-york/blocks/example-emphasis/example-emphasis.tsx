"use client";

import * as React from "react";
import { Emphasis } from "@/registry/new-york/ui/emphasis";

export default function ExampleEmphasis() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div
        className="relative cursor-pointer bg-background"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <p className="text-lg font-light">hover me</p>
        {isHovered && <Emphasis />}
      </div>
    </div>
  );
}
