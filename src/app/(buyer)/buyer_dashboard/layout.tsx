import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { NavItems } from "@/constant/navItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar navItems={NavItems.buyer} />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
