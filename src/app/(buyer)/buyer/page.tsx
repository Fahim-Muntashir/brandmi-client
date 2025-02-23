import BuyerProfile from "@/components/buyer/BuyerProfile";
import BuyerReviews from "@/components/buyer/BuyerReviews";
import BuyerServices from "@/components/buyer/BuyerServices";

const page = () => {
  return (
    <main>
      <section className="container md:flex gap-4 px-4 mx-auto py-4 ">
        <div className="w-full lg:w-1/3">
          <BuyerProfile />
        </div>
        <div className="w-full lg:w-2/3 space-y-5">
          <BuyerServices />
          <BuyerReviews />
        </div>
      </section>
    </main>
  );
};
export default page;
