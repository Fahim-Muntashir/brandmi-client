import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabType } from "@/globalStore/gigFormState";
import { CheckCircle } from "lucide-react";
interface GigFormTabsProps {
  currentTab: TabType;
  onTabChange: (value: TabType) => void;
}
const GIgFormTabs = ({ currentTab, onTabChange }: GigFormTabsProps) => {
  const getTabStatus = (tabValue: string) => {
    // tab order
    const tabOrder = ["overview", "pricing", "description", "gallery"];
    // current tab index
    const currentTabIndex = tabOrder.indexOf(currentTab);
    // tab value index
    const tabValueIndex = tabOrder.indexOf(tabValue);
    // if tab value is less than current value (condition)
    return tabValueIndex < currentTabIndex;
  };

  return (
    <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 gap-2 h-full ">
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "overview"}
        onClick={() => onTabChange("overview")}
      >
        <span className="flex items-center gap-2">
          {getTabStatus("overview") && (
            <CheckCircle className="w-4 h-4 text-green-500" />
          )}
          Overview
        </span>
      </TabsTrigger>
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "pricing"}
        onClick={() => onTabChange("pricing")}
      >
        <span className="flex items-center gap-2">
          {getTabStatus("pricing") && (
            <CheckCircle className="w-4 h-4 text-green-500" />
          )}
          Pricing
        </span>
      </TabsTrigger>
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "description"}
        onClick={() => onTabChange("description")}
      >
        <span className="flex items-center gap-2">
          {getTabStatus("description") && (
            <CheckCircle className="w-4 h-4 text-green-500" />
          )}
          Description
        </span>
      </TabsTrigger>
      <TabsTrigger
        value={currentTab}
        disabled={currentTab !== "gallery"}
        onClick={() => onTabChange("gallery")}
      >
        <span className="flex items-center gap-2">
          {getTabStatus("gallery") && (
            <CheckCircle className="w-4 h-4 text-green-500" />
          )}
          Gallery
        </span>
      </TabsTrigger>
    </TabsList>
  );
};
export default GIgFormTabs;
