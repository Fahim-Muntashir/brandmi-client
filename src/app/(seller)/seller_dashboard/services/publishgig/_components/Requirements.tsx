"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { gigFormState } from "@/globalStore/gigFormState";
import { X, Plus } from "lucide-react";
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
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-medium text-gray-900">
                Requirements
              </h3>
            </div>

            <div className="flex gap-2">
              <Input
                placeholder="Add requirement"
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
                className="flex-1 rounded-xl border-gray-200 text-sm"
              />
              <Button
                type="button"
                onClick={addRequirements}
                size="sm"
                className="rounded-xl bg-black text-white hover:bg-gray-800 px-3"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              {values.map((item: string, i: number) => (
                <div
                  key={i}
                  className="flex items-center justify-between bg-gray-50 rounded-xl px-3 py-2"
                >
                  <span className="text-sm text-gray-700">{item}</span>
                  <Button
                    size="sm"
                    type="button"
                    variant="ghost"
                    className="h-6 w-6 p-0 hover:bg-red-50 hover:text-red-600 rounded-lg"
                    onClick={() => deleteRequirement(item)}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        );
      }}
    />
  );
};

export default Requirements;
