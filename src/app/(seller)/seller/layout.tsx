import Footer from "@/components/HomePage/Footer/Footer";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { NavItems } from "@/constant/navItems";


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <>
      <Navbar navItems={NavItems.seller} />
      {children}
      <Footer></Footer>
    </>
  );
};
export default Layout;
