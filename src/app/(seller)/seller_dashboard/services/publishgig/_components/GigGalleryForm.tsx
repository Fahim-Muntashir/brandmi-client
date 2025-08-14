/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseForm } from "@/components/customForm/UseForm";

import { gigFormState } from "@/globalStore/gigFormState";
import GigImageGallery from "./GigImageGallery";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { useCreateGigMutation } from "@/redux/api/gigApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const GigGalleryForm = () => {
  const { user } = useAuth();

  const router = useRouter();

  useEffect(() => {
    router.prefetch("/seller_dashboard/service");
  }, [router]);
  // Initialize the mutation hook
  const [createGig, { isLoading }] = useCreateGigMutation();
  const { setCurrentTab, formData, updateFormData } = gigFormState();
  const getValuesRef = useRef<() => any>(() => ({}));

  // handle form data
  const handleSubmit = async (data: any) => {
    try {
      // 1. Update store with latest gallery data
      updateFormData("gallery", data);

      // 2. Get full form data from global state
      const updatedFormData = gigFormState.getState().formData;

      // 3. Create FormData instance
      const formData = new FormData();
      formData.append("userId", user?.userId || "");

      // Append overview fields
      Object.entries(updatedFormData.overview || {}).forEach(([key, value]) => {
        formData.append(key, value as string);
      });

      // Append pricing (must be JSON string)
      formData.append("pricing", JSON.stringify(updatedFormData.pricing || {}));

      // Append description
      Object.entries(updatedFormData.description || {}).forEach(
        ([key, value]) => {
          formData.append(key, value as string);
        }
      );

      // Append gallery images (multiple files)
      if (updatedFormData.gallery?.images?.length) {
        updatedFormData.gallery.images.forEach((file: File) => {
          formData.append("images", file);
        });
      }

      console.log(gigFormState.getState().formData);
      // 4. Call API (send FormData directly)

      const res = await fetch("http://localhost:8000/api/v1/gigs", {
        method: "POST",
        body: formData,
      });

      // task : call this with rtk query
      if (res?.ok) {
        toast.success("Gig created Successfully");
        router.push("/seller_dashboard/services");
      }
    } catch (error) {
      console.error("Error creating gig:", error);
    }
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
