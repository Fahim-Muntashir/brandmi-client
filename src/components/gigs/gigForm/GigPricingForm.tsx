/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseForm } from "@/components/customForm/UseForm";
import GigButtons from "../gigButtons";
import { gigFormState } from "@/globalStore/gigFormState";
import { gigPricingSchema } from "@/schemas/gig.schema";
import PackageFormCard from "./PackageFormCard";
import { gigPricingNamePrefix } from "@/types/formTypes/formName";

const GigPricingForm = () => {
  const { currentTab, setCurrentTab, formData, updateFormData } =
    gigFormState();
  const handleFormSubmit = (data: any) => {
    console.log("pricing data", data);

    updateFormData("pricing", data);
    setCurrentTab("description");
  };

  return (
    <UseForm
      onSubmit={handleFormSubmit}
      defaultValues={formData.pricing}
      schema={gigPricingSchema}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PackageFormCard
          prefix={gigPricingNamePrefix.BASIC_PRICE}
          title="Basic Package"
        />
        <PackageFormCard
          prefix={gigPricingNamePrefix.STANDARD_PRICE}
          title="Standard Package"
        />
        <PackageFormCard
          prefix={gigPricingNamePrefix.PREMIUM_PRICE}
          title="Premium Package"
        />
      </div>
      <GigButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </UseForm>
  );
};
export default GigPricingForm;
