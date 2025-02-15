"use client";
import Image from "next/image";
import logomain from "@/../src/assests/logomain.png";
import logo from "@/../src/assests/logo.png";
import Link from "next/link";
import { useTheme } from "next-themes";
const Logo = () => {
  const { theme } = useTheme();

  // Memoize the logo selection to prevent unnecessary re-renders

  const isLogo = theme === "dark" ? logo : logomain;

  return (
    <Link href="/" className="flex items-center" aria-label="Home">
      <Image src={isLogo} width={140} height={200} alt="logo" />
    </Link>
  );
};

export default Logo;
