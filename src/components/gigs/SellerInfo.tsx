import { Award, Clock, RefreshCw, ThumbsUp } from "lucide-react";

interface SellerInfoProps {
  sellerProfile: {
    country: string;
    memberSince: string;
    responseTime: string;
    lastDelivery: string;
  };
}
const SellerInfo = ({ sellerProfile }: SellerInfoProps) => {
  const { country, memberSince, responseTime, lastDelivery } = sellerProfile;
  return (
    <div className="mt-10">
      {/* basic information */}
      <div className="grid grid-cols-2 gap-4 ">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span>From {country}</span>
        </div>
        <div className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          <span>Member since {memberSince}</span>
        </div>
        <div className="flex items-center gap-2">
          <ThumbsUp className="h-4 w-4" />
          <span>Avg. response time {responseTime}</span>
        </div>
        <div className="flex items-center gap-2">
          <Award className="h-4 w-4" />
          <span>Last delivery {lastDelivery}</span>
        </div>
      </div>
    </div>
  );
};
export default SellerInfo;
