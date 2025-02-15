import { cn } from "@/lib/utils";
import { Home, Settings, Users } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", href: "/dashboard", icon: Home },
  { name: "Analytical", href: "/dashboard/users", icon: Users },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface SidebarProps {
  collapsed?: boolean;
}

const AdminSidebar = ({ collapsed }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="flex-1 px-2 ">
      <nav className="flex flex-col space-y-3">
        {navItems.map((link) => (
          <Link
            className={cn(
              "flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors",
              pathname === link.href
                ? "bg-black text-white"
                : "text-muted-foreground hover:bg-secondary hover:text-secondary-foreground "
            )}
            href={link.href}
            key={link.name}
          >
            <link.icon className="h-6 w-6 shrink-0" />
            <span className={cn("flex-1 ", collapsed && "sr-only")}>
              {link.name}
            </span>
          </Link>
        ))}
      </nav>
    </div>
  );
};
export default AdminSidebar;
