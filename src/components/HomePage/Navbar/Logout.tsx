import axiosInstance, { ErrorResponse } from "@/axios/axios";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Logout = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await axiosInstance.get("/auth/logout");
      if (res.data) {
        router.refresh();
      }
    } catch (error) {
      const errRes = error as ErrorResponse;
      toast.error(errRes.message);
    }
  };
  return (
    <DropdownMenuItem onClick={handleLogout}>
      <LogOut className="mr-2 h-4 w-4" />
      <span>Log out</span>
    </DropdownMenuItem>
  );
};
export default Logout;
