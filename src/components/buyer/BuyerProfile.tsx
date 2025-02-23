import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Clock, MapPin, Send, Star } from "lucide-react";
import Image from "next/image";
import buyerPhoto from "@/assests/buyeravif.avif";
const BuyerProfile = () => {
  return (
    <div className="w-1/3">
      <Card className="p-6 space-y-6">
        {/* profile pic */}
        <div className="text-center space-y-4">
          <div className="flex flex-col items-center ">
            <div className="relative aspect-square w-32">
              <Image
                src={buyerPhoto}
                alt="Profile picture"
                fill
                className="rounded-full"
              />
              <div className="absolute -right-[0.23rem] -bottom-[0.25rem] bg-primary text-primary-foreground rounded-full p-1">
                <Star className="w-4 h-4 fill-current" />
              </div>
            </div>
            <div>{/* Additional content or text can go here */}</div>
          </div>
          <div>
            <h2 className="font-semibold text-xl">Productguy</h2>
            <div className="flex items-center justify-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-current" />
              <span>5.0</span>
              <span className="text-muted-foreground">(163 Reviews)</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Button className="bg-green-500 hover:bg-green-600">
              Contact Me
            </Button>
            <Button variant="outline">Custom Order</Button>
          </div>
        </div>
        {/* details information */}
        <div className="space-y-4">
          <div className="flex justify-between items-start gap-2">
            <div>
              <div className="font-medium">Verified by Fiverr in</div>
              <div className="text-sm text-muted-foreground">
                Photoshop Editing
              </div>
              <div className="text-sm text-muted-foreground">Logo Design</div>
            </div>
            <Award className="w-10 h-10 mt-1" />
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>From</span>
            </div>
            <span className="font-medium">USA</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 whitespace-nowrap">
              <Star className="w-4 h-4 shrink-0" />
              <span>Member since</span>
            </div>
            <span className="font-medium whitespace-nowrap">
              September 2018
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Avg. Response Time</span>
            </div>
            <span className="font-medium">5 Hrs.</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Recent Delivery</span>
            </div>
            <span className="font-medium">1 day</span>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default BuyerProfile;
