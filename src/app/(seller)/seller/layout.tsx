import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";

export const navItems = [
  { href: "/services", label: "Services" },
  { href: "/talent", label: "Find Talents" },
  { href: "/why", label: "Why Brandmi" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Navbar navItems={navItems} />
      {children}
      <Footer></Footer>
    </>
  );
};
export default Layout;
