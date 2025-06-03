"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  children: React.ReactNode;
  href: string;
};

// const className =
//   "relative font-primary text-2xl leading-none font-bold tracking-wide text-primary after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full";

export function NavButton({ children, href }: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const className = isActive
    ? "font-primary text-xl leading-none font-bold tracking-wide text-secondary"
    : "font-primary text-xl leading-none font-bold tracking-wide text-primary transition-colors hover:text-secondary";
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
