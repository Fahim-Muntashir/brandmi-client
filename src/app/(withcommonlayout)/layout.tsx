import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
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
