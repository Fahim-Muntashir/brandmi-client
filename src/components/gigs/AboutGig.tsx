import React from "react";
import { Check } from "lucide-react";

interface AboutGigProps {
  description: string;
  features: string[];
}

export default function AboutGig({ description, features }: AboutGigProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-4">About This Gig</h2>
      <p className="text-gray-700 whitespace-pre-line">{description}</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">What you&apos;ll get</h3>
      <ul className="space-y-3">
        {features.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
