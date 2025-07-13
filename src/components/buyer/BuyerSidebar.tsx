"use client";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { useState } from "react";

const BuyerSidebar = () => {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  return (
    <section
      className={`bg-white w-80 min-h-screen flex flex-col transition-all duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static absolute z-30`}
    >
      <div className="flex flex-col items-center p-6 border-b">
        <div className="relative">
          <Avatar className="w-32 h-32">
            <AvatarImage src="/placeholder.svg" alt="M. Abuzar Asif" />
            <AvatarFallback>MA</AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
            LEVEL TWO
          </div>
        </div>
        <h2 className="mt-4 text-xl font-semibold">M. Abuzar Asif</h2>
        <p className="text-gray-500 text-sm">@abuxarstudios</p>
        <div className="flex items-center mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-current" : "text-gray-300"
                }`}
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">4.8 (68 reviews)</span>
        </div>
        <div className="flex gap-2 mt-4 w-full">
          <Button className="flex-1 bg-green-500 hover:bg-green-600">
            Contact Me
          </Button>
          <Button variant="outline" className="flex-1">
            Get a Quote
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">From</span>
            <span>Pakistan</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Member since</span>
            <span>Sep 2020</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Avg. Response Time</span>
            <span>5 hours</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-500">Last Delivery</span>
            <span>22 days</span>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Description</h3>
          <p className="text-sm text-gray-600">
            Hi, My name is abuzar, I have 3+ years of experience in graphic
            design and in 3d art. I also run an IT institute in Pakistan
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="font-medium">Languages</h3>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>English</span>
              <span className="text-gray-500">- Conversational</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Urdu (اردو)</span>
              <span className="text-gray-500">- Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default BuyerSidebar;
