"use client";

import { useTheme } from "@/app/theme-provider";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      className="text-lg font-semibold uppercase text-foreground bg-transparent border border-foreground hover:bg-transparent hover:border-o-accent-stroke hover:text-o-accent transition-colors duration-400"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-10 w-10" />
      ) : (
        <Moon className="h-10 w-10" />
      )}
    </Button>
  );
}
