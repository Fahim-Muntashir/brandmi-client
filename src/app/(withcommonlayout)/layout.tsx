import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { NavItems } from "@/constant/navItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar navItems={NavItems.public} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
