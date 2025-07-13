import BuyerContent from "@/components/buyer/BuyerContent";
import BuyerOverview from "@/components/buyer/BuyerOverview";
import BuyerProfileSidebar from "@/components/buyer/BuyerProfile";
import OrderHistory from "@/components/buyer/OrderHistory";
import SavedGigs from "@/components/buyer/SavedGigs";
import SellerProfileSidebar from "@/components/seller/SellerProfileSidebar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const BuyerPage = () => {
  return (
  <div className="min-h-screen bg-background">
            <div className="container mx-auto px-4 py-8">
                <div className="grid gap-8 md:grid-cols-[300px_1fr]">
                    {/* Profile Sidebar */}
      <BuyerProfileSidebar></BuyerProfileSidebar>

                    
                    {/* Gigs Grid */}
                    <div>

                
                        <div className="grid -6 sm-cols-2 ">
                           <BuyerContent></BuyerContent>
                        </div>           
                        
                                 </div>

                </div>
            </div>
        </div>
  );
};
export default BuyerPage;
