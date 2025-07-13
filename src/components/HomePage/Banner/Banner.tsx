import { Button } from "@/components/ui/button";
import bannerimg from "@/../src/assests/home.png";
import Image from "next/image";

export default function Banner() {
  return (
    <section className=" bg-gradient-to-br from-blue-900 via-blue-800 to-blue-500 shadow  mx-auto  items-center">
      <div className=" container mx-auto px-4 pt-16 mb-12 grid grid-cols-1 md:grid-cols-2 text-gray-100 items-center justify-center">
        <div>
          <h1 className="text-5xl font-bold my-8">
            {" "}
            Find and hire <br /> the leading brand experts
          </h1>
          <p className="text-gray-200">
            {" "}
            Toptal is an exclusive network of the top freelance software
            developers, designers, marketing experts, finance experts, product
            managers, and project managers in the world. Top companies hire
            Toptal freelancers for their most important projects.{" "}
          </p>
          <Button className="my-8 bg-primary">Hire Expert</Button>
        </div>
        <div className="flex items-center justify-center gap-4 mt-2 ">
          <Image src={bannerimg} alt="" width={400} />
        </div>
      </div>
    </section>
  );
}
