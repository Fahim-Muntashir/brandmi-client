import Image from "next/image";
import { Card, CardContent } from "../ui/card";

const BuyerServices = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {[
        {
          title: "I will create a professional logo for your website",
          price: 150,
          image: "/placeholder.svg",
        },
        {
          title: "I will design your next project logo only on Fiverr",
          price: 850,
          image: "/placeholder.svg",
        },
        {
          title: "I will design a cool and elegant logo",
          price: 700,
          image: "/placeholder.svg",
        },
      ].map((service, i) => (
        <Card key={i} className="overflow-hidden">
          <Image
            src={service.image || "/placeholder.svg"}
            alt={service.title}
            width={300}
            height={200}
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <p className="text-sm line-clamp-2 mb-2">{service.title}</p>
            <p className="font-semibold">${service.price}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
export default BuyerServices;
