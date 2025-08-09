import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { NavItems as AllNavItems, Role } from "@/constant/navItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const userRole: Role = "public";
  return (
    <>
      <Navbar navItems={AllNavItems.seller} />

      {children}
      <Footer></Footer>
    </>
  );
};
export default Layout;
