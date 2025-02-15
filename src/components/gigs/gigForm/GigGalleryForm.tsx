/* eslint-disable @typescript-eslint/no-explicit-any */
import GigButtons from "../gigButtons";
import { UseForm } from "@/components/customForm/UseForm";

import { gigFormState } from "@/globalStore/gigFormState";
import GigImageGallery from "./GigImageGallery";
import { Button } from "@/components/ui/button";

const GigGalleryForm = () => {
  const { currentTab, setCurrentTab, formData, updateFormData } =
    gigFormState();

  const handleSubmit = (data: any) => {
    updateFormData("gallery", data);
    const updatedFormData = gigFormState.getState().formData;

    const gigFormData = {
      ...updatedFormData.overview,
      ...updatedFormData.pricing,
      ...updatedFormData.description,
      ...updatedFormData.gallery,
    };
    console.log(gigFormData);
  };
  return (
    <UseForm onSubmit={handleSubmit} defaultValues={formData.gallery}>
      <GigImageGallery />
      <div className="flex items-center justify-end gap-5">
        <GigButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <Button type="submit">Publish Gig</Button>
      </div>
    </UseForm>
  );
};

export default GigGalleryForm;
