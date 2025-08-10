import Footer from "@/components/Shared/Footer/Footer";
import Navbar from "@/components/Shared/Navbar/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NavItems as AllNavItems, Role } from "@/constant/navItems";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const userRole: Role = "public";
  return (
    <>
      <Navbar navItems={AllNavItems.seller} />
      <SidebarProvider>{children}</SidebarProvider>

      <Footer></Footer>
    </>
  );
};
export default Layout;
