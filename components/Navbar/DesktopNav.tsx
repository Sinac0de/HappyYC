"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Desktop Navigation Link Component
export function DesktopNav() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      <NavLink href="/" exact>
        Home
      </NavLink>
      <NavLink href="/startups">Startups</NavLink>
    </div>
  );
}

function NavLink({
  href,
  children,
  exact,
}: {
  href: string;
  children: React.ReactNode;
  exact?: boolean;
}) {
  const pathname = usePathname();
  const isActive = exact ? pathname === href : pathname?.startsWith(href);

  return (
    <Link
      href={href}
      className={`font-medium transition-colors ${
        isActive
          ? "text-primary border-b-2 border-primary pb-1"
          : "text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
      }`}
    >
      {children}
    </Link>
  );
}
