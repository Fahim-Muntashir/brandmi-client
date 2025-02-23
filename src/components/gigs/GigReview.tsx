import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface IReviews {
  _id: string;
  serviceId: string;
  buyer: {
    name: string;
    location: string;
  };
  sellerId: string;
  ratingNumber: string;
  comment: string;
}

export default function ReviewCard({ reviews }: { reviews: IReviews[] }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Reviews</h2>

      {reviews.map((review) => (
        <Card key={review._id} className="w-full my-3">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="w-12 h-12">
              <AvatarFallback>
                {review.buyer.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-lg font-semibold">{review.buyer.name}</h2>
              <p className="text-sm text-muted-foreground">United Kingdom</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm">{review.comment}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 text-yellow-400 fill-current"
                />
              ))}
              <span className="ml-2 text-sm font-medium">
                5 out of {review.ratingNumber}
              </span>
            </div>
            {/* <div className="flex justify-between text-sm text-muted-foreground">
                        <span>Price: US$400-US$600</span>
                        <span>Duration: 2 weeks</span>
                    </div> */}
          </CardContent>
        </Card>
      ))}
    </>
  );
}
