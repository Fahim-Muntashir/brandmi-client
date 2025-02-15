"use client";
import { usePathname } from "next/navigation";
import { navItems } from "./Navbar";
import Link from "next/link";

const NavItems = () => {
  const pathname = usePathname();
  return (
    <div className="md:items-center md:flex-row flex  flex-col gap-4 ">
      {navItems.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className={`text-[18px] text-black transition-all hover:text-primary font-sans ${pathname === item.href ? "text-primary" : "text-muted-foreground"
            }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
export default NavItems;
