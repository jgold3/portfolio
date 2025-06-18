"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavButtonProps = {
  children: React.ReactNode;
  href: string;
};

export function NavButton({ children, href }: NavButtonProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const className = isActive
    ? "font-primary text-xl leading-none font-bold tracking-wide"
    : "font-primary text-xl leading-none font-bold tracking-wide transition-colors";
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
