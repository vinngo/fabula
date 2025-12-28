"use client";

import * as React from "react";
import { MacWindow } from "@/registry/new-york/ui/macwindow";

export default function ExampleMacWindow() {
  return (
    <div className="flex min-h-[400px] items-center justify-center w-full">
      <div className="flex flex-col gap-8 items-center w-full px-4">
        <div className="flex flex-col gap-3 items-center w-full">
          <h3 className="text-xs text-muted-foreground font-mono">Small</h3>
          <MacWindow size="sm">
            <div className="flex flex-col gap-2 p-4">
              <h4 className="text-sm font-semibold">Small Window</h4>
              <p className="text-xs text-muted-foreground">
                Compact macOS-style window for minimal content.
              </p>
            </div>
          </MacWindow>
        </div>

        <div className="flex flex-col gap-3 items-center w-full">
          <h3 className="text-xs text-muted-foreground font-mono">Medium</h3>
          <MacWindow size="md">
            <div className="flex flex-col gap-3 p-6">
              <h4 className="text-base font-semibold">Medium Window</h4>
              <p className="text-sm text-muted-foreground">
                The default size for most content. Features characteristic macOS
                traffic light controls and clean border design.
              </p>
            </div>
          </MacWindow>
        </div>

        <div className="flex flex-col gap-3 items-center w-full">
          <h3 className="text-xs text-muted-foreground font-mono">Large</h3>
          <MacWindow size="lg">
            <div className="flex flex-col gap-4 p-8">
              <h4 className="text-lg font-semibold">Large Window</h4>
              <p className="text-sm text-muted-foreground">
                A spacious macOS-style window component perfect for detailed
                content, forms, or rich media presentations. The traffic light
                buttons scale proportionally with the window size.
              </p>
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="h-20 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Content</span>
                </div>
                <div className="h-20 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Content</span>
                </div>
                <div className="h-20 rounded-lg bg-muted flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Content</span>
                </div>
              </div>
            </div>
          </MacWindow>
        </div>
      </div>
    </div>
  );
}
