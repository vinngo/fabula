import * as React from "react";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { ExampleForm } from "@/registry/new-york/blocks/example-form/example-form";
import ExampleEmphasis from "@/registry/new-york/blocks/example-emphasis/example-emphasis";
import ExampleDropdown from "@/registry/new-york/blocks/example-dropdown/example-dropdown";
import ExamplePullquote from "@/registry/new-york/blocks/example-pullquote/example-pullquote";
import ExampleButton from "@/registry/new-york/blocks/example-button/example-button";
import ExampleMacWindow from "@/registry/new-york/blocks/example-macwindow/example-macwindow";
// This page displays items from the custom registry.
// You are free to implement this with your own design as needed.

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-extralight font-serif tracking-tight">
          fabula
        </h1>
        <p className="text-muted-foreground">
          an opinionated component registry. distributed using shadcn.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3 font-serif">
              A sleek emphasis
            </h2>
            <OpenInV0Button name="emphasis" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExampleEmphasis />
          </div>
        </div>

        <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3 font-serif">
              An animated card that reveals itself on hover.
            </h2>
            <OpenInV0Button name="expandable" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExampleDropdown />
          </div>
        </div>

        <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3 font-serif">
              A macOS-style window component with traffic light controls.
            </h2>
            <OpenInV0Button name="example-macwindow" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExampleMacWindow />
          </div>
        </div>

        <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3 font-serif">
              Button variants showcase
            </h2>
            <OpenInV0Button name="example-button" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExampleButton />
          </div>
        </div>

        <div className="flex flex-col gap-4 border p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3 font-serif">
              A classic pullquote for editorial content, with on view effects.
            </h2>
            <OpenInV0Button name="example-pullquote" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <ExamplePullquote />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>

        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              A contact form with Zod validation.
            </h2>
            <OpenInV0Button name="example-form" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[500px] relative">
            <ExampleForm />
          </div>
        </div>
      </main>
    </div>
  );
}
