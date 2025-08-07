import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { NavItems as AllNavItems } from "@/constant/navItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar navItems={AllNavItems.public} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
