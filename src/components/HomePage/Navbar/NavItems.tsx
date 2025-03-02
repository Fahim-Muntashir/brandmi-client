"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavItems = ({ navItems }) => {

  const pathname = usePathname();
  return (
    <div className="md:items-center md:flex-row flex  flex-col gap-4 ">
      {navItems.map((item: any) => (
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
