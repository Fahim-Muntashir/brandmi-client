/* eslint-disable @typescript-eslint/no-explicit-any */
import { TagInput } from "@/components/customForm/TagInput";
import GigButtons from "../gigButtons";

import { UseForm } from "@/components/customForm/UseForm";
import UseInput from "@/components/customForm/UseInput";
import UseSelect from "@/components/customForm/UseSelect";
import { gigOverviewSchema } from "@/schemas/gig.schema";
import { z } from "zod";
import { gigFormState } from "@/globalStore/gigFormState";
import { gigOverviewName } from "@/types/formTypes/formName";

const options = [
  {
    label: "Programming & Tech",
    value: "Programming & Tech",
  },
  {
    label: "Writing & Translation",
    value: "Writing & Translation",
  },
  {
    label: "Design",
    value: "Design",
  },
];

const GigOverviewForm = () => {
  const { currentTab, setCurrentTab, formData, updateFormData } =
    gigFormState();
  const handleSubmit = (data: z.infer<typeof gigOverviewSchema>) => {
    console.log("gig overview data", data);

    const validateForm = gigOverviewSchema.safeParse(data);
    if (validateForm.success) {
      updateFormData("overview", data);
      setCurrentTab("pricing");
    }
  };

  return (
    <UseForm
      onSubmit={handleSubmit}
      defaultValues={formData.overview}
      schema={gigOverviewSchema}
    >
      <UseInput
        name={gigOverviewName.TITLE}
        placeholder="I will create..."
        label="Gig Title"
        labelCenter={true}
      />
      <div className=" grid grid-cols-2 gap-5 ">
        <UseSelect
          options={options}
          name={gigOverviewName.CATEGORY}
          placeholder="Select category"
        />
        <UseSelect
          options={options}
          name={gigOverviewName.SUBCATEGORY}
          placeholder="Select category"
        />
      </div>
      <TagInput
        name={gigOverviewName.TAGS}
        label="Tags"
        placeholder="tags"
        labelCenter={true}
      />
      <TagInput
        name={gigOverviewName.SEARCH_TAG}
        label="Search Tags"
        placeholder="Search Tags"
        labelCenter={true}
      />
      <GigButtons currentTab={currentTab} setCurrentTab={setCurrentTab} />
    </UseForm>
  );
};

export default GigOverviewForm;
