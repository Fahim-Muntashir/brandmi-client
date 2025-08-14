"use client";

import type { TabType } from "@/globalStore/gigFormState";
import { CheckCircle, ChevronRight } from "lucide-react";

interface GigFormTabsProps {
  currentTab: TabType;
  onTabChange: (value: TabType) => void;
}

const GigFormTabs = ({ currentTab, onTabChange }: GigFormTabsProps) => {
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

  const tabs = [
    { value: "overview", label: "Overview" },
    { value: "pricing", label: "Pricing" },
    { value: "description", label: "Description" },
    { value: "gallery", label: "Gallery" },
  ];

  return (
    <div className="flex flex-col md:flex-row gap-1 md:gap-6">
      {tabs.map((tab, index) => {
        const isActive = currentTab === tab.value;
        const isCompleted = getTabStatus(tab.value);
        const isDisabled = currentTab !== tab.value;

        return (
          <div key={tab.value} className="flex items-center">
            <button
              onClick={() => onTabChange(tab.value as TabType)}
              disabled={isDisabled}
              className={`
                flex items-center gap-2 text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-blue-600"
                    : isCompleted
                    ? "text-green-600 hover:text-green-700"
                    : "text-gray-400 cursor-not-allowed"
                }
                ${!isDisabled && "hover:text-blue-700"}
              `}
            >
              {isCompleted && <CheckCircle className="w-4 h-4" />}
              <span>{tab.label}</span>
              {isActive && <ChevronRight className="w-4 h-4" />}
            </button>

            {index < tabs.length - 1 && (
              <div className="hidden md:block w-8 h-px bg-gray-200 mx-3" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default GigFormTabs;
