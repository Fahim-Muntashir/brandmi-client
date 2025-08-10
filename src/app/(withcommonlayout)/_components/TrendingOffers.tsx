"use client";

import service1 from "@/../src/assests/serviceImage/1.png";
import service2 from "@/../src/assests/serviceImage/2.png";
import service3 from "@/../src/assests/serviceImage/3.png";
import service4 from "@/../src/assests/serviceImage/4.png";
import service5 from "@/../src/assests/serviceImage/5.png";
import service6 from "@/../src/assests/serviceImage/6.png";
import service7 from "@/../src/assests/serviceImage/7.png";
import service8 from "@/../src/assests/serviceImage/8.png";
import Image, { StaticImageData } from "next/image";
import Heading from "@/components/heading/Heading";
import { useState, useEffect } from "react";
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
    image: service2,
    bgColor: "bg-pink-200",
  },
  {
    title: "Voice Over",
    image: service3,
    bgColor: "bg-orange-200",
  },
  {
    title: "Social Media Marketing",
    image: service4,
    bgColor: "bg-yellow-100",
  },
  {
    title: "AI Development",
    image: service5,
    bgColor: "bg-green-100",
  },
  {
    title: "Logo Design",
    image: service6,
    bgColor: "bg-orange-100",
  },
  {
    title: "Web Development",
    image: service7,
    bgColor: "bg-purple-100",
  },
  {
    title: "Mobile Apps",
    image: service8,
    bgColor: "bg-blue-100",
  },
];

const PopularServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(6);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2); // Small devices: 2 items
      } else if (window.innerWidth < 1024) {
        setItemsPerView(4); // Medium devices: 4 items
      } else {
        setItemsPerView(6); // Large devices: 6 items
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // Reset current index when items per view changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const maxIndex = Math.max(0, services.length - itemsPerView);

  const handlePrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="container mx-auto px-4">
      <Heading
        heading="Popular Services"
        className="mt-16 font-semibold text-left border-l-4 ps-4"
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
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-300 ease-in-out gap-4"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / itemsPerView
                }%)`,
              }}
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex-shrink-0"
                  style={{
                    width: `calc(${100 / itemsPerView}% - ${
                      ((itemsPerView - 1) * 16) / itemsPerView
                    }px)`,
                  }}
                >
                  <div className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer bg-green-800 h-full flex flex-col">
                    {/* Header - Fixed height */}
                    <div className="text-white p-4 flex-shrink-0">
                      <h3 className="font-semibold text-md leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Image Section - Flexible height */}
                    <div className="p-2 flex-1 flex items-center justify-center min-h-[200px]">
                      <div className="w-full h-full flex items-center justify-center">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          width={400}
                          height={400}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
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
        {maxIndex > 0 && (
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
        )}
      </div>
    </section>
  );
};

export default PopularServices;
