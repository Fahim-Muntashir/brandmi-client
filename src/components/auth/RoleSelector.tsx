import React from "react";
import { Store, ShoppingBag } from "lucide-react";
export type UserRole = "buyer" | "seller" | "";

export interface RoleSelectorProps {
  selectedRole: UserRole;
  onRoleSelect: (role: UserRole) => void;
}

const RoleSelector = ({ selectedRole, onRoleSelect }: RoleSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-6">
      <button
        type="button"
        onClick={() => onRoleSelect("seller")}
        className={`flex flex-col items-center p-4 border rounded-lg transition-all ${
          selectedRole === "seller"
            ? "border-blue-500 bg-blue-50 text-blue-600"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <Store className="w-6 h-6 mb-2" />
        <span className="font-medium">I&apos;m a Seller</span>
      </button>

      <button
        type="button"
        onClick={() => onRoleSelect("buyer")}
        className={`flex flex-col items-center p-4 border rounded-lg transition-all ${
          selectedRole === "buyer"
            ? "border-blue-500 bg-blue-50 text-blue-600"
            : "border-gray-200 hover:border-gray-300"
        }`}
      >
        <ShoppingBag className="w-6 h-6 mb-2" />
        <span className="font-medium">I&apos;m a Buyer</span>
      </button>
    </div>
  );
};

export default RoleSelector;
