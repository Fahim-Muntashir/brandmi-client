"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const GigImagesSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop"
        alt="Gig preview"
        height={500}
        width={500}
        className="w-full max-h-[500px] rounded-md"
      />
      <Image
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop"
        alt="Gig preview"
        height={500}
        width={500}
        className="w-full max-h-[500px] rounded-md"
      />
    </Carousel>
  );
};
export default GigImagesSlider;
