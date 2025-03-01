import BuyerContent from "@/components/buyer/BuyerContent";
import BuyerSidebar from "@/components/buyer/BuyerSidebar";

const BuyerPage = () => {
  return (
    <main className="flex  h-screen bg-gray-100">
      {/* sidebar */}
      <BuyerSidebar />
      <BuyerContent />
    </main>
  );
};
export default BuyerPage;
