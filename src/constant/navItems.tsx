export type NavItem = {
  href: string;
  label: string;
};

export type Role = "public" | "buyer" | "seller";

export const NavItems: Record<Role, NavItem[]> = {
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
    { href: "/seller_dashboard/services", label: "My Services" },
    { href: "/seller_dashboard/profile", label: "Profile" },
    { href: "/why", label: "Why Brandmi" },
  ],
};
