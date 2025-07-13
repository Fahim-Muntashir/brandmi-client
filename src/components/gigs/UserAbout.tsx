import { User } from "@/demoData/demoData";
import React from "react";

interface UserAboutProps {
  user: User;
}

export default function UserAbout({ user }: UserAboutProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-4">About The Seller</h2>
      <p className="text-gray-700 whitespace-pre-line mb-6">
        {user.description}
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-gray-500 text-sm">Languages</span>
            <p className="font-medium">{user.languages.join(", ")}</p>
          </div>
          <div>
            <span className="text-gray-500 text-sm">Last Delivery</span>
            <p className="font-medium">{user.lastDelivery}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
