"use client";

import { SquareMenu } from "lucide-react";

export function MenuButton() {
  return (
    <div className="rounded-md bg-primary">
      <SquareMenu className="h-7 w-7 text-background" />
    </div>
  );
}
