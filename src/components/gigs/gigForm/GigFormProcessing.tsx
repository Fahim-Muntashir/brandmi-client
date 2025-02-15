import { Progress } from "@/components/ui/progress";
interface GigFormHeaderProps {
  progress: number;
  currentTab: string;
}
const GigFormProcessing = ({ progress, currentTab }: GigFormHeaderProps) => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Create a New Gig</h1>
      <Progress value={progress} className="mb-4" />
      <p className="text-sm text-muted-foreground">
        Step {Math.ceil(progress / 25)} of 4 :{" "}
        {currentTab.charAt(0).toUpperCase() + currentTab.slice(1)}
      </p>
    </div>
  );
};
export default GigFormProcessing;
