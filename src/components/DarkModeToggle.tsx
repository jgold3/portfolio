"use client";

import { useTheme } from "@/components";
import { Moon, Sun, MonitorCog } from "lucide-react";

function DarkModeToggle() {
  const { theme, mounted, toggleTheme } = useTheme();
  const className = "text-primary active:fill-secondary hover:fill-secondary transition-colors";

  if (!mounted) {
    return (
      <span className="opacity-0" aria-hidden>
        <Moon />
      </span>
    );
  }

  return (
    <button onClick={toggleTheme}>
      {theme === "system" && <MonitorCog className={className} />}
      {theme === "dark" && <Moon className={className} />}
      {theme === "light" && <Sun className={className} />}
    </button>
  );
}

export { DarkModeToggle };
