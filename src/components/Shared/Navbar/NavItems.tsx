// NavItems.tsx
"use client";

import Link from "next/link";
import { NavItem, Role } from "@/constant/navItems";

interface NavItemsProps {
  navItems: NavItem[];
}

const NavItems = ({ navItems }: NavItemsProps) => {
  console.log(navItems);
  return (
    <div className="md:items-center md:flex-row justify-center flex flex-col gap-8 mt-2">
      {navItems.map((item: any) => (
        <Link
          key={item.label}
          href={item.href}
          className="text-[17px] font-semibold transition-all hover:text-gray-500 text-gray-800"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
