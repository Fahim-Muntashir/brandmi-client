import Image from "next/image";
import { Badge } from "../ui/badge";
import { Star } from "lucide-react";
interface SellerProfileProps {
  seller: {
    name: string;
    level: string;
    rating: number;
    reviews: number;
    avatar: string;
  };
}
const SellerProfile = ({ seller }: SellerProfileProps) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      {/* profile image */}
      <div className="h-12 w-12 relative rounded-full">
        <Image
          src={seller.avatar}
          fill
          alt={seller.name}
          className="object-cover rounded-full"
        />
      </div>
      {/* mid part */}
      <div>
        <h3 className="font-semibold">{seller.name}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Star className="h-4 w-4 fill-yellow-400 stroke-yellow-400" />
          <span>{seller.rating}</span>
          <span>({seller.reviews})</span>
        </div>
      </div>
      {/* last part */}
      <Badge variant="secondary" className="ml-auto">
        {seller.level}
      </Badge>
    </div>
  );
};
export default SellerProfile;
