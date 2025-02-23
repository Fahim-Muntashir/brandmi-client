import BuyerProfile from "@/components/buyer/BuyerProfile";
import BuyerServices from "@/components/buyer/BuyerServices";

const page = () => {
  return (
    <div>
      <section className="container flex gap-4 px-4 mx-auto mt-4  ">
        <BuyerProfile />
        {/* part 2 */}
        <div className="w-2/3">
          <BuyerServices />
        </div>
      </section>
    </div>
  );
};
export default page;
