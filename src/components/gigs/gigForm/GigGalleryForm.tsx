/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseForm } from "@/components/customForm/UseForm";

import { gigFormState } from "@/globalStore/gigFormState";
import GigImageGallery from "./GigImageGallery";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const GigGalleryForm = () => {
  const { setCurrentTab, formData, updateFormData } = gigFormState();
  const getValuesRef = useRef<() => any>(() => ({}));
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
    // make a form
    // api call
    // success
    // error
  };

  return (
    <UseForm
      onSubmit={handleSubmit}
      defaultValues={formData.gallery}
      onWatch={({ getValues }) => {
        getValuesRef.current = getValues; // Save `getValues` to the ref
      }}
    >
      <div className="w-full">
        <GigImageGallery />
      </div>
      <div className="flex items-center justify-end gap-5">
        {/* <GigButtons currentTab={currentTab} setCurrentTab={setCurrentTab} /> */}
        <Button
          variant="outline"
          type="button"
          onClick={() => {
            const formValues = getValuesRef.current();
            updateFormData("gallery", formValues);
            setCurrentTab("description");
          }}
        >
          Pre
        </Button>
        <Button type="submit">Publish Gig</Button>
      </div>
    </UseForm>
  );
};

export default GigGalleryForm;
