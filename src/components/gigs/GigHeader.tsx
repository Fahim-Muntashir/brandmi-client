import React from "react";
import { Star, MapPin, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { User } from "@/demoData/demoData";

interface GigHeaderProps {
  user: User;
}

export default function GigHeader({ user }: GigHeaderProps) {
  return (
    <div className="flex items-start gap-6 p-6 bg-white rounded-lg shadow-sm">
      <Image
        src={user.avatar}
        alt={user.name}
        width={100}
        height={100}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <span className="text-sm text-green-600 font-medium">
            {user.level}
          </span>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="font-medium">{user.rating}</span>
          <span className="text-gray-500">({user.totalReviews} reviews)</span>
        </div>
        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {user.location}
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            Member since {user.memberSince}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {user.responseTime} response time
          </div>
        </div>
      </div>
    </div>
  );
}
