"use client";
import { Button } from "@/components/ui/button";
import SellerProfileSidebar from "@/components/seller/SellerProfileSidebar";
import Link from "next/link";
import { useAuth } from "@/providers/AuthProvider";

export default function DashboardPage() {
  const { isAuth, user } = useAuth();
  const { email, role, userName, profileImage } = user || {};

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 md:grid-cols-[300px_1fr]">
          {/* Profile Sidebar */}
          <SellerProfileSidebar></SellerProfileSidebar>

          {/* Gigs Grid */}
          <div className="space-y-6">
            <div className="text-3xl font-semibold">
              <h1>Welcome Back {userName}</h1>
            </div>

            <div className="flex justify-between">
              <h2 className="text-xl font-semibold">
                Add new Gig form here Gigs
              </h2>
              <Link
                href={"/seller/publishgig"}
                className="bg-primary hover:bg-emerald-600"
              >
                <Button className="flex-1 bg-primary hover:bg-emerald-600">
                  Add New Gig
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
