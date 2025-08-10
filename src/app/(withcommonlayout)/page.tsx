import Category from "@/app/(withcommonlayout)/_components/category/Category";
import Members from "@/components/members/Members";
import Cta from "./_components/Cta";
import Banner from "./_components/Banner";
import BusinessSolution from "./_components/BusinessSolution";
import PopularServices from "./_components/TrendingOffers";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Category />
      <PopularServices />
      <BusinessSolution />
      <Members />
      <Cta />
    </>
  );
};

export default HomePage;
