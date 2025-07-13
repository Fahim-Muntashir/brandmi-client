import { navItems } from "@/app/(seller)/seller/layout";
import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";

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
