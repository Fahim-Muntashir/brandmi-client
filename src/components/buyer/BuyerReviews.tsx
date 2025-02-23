import { Star } from "lucide-react";
import { Card } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const BuyerReviews = () => {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">Productguy Reviews</h3>
          <div className="flex items-center text-yellow-500">
            <Star className="w-4 h-4 fill-current" />
            <span>5</span>
          </div>
          <span className="text-muted-foreground">(1,651)</span>
        </div>
        <Select defaultValue="recent">
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="relevant">Most Relevant</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          "Seller Communication",
          "Service as Described",
          "Would Recommend",
        ].map((category, i) => (
          <div key={i} className="text-center">
            <div className="text-sm mb-2">{category}</div>
            <div className="flex justify-center text-yellow-500">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
export default BuyerReviews;
