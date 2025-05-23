"use client";

import type { ComponentPropsWithRef } from "react";

import { Badge } from "@optiaxiom/react";

export function App({
  intent = "success",
  variant = "subtle",
}: Pick<ComponentPropsWithRef<typeof Badge>, "intent" | "variant">) {
  return (
    <Badge intent={intent} variant={variant}>
      Pending
    </Badge>
  );
}
