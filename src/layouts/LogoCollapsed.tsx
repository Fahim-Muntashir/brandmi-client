/* eslint-disable @typescript-eslint/no-explicit-any */
import Logo from "@/components/HomePage/Navbar/Logo";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const LogoCollapsed = ({
  collapsed,
  setCollapsed,
}: {
  collapsed?: boolean;
  setCollapsed?: any;
}) => {
  return (
    <div className="flex  items-center justify-center  px-2 py-2 mb-6 ">
      <h1 className={cn(` font-semibold`, collapsed && "hidden")}>
        <Logo />
      </h1>
      <Button
        variant="ghost"
        onClick={() => setCollapsed(!collapsed)}
        size="icon"
        className="opacity-0 lg:opacity-100 pointer-events-none lg:pointer-events-auto"
      >
        {collapsed ? <ChevronRight /> : <ChevronLeft />}
      </Button>
    </div>
  );
};
export default LogoCollapsed;
