import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FormField } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { ImagePlus, Trash2 } from "lucide-react";
import Image from "next/image";
import { useFormContext } from "react-hook-form";

const GigImageGallery = () => {
  const { control } = useFormContext();

  return (
    <FormField
      name="images"
      control={control}
      render={({ field }) => {
        const images = field.value || [];
        const setImages = (newImages: File[]) => field.onChange(newImages);

        const handleImageUpload = (file: File | null) => {
          if (file && images.length < 3) {
            setImages([...images, file]);
          }
        };

        const removeImage = (imageToRemove: File) => {
          const updatedImages = images.filter(
            (img: File) => img !== imageToRemove
          );
          setImages(updatedImages);
        };

        return (
          <>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Label className="text-base font-medium">Images (Max 3)</Label>
              <Button
                type="button"
                variant="outline"
                onClick={() => document.getElementById("image-upload")?.click()}
                disabled={images.length >= 3}
                className="flex items-center gap-2"
              >
                <ImagePlus className="h-4 w-4" />
                <span className="hidden sm:inline">Add Image</span>
              </Button>
              <input
                id="image-upload"
                type="file"
                // accept="image/*"
                className="hidden"
                onChange={(e) => handleImageUpload(e.target.files?.[0] || null)}
              />
            </div>
            <div className="mt-4 grid grid-cols-3">
              {images.map((img: File, index: number) => (
                <Card
                  key={index}
                  className="relative group overflow-hidden rounded-lg gap-8"
                >
                  <Image
                    src={URL.createObjectURL(img)}
                    alt={`Gallery ${index + 1}`}
                    width={1000}
                    height={1000}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      type="button"
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                      onClick={() => removeImage(img)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </>
        );
      }}
    />
  );
};
export default GigImageGallery;
