"use client";

import service1 from "@/../src/assests/serviceImage/1.png";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/heading/Heading";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  {
    title: "Book Design",
    image: service1,
    bgColor: "bg-pink-100",
  },
  {
    title: "UGC Videos",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-pink-200",
  },
  {
    title: "Voice Over",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-orange-200",
  },
  {
    title: "Social Media Marketing",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-yellow-100",
  },
  {
    title: "AI Development",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-green-100",
  },
  {
    title: "Logo Design",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-orange-100",
  },
  {
    title: "Web Development",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-purple-100",
  },
  {
    title: "Mobile Apps",
    image: "/placeholder.svg?height=200&width=200",
    bgColor: "bg-blue-100",
  },
];

const PopularServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 6;
  const maxIndex = Math.max(0, services.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="container mx-auto px-4 ">
      <Heading
        heading="Populer Services"
        className="mt-16 font-semibold text-left b border-l-4 ps-4"
      />

      <div className="w-full py-10">
        <div className="relative">
          {/* Previous Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-10 h-10"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden ">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / itemsPerView)
                }%)`,
                width: `${(services.length / itemsPerView) * 100}%`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{ width: `${100 / services.length}%` }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer bg-green-800">
                    {/* Header */}
                    <div className=" text-white p-4">
                      <h3 className="font-semibold text-md">{service.title}</h3>
                    </div>

                    {/* Image Section */}
                    <div
                      className={`p-2 h-50 flex items-center justify-center`}
                    >
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        width={400}
                        height={400}
                        className="object-contain m-1"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Next Button */}
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-gray-50 rounded-full w-10 h-10"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-green-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
