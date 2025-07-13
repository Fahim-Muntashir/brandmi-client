
import { SearchBox } from "@/components/Search/SearchBox";
import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import NavItems from "./NavItems";
// import ToggleMode from "./ToogleMode";
import UserMenu from "./UserMenu";



export default function Navbar({ navItems }) {
  console.log(navItems);
  return (
    <main className="sticky top-0 z-50">
      <header className="w-full border-b bg-white dark:bg-black">
        <div className="container mx-auto px-4 flex h-14 items-center justify-between">
          {/* Left side: Logo and NavItems */}
          <div className="flex items-center space-x-6">
            <Logo />
            <div className="hidden md:block">
              <NavItems navItems={navItems} />
            </div>
          </div>
          {/* Right side: UserMenu and ToggleMode */}
          <div className="flex items-center gap-3">
            <SearchBox />
            <UserMenu />
            <MobileNavbar />
          </div>
          {/* Mobile Navbar */}
        </div>
      </header>
    </main>
  );
}
