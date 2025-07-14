"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { NavItem } from "@/constant/navItems";

const NavItems = ({ navItems }:{navItems:NavItem}) => {

  const pathname = usePathname();
  return (
    <div className="md:items-center md:flex-row justify-center flex flex-col gap-8 mt-2">
      {navItems.map((item: any) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-[17px] font-semibold transition-all hover:text-gray-500 text-gray-800 
            }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
export default NavItems;
