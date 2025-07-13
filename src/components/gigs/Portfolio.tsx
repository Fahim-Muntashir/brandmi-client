import React from "react";
import { Portfolio as PortfolioType } from "../../demoData/demoData";
import Image from "next/image";

interface PortfolioProps {
  items: PortfolioType[];
}

export default function Portfolio({ items }: PortfolioProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div key={item.id} className="group relative">
          <div className="aspect-video rounded-lg overflow-hidden relative">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="mt-3">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
            <span className="text-sm text-blue-600 mt-2 inline-block">
              {item.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
