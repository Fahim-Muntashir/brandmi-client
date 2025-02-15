import { Clock, RefreshCw } from "lucide-react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
interface Package {
  name: string;
  price: number;
  description: string;
  deliveryTime: string;
  revisions: number | string;
}
interface GigPackagesProps {
  packages: Package[];
}

const GigPackages = ({ packages }: GigPackagesProps) => {
  return (
    <Card className="p-6 sticky z-100 top-20">
      <Tabs defaultValue="standard" className="w-full">
        <TabsList className="grid grid-cols-3 w-full">
          {packages.map((pkg) => (
            <TabsTrigger
              key={pkg.name.toLowerCase()}
              value={pkg.name.toLowerCase()}
            >
              {pkg.name}
            </TabsTrigger>
          ))}
        </TabsList>
        {packages.map((pkg) => (
          <TabsContent
            key={pkg.name.toLowerCase()}
            value={pkg.name.toLowerCase()}
            className="mt-4 space-y-4"
          >
            {/* pkg name & pkg price*/}
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{pkg.name} Package</h3>
              <span className="text-2xl font-bold">${pkg.price}</span>
            </div>
            {/* pkg description */}
            <p className="text-sm text-muted-foreground">{pkg.description}</p>
            {/* delivery & revision*/}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{pkg.deliveryTime} Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                <span>
                  {pkg.revisions} Revision{pkg.revisions !== 1 && "s"}
                </span>
              </div>
            </div>
            {/* button */}
            <Button className="w-full">Continue (${pkg.price})</Button>
          </TabsContent>
        ))}
      </Tabs>
    </Card>
  );
};
export default GigPackages;
