"use client";
import { GigFormContent } from "@/components/gigs/gigForm/GigFormContent";
import GigFormProcessing from "@/components/gigs/gigForm/GigFormProcessing";
import GIgFormTabs from "@/components/gigs/gigForm/GIgFormTabs";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { gigFormState } from "@/globalStore/gigFormState";
import { useEffect, useState } from "react";

const PublishGig = () => {
  const { currentTab, getProgress, setCurrentTab } = gigFormState();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading delay when tab changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, [currentTab]);

  // Scroll to the top when currentTab changes
  useEffect(() => {
    window.scrollTo({
      top: 30,
      behavior: "smooth",
    });
  }, [currentTab]);

  return (
    <main className="container mx-auto flex items-center justify-center px-4 py-8 mb-36">
      <Card className="p-6 w-full lg:w-auto lg:min-w-[600px]">
        {/* Gig form processing header */}
        <GigFormProcessing progress={getProgress()} currentTab={currentTab} />

        {/* Tabs */}
        <Tabs
          value={currentTab}
          onValueChange={() => {
            return false;
          }}
        >
          <GIgFormTabs currentTab={currentTab} onTabChange={setCurrentTab} />

          {/* Show loading spinner or content based on the loading state */}
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <p className="text-sm font-medium text-gray-500">
                Loading content...
              </p>
            </div>
          ) : (
            <GigFormContent />
          )}
        </Tabs>
      </Card>
    </main>
  );
};

export default PublishGig;
