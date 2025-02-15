/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../ui/button";

type gigButtonsProps = {
  currentTab: string;
  setCurrentTab: any;
};
const GigButtons = ({ currentTab, setCurrentTab }: gigButtonsProps) => {
  const handlePreTab = () => {
    switch (currentTab) {
      case "pricing":
        setCurrentTab("overview");
        break;
      case "description":
        setCurrentTab("pricing");
        break;
      case "gallery":
        setCurrentTab("description");
        break;
    }
  };

  return (
    <div className="flex justify-end gap-4">
      {currentTab !== "overview" && (
        <Button variant="outline" type="button" onClick={handlePreTab}>
          Pre
        </Button>
      )}
      {currentTab !== "gallery" && (
        <Button variant="outline" type="submit">
          Next
        </Button>
      )}
    </div>
  );
};
export default GigButtons;
