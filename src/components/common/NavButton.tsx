import Link from "next/link";

interface NavButtonProps {
  children: React.ReactNode;
  href: string;
}

export function NavButton({ children, href }: NavButtonProps) {
  return (
    <Link
      href={href}
      className="relative font-poetsen-one text-2xl font-extrabold tracking-wide text-primary text-shadow-sm after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-secondary after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}
