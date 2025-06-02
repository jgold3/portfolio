import Link from "next/link";
import { NavButton, MenuButton } from "@/components";

export function Header() {
  return (
    <header className="flex h-20 items-center justify-between gap-4 px-4 py-4 sm:px-16">
      <Link
        href="/"
        className="font-rampart-one text-2xl font-extrabold tracking-wide text-primary text-shadow-sm sm:text-4xl"
      >
        JOSH GOLDSMITH
      </Link>
      <div className="hidden sm:flex sm:gap-4">
        <NavButton href="/about">About</NavButton>
        <NavButton href="/experience">Experience</NavButton>
        <NavButton href="/projects">Projects</NavButton>
        <NavButton href="/contact">Contact</NavButton>
      </div>
      <div className="sm:hidden">
        <MenuButton />
      </div>
    </header>
  );
}
