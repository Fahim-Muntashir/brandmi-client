/* eslint-disable @typescript-eslint/no-explicit-any */
import { CheckCircle } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface memberProps {
  id: number;
  image: any;
  name: string;
  expert: string;
  jobTitle: string;
  previousWorkPlace: string;
  //   hoverId: number | null;
  //   setHoverId: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Member({
  expert,
  image,
  jobTitle,
  name,
  previousWorkPlace,
}: //   id,
memberProps) {
  return (
    <Card
      className="overflow-hidden px-0 py-0 pb-2 relative transition-transform duration-300 ease-in-out hover:scale-105"
      //   onMouseEnter={() => setHoverId(id)} // Set the hoverId to the current card id when hovered
      //   onMouseLeave={() => setHoverId(null)} // Reset hoverId when mouse leaves
    >
      <CardContent className="px-0 py-0 flex flex-col items-start gap-3 ">
        {/* Image part */}
        <div className="relative w-full aspect-square">
          <Image
            alt="Profile photo"
            fill
            className="object-cover"
            src={image}
          />
        </div>
        {/* Text part */}
        <div className="px-4 flex flex-col items-start gap-4">
          {/* Name, title, role */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-foreground">{name}</h3>
            <div className="flex items-start gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-500" />
              <span className="text-xs text-emerald-400">
                Verified Expert <br />
                in {expert}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">{jobTitle}</p>
          </div>
          {/* Previous work experience */}
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">PREVIOUSLY AT</p>
            <div className="flex items-center gap-2">
              <span className="text-xm font-semibold tracking-tight">
                {previousWorkPlace}
              </span>
            </div>
          </div>
        </div>
      </CardContent>
      {/* Apply black background with opacity to all cards except the focused one */}
      {/* <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
          hoverId !== null && hoverId !== id ? "opacity-50" : "opacity-0"
        }`}
      ></div> */}
    </Card>
  );
}
