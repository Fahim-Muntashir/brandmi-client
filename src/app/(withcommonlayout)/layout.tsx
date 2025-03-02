import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { navItems } from "../(seller)/seller/layout";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar navItems={navItems} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
