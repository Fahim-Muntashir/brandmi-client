
export type NavItem = {
  href: string;
  label: string;
};


export const NavItems = {
  public: [
    { href: "/", label: "Home" },
    { href: "/why", label: "Why Brandmi" },
    { href: "/services", label: "Explore Services" },
  ],
  buyer: [
    { href: "/services", label: "Services" },
    { href: "/talent", label: "Find Talents" },
    { href: "/why", label: "Why Brandmi" },
  ],
  seller: [
    { href: "/services", label: "My Services" },
    { href: "/talent", label: "Find Talents" },
    { href: "/why", label: "Why Brandmi" },
  ],
};