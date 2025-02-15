/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { gigFormState } from "@/globalStore/gigFormState";
import { X } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

const Requirements = () => {
  const {} = gigFormState();
  const [requirement, setRequirement] = useState("");
  const { control } = useFormContext();

  return (
    <FormField
      name="requirements"
      control={control}
      render={({ field }) => {
        const values = field.value || [];
        const setValues = (newValues: string[]) => field.onChange(newValues);

        const addRequirements = () => {
          if (!requirement || requirement === "") return;
          if (!values.includes(requirement.trim())) {
            setValues([...values, requirement]);
          }
          setRequirement("");
        };

        const deleteRequirement = (tagToRemove: string) => {
          const filterRequirements = values.filter(
            (t: string) => t !== tagToRemove
          );
          setValues(filterRequirements);
        };

        return (
          <>
            <div className="flex items-center gap-2 mt-2">
              <Input
                placeholder="Add a requirement"
                onChange={(e) => setRequirement(e.target.value)}
              />
              <Button
                type="button"
                onClick={addRequirements}
                variant={"outline"}
                size={"sm"}
              >
                Add
              </Button>
            </div>
            <div className="space-y-3">
              {values.map((item: string, i: number) => (
                <div key={i} className="flex items-center justify-between">
                  <span>{item}</span>
                  <Button
                    size={"sm"}
                    type="button"
                    variant={"destructive"}
                    className="h-5 w-4"
                    onClick={() => deleteRequirement(item)}
                  >
                    <X />
                  </Button>
                </div>
              ))}
            </div>
          </>
        );
      }}
    />
  );
};
export default Requirements;
