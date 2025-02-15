import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="relative">
      <Bell className="h-6 w-6" />
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-primary" />
      <span className="sr-only">Notifications</span>
    </div>
  );
};
export default Notification;
