/* eslint-disable @typescript-eslint/no-explicit-any */
import { TabsContent } from "@/components/ui/tabs";

import GigPricingForm from "./GigPricingForm";
import GigOverviewForm from "./GIgOverviewForm";
import GigDescriptionForm from "./GigDescriptionForm";
import GigGalleryForm from "./GigGalleryForm";

// interface GigFormContentProps {
//   currentTab: TabType;
//   setCurrentTab: (tab: TabType) => void;
//   formData: GigFormData;
//   updateFormData: (tab: keyof GigFormData, data: any) => void;
// }

export const GigFormContent = () => {
  return (
    <div className="mg:mt-6 mt-12">
      <TabsContent value="overview">
        <GigOverviewForm />
      </TabsContent>
      <TabsContent value="pricing">
        <GigPricingForm />
      </TabsContent>
      <TabsContent value="description">
        <GigDescriptionForm />
      </TabsContent>
      <TabsContent value="gallery">
        <GigGalleryForm />
      </TabsContent>
    </div>
  );
};
