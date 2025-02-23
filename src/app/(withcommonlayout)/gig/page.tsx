import GigDescription from "@/components/gigs/GigDescription";
import FAQ from "@/components/gigs/GigFaq";
import GigGallery from "@/components/gigs/GigGallery";
import GigPackages from "@/components/gigs/GigPackages";
import ReviewCard from "@/components/gigs/GigReview";
import SellerInfo from "@/components/gigs/SellerInfo";
import SellerProfile from "@/components/gigs/SellerProfile";
import { reviewData } from "@/demoData/reviewDemoData";
import { SellerDemoData } from "@/demoData/SellerDemoData";
import { gigSampleData } from "@/demoData/serviceDemoData";

import { demoGig } from "@/lib/demoData";

const GigPage = () => {
  // get single  service api
  // get single user api
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* left column */}
          <div className="lg:col-span-2 space-y-8 ">
            <h1 className="text-3xl text-gray-900 font-semibold ">
              logo{demoGig.title}
            </h1>
            <SellerProfile seller={demoGig.seller} />
            <div>
              <GigGallery images={gigSampleData.images} />
            </div>
            <GigDescription />
            <div className="bg-gray-100 p-5 rounded-md mt-10">
              <SellerProfile seller={demoGig.seller} />
              <SellerInfo sellerProfile={SellerDemoData[0].profile} />
            </div>
            <FAQ questions={gigSampleData.faqs}></FAQ>
            <ReviewCard reviews={reviewData}></ReviewCard>
          </div>
          {/* right column */}
          <div className="lg:col-span-1 ">
            <GigPackages packages={demoGig.packages} />
          </div>
        </div>
      </main>
    </div>
  );
};
export default GigPage;