"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
const NavItems = () => {
  const pathname = usePathname();
  const navItems = [
    {
      id: 1,
      label: "Home",
      href: "/",
    },
    {
      id: 2,
      label: "Learning Companions",
      href: "/companions",
    },
    {
      id: 3,
      label: "My Journey",
      href: "/my-journey",
    },
  ];
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ id, label, href }) => {
        return (
          <Link
            key={id}
            href={href}
            className={cn(pathname === href && "text-primary font-semibold")}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
};

export default NavItems;
