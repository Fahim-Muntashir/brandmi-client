"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import NavItems from "./NavItems";
import Logo from "./Logo";

const MobileNavbar = () => {
  const [onOpen, setOnOpen] = useState(false);
  const handleMobileMenu = () => {
    setOnOpen(true);
  };
  return (
    <Sheet open={onOpen} onOpenChange={setOnOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          onClick={handleMobileMenu}
          className=" shrink-0 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent
        side="left"
        className="px-4 h-screen overflow-y-auto flex flex-col items-center  "
      >
        <SheetHeader className="mb-4 ">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>
        <NavItems />
      </SheetContent>
    </Sheet>
  );
};
export default MobileNavbar;
