import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const GlobalSearch = () => {
  return (
    <div className="flex-1">
      <div className="relative">
        <Search className="absolute left-2.5 top-[16px] h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search..."
          className=" appearance-none bg-background pl-8 w-2/3 md:w-2/3 lg:w-1/3"
        />
      </div>
    </div>
  );
};
export default GlobalSearch;
