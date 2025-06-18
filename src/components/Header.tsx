import Link from "next/link";
import { NavButton, MenuButton, DarkModeToggle } from "@/components";

function Logo() {
  return (
    <Link
      href="/"
      className="flex rounded-md border-2 border-primary text-2xl font-bold duration-200 hover:opacity-80 sm:text-4xl"
    >
      <p className="bg-primary px-1 py-0.5 text-primary-foreground">joshgoldsmith</p>
      <div className="flex h-12 items-center justify-center bg-primary">
        <div className="h-2 w-1 overflow-hidden">
          <div className="h-2 w-2 rounded-full bg-primary-foreground"></div>
        </div>
      </div>
      <div className="flex h-12 items-center justify-center">
        <div className="h-2 w-1 overflow-hidden">
          <div className="h-2 w-2 -translate-x-1 transform rounded-full bg-primary"></div>
        </div>
      </div>
      <p className="px-1 py-0.5">dev</p>
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 flex h-20 justify-between gap-4 bg-background px-4 py-4 sm:px-16">
      <div className="flex items-center sm:items-end">
        <Logo />
      </div>
      <div className="hidden sm:flex sm:items-end sm:gap-4">
        <NavButton href="/about">About</NavButton>
        <NavButton href="/projects">Projects</NavButton>
        <NavButton href="/contact">Contact</NavButton>
        <div className="flex items-center">
          <DarkModeToggle />
        </div>
      </div>
      <div className="flex items-center gap-2 sm:hidden">
        <DarkModeToggle />
        <MenuButton />
      </div>
    </header>
  );
}
