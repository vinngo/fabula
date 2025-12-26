"use client";

import * as React from "react";
import { Button } from "@/registry/new-york/ui/button";

export default function ExampleButton() {
  return (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Default</h3>
          <Button variant="default">Default Button</Button>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Outline</h3>
          <Button variant="outline">Outline Button</Button>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Destructive</h3>
          <Button variant="destructive">Destructive Button</Button>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Secondary</h3>
          <Button variant="secondary">Secondary Button</Button>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Ghost</h3>
          <Button variant="ghost">Ghost Button</Button>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Link</h3>
          <Button variant="link">Link Button</Button>
        </div>

        <div className="flex flex-col gap-3 items-center">
          <h3 className="text-xs text-muted-foreground font-mono">Sizes</h3>
          <div className="flex gap-3 items-center">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
