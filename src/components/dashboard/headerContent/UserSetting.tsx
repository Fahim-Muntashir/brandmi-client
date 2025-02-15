"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import profile from "@/assests/profile.jpg";
import Image from "next/image";
import Logout from "@/components/HomePage/Navbar/Logout";

const UserSetting = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="relative inline-block cursor-pointer">
          <Image
            src={profile}
            alt="profile image"
            className="w-10 h-10 rounded-full border-2 border-gray-300 shadow-lg transition-all duration-300 transform hover:scale-110 hover:shadow-xl"
          />
          <span className="sr-only">User menu</span>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <Logout />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
export default UserSetting;
