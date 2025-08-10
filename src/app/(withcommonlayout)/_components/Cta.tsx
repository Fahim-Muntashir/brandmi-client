import { Button } from "@/components/ui/button";

const Cta = () => {
  return (
    <div className="container flex flex-col items-center justify-center bg-green-950 p-12 rounded-lg shadow-inner my-10">
      {/* Main content area with a light background */}
      <div className="text-center mb-8">
        <h2 className="text-5xl text-white mb-4">
          Ready to Elevate Your Brand?
        </h2>
      </div>

      {/* Button section with its own distinct background */}
      <div>
        <Button>Join Now</Button>
      </div>
    </div>
  );
};

export default Cta;
