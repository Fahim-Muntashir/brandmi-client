"use client";
import { GigFormContent } from "@/app/(seller)/seller_dashboard/services/publishgig/_components/GigFormContent";
import GigFormProcessing from "@/app/(seller)/seller_dashboard/services/publishgig/_components/GigFormProcessing";
import GIgFormTabs from "@/app/(seller)/seller_dashboard/services/publishgig/_components/GIgFormTabs";
import { Card } from "@/components/ui/card";
import { Tabs } from "@/components/ui/tabs";
import { gigFormState } from "@/globalStore/gigFormState";
import { useEffect, useState } from "react";

const PublishGig = () => {
  const { currentTab, getProgress, setCurrentTab } = gigFormState();

  // loading delay when tab changes

  // Scroll to the top when currentTab changes
  useEffect(() => {
    window.scrollTo({
      top: 30,
      behavior: "smooth",
    });
  }, [currentTab]);

  return (
    <main className="container mx-auto flex items-center justify-center px-4 py-8 mb-36">
      <Card className="p-6 w-full shadow-none border-none">
        {/* Gig form processing header */}
        <GigFormProcessing progress={getProgress()} currentTab={currentTab} />

        {/* Tabs */}
        <Tabs
          value={currentTab}
          onValueChange={() => {
            return false;
          }}
        >
          {/* form progress bar */}
          <GIgFormTabs currentTab={currentTab} onTabChange={setCurrentTab} />

          {/* Show loading spinner or content based on the loading state */}

          <GigFormContent />
        </Tabs>
      </Card>
    </main>
  );
};

export default PublishGig;
