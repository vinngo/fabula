"use client";

import * as React from "react";
import {
  Expandable,
  ExpandableContent,
} from "@/registry/new-york/ui/expandable";

export default function ExampleDropdown() {
  return (
    <div className="p-10 w-full max-w-3xl mx-auto">
      <div className="space-y-8">
        <div className="border rounded-lg p-6">
          <Expandable
            trigger={
              <button className="bg-background text-2xl font-light font-serif">
                why the name?
              </button>
            }
          >
            <ExpandableContent className="font-light">
              Fabula Nova Crystallis Final Fantasy is a series of games within
              the Final Fantasy video game franchise. It was primarily developed
              by series creator and developer Square Enix, which also acted as
              publisher for all titles. The first word, Fabula, is a latin word
              for story or narrative.
            </ExpandableContent>
          </Expandable>
        </div>

        <div className="border rounded-lg p-6">
          <Expandable
            trigger={
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-serif font-light">Starter</h3>
                  <p className="text-sm text-muted-foreground">
                    For individuals
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light">$9</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>
            }
          >
            <ExpandableContent className="mt-4 font-light text-sm space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Up to 3 projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>5GB storage</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Email support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Basic analytics</span>
              </div>
            </ExpandableContent>
          </Expandable>
        </div>

        <div className="border rounded-lg p-6 border-foreground">
          <Expandable
            trigger={
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-serif font-light">
                    Professional
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    For small teams
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light">$29</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>
            }
          >
            <ExpandableContent className="mt-4 font-light text-sm space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited projects</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>50GB storage</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Priority email support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Advanced analytics</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Team collaboration</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Custom integrations</span>
              </div>
            </ExpandableContent>
          </Expandable>
        </div>

        <div className="border rounded-lg p-6">
          <Expandable
            trigger={
              <div className="flex items-end justify-between">
                <div>
                  <h3 className="text-lg font-serif font-light">Enterprise</h3>
                  <p className="text-sm text-muted-foreground">
                    For large organizations
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-light">$99</div>
                  <div className="text-sm text-muted-foreground">/month</div>
                </div>
              </div>
            }
          >
            <ExpandableContent className="mt-4 font-light text-sm space-y-2">
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Everything in Professional</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Unlimited storage</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>24/7 phone & email support</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Dedicated account manager</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SSO & advanced security</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>SLA guarantee</span>
              </div>
            </ExpandableContent>
          </Expandable>
        </div>
      </div>
    </div>
  );
}
