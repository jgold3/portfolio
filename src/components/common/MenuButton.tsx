"use client";

import { SquareMenu } from "lucide-react";

export function MenuButton() {
  return (
    <a href="#menu" onClick={() => console.log("menu")}>
      <div className="flex items-center justify-center rounded-md bg-primary">
        <SquareMenu className="h-6 w-6 text-background" />
      </div>
    </a>
  );
}
