"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/assests/profile.jpg";
import { useAuth } from "@/providers/AuthProvider";
import Logout from "./Logout";

const UserMenu = () => {
  const { isAuth, user } = useAuth();
  const { email, role, userName, image } = user || {};

  console.log(user);

  return (
    <>
      {isAuth ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="h-10 w-10 relative cursor-pointer transition-transform duration-200 hover:scale-105 rounded-full shadow-lg">
              <Image
                src={image ? image : profileImage}
                fill
                alt="user name"
                className="rounded-full "
              />
              <span className="sr-only">Open user menu</span>
            </div>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{userName}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <Link href={"/me"}>
              <DropdownMenuItem>Profile</DropdownMenuItem>
            </Link>
            <Link href={`dashboard/${role}`}>
              <DropdownMenuItem>Dashboard</DropdownMenuItem>
            </Link>
            <Logout />
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Link href={"/login"} className="flex gap-x-3">
          <Button size={"sm"} variant="ghost" className="text-md">
            Sign In
          </Button>
          <Button
            size={"sm"}
            variant="outline"
            className="text-md border border-gray-800 p-x-10"
          >
            Join
          </Button>
        </Link>
      )}
    </>
  );
};

export default UserMenu;
