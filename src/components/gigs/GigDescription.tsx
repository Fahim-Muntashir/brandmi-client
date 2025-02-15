import { demoGig } from "@/lib/demoData";

const GigDescription = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl text-gray-800 font-bold">About this gig</h2>
        <p className="whitespace-pre-line text-lg">{demoGig.description}</p>
      </div>
    </>

  );
};
export default GigDescription;
