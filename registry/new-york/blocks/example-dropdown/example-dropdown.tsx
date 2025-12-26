"use client";

import * as React from "react";
import {
  Expandable,
  ExpandableContent,
} from "@/registry/new-york/ui/expandable";

export default function ExampleDropdown() {
  return (
    <div className="p-10 w-full items-center justify-center">
      <Expandable
        trigger={
          <button className="bg-background text-2xl font-light font-serif">
            why the name?
          </button>
        }
      >
        <ExpandableContent className="font-light">
          Fabula Nova Crystallis Final Fantasy is a series of games within the
          Final Fantasy video game franchise. It was primarily developed by
          series creator and developer Square Enix, which also acted as
          publisher for all titles. The first word, Fabula, is a latin word for
          story or narrative.
        </ExpandableContent>
      </Expandable>
    </div>
  );
}
