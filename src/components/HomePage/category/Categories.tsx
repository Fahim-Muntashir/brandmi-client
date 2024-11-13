"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Monitor,
  Palette,
  Phone,
  FileText,
  Video,
  Brain,
  Music,
  Users,
  LineChart,
} from "lucide-react";
import { useState, useEffect } from "react";

interface Category {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const categories: Category[] = [
  { id: "programming", title: "Programming & Tech", icon: <Monitor /> },
  { id: "design", title: "Graphics & Design", icon: <Palette /> },
  { id: "marketing", title: "Digital Marketing", icon: <Phone /> },
  { id: "writing", title: "Writing & Translation", icon: <FileText /> },
  { id: "video", title: "Video & Animation", icon: <Video /> },
  { id: "ai", title: "AI Services", icon: <Brain /> },
  { id: "music", title: "Music & Audio", icon: <Music /> },
  { id: "business", title: "Business", icon: <Users /> },
  { id: "consulting", title: "Consulting", icon: <LineChart /> },
];

interface CategoriesProps {
  initialVisibleCount: number;
}

const Categories = ({ initialVisibleCount }: CategoriesProps) => {
  const [showAll, setShowAll] = useState(false);
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1280)
        setVisibleCount(categories.length); //  large device
      else if (screenWidth >= 768 && screenWidth <= 1280)
        setVisibleCount(8); // medium device
      else setVisibleCount(6); // small device
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleCategories = showAll
    ? categories
    : categories.slice(0, visibleCount);
  const remainingCategories = categories.length - visibleCategories.length;

  return (
    <div className="container px-4 mx-auto py-8 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-9 gap-4">
        {visibleCategories.map((category) => (
          <Card key={category.id} className="cursor-pointer categoryCard">
            <CardContent className="flex flex-col justify-center items-start gap-4 px-3 py-4">
              <div className="h-8 w-8">{category.icon}</div>
              <h3 className="text-sm font-semibold text-muted-foreground">
                {category.title}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      {visibleCount < categories.length && (
        <div className="mt-4 flex justify-center">
          <Button variant={"outline"} onClick={() => setShowAll(!showAll)}>
            {showAll ? "Show Less" : `Show ${remainingCategories} More`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Categories;
