/* eslint-disable @typescript-eslint/no-explicit-any */
import UseInput from "@/components/customForm/UseInput";
import UseTextarea from "@/components/customForm/UseTextarea";
import { Card } from "@/components/ui/card";
import { gigPricingName } from "@/types/formTypes/form.types";

interface PackageCardProps {
  title: string;
  prefix: any;
}

const PackageFormCard = ({ title, prefix }: PackageCardProps) => {
  return (
    <Card className="p-4">
      <h3 className="font-semibold mb-4 text-center">{title}</h3>
      <main className="space-y-4">
        <UseInput
          name={`${prefix}.${gigPricingName.NAME}`}
          label="Package Name"
          labelCenter={true}
        />
        <UseTextarea
          name={`${prefix}.${gigPricingName.DESCRIPTION}`}
          label="Package Description"
          labelCenter={true}
        />
        <div className="grid grid-cols-3 gap-4">
          <UseInput
            name={`${prefix}.${gigPricingName.PRICE}`}
            label="Price ($)"
            labelCenter={true}
            type="number"
          />
          <UseInput
            name={`${prefix}.${gigPricingName.DELIVERY_TIME}`}
            label="Delivery"
            type="number"
            labelCenter={true}
          />
          <UseInput
            name={`${prefix}.${gigPricingName.REVISION}`}
            type="number"
            label="Revisions"
            labelCenter={true}
          />
        </div>
      </main>
    </Card>
  );
};
export default PackageFormCard;
