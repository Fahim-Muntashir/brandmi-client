// Navbar.tsx
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";
import UserMenu from "./UserMenu";
import { NavItem, Role } from "@/constant/navItems";

interface NavbarProps {
  navItems: NavItem[];
}

export default function Navbar({ navItems }: NavbarProps) {
  return (
    <main className="sticky top-0 z-50">
      <header className="w-full border-b bg-white dark:bg-black">
        <div className="container mx-auto px-4 flex h-20 items-center justify-between">
          {/* Left side: Logo and NavItems */}
          <div className="flex items-center space-x-20">
            <Logo />
            <div className="hidden md:block">
              <NavItems navItems={navItems} />
            </div>
          </div>
          {/* Right side: UserMenu and MobileNavbar */}
          <div className="flex items-center gap-3">
            <UserMenu />
            <MobileNavbar navItems={navItems} />
          </div>
        </div>
      </header>
    </main>
  );
}
