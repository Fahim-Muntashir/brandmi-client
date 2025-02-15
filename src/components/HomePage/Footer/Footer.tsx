import logo from "@/../src/assests/logomain.png";
import {
    Apple,
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 text-gray-600 py-12 px-4 md:px-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <Link href="/" className="flex items-center mb-4">
                            <Image src={logo} width={150} height={200} alt="logo" />
                        </Link>
                        <p className="text-sm">
                            Connecting talent with opportunity worldwide.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">For Clients</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#">How to hire</Link>
                            </li>
                            <li>
                                <Link href="#">Talent Marketplace</Link>
                            </li>
                            <li>
                                <Link href="#">Project Catalog</Link>
                            </li>
                            <li>
                                <Link href="#">Hire an agency</Link>
                            </li>
                            <li>
                                <Link href="#">Enterprise</Link>
                            </li>
                            <li>
                                <Link href="#">Any Hire</Link>
                            </li>
                            <li>
                                <Link href="#">Contract-to-hire</Link>
                            </li>
                            <li>
                                <Link href="#">Direct Contracts</Link>
                            </li>
                            <li>
                                <Link href="#">Hire worldwide</Link>
                            </li>
                            <li>
                                <Link href="#">Hire in the USA</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">For Talent</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#">How to find work</Link>
                            </li>
                            <li>
                                <Link href="#">Direct Contracts</Link>
                            </li>
                            <li>
                                <Link href="#">Find freelance jobs worldwide</Link>
                            </li>
                            <li>
                                <Link href="#">Find freelance jobs in the USA</Link>
                            </li>
                            <li>
                                <Link href="#">Win work with ads</Link>
                            </li>
                            <li>
                                <Link href="#">Exclusive resources with Freelancer Plus</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#">Help & support</Link>
                            </li>
                            <li>
                                <Link href="#">Success stories</Link>
                            </li>
                            <li>
                                <Link href="#">Reviews</Link>
                            </li>
                            <li>
                                <Link href="#">Blog</Link>
                            </li>
                            <li>
                                <Link href="#">Community</Link>
                            </li>
                            <li>
                                <Link href="#">Affiliate program</Link>
                            </li>
                            <li>
                                <Link href="#">Free Business Tools</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link href="#">About us</Link>
                            </li>
                            <li>
                                <Link href="#">Leadership</Link>
                            </li>
                            <li>
                                <Link href="#">Investor relations</Link>
                            </li>
                            <li>
                                <Link href="#">Careers</Link>
                            </li>
                            <li>
                                <Link href="#">Our impact</Link>
                            </li>
                            <li>
                                <Link href="#">Press</Link>
                            </li>
                            <li>
                                <Link href="#">Contact us</Link>
                            </li>
                            <li>
                                <Link href="#">Trust, safety & security</Link>
                            </li>
                            <li>
                                <Link href="#">Modern slavery statement</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-wrap justify-between items-center">
                        <div className="flex space-x-6 mb-4 md:mb-0">
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Facebook</span>
                                <Facebook className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">LinkedIn</span>
                                <Linkedin className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Twitter</span>
                                <Twitter className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">YouTube</span>
                                <Youtube className="h-6 w-6" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-gray-500">
                                <span className="sr-only">Instagram</span>
                                <Instagram className="h-6 w-6" />
                            </Link>
                        </div>
                        <div className="flex space-x-4 mb-4 md:mb-0">
                            <Link
                                href="#"
                                className="flex items-center border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                <Apple className="h-5 w-5 mr-2" />
                                App Store
                            </Link>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-500">
                            &copy; {new Date().getFullYear()} Brandme. All rights reserved.
                        </p>
                        <nav className="flex flex-wrap justify-center space-x-6 mt-4 md:mt-0">
                            <Link
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-900"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-900"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-900"
                            >
                                CA Notice at Collection
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-900"
                            >
                                Cookie Settings
                            </Link>
                            <Link
                                href="#"
                                className="text-sm text-gray-500 hover:text-gray-900"
                            >
                                Accessibility
                            </Link>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
}
