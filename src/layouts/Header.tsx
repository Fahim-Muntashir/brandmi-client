"use clint";

import GlobalSearch from "@/components/dashboard/headerContent/GlobalSearch";
import Notification from "@/components/dashboard/headerContent/Notification";
import UserSetting from "@/components/dashboard/headerContent/UserSetting";

const Header = () => {
  return (
    <header className="flex  items-center pl-20 pr-6 lg:px-6 py-2 border-b ">
      <GlobalSearch />
      <div className="flex items-center gap-5">
        <Notification />
        <UserSetting />
      </div>
    </header>
  );
};
export default Header;
