"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface GigGalleryProps {
  images: string[];
}

export default function GigGallery({ images }: GigGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);

  if (images.length === 0) {
    return <p>No images available</p>; // Fallback for empty images array
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div className="aspect-video rounded-lg overflow-hidden relative">
        <Image
          src={images[currentImage]} // Ensure the image URLs are valid
          alt={`Gig image ${currentImage + 1}`}
          className="object-cover"
          fill
          priority // Optimize for the main image
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevImage}
        aria-label="Previous Image"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextImage}
        aria-label="Next Image"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Select image ${index + 1}`}
            className={`w-20 h-20 rounded-md overflow-hidden ${
              currentImage === index ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={image} // Ensure the URLs are valid
                alt={`Thumbnail ${index + 1}`}
                className="object-cover"
                fill
                sizes="80px" // Thumbnail size
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
