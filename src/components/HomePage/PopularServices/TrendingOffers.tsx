import OffersCard from "@/components/ui/OffersCard";
import Link from "next/link";
import offer1 from "@/../src/assests/offers/1.png";
import profile from "@/../src/assests/offers/profile1.png";
import { StaticImageData } from "next/image";
import Heading from "@/components/heading/Heading";

export type OfferType = {
  service: string;
  description: string;
  freelancer_name: string;
  rating: number;
  orders: number;
  price: number;
  delivery_time: string;
  offer_image: StaticImageData; // Updated type
  profile_image: StaticImageData; // Updated type
};

const offers: OfferType[] = [
  {
    service: "Web Design Services for Modern Businesses",
    description:
      "Web Design, Development, Responsive, SEO, UI/UX, Mobile-First",
    freelancer_name: "John Doe",
    rating: 4.9,
    orders: 120,
    price: 150,
    delivery_time: "5 days",
    offer_image: offer1,
    profile_image: profile,
  },
  {
    service: "E-Commerce Web Design & Development",
    description:
      "Custom E-commerce Websites, Shopify, WooCommerce, Payment Gateway Integration",
    freelancer_name: "Jane Smith",
    rating: 4.8,
    orders: 75,
    price: 250,
    delivery_time: "7 days",
    offer_image: offer1,
    profile_image: profile,
  },
  {
    service: "E-Commerce Web Design & Development",
    description:
      "Custom E-commerce Websites, Shopify, WooCommerce, Payment Gateway Integration",
    freelancer_name: "Jane Smith",
    rating: 4.8,
    orders: 75,
    price: 250,
    delivery_time: "7 days",
    offer_image: offer1,
    profile_image: profile,
  },
  {
    service: "E-Commerce Web Design & Development",
    description:
      "Custom E-commerce Websites, Shopify, WooCommerce, Payment Gateway Integration",
    freelancer_name: "Jane Smith",
    rating: 4.8,
    orders: 75,
    price: 250,
    delivery_time: "7 days",
    offer_image: offer1,
    profile_image: profile,
  },
  // Add other offers as in your original array...
];

const PopularServices = () => {
  return (
    <section className="container mx-auto px-4 ">
      <Heading heading="Trending Offers" />
      <Heading subheading="Browse the trending offers that you currently need" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
        {offers.map((service, index) => (
          <OffersCard key={index} service={service} />
        ))}
      </div>

      <Link href="/offers" className="text-blue-500 mt-4 inline-block">
        All Offers
      </Link>
    </section>
  );
};

export default PopularServices;
