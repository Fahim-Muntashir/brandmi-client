"use client";
import Member from "./Member";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import member1 from "@/assests/member1.avif";

// replace with react data array:
const memberData = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1, // Assign id starting from 1
  image: member1,
  name: "Emily Dubow",
  expert: "Design",
  jobTitle: "UX/UI Designer",
  previousWorkPlace: "SAMSUNG",
}));

export default function Members() {
  //   const [hoverId, setHoverId] = useState<number | null>(null);

  const responsive = {
    // Define responsive settings for different screen sizes
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 1,
      showDots: false,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
      showDots: false,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
      showDots: true,
    },
  };
  return (
    <div className="container px-4 mx-auto mt-12">
      <Carousel
        infinite
        ssr
        autoPlay={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        showDots={true}
        renderArrowsWhenDisabled={true}
        deviceType="desktop"
      >
        {memberData &&
          memberData.map((member, index) => (
            <Member
              {...member}
              key={index}
              //   setHoverId={setHoverId}
              //   hoverId={hoverId}
            />
          ))}
      </Carousel>
    </div>
  );
}
