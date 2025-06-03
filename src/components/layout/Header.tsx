import Link from "next/link";
import { NavButton, MenuButton } from "@/components";

export function Header() {
  return (
    <header className="flex h-20 justify-between gap-4 px-4 py-4 sm:px-16">
      <div className="flex items-center sm:items-end">
        <Link
          href="/"
          className="font-rampart-one text-2xl font-extrabold tracking-wide text-primary transition-colors text-shadow-sm hover:text-secondary sm:text-4xl"
        >
          JOSH GOLDSMITH
        </Link>
      </div>
      <div className="hidden sm:flex sm:items-end sm:gap-4">
        <NavButton href="/about">About</NavButton>
        <NavButton href="/experience">Experience</NavButton>
        <NavButton href="/projects">Projects</NavButton>
        <NavButton href="/contact">Contact</NavButton>
      </div>
      <div className="flex items-center sm:hidden">
        <MenuButton />
      </div>
    </header>
  );
}
