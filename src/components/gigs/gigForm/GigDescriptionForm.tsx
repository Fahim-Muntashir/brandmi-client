/* eslint-disable @typescript-eslint/no-explicit-any */
import GigButtons from "../gigButtons";
import { UseForm } from "@/components/customForm/UseForm";
import { gigFormState } from "@/globalStore/gigFormState";
import UseTextarea from "@/components/customForm/UseTextarea";
import FAQSection from "./FAQSection";
import { gigDescriptionSchema } from "@/schemas/gig.schema";
import Requirements from "./Requirements";
import { z } from "zod";

const GigDescriptionForm = () => {
  const { currentTab, setCurrentTab, formData, updateFormData } =
    gigFormState();

  const handleSubmit = (data: z.infer<typeof gigDescriptionSchema>) => {
    console.log("gig description data", data);

    updateFormData("description", data);
    setCurrentTab("gallery");
  };

  return (
    <UseForm
      onSubmit={handleSubmit}
      defaultValues={formData.description}
      schema={gigDescriptionSchema}
    >
      <UseTextarea
        name="description"
        label="Description"
        placeholder="Describe you service in details..."
        row={5}
      />
      <FAQSection />
      <Requirements />
      <GigButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </UseForm>
  );
};

export default GigDescriptionForm;
